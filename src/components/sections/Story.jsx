import React, { useState, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { timelineData } from '../../data/timeline.js';

export default function Story() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef(null);

  // Sync active milestone on user scroll or touch swipe
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    // Estimate card width + gap (approx 420px + 24px on desktop, varies on mobile)
    const cards = scrollRef.current.children;
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 24;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx >= 0 && newIdx < timelineData.length && newIdx !== activeIdx) {
      setActiveIdx(newIdx);
    }
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (!cards[index]) return;
    cards[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setActiveIdx(index);
  };

  return (
    <section id="about" className="section-pad bg-[#0B1330] text-[#FAF6EF] relative overflow-hidden border-t border-[#B9887B]/20">
      {/* Background Decorative Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B9887B]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* ── Section Header (Clean Full Width) ── */}
        <div className="max-w-3xl mb-12 pb-8 border-b border-white/10 font-sans">
          <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-[#B9887B] mb-3 font-bold">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            <span>DẤU ẤN CITYHOUSE — HÀNH TRÌNH 15 NĂM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white leading-[1.2]">
            15 năm phát triển <br />
            <span className="text-[#B9887B] font-serif italic">và đồng hành cùng Chủ đầu tư</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/70 mt-4 leading-relaxed font-normal">
            Từ dấu ấn khởi đầu tại Saigon Pavillon năm 2009 đến quy mô 35+ tòa nhà hiện hữu, 
            CityHouse More kiên định bảo toàn và tối ưu giá trị tài sản qua từng thời kỳ thị trường.
          </p>
        </div>

        {/* ── Horizontal Interactive Milestone Track (Dòng thời gian nằm ngang) ── */}
        <div className="mb-10 hidden sm:block font-sans">
          <div className="relative">
            {/* Continuous Track Line */}
            <div className="absolute top-5 left-6 right-6 h-[2px] bg-gradient-to-r from-[#B9887B]/20 via-[#B9887B]/40 to-[#B9887B]/20 -z-0" />

            {/* Milestones Horizontal Row */}
            <div className="grid grid-cols-5 gap-3 relative z-10">
              {timelineData.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => scrollToIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 focus:outline-none"
                  >
                    {/* Node Dot / Badge */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#B9887B] text-white scale-110 shadow-lg shadow-[#B9887B]/50 ring-4 ring-[#B9887B]/25'
                          : 'bg-[#0F1A41] text-[#B9887B] border border-[#B9887B]/40 group-hover:border-[#B9887B] group-hover:bg-[#B9887B]/10'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Year Label */}
                    <span
                      className={`font-serif text-lg font-bold mt-2.5 transition-colors ${
                        isActive ? 'text-[#B9887B]' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Milestone Mini Tag */}
                    <span className="font-sans text-[10.5px] uppercase tracking-wider text-white/50 mt-1 line-clamp-1 max-w-[140px] group-hover:text-white/80 transition-colors font-medium">
                      {item.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Horizontal Scrollable Cards Slider (5 Cột mốc hiển thị ngang) ── */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-2 pb-6 px-1 touch-pan-x"
          tabIndex={0}
          aria-label="Dòng thời gian 15 năm CityHouse More"
        >
          {timelineData.map((item, index) => {
            const isActive = activeIdx === index;
            return (
              <article
                key={item.year}
                onClick={() => scrollToIndex(index)}
                className={`snap-start w-[88vw] sm:w-[380px] md:w-[420px] lg:w-[440px] shrink-0 rounded-xl overflow-hidden flex flex-col justify-between border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F1A41] border-[#B9887B] shadow-2xl shadow-[#B9887B]/15 translate-y-[-2px]'
                    : 'bg-[#0F1A41]/70 border-white/10 hover:border-[#B9887B]/50 hover:bg-[#0F1A41]/90'
                }`}
              >
                {/* 1. Milestone Photo with Year Badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#080E24]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.year} - ${item.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/40">
                      <Calendar size={32} />
                    </div>
                  )}

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41] via-transparent to-black/30 pointer-events-none" />

                  {/* Floating Year Badge (Top-Left) */}
                  <div className="absolute top-3.5 left-3.5 bg-[#0F1A41]/95 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#B9887B]/40 shadow-lg">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#B9887B]">
                      {item.year}
                    </span>
                  </div>

                  {/* Step Sequence Badge (Top-Right) */}
                  <div className="absolute top-3.5 right-3.5 bg-[#0F1A41]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <span className="font-sans text-[10.5px] font-bold text-white/80">
                      CỘT MỐC 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* 2. Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4 font-sans">
                  <div>
                    {/* Eyebrow Tag */}
                    <div className="font-sans text-[11px] uppercase tracking-wider text-[#B9887B] font-semibold mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]" />
                      <span>{item.tag}</span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-4 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* 3. Card Bottom Highlight Tag */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                    <span className="text-[#B9887B] font-semibold flex items-center gap-1.5">
                      <span>{item.highlight}</span>
                    </span>
                    <ArrowRight size={14} className="text-white/40 group-hover:text-[#B9887B] transition-colors" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Swipe Indicators (Dots) */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
          {timelineData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                activeIdx === idx ? 'w-6 bg-[#B9887B]' : 'w-2 bg-white/20'
              }`}
              aria-label={`Đi tới cột mốc ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
