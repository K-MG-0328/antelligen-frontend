"use client";

import { useYoutubeList } from "@/features/youtube/application/hooks/useYoutubeList";
import YoutubeCard from "@/features/youtube/ui/components/YoutubeCard";
import { youtubeListStyles as s } from "@/features/youtube/ui/components/youtubeListStyles";

export default function YoutubeList() {
  const { youtubeState, goToNextPage, goToPrevPage, hasPrev } = useYoutubeList();

  if (youtubeState.status === "LOADING") {
    return <div className={s.loading}>데이터를 불러오는 중입니다...</div>;
  }

  if (youtubeState.status === "ERROR") {
    return <div className={s.error}>{youtubeState.message}</div>;
  }

  const { videos, nextPageToken } = youtubeState;

  if (videos.length === 0) {
    return (
      <div className={s.empty.wrap}>
        <span className={s.empty.icon}>📭</span>
        <span className={s.empty.text}>등록된 영상이 없습니다.</span>
      </div>
    );
  }

  return (
    <>
      <div className={s.grid}>
        {videos.map((video, index) => (
          <YoutubeCard key={video.videoId ?? `video-${index}`} video={video} />
        ))}
      </div>

      {(hasPrev || nextPageToken) && (
        <div className={s.pagination.wrap}>
          <button
            type="button"
            onClick={goToPrevPage}
            disabled={!hasPrev}
            className={s.pagination.btn}
          >
            ← 이전
          </button>
          <button
            type="button"
            onClick={() => nextPageToken && goToNextPage(nextPageToken)}
            disabled={!nextPageToken}
            className={s.pagination.btn}
          >
            다음 →
          </button>
        </div>
      )}
    </>
  );
}
