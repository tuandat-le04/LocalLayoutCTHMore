import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects.js';
import { ArrowUpRight, MapPin, Star, ChevronRight, X, Quote, Check } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Projects({ onContactClick }) {
  const { navigate } = useNavigation();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  useEffect(() => {
    if (!selectedCaseStudy) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCaseStudy(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCaseStudy]);

  // Curate 3 Flagship Projects on HomePage for high visual impact and zero clutter
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="projects section-pad bg-[#F8F9FA] text-[#0F1A41] font-sans border-t border-[#0F1A41]/5">
      <div className="section-heading row-heading mb-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            CÔNG TRÌNH TIÊU BIỂU — CITYHOUSE MORE
          </p>
          <h2 className="text-[#0F1A41] font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-3">
            Những dự án<br />
            tạo nên <span className="text-[#B9887B] font-serif italic">dấu ấn CityHouse</span>
          </h2>
          <p className="text-sm text-[#0F1A41]/75 max-w-xl leading-relaxed font-normal">
            Các công trình đã được tối ưu hóa thành công về mặt công năng, chi phí đầu tư và dòng tiền khai thác thực tế.
          </p>
        </div>

        <button
          onClick={() => navigate('/danh-muc-tai-san')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md self-start md:self-auto shrink-0 bg-white text-[#0F1A41] border border-[#0F1A41]/15 hover:border-[#0F1A41] hover:bg-[#0F1A41] hover:text-white"
          aria-label="Xem toàn bộ 35+ dự án"
        >
          <span>Xem tất cả 35+ dự án</span>
          <ArrowUpRight size={15} />
        </button>
      </div>

      {/* 3 Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white rounded-2xl border border-[#0F1A41]/8 overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_-4px_rgba(15,26,65,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,26,65,0.12)] hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Image Banner */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="px-3 py-1 bg-[#0F1A41]/90 backdrop-blur-md text-white font-sans text-[10px] font-bold rounded-full uppercase tracking-wider border border-white/10 shadow-xs">
                  {project.brand}
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#0F1A41] font-sans text-[10px] font-bold rounded-full uppercase tracking-wider border border-white/40 shadow-xs">
                  {project.district}
                </span>
              </div>
              {project.agodaScore && project.agodaUrl && (
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-sans font-bold text-[#0F1A41] flex items-center gap-1.5 shadow-sm border border-white/50">
                  <Star size={12} className="fill-[#C79A3B] text-[#C79A3B]" />
                  <span>Agoda {project.agodaScore}</span>
                </div>
              )}
            </div>

            {/* Content Details (Clean & Modern Luxury) */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between font-sans">
              <div>
                <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#0F1A41] mb-2 group-hover:text-[#B9887B] transition-colors leading-snug">
                  {project.name}
                </h3>

                <p className="text-xs text-[#0F1A41]/65 flex items-center gap-1.5 mb-3.5">
                  <MapPin size={12} className="text-[#B9887B] shrink-0" />
                  <span className="truncate">{project.fullAddress}</span>
                </p>

                <div className="flex items-center justify-between text-xs font-sans bg-[#F8F9FA] rounded-xl px-3.5 py-2.5 mb-4 border border-[#0F1A41]/5">
                  <span className="text-[#0F1A41]/75">
                    Quy mô: <strong className="text-[#0F1A41] font-semibold">{project.rooms}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F1A41] bg-white px-2.5 py-1 rounded-full border border-[#0F1A41]/10 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Kín phòng {project.occupancy}
                  </span>
                </div>

                <p className="text-xs text-[#0F1A41]/75 leading-relaxed mb-5 line-clamp-2 font-normal">
                  {project.result}
                </p>
              </div>

              {/* Action: Open Case Study Detail Modal */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full py-3 px-5 text-center text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all duration-300 flex items-center justify-between cursor-pointer bg-[#F8F9FA] hover:bg-[#0F1A41] text-[#0F1A41] hover:text-white border border-[#0F1A41]/12 hover:border-[#0F1A41] shadow-2xs hover:shadow-md group/btn font-sans"
                >
                  <span>XEM CASE STUDY</span>
                  <span className="w-6 h-6 rounded-full bg-[#0F1A41]/6 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors">
                    <ArrowUpRight size={13} className="text-[#0F1A41] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA to view complete directory */}
      <div className="text-center mt-12 pt-2">
        <button
          onClick={() => navigate('/danh-muc-tai-san')}
          className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] rounded-full cursor-pointer transition-all duration-300 bg-[#0F1A41] hover:bg-[#162456] text-white border border-[#0F1A41] shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
        >
          <span>XEM TOÀN BỘ 35+ BẤT ĐỘNG SẢN VÀ BỘ LỌC CHI TIẾT</span>
          <ArrowUpRight size={15} className="text-[#B9887B]" />
        </button>
      </div>

      {/* Case Study Deep-Dive Modal (Luxury Editorial Dossier) */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F1A41]/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCaseStudy(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
        >
          <div
            className="relative w-full max-w-3xl bg-white text-[#0F1A41] rounded-2xl shadow-[0_24px_70px_-15px_rgba(10,17,40,0.5)] border border-[#0F1A41]/12 max-h-[92vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Editorial Header */}
            <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#0F1A41]/10 flex items-start justify-between gap-4 shrink-0">
              <div className="pr-2">
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-[#B9887B] uppercase">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                    <span>CASE STUDY #{String(selectedCaseStudy.id).padStart(2, '0')}</span>
                  </span>
                  <span className="text-[#0F1A41]/25 text-xs">·</span>
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#0F1A41]/60">
                    {selectedCaseStudy.accompanied}
                  </span>
                </div>
                <h3
                  id="case-study-modal-title"
                  className="font-serif text-2xl sm:text-[28px] font-bold text-[#0F1A41] tracking-tight leading-snug"
                >
                  {selectedCaseStudy.name}
                </h3>
                <p className="text-xs text-[#0F1A41]/70 mt-1 flex items-center gap-1.5 font-sans">
                  <MapPin size={13} className="text-[#B9887B] shrink-0" />
                  <span>{selectedCaseStudy.fullAddress}</span>
                </p>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#0F1A41]/50 hover:text-[#0F1A41] hover:bg-[#0F1A41]/5 transition-colors cursor-pointer shrink-0"
                aria-label="Đóng"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Editorial Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
              {/* Visual Photo Showcase: Architecture & Interior Reality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0F1A41] border border-[#0F1A41]/10 shadow-sm group">
                  <img
                    src={selectedCaseStudy.image}
                    alt={`${selectedCaseStudy.name} - Kiến trúc ngoại thất`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 bg-[#0F1A41]/85 backdrop-blur-md border border-white/15 text-white text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Kiến trúc và Không gian
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0F1A41] border border-[#0F1A41]/10 shadow-sm group">
                  <img
                    src={selectedCaseStudy.interiorImage || selectedCaseStudy.image}
                    alt={`${selectedCaseStudy.name} - Nội thất thực tế`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 bg-[#0F1A41]/85 backdrop-blur-md border border-white/15 text-white text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Nội thất căn hộ vận hành
                  </span>
                </div>
              </div>

              {/* Executive KPI Strip: Kết quả đo lường thực tế */}
              <div className="bg-white rounded-xl border border-[#0F1A41]/10 p-5 shadow-2xs">
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#0F1A41]/8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#C79A3B]"></span>
                    <span className="text-[11px] font-sans font-bold text-[#0F1A41] uppercase tracking-[0.15em]">
                      Kết quả đo lường thực tế
                    </span>
                  </div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#B9887B]">
                    Dữ liệu xác thực
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#0F1A41]/10">
                  {selectedCaseStudy.caseStudy.resultMetrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 sm:py-1 sm:px-4 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0 text-center sm:text-left"
                    >
                      <span className="text-[10px] text-[#0F1A41]/55 font-sans uppercase tracking-wider font-semibold block mb-1">
                        {m.label}
                      </span>
                      <strong className="font-serif text-base sm:text-lg text-[#0F1A41] font-bold block leading-snug">
                        {m.val}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Narrative Pillars in Editorial 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                {/* 01. Context */}
                <div className="bg-white p-5 rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                      01
                    </span>
                    <strong className="text-[11px] font-sans font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Bối cảnh ban đầu
                    </strong>
                  </div>
                  <p className="text-[#0F1A41]/80 leading-relaxed">
                    {selectedCaseStudy.caseStudy.context}
                  </p>
                </div>

                {/* 02. Challenge */}
                <div className="bg-white p-5 rounded-xl border border-[#0F1A41]/10 border-l-2 border-l-[#B9887B] shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                      02
                    </span>
                    <strong className="text-[11px] font-sans font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Thách thức & Điểm nghẽn
                    </strong>
                  </div>
                  <p className="text-[#0F1A41]/80 leading-relaxed">
                    {selectedCaseStudy.caseStudy.problem}
                  </p>
                </div>

                {/* 03. Strategic Solution */}
                <div className="bg-white p-5 rounded-xl border border-[#0F1A41]/10 border-l-2 border-l-[#0F1A41] shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#0F1A41] leading-none">
                      03
                    </span>
                    <strong className="text-[11px] font-sans font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Giải pháp từ CityHouse More
                    </strong>
                  </div>
                  <p className="text-[#0F1A41]/85 leading-relaxed">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>

                {/* 04. Scope */}
                <div className="bg-white p-5 rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                      04
                    </span>
                    <strong className="text-[11px] font-sans font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Phạm vi triển khai
                    </strong>
                  </div>
                  <p className="text-[#0F1A41]/80 leading-relaxed">
                    {selectedCaseStudy.caseStudy.scope}
                  </p>
                </div>
              </div>

              {/* Owner Testimonial */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-[#0F1A41] to-[#162456] text-white rounded-xl shadow-md flex items-start gap-4 border border-white/10">
                <Quote size={26} className="text-[#B9887B] shrink-0 opacity-85 mt-0.5" />
                <div>
                  <p className="font-serif text-sm sm:text-[15px] text-white/95 italic leading-relaxed mb-2.5">
                    "{selectedCaseStudy.caseStudy.ownerFeedback}"
                  </p>
                  <div className="flex items-center gap-2">
                    <Check size={12} strokeWidth={2.5} className="text-[#B9887B]" />
                    <span className="text-[10px] font-sans text-[#B9887B] font-bold uppercase tracking-[0.15em]">
                      Nhận xét từ Chủ sở hữu tòa nhà
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Modal Footer CTA */}
            <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-t border-[#0F1A41]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              {selectedCaseStudy.agodaUrl ? (
                <a
                  href={selectedCaseStudy.agodaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-sans font-medium text-[#0F1A41]/75 hover:text-[#B9887B] flex items-center gap-1.5 transition-colors"
                >
                  <Star size={13} className="fill-[#C79A3B] text-[#C79A3B] shrink-0" />
                  <span>Kiểm chứng trên Agoda ({selectedCaseStudy.reviewCount})</span>
                  <ArrowUpRight size={13} className="text-[#B9887B]" />
                </a>
              ) : (
                <span className="text-xs font-sans text-[#0F1A41]/50">
                  Đánh giá đang được cập nhật
                </span>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    navigate(`/dang-hoat-dong/${selectedCaseStudy.slug}`);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0F1A41] bg-white border border-[#0F1A41]/20 hover:border-[#B9887B] hover:text-[#B9887B] rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>XEM TRANG CHI TIẾT</span>
                  <ArrowUpRight size={13} />
                </button>

                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    if (onContactClick) onContactClick();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white bg-[#0F1A41] hover:bg-[#B9887B] rounded-full transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  TƯ VẤN DỰ ÁN TƯƠNG TỰ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
