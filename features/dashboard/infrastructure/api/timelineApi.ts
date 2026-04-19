import { httpClient } from "@/infrastructure/http/httpClient";
import type { ApiResponse } from "@/infrastructure/http/apiResponse";
import type { TimelineResponse } from "@/features/dashboard/domain/model/timelineEvent";
import type { Period } from "@/features/dashboard/domain/model/period";

export async function fetchTimeline(
  ticker: string,
  period: Period,
  signal?: AbortSignal
): Promise<TimelineResponse> {
  const res = await httpClient<ApiResponse<TimelineResponse>>(
    `/api/v1/history-agent/timeline?ticker=${encodeURIComponent(ticker)}&period=${period}`,
    { signal }
  );
  return res.data;
}
