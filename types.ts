export interface VideoGenerationState {
  status: 'idle' | 'uploading' | 'generating' | 'completed' | 'error';
  progressMessage?: string;
  videoUrl?: string;
  error?: string;
}

export type AspectRatio = '16:9' | '9:16';
