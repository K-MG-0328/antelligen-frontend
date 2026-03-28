export interface YoutubeListResponseItem {
  video_id: string;
  title: string;
  thumbnail_url: string;
  channel_name: string;
  published_at: string;
  video_url: string;
}

export interface YoutubeListResponse {
  items: YoutubeListResponseItem[];
  next_page_token: string | null;
  prev_page_token: string | null;
  total_results: number;
}
