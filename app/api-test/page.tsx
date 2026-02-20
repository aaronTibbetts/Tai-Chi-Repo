
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader, VideoOff, Server, XCircle } from 'lucide-react';
import { initPoseLandmarker, processVideo as processVideoFrame } from '@/lib/pose-estimation';
import { PoseLandmarker, PoseLandmarkerResult, NormalizedLandmark } from '@mediapipe/tasks-vision';
import { getPoseAnalysisFromCsv, getAiFeedbackForAnalysis, getFeedbackDetailsAction, type AnalysisResult, type AiFeedbackResult } from '@/app/actions';

type LandmarkFrame = {
  landmarks: NormalizedLandmark[];
  timestamp: number;
};

export default function ApiTestPage() {
  const { toast } = useToast();
  const [isInitializing, setIsInitializing] = useState(true);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [landmarkData, setLandmarkData] = useState<LandmarkFrame[]>([]);
  const [csvForApi, setCsvForApi] = useState('');
  const [uploadedCsvContent, setUploadedCsvContent] = useState<string | null>(null);
  const [rawAnalysisResponse, setRawAnalysisResponse] = useState('');
  const [finalAiResponse, setFinalAiResponse] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const poseLandmarkerRef = useRef<PoseLandmarker | null>(null);
  const animationFrameId = useRef<number>();
  const lastVideoTime = useRef(-1);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
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
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(() => processVideo(isRecording));
    } else {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    }
    return () => {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    };
  }, [hasCameraPermission, processVideo, isRecording]);
  
  useEffect(() => {
    if (!isRecording && landmarkData.length > 0) {
        toast({ title: 'Recording stopped', description: `${landmarkData.length} frames captured.` });
    }
  }, [isRecording, landmarkData.length, toast]);

  const startRecording = () => {
    setLandmarkData([]);
    setCsvForApi('');
    setRawAnalysisResponse('');
    setFinalAiResponse('');
    setUploadedCsvContent(null);
    if(fileInputRef.current) fileInputRef.current.value = '';
    setIsRecording(true);
    toast({ title: 'Recording started' });
  };

  const stopRecording = () => {
    setIsRecording(false);
    setLandmarkData(currentLandmarkData => {
        if (currentLandmarkData.length > 0) {
            generateCsv(currentLandmarkData);
        }
        return currentLandmarkData;
    });
  };

  const generateCsv = (data: LandmarkFrame[]) => {
    if (data.length === 0) {
      setCsvForApi('');
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
    setCsvForApi(csvContent);
  };

  const handleAnalysis = async () => {
    const dataToSend = uploadedCsvContent ?? csvForApi;
    if (!dataToSend) {
        toast({ variant: 'destructive', title: 'No Data', description: 'Record movement or upload a CSV file to analyze.' });
        return;
    }
    setIsAnalyzing(true);
    setRawAnalysisResponse('');
    setFinalAiResponse('');

    try {
        // Step 1: Get raw analysis from the prediction API
        const analysisResult: AnalysisResult = await getPoseAnalysisFromCsv(dataToSend);

        if ('error' in analysisResult) {
            toast({ variant: 'destructive', title: 'Analysis Failed', description: analysisResult.error });
            setRawAnalysisResponse(JSON.stringify({ error: analysisResult.error }, null, 2));
            return;
        }
        
        const rawResponseString = `RAW API RESPONSE:\n${JSON.stringify(analysisResult, null, 2)}`;
        
        // We'll process the first feedback item.
        const firstFeedback = analysisResult.feedbacks[0];
        if (!firstFeedback) {
             toast({ variant: 'destructive', title: 'Analysis Incomplete', description: "Feedback array is empty." });
             setRawAnalysisResponse(rawResponseString + "\n\nError: Feedback array is empty.");
             return;
        }
        
        // Step 2: Get the translated names for debugging
        const translationDetails = await getFeedbackDetailsAction(firstFeedback.poseName, firstFeedback.speechText);
        const translationString = `\n\nTRANSLATED NAMES:\n${JSON.stringify(translationDetails, null, 2)}`;
        setRawAnalysisResponse(rawResponseString + translationString);


        toast({ title: 'Analysis Complete', description: 'Now getting feedback from AI Coach...'});

        // Step 3: Get the final AI feedback
        const aiResult: AiFeedbackResult = await getAiFeedbackForAnalysis(analysisResult.feedbacks);
        
        if ('error' in aiResult) {
            toast({ variant: 'destructive', title: 'AI Coach Failed', description: aiResult.error });
            setFinalAiResponse(JSON.stringify({ error: aiResult.error }, null, 2));
        } else {
            toast({ title: 'Feedback Received' });
            setFinalAiResponse(JSON.stringify(aiResult.aiFeedback, null, 2));
        }

    } catch (e) {
        const error = e instanceof Error ? e : new Error('An unknown error occurred during analysis.');
        toast({ variant: 'destructive', title: 'An Error Occurred', description: error.message });
        setFinalAiResponse(JSON.stringify({ error: error.message }, null, 2));
    } finally {
        setIsAnalyzing(false);
    }
  };
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setUploadedCsvContent(text);
        setCsvForApi(''); // Clear recorded data
        setLandmarkData([]);
        toast({ title: 'File Uploaded', description: file.name });
      };
      reader.readAsText(file);
    }
  };

  const clearUpload = () => {
      setUploadedCsvContent(null);
      if(fileInputRef.current) fileInputRef.current.value = '';
      toast({ title: 'Upload Cleared' });
  }

  const handleVideoLoaded = () => {
      if (videoRef.current) {
        videoRef.current.play();
        if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = requestAnimationFrame(() => processVideo(isRecording));
      }
  }

  const canAnalyze = !!csvForApi || !!uploadedCsvContent;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>API Analysis Test</CardTitle>
          <CardDescription>
            Record movement or upload a CSV file, then send the data to the analysis API. The generated data and the JSON response will be displayed below.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
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
              <CardTitle className="text-lg">API Controls</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="csv-upload">Upload CSV</Label>
                  <div className="flex gap-2">
                    <Input id="csv-upload" type="file" accept=".csv" onChange={handleFileUpload} disabled={isAnalyzing} ref={fileInputRef} />
                    {uploadedCsvContent && (
                      <Button variant="ghost" size="icon" onClick={clearUpload} aria-label="Clear upload">
                        <XCircle className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>

                <Button onClick={handleAnalysis} disabled={!canAnalyze || isAnalyzing} className="w-full">
                    {isAnalyzing ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Server className="mr-2 h-4 w-4" />}
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Pose'}
                </Button>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Data & Response</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="csv-output">Generated CSV</Label>
                    <Textarea
                        id="csv-output"
                        readOnly
                        value={csvForApi}
                        placeholder="CSV data from recording will appear here."
                        className="h-[80px] text-xs font-mono"
                    />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="raw-response">Raw API Response &amp; Translation</Label>
                    <Textarea
                        id="raw-response"
                        readOnly
                        value={rawAnalysisResponse}
                        placeholder="Raw JSON from the analysis API and the translated names will appear here."
                        className="h-[120px] text-xs font-mono"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="json-response">Final AI Response</Label>
                    <Textarea
                        id="json-response"
                        readOnly
                        value={finalAiResponse}
                        placeholder="The final AI coach feedback will appear here."
                        className="h-[120px] text-xs font-mono"
                    />
                </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
