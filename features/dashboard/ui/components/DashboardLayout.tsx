"use client";

import { useRef } from "react";
import NasdaqChart from "@/features/dashboard/ui/components/NasdaqChart";
import EventTimeline from "@/features/dashboard/ui/components/EventTimeline";
import ConnectorOverlay from "@/features/dashboard/ui/components/ConnectorOverlay";
import HistoryPanel from "@/features/dashboard/ui/components/HistoryPanel";
import StockSearch from "@/features/dashboard/ui/components/StockSearch";

export default function DashboardLayout() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* 차트 + 타임라인 연결선 오버레이 영역 */}
      <div ref={wrapperRef} className="relative">
        <ConnectorOverlay wrapperRef={wrapperRef} />

        {/* 차트 + 종목 조회 사이드바 */}
        <section className="mb-6 grid grid-cols-[1fr_260px] gap-4">
          <NasdaqChart />
          <StockSearch />
        </section>

        {/* 주요 경제 지표 + 히스토리 패널 */}
        <section className="mb-6 grid grid-cols-[1fr_260px] gap-4">
          <HistoryPanel />
          <EventTimeline />
        </section>

      </div>
    </div>
  );
}
