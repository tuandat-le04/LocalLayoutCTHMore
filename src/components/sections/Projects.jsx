import React, { useState } from 'react';
import { projects } from '../../data/projects.js';
import { ArrowUpRight, MapPin, Building2, Star, ChevronRight, X, Quote } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Projects({ onContactClick }) {
  const { navigate } = useNavigation();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Curate 3 Flagship Projects on HomePage for high visual impact and zero clutter
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="projects section-pad bg-white text-[#0F1A41] font-sans">
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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md self-start md:self-auto shrink-0 bg-white border border-[#0F1A41]/20 hover:border-[#B9887B] hover:text-[#B9887B]"
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
            className="bg-[#FAF6EF] rounded-2xl border border-[#0F1A41]/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image Banner */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="px-3 py-1 bg-[#0F1A41]/90 backdrop-blur-sm text-white font-sans text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {project.brand}
                </span>
                <span className="px-3 py-1 bg-[#B9887B] text-white font-sans text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {project.district}
                </span>
              </div>
              {project.agodaScore && project.agodaUrl && (
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-sans font-bold text-[#0F1A41] flex items-center gap-1 shadow">
                  <Star size={12} className="fill-[#C79A3B] text-[#C79A3B]" />
                  <span>Agoda {project.agodaScore}</span>
                </div>
              )}
            </div>

            {/* Content Details (Clean và Minimalist) */}
            <div className="p-6 flex flex-col flex-1 justify-between font-sans">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0F1A41] mb-1.5 group-hover:text-[#B9887B] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs text-[#0F1A41]/65 flex items-center gap-1 mb-3">
                  <MapPin size={12} className="text-[#B9887B] shrink-0" />
                  <span className="truncate">{project.fullAddress}</span>
                </p>

                <div className="flex items-center gap-3 text-xs font-sans text-[#0F1A41]/80 mb-3 pb-3 border-b border-[#0F1A41]/10">
                  <span>Quy mô: <strong>{project.rooms}</strong></span>
                  <span>·</span>
                  <span className="text-[#B9887B] font-bold">Kín phòng {project.occupancy}</span>
                </div>

                <p className="text-xs text-[#0F1A41]/80 leading-relaxed mb-4 line-clamp-2 font-normal">
                  {project.result}
                </p>
              </div>

              {/* Action: Open Case Study Detail Modal */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                  style={{
                    backgroundColor: '#B9887B',
                    color: '#FFFFFF',
                    border: '1px solid #B9887B',
                  }}
                >
                  <span>XEM CASE STUDY</span>
                  <ChevronRight size={15} className="text-white" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA to view complete directory */}
      <div className="text-center mt-10 pt-4">
        <button
          onClick={() => navigate('/danh-muc-tai-san')}
          className="solid-btn inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
          style={{
            backgroundColor: '#0F1A41',
            color: '#FFFFFF',
            border: '1px solid #0F1A41',
          }}
        >
          <span>XEM TOÀN BỘ 35+ BẤT ĐỘNG SẢN VÀ BỘ LỌC CHI TIẾT</span>
          <ArrowUpRight size={15} className="text-[#B9887B]" />
        </button>
      </div>

      {/* Case Study Deep-Dive Modal (Part 8 Request) */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1A41]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white text-[#0F1A41] rounded-lg shadow-2xl border border-[#0F1A41]/15 max-h-[92vh] overflow-y-auto p-6 md:p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 p-2 text-[#0F1A41]/50 hover:text-[#0F1A41] hover:bg-black/5 rounded-full transition-all cursor-pointer"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-sans font-bold px-2 py-0.5 bg-[#B9887B] text-white rounded uppercase">
                  CASE STUDY #{selectedCaseStudy.id}
                </span>
                <span className="text-xs font-sans text-[#0F1A41]/60">
                  {selectedCaseStudy.accompanied}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F1A41]">
                {selectedCaseStudy.name}
              </h3>
              <p className="text-xs text-[#0F1A41]/70 mt-1 flex items-center gap-1">
                <MapPin size={12} className="text-[#B9887B]" />
                {selectedCaseStudy.fullAddress}
              </p>
            </div>

            {/* Visual Photo Showcase: Architecture và Interior Reality */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative rounded overflow-hidden aspect-[16/10] bg-gray-900 border border-[#0F1A41]/10">
                <img
                  src={selectedCaseStudy.image}
                  alt={`${selectedCaseStudy.name} - Kiến trúc ngoại thất`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[#0F1A41]/80 backdrop-blur-xs text-white text-[10px] font-sans px-2 py-0.5 rounded">
                  Kiến trúc và Không gian
                </span>
              </div>
              <div className="relative rounded overflow-hidden aspect-[16/10] bg-gray-900 border border-[#0F1A41]/10">
                <img
                  src={selectedCaseStudy.interiorImage || selectedCaseStudy.image}
                  alt={`${selectedCaseStudy.name} - Nội thất thực tế`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[#0F1A41]/80 backdrop-blur-xs text-white text-[10px] font-sans px-2 py-0.5 rounded">
                  Nội thất căn hộ vận hành
                </span>
              </div>
            </div>

            {/* Case Study 5 Pillars: Bối cảnh, Vấn đề, Giải pháp, Phạm vi, Kết quả */}
            <div className="flex flex-col gap-3 text-xs leading-relaxed mb-6">
              <div className="p-3.5 bg-[#FAF9F6] rounded-lg border border-[#0F1A41]/8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-[#0F1A41]/10 text-[#0F1A41] text-[9px] font-sans font-bold flex items-center justify-center">1</span>
                  <strong className="text-[11px] font-sans text-[#0F1A41] uppercase tracking-wider">
                    Bối cảnh ban đầu:
                  </strong>
                </div>
                <p className="text-[#0F1A41]/85 pl-6">{selectedCaseStudy.caseStudy.context}</p>
              </div>

              <div className="p-3.5 bg-rose-50/50 rounded-lg border border-rose-200/60">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-rose-200/80 text-rose-900 text-[9px] font-sans font-bold flex items-center justify-center">2</span>
                  <strong className="text-[11px] font-sans text-rose-900 uppercase tracking-wider">
                    Thách thức và Vấn đề cần giải quyết:
                  </strong>
                </div>
                <p className="text-rose-950/85 pl-6">{selectedCaseStudy.caseStudy.problem}</p>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] rounded-lg border border-[#0F1A41]/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-[#0F1A41] text-white text-[9px] font-sans font-bold flex items-center justify-center">3</span>
                  <strong className="text-[11px] font-sans text-[#0F1A41] uppercase tracking-wider font-bold">
                    Giải pháp chiến lược từ CityHouse More:
                  </strong>
                </div>
                <p className="text-[#0F1A41]/90 pl-6">{selectedCaseStudy.caseStudy.solution}</p>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#0F1A41]/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-[#0F1A41]/10 text-[#0F1A41] text-[9px] font-sans font-bold flex items-center justify-center">4</span>
                  <strong className="text-[11px] font-sans text-[#0F1A41] uppercase tracking-wider">
                    Phạm vi tham gia thực hiện:
                  </strong>
                </div>
                <p className="text-[#0F1A41]/85 pl-6">{selectedCaseStudy.caseStudy.scope}</p>
              </div>

              {/* Result Metrics */}
              <div className="p-4 bg-[#FAF9F6] rounded-lg border border-[#0F1A41]/10">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-sans font-bold flex items-center justify-center">5</span>
                  <strong className="text-[11px] font-sans text-[#0F1A41] uppercase tracking-wider font-bold">
                    Kết quả đo lường thực tế:
                  </strong>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pl-6">
                  {selectedCaseStudy.caseStudy.resultMetrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded text-center border border-[#0F1A41]/10 shadow-2xs">
                      <span className="text-[10px] text-[#0F1A41]/60 font-sans block">{m.label}</span>
                      <strong className="text-xs text-[#0F1A41] font-bold mt-0.5 block">{m.val}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Owner Testimonial */}
              <div className="p-4 bg-[#0F1A41] text-white rounded flex items-start gap-3">
                <Quote size={24} className="text-[#B9887B] shrink-0 opacity-80" />
                <div>
                  <p className="text-xs text-white/90 italic leading-relaxed mb-1">
                    "{selectedCaseStudy.caseStudy.ownerFeedback}"
                  </p>
                  <span className="text-[10px] font-sans text-[#B9887B] font-bold block">
                    — Nhận xét từ Chủ sở hữu tòa nhà
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#0F1A41]/10">
              {selectedCaseStudy.agodaUrl ? (
                <a
                  href={selectedCaseStudy.agodaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-sans text-[#B9887B] hover:underline flex items-center gap-1"
                >
                  <span>Xem kiểm chứng đánh giá trên Agoda ({selectedCaseStudy.reviewCount})</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="text-xs font-sans text-[#0F1A41]/50 flex items-center gap-1">
                  Đánh giá đang được cập nhật
                </span>
              )}

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    navigate(`/dang-hoat-dong/${selectedCaseStudy.slug}`);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0F1A41] bg-white border border-[#0F1A41]/20 hover:border-[#B9887B] hover:text-[#B9887B] rounded transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>XEM TRANG CHI TIẾT</span>
                  <ArrowUpRight size={13} />
                </button>

                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    if (onContactClick) onContactClick();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded cursor-pointer"
                  style={{ backgroundColor: '#B9887B', border: '1px solid #B9887B' }}
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
