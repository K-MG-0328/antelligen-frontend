import type { TimelineEvent } from "@/features/dashboard/domain/model/timelineEvent";

export type TimelineState =
  | { status: "IDLE" }
  | { status: "LOADING" }
  | { status: "SUCCESS"; events: TimelineEvent[]; ticker: string; period: string }
  | { status: "ERROR"; message: string };
