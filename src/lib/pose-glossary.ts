export type PoseGlossaryKind = 'Pose' | 'Sequence';
export type PoseGlossaryDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type PoseGlossaryEntry = {
  slug: string;
  href: string;
  name: string;
  alsoKnownAs?: string;
  kind: PoseGlossaryKind;
  difficulty: PoseGlossaryDifficulty;
  description: string;
  instructions: string;
  videoUrl?: string;
  durationSec: number;
  xp: number;
};

/**
 * Practice catalog shown on the dashboard.
 * Individual poses open the sequence that contains them.
 */
export const poseGlossary: PoseGlossaryEntry[] = [
  {
    slug: 'wuji-pose',
    href: '/practice/1',
    name: 'Wuji Pose',
    alsoKnownAs: 'Beginning position',
    kind: 'Pose',
    difficulty: 'Beginner',
    description:
      'The quiet starting stance of Tai Chi: upright, grounded, and ready to move.',
    instructions:
      'Stand upright with arms hanging naturally at your sides and feet shoulder-width apart. Hold until the countdown reaches zero.',
    videoUrl: '/videos/wuji.mp4',
    durationSec: 15,
    xp: 25,
  },
  {
    slug: 'lotus-pose',
    href: '/practice/1',
    name: 'Lotus Pose',
    alsoKnownAs: 'Open and close lotus flower',
    kind: 'Pose',
    difficulty: 'Beginner',
    description:
      'A two-step arm sequence that opens and closes like a lotus, building coordination.',
    instructions:
      'Close lotus: bring your hands together in front of your chest, palms facing up. Open lotus: extend your arms outward to the sides at chest height, palms facing out.',
    videoUrl: '/videos/lotus.mp4',
    durationSec: 20,
    xp: 30,
  },
  {
    slug: 'tree-pose',
    href: '/practice/1',
    name: 'Tree Pose',
    alsoKnownAs: 'Tree posture (Taiji)',
    kind: 'Pose',
    difficulty: 'Beginner',
    description:
      'A rounded, rooted stance that trains balance, posture, and stillness.',
    instructions:
      'Stand upright with arms in front and rounded, feet shoulder-width apart. Hold until the countdown reaches zero.',
    videoUrl: '/videos/tree.mp4',
    durationSec: 15,
    xp: 30,
  },
  {
    slug: 'part-wild-horse-mane',
    href: '/practice/2',
    name: "Part the Wild Horse's Mane",
    kind: 'Pose',
    difficulty: 'Intermediate',
    description: 'Open the arms diagonally while stepping, one hand high and one low.',
    instructions:
      'Step forward, lift the front arm to eye level and press the back hand down by the hip. Hold until the countdown ends.',
    videoUrl: '/videos/S2.mp4',
    durationSec: 20,
    xp: 50,
  },
  {
    slug: 'golden-rooster-pose',
    href: '/practice/3',
    name: 'Golden Rooster Stands on One Leg',
    alsoKnownAs: 'Golden Rooster',
    kind: 'Pose',
    difficulty: 'Advanced',
    description:
      'A one-leg balance pose that challenges stability, hip strength, and focus.',
    instructions:
      'Stand on one leg and raise the opposite knee to about hip height. Raise the arm on the same side as the lifted knee, and keep the other arm relaxed at your side.',
    durationSec: 20,
    xp: 60,
  },
  {
    slug: 'first-steps',
    href: '/practice/1',
    name: 'First Steps',
    alsoKnownAs: 'Wuji → Lotus → Tree',
    kind: 'Sequence',
    difficulty: 'Beginner',
    description: 'A gentle introduction to the core principles and movements of Tai Chi.',
    instructions:
      'Press Start and follow the on-screen steps in order. Hold each pose until the countdown completes before moving to the next.',
    videoUrl: '/videos/S1.mp4',
    durationSec: 50,
    xp: 100,
  },
  {
    slug: 'flowing-river',
    href: '/practice/2',
    name: 'Flowing River',
    alsoKnownAs: "Part the Wild Horse's Mane",
    kind: 'Sequence',
    difficulty: 'Intermediate',
    description:
      'Connect movements into a continuous, flowing sequence, enhancing coordination.',
    instructions:
      'Press Start and follow the on-screen steps in order. Hold each pose until the countdown completes before moving to the next.',
    videoUrl: '/videos/S2.mp4',
    durationSec: 20,
    xp: 250,
  },
  {
    slug: 'mountain-and-sky',
    href: '/practice/3',
    name: 'Mountain and Sky',
    alsoKnownAs: 'Golden Rooster Stands on One Leg',
    kind: 'Sequence',
    difficulty: 'Advanced',
    description: 'Master advanced forms that challenge your balance, strength, and focus.',
    instructions:
      'Press Start and follow the on-screen steps in order. Hold each pose until the countdown completes before moving to the next.',
    videoUrl: '/videos/S3.mp4',
    durationSec: 20,
    xp: 500,
  },
];
