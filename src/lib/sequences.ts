
export type Pose = {
  name: string;
  duration: number; // in seconds
  image?: string; // image is now optional
  videoUrl?: string; // videoUrl is new and optional
  examplePoseData: string;
};

export type Sequence = {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  isLocked: boolean;
  poses: Pose[];
  thumbnailVideoUrl?: string;
};

export const sequences: Sequence[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'A gentle introduction to the core principles and movements of Tai Chi.',
    difficulty: 'Beginner',
    xp: 100,
    isLocked: false,
    thumbnailVideoUrl: '/videos/S1.mp4',
    poses: [
      {
        name: 'Beginning position (Wuji)',
        duration: 15,
        videoUrl: '/videos/wuji.mp4',
        examplePoseData: 'The system will analyze your stance and posture.'
      },
      {
        name: 'Open and close lotus flower',
        duration: 20,
        videoUrl: '/videos/lotus.mp4',
        examplePoseData: 'The system will analyze your arm movement and coordination.'
      },
      {
        name: 'Tree posture (Taiji)',
        duration: 15,
        videoUrl: '/videos/tree.mp4',
        examplePoseData: 'The system will analyze your balance and stability.'
      },
    ],
  },
  {
    id: '2',
    name: 'Flowing River',
    description: 'Connect movements into a continuous, flowing sequence, enhancing coordination.',
    difficulty: 'Intermediate',
    xp: 250,
    isLocked: false,
    thumbnailVideoUrl: '/videos/S2.mp4',
    poses: [
      {
        name: 'Part the wild horse’s mane',
        duration: 20,
        image: 'pose-white-crane',
        examplePoseData: 'The system will analyze your weight shifting and arm coordination.'
      },
      // {
      //   name: 'Move hands like clouds',
      //   duration: 25,
      //   image: 'pose-brush-knee',
      //   examplePoseData: 'The system will analyze the fluidity of your arm and body movements.'
      // },
      // {
      //   name: 'Drive the monkey away',
      //   duration: 20,
      //   image: 'pose-grasp-sparrows-tail',
      //   examplePoseData: 'The system will analyze your stepping and arm extension.'
      // },
    ],
  },
  {
    id: '3',
    name: 'Mountain and Sky',
    description: 'Master advanced forms that challenge your balance, strength, and focus.',
    difficulty: 'Advanced',
    xp: 500,
    isLocked: false,
    thumbnailVideoUrl: '/videos/S3.mp4',
    poses: [
      {
        name: 'Golden rooster stands on one leg',
        duration: 20,
        image: 'pose-single-whip',
        examplePoseData: 'The system will focus on your balance and stability on one leg.'
      },
      // {
      //   name: 'Fair lady works shuttles',
      //   duration: 20,
      //   image: 'pose-white-crane',
      //   examplePoseData: 'The system will analyze your rotational movement and coordination.'
      // },
      //  {
      //   name: 'Kick with heel',
      //   duration: 15,
      //   image: 'pose-brush-knee',
      //   examplePoseData: 'The system will analyze your balance during the kicking motion.'
      // },
    ],
  },
];
