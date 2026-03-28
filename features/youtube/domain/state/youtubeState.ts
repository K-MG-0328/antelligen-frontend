import type { YoutubeVideo } from "@/features/youtube/domain/model/youtubeVideo";

export type YoutubeState =
  | { status: "LOADING" }
  | { status: "ERROR"; message: string }
  | {
      status: "SUCCESS";
      videos: YoutubeVideo[];
      nextPageToken: string | null;
      prevPageToken: string | null;
      totalResults: number;
    };
