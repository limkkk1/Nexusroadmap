export interface RoadmapItemData {
  id: string;
  date: string;
  title: string;
  description: string;
  points: string[];
}

export interface GeminiAnalysisResponse {
  items: RoadmapItemData[];
}
