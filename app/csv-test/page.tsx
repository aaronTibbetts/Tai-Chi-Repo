
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader, Video, VideoOff, Download } from 'lucide-react';
import { initPoseLandmarker, processVideo as processVideoFrame } from '@/lib/pose-estimation';
import { PoseLandmarker, PoseLandmarkerResult, NormalizedLandmark } from '@mediapipe/tasks-vision';

type LandmarkFrame = {
  landmarks: NormalizedLandmark[];
  timestamp: number;
};

type JsonOutput = {
  sequenceName: string;
  poseName: string;
  movementData: string;
} | null;

export default function CsvTestPage() {
  const { toast } = useToast();
  const [isInitializing, setIsInitializing] = useState(true);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [landmarkData, setLandmarkData] = useState<LandmarkFrame[]>([]);
  const [csvOutput, setCsvOutput] = useState('');
  const [jsonData, setJsonData] = useState<JsonOutput>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const poseLandmarkerRef = useRef<PoseLandmarker | null>(null);
  const animationFrameId = useRef<number>();
  const lastVideoTime = useRef(-1);

  useEffect(() => {
    async function setup() {
      try {
        const landmarker = await initPoseLandmarker();
        poseLandmarkerRef.current = landmarker;

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Initialization error:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Setup Failed',
          description: 'Could not access camera or load model.',
        });
      } finally {
        setIsInitializing(false);
      }
    }
    setup();

    return () => {
      cancelAnimationFrame(animationFrameId.current!);
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);
  
  const processVideo = useCallback((isRec: boolean) => {
    if (!videoRef.current || !poseLandmarkerRef.current) return;

    processVideoFrame(
      videoRef.current,
      poseLandmarkerRef.current,
      (result: PoseLandmarkerResult, timestamp: number) => {
        if (isRec && result.landmarks && result.landmarks.length > 0) {
          setLandmarkData(prev => [...prev, { landmarks: result.landmarks[0], timestamp }]);
        }
      },
      lastVideoTime
    );

    animationFrameId.current = requestAnimationFrame(() => processVideo(isRec));
  }, []);


  useEffect(() => {
    if (hasCameraPermission && videoRef.current) {
      cancelAnimationFrame(animationFrameId.current!);
      animationFrameId.current = requestAnimationFrame(() => processVideo(isRecording));
    } else {
      cancelAnimationFrame(animationFrameId.current!);
    }
    return () => cancelAnimationFrame(animationFrameId.current!);
  }, [hasCameraPermission, processVideo, isRecording]);

  useEffect(() => {
    if (csvOutput && !isRecording && landmarkData.length > 0) {
      toast({ title: 'Recording stopped', description: `${landmarkData.length} frames captured.` });
    }
  }, [csvOutput, isRecording, landmarkData.length, toast]);


  const startRecording = () => {
    setLandmarkData([]);
    setCsvOutput('');
    setJsonData(null);
    setIsRecording(true);
    toast({ title: 'Recording started', description: 'Move around to capture pose data.' });
  };

  const stopRecording = () => {
    setIsRecording(false);
    setLandmarkData(currentLandmarkData => {
        if (currentLandmarkData.length > 0) {
            generateCsvAndJson(currentLandmarkData);
        }
        return currentLandmarkData;
    });
  };

  const generateCsvAndJson = (data: LandmarkFrame[]) => {
    if (data.length === 0) {
      setCsvOutput('No data captured.');
      setJsonData(null);
      return;
    }
    const landmarkNames = [
        "NOSE", "LEFT_EYE_INNER", "LEFT_EYE", "LEFT_EYE_OUTER", "RIGHT_EYE_INNER", "RIGHT_EYE", "RIGHT_EYE_OUTER",
        "LEFT_EAR", "RIGHT_EAR", "MOUTH_LEFT", "MOUTH_RIGHT", "LEFT_SHOULDER", "RIGHT_SHOULDER", "LEFT_ELBOW",
        "RIGHT_ELBOW", "LEFT_WRIST", "RIGHT_WRIST", "LEFT_PINKY", "RIGHT_PINKY", "LEFT_INDEX", "RIGHT_INDEX",
        "LEFT_THUMB", "RIGHT_THUMB", "LEFT_HIP", "RIGHT_HIP", "LEFT_KNEE", "RIGHT_KNEE", "LEFT_ANKLE", "RIGHT_ANKLE",
        "LEFT_HEEL", "RIGHT_HEEL", "LEFT_FOOT_INDEX", "RIGHT_FOOT_INDEX"
    ];

    const header = ['timestamp_ms', ...landmarkNames.flatMap(name => [`${name}_x`, `${name}_y`, `${name}_z`])].join(',');
    
    const csvRows = data.map((frame) => 
        [frame.timestamp, ...frame.landmarks.flatMap(lm => [lm.x, lm.y, lm.z])].join(',')
    );
    
    const csvContent = [header, ...csvRows].join('\n');
    setCsvOutput(csvContent);

    const jsonContent: JsonOutput = {
        sequenceName: 'TestSequence',
        poseName: 'TestPose',
        movementData: csvContent
    };
    setJsonData(jsonContent);
  };
  
  const downloadJson = () => {
    if (!jsonData) return;
    const jsonString = JSON.stringify(jsonData, null, 2); 
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'movement_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleVideoLoaded = () => {
      if (videoRef.current) {
        videoRef.current.play();
        cancelAnimationFrame(animationFrameId.current!);
        animationFrameId.current = requestAnimationFrame(() => processVideo(isRecording));
      }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>CSV Generation Test</CardTitle>
          <CardDescription>
            Test the MediaPipe data capture and CSV conversion process. Start recording, move around,
            then stop to see the generated CSV and download the compressed JSON.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg flex items-center justify-between">
                Camera Feed
                <span className={`text-xs font-bold p-1 rounded ${isRecording ? 'bg-red-500 text-white' : 'bg-secondary'}`}>
                  {isRecording ? 'RECORDING' : 'IDLE'}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline onLoadedData={handleVideoLoaded} />
                {(isInitializing || hasCameraPermission === false) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white p-4 text-center">
                    {isInitializing ? <Loader className="w-8 h-8 animate-spin" /> : <VideoOff className="w-8 h-8" />}
                    <p className="mt-2 text-sm">{isInitializing ? 'Initializing...' : 'Camera permission denied.'}</p>
                  </div>
                )}
              </div>
              <div className="mt-4 flex gap-2">
                <Button onClick={startRecording} disabled={isRecording || isInitializing || !hasCameraPermission} className="w-full">
                  Start Recording
                </Button>
                <Button onClick={stopRecording} disabled={!isRecording} variant="destructive" className="w-full">
                  Stop Recording
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Data Output</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Textarea
                readOnly
                value={csvOutput}
                placeholder="CSV data will appear here after stopping the recording."
                className="h-[250px] text-xs font-mono"
              />
              <Button onClick={downloadJson} disabled={!jsonData} className="mt-4 w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download JSON
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

    