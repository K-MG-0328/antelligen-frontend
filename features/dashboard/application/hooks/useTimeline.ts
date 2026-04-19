"use client";

import { useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { tickerAtom } from "@/features/dashboard/application/atoms/tickerAtom";
import { periodAtom } from "@/features/dashboard/application/atoms/periodAtom";
import { timelineAtom } from "@/features/dashboard/application/atoms/timelineAtom";
import { fetchTimeline } from "@/features/dashboard/infrastructure/api/timelineApi";

export function useTimeline() {
  const ticker = useAtomValue(tickerAtom);
  const period = useAtomValue(periodAtom);
  const periodRef = useRef(period);
  const setTimeline = useSetAtom(timelineAtom);

  useEffect(() => {
    periodRef.current = period;
  }, [period]);

  useEffect(() => {
    const effectiveTicker = ticker ?? "IXIC";

    setTimeline({ status: "LOADING" });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120_000);

    fetchTimeline(effectiveTicker, periodRef.current, controller.signal)
      .then((data) => {
        setTimeline({
          status: "SUCCESS",
          events: data.events,
          ticker: data.ticker,
          period: data.period,
        });
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setTimeline({ status: "ERROR", message: "타임라인 데이터를 불러오는데 실패했습니다." });
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [ticker, setTimeline]); // eslint-disable-line react-hooks/exhaustive-deps
}
