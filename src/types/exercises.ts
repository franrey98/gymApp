export interface Exercises {
  Category: string;
  Difficulty: string;
  Force: string;
  Grips: string;
  details: string;
  exercise_name: string;
  id: number;
  steps: string[];
  target: Target;
  videoURL: string[];
  youtubeURL: string;
}

export interface Target {
  Primary: string[];
}
