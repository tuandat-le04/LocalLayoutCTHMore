import React from 'react';
import { ArrowUpRight, ArrowDownRight, Compass, ShieldCheck, Star, Sparkles, Building, CheckCircle2 } from 'lucide-react';

export default function Hero({ onContactClick, onSolutionsClick }) {
  return (
    <section className="hero section-pad relative overflow-hidden bg-[#0F1A41] min-h-[85vh] flex items-center" id="top">
      {/* Subtle Background Architectural Ambient Texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp"
          alt="CityHouse Architectural Background"
          className="w-full h-full object-cover filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A41] via-[#0F1A41]/90 to-[#0F1A41]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Direct Value Proposition (lg:col-span-7) */}
        <div className="lg:col-span-7 hero-copy">
          {/* Eyebrow badge */}
          <p className="eyebrow eyebrow-accent mb-4 tracking-widest text-xs font-semibold">
            QUẢN LÝ GIA SẢN LƯU TRÚ BẤT ĐỘNG SẢN
          </p>

          {/* Heading */}
          <h1 className="font-serif tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.22] mb-6">
            Tư vấn và vận hành<br />
            bất động sản lưu trú<br />
            <em className="inline-block mt-1">hiệu quả hơn</em>
          </h1>

          {/* Value Description (1 sentence concise) */}
          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-xl leading-relaxed mb-8">
            CityHouse More đồng hành cùng chủ đầu tư từ định hướng mô hình, phát triển sản phẩm đến khai thác và tối ưu hóa dòng tiền bền vững.
          </p>

          {/* 2 Clear, Benefit-Driven CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            {/* CTA 1: Solid Terracotta Button */}
            <button
              className="solid-btn flex items-center gap-2.5 px-6 py-3.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: '#B9887B',
                color: '#FFFFFF',
                border: '1px solid #B9887B',
                boxShadow: '0 6px 24px rgba(185, 136, 123, 0.45)',
              }}
              onClick={onContactClick}
              aria-label="Nhận đánh giá sơ bộ tài sản"
            >
              <Sparkles size={16} className="text-white shrink-0" />
              <span>NHẬN ĐÁNH GIÁ TÀI SẢN</span>
              <ArrowUpRight size={16} className="text-white shrink-0 ml-0.5" />
            </button>

            {/* CTA 2: Secondary Solution Discovery Button */}
            <button
              className="outline-btn flex items-center gap-2 px-5 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#F4EFEA] border border-white/30 hover:border-[#B9887B] hover:text-[#B9887B] hover:bg-white/[0.04] transition-all duration-300 rounded cursor-pointer"
              onClick={onSolutionsClick}
              aria-label="Xem giải pháp của CityHouseMore"
            >
              <span>XEM GIẢI PHÁP</span>
              <ArrowDownRight size={16} className="shrink-0" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Architectural Showcase (lg:col-span-5) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative rounded-lg overflow-hidden border border-white/15 shadow-2xl group">
            <img
              src="https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp"
              alt="CityHouse VIBE City Oasis — Kiến trúc ốc đảo xanh trung tâm"
              className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/80 via-transparent to-black/20"></div>

            {/* Top Badge: Verified Property */}
            <div className="absolute top-4 left-4 bg-[#0F1A41]/85 backdrop-blur-md border border-[#B9887B]/40 px-3 py-1.5 rounded flex items-center gap-2 text-white">
              <Building size={13} className="text-[#B9887B]" />
              <span className="text-xs font-mono font-bold tracking-wide">City Oasis · Quận 3</span>
            </div>

            {/* Top Right: Agoda 9.1 Star Rating */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded flex items-center gap-1.5 text-[#0F1A41] shadow-lg">
              <Star size={13} className="fill-[#C79A3B] text-[#C79A3B]" />
              <span className="text-xs font-mono font-bold">Agoda 9.1/10</span>
            </div>

            {/* Bottom Tagline on Photo */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs text-white/90 font-medium leading-relaxed">
                Mô hình căn hộ lưu trú ốc đảo xanh — Công suất lấp đầy 95%+ quanh năm giữa trung tâm TP.HCM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
