import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Building2,
  Star,
  ArrowUpRight,
  Quote,
  TrendingUp,
  ShieldCheck,
  Layers,
  Calendar,
  Eye,
  Briefcase,
  Handshake,
  Maximize2,
  Check
} from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onConsult }) {
  const [activeImageTab, setActiveImageTab] = useState('exterior'); // 'exterior' | 'interior'

  useEffect(() => {
    if (!project) return;

    // Reset tab to exterior when new project opened
    setActiveImageTab('exterior');

    // Prevent body scroll when modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = activeImageTab === 'interior' && project.interiorImage
    ? project.interiorImage
    : project.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F1A41]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF6EF] text-[#0F1A41] rounded-2xl shadow-2xl border border-[#0F1A41]/15 my-auto overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#0F1A41]/10 flex items-start justify-between gap-4 shrink-0">
          <div className="pr-2">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-sans text-[11px] font-bold text-white bg-[#B9887B] px-3 py-1 rounded-full uppercase tracking-wider">
                {project.brand} COLLECTION
              </span>
              <span className="font-sans text-[11px] text-[#0F1A41]/60 font-medium">
                {project.accompanied}
              </span>
              <span className="font-sans text-[11px] text-[#0F1A41]/40">·</span>
              <span className="font-sans text-[11px] text-[#0F1A41]/70">
                {project.propertyType}
              </span>
            </div>

            <h2
              id="modal-project-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] tracking-tight leading-snug"
            >
              {project.name}
            </h2>

            <div className="flex items-center gap-1.5 text-xs text-[#0F1A41]/75 font-sans mt-1">
              <MapPin size={13} className="text-[#B9887B] shrink-0" />
              <span>{project.fullAddress}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#0F1A41]/50 hover:text-[#0F1A41] hover:bg-[#0F1A41]/5 rounded-full transition-colors cursor-pointer shrink-0"
            aria-label="Đóng chi tiết dự án"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Visual Showcase: Architecture và Interior Reality Tabs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold text-[#0F1A41] uppercase tracking-wider flex items-center gap-1.5">
                  <Eye size={14} className="text-[#B9887B]" />
                  Hình ảnh thực tế dự án
                </span>
              </div>

              {/* Photo View Switcher */}
              <div className="inline-flex p-1 bg-white rounded-lg border border-[#0F1A41]/10 text-xs font-sans">
                <button
                  type="button"
                  onClick={() => setActiveImageTab('exterior')}
                  className={`px-3 py-1 rounded transition-all cursor-pointer ${
                    activeImageTab === 'exterior'
                      ? 'bg-[#0F1A41] text-white font-bold shadow-xs'
                      : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
                  }`}
                >
                  Kiến trúc và Tổng thể
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImageTab('interior')}
                  className={`px-3 py-1 rounded transition-all cursor-pointer ${
                    activeImageTab === 'interior'
                      ? 'bg-[#0F1A41] text-white font-bold shadow-xs'
                      : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
                  }`}
                >
                  Nội thất căn hộ thực tế
                </button>
              </div>
            </div>

            {/* Main Image Display */}
            <div className="relative aspect-[16/9] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#0F1A41] border border-[#0F1A41]/15 shadow-md">
              <img
                src={currentImage}
                alt={`${project.name} - ${activeImageTab === 'interior' ? 'Nội thất căn hộ' : 'Kiến trúc ngoại thất'}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-[#0F1A41]/85 backdrop-blur-md text-white text-[10px] font-sans px-2.5 py-1 rounded-full border border-white/20">
                  {project.tag}
                </span>
                <span className="bg-[#0F1A41]/90 backdrop-blur-md text-white text-[10px] font-sans px-2.5 py-1 rounded-full border border-[#C79A3B]/40 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]"></span>
                  Kín phòng {project.occupancy}
                </span>
              </div>

              {/* Agoda Score Overlay */}
              {project.agodaScore && project.agodaUrl && (
                <div className="absolute top-3 right-3 bg-[#0F1A41]/90 backdrop-blur-md text-white text-[11px] font-sans px-3 py-1 rounded flex items-center gap-1.5 border border-white/20">
                  <Star size={13} className="fill-[#C79A3B] text-[#C79A3B]" />
                  <span className="font-bold">{project.agodaScore}</span>
                  <span className="text-white/60 text-[10px]">Agoda</span>
                </div>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-8 text-white">
                <p className="text-xs sm:text-sm font-medium">
                  {activeImageTab === 'interior'
                    ? 'Nội thất hoàn thiện và tiêu chuẩn buồng phòng thực tế đang đón khách lưu trú'
                    : 'Kiến trúc cảnh quan, mặt tiền và hệ tiện ích tổng thể được quản lý bởi CityHouse More'}
                </p>
              </div>
            </div>

            {/* Thumbnail Quick Selector */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                type="button"
                onClick={() => setActiveImageTab('exterior')}
                className={`flex items-center gap-2.5 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                  activeImageTab === 'exterior'
                    ? 'bg-white border-[#B9887B] ring-2 ring-[#B9887B]/20 shadow-xs'
                    : 'bg-white/60 border-[#0F1A41]/10 hover:bg-white'
                }`}
              >
                <img
                  src={project.image}
                  alt="Thumbnail ngoại thất"
                  className="w-12 h-10 object-cover rounded shrink-0"
                />
                <div className="text-[11px] font-sans">
                  <strong className="block text-[#0F1A41] font-bold">1. Kiến trúc và Ngoại thất</strong>
                  <span className="text-[#0F1A41]/60 text-[10px]">Cảnh quan và mặt bằng</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveImageTab('interior')}
                className={`flex items-center gap-2.5 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                  activeImageTab === 'interior'
                    ? 'bg-white border-[#B9887B] ring-2 ring-[#B9887B]/20 shadow-xs'
                    : 'bg-white/60 border-[#0F1A41]/10 hover:bg-white'
                }`}
              >
                <img
                  src={project.interiorImage || project.image}
                  alt="Thumbnail nội thất"
                  className="w-12 h-10 object-cover rounded shrink-0"
                />
                <div className="text-[11px] font-sans">
                  <strong className="block text-[#0F1A41] font-bold">2. Nội thất căn hộ</strong>
                  <span className="text-[#0F1A41]/60 text-[10px]">Không gian sống thực tế</span>
                </div>
              </button>
            </div>
          </div>

          {/* Key Specifications và Operational Dossier */}
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#0F1A41]/10">
              <h3 className="font-sans text-xs font-bold text-[#0F1A41] uppercase tracking-wider flex items-center gap-2">
                <Building2 size={14} className="text-[#B9887B]" />
                Hồ sơ kỹ thuật và Vận hành tài sản
              </h3>
              <span className="font-sans text-[10px] text-[#0F1A41]/60 bg-[#FAF6EF] px-2 py-0.5 rounded border border-[#0F1A41]/10">
                4 Trụ cột chuẩn hóa
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Pillar 1 */}
              <div className="bg-white p-4 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif italic text-sm font-bold text-[#B9887B] leading-none">01</span>
                      <span className="text-[#0F1A41]/20 text-xs">/</span>
                      <span className="font-sans text-[10px] text-[#0F1A41]/65 uppercase font-bold tracking-[0.14em]">
                        Quy mô & Kiến trúc
                      </span>
                    </div>
                    <Layers size={13} className="text-[#0F1A41]/35" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0F1A41] mb-1">
                    {project.rooms}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8 flex items-center justify-between text-xs font-sans">
                  <span className="text-[#0F1A41]/80 font-medium flex items-center gap-1">
                    <Maximize2 size={11} className="text-[#B9887B]" />
                    {project.scale}
                  </span>
                  <span className="text-[10px] text-[#0F1A41]/55">{project.propertyTypeCategory === 'apartment' ? 'Căn hộ' : 'Lưu trú'}</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-4 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif italic text-sm font-bold text-[#B9887B] leading-none">02</span>
                      <span className="text-[#0F1A41]/20 text-xs">/</span>
                      <span className="font-sans text-[10px] text-[#0F1A41]/65 uppercase font-bold tracking-[0.14em]">
                        Gói giải pháp
                      </span>
                    </div>
                    <Briefcase size={13} className="text-[#0F1A41]/35" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0F1A41] mb-1">
                    {project.solutionLabel || project.service || 'Quản lý Vận hành Toàn diện'}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8 flex items-center justify-between text-xs font-sans">
                  <span className="text-[#0F1A41]/80 font-medium truncate">
                    {project.propertyType}
                  </span>
                  <span className="text-[10px] text-[#0F1A41]/55">{project.brand}</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-4 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif italic text-sm font-bold text-[#B9887B] leading-none">03</span>
                      <span className="text-[#0F1A41]/20 text-xs">/</span>
                      <span className="font-sans text-[10px] text-[#0F1A41]/65 uppercase font-bold tracking-[0.14em]">
                        Mô hình hợp tác
                      </span>
                    </div>
                    <Handshake size={13} className="text-[#0F1A41]/35" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0F1A41] mb-1">
                    {project.model}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8 flex items-center justify-between text-xs font-sans">
                  <span className="text-[#0F1A41]/80 font-medium flex items-center gap-1">
                    <Calendar size={11} className="text-[#B9887B]" />
                    {project.accompanied}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#0F1A41]/60 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]"></span>
                    Ổn định
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white p-4 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif italic text-sm font-bold text-[#B9887B] leading-none">04</span>
                      <span className="text-[#0F1A41]/20 text-xs">/</span>
                      <span className="font-sans text-[10px] text-[#0F1A41]/65 uppercase font-bold tracking-[0.14em]">
                        Vai trò triển khai
                      </span>
                    </div>
                    <Check size={13} className="text-[#0F1A41]/35" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0F1A41] mb-1">
                    Trách nhiệm trọn gói
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8">
                  <div className="flex flex-wrap gap-1">
                    {(project.role || '').split(',').map((r, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[10.5px] font-sans bg-[#FAF6EF] px-2 py-0.5 rounded-full border border-[#0F1A41]/10 text-[#0F1A41]/80 font-medium">
                        <span className="w-1 h-1 rounded-full bg-[#B9887B]"></span>
                        <span>{r.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Result Banner */}
            <div className="mt-3 bg-gradient-to-r from-[#0F1A41] to-[#1E2E62] text-white p-4 rounded-xl flex items-start gap-3 shadow-sm">
              <TrendingUp size={20} className="text-[#B9887B] shrink-0 mt-0.5" />
              <div>
                <strong className="font-sans text-[11px] text-[#B9887B] uppercase tracking-wider block mb-0.5">
                  Hiệu quả kinh doanh và Dòng tiền thực tế
                </strong>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </div>

          {/* Deep-Dive Case Study: Editorial Dossier */}
          {project.caseStudy && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-xs font-bold text-[#0F1A41] uppercase tracking-[0.15em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                  Phân tích Case Study & Bài toán đầu tư
                </h3>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#B9887B] bg-white px-2.5 py-1 rounded-full border border-[#0F1A41]/10">
                  Dữ liệu đo lường thực tế
                </span>
              </div>

              {/* Executive KPI Strip */}
              {project.caseStudy.resultMetrics && project.caseStudy.resultMetrics.length > 0 && (
                <div className="bg-white rounded-xl border border-[#0F1A41]/10 p-5 shadow-2xs">
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#0F1A41]/8">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#C79A3B]"></span>
                    <span className="font-sans text-[11px] font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Kết quả đo lường định lượng
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#0F1A41]/10">
                    {project.caseStudy.resultMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="py-2.5 sm:py-1 sm:px-4 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0 text-center sm:text-left"
                      >
                        <span className="font-sans text-[10px] text-[#0F1A41]/55 uppercase tracking-wider font-semibold block mb-1">
                          {metric.label}
                        </span>
                        <strong className="font-serif text-base sm:text-lg font-bold text-[#0F1A41] block leading-snug">
                          {metric.val}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4 Narrative Pillars in 2x2 Editorial Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* 01. Context */}
                <div className="bg-white p-4.5 rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                      01
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Bối cảnh ban đầu
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed">
                    {project.caseStudy.context}
                  </p>
                </div>

                {/* 02. Challenge / Problem */}
                <div className="bg-white p-4.5 rounded-xl border border-[#0F1A41]/10 border-l-2 border-l-[#B9887B] shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                      02
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Thách thức & Điểm nghẽn
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* 03. Solution */}
                <div className="bg-white p-4.5 rounded-xl border border-[#0F1A41]/10 border-l-2 border-l-[#0F1A41] shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#0F1A41] leading-none">
                      03
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Giải pháp từ CityHouse More
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/85 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>

                {/* 04. Scope */}
                <div className="bg-white p-4.5 rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                      04
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#0F1A41] uppercase tracking-[0.14em]">
                      Phạm vi triển khai thực tế
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed">
                    {project.caseStudy.scope}
                  </p>
                </div>
              </div>

              {/* Owner Testimonial */}
              {project.caseStudy.ownerFeedback && (
                <div className="bg-gradient-to-br from-[#0F1A41] to-[#162456] text-white p-5 rounded-xl flex items-start gap-4 shadow-md border border-white/10">
                  <Quote size={26} className="text-[#B9887B] shrink-0 opacity-85 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm text-white/95 italic leading-relaxed mb-2 font-serif">
                      "{project.caseStudy.ownerFeedback}"
                    </p>
                    <div className="flex items-center gap-2">
                      <Check size={12} strokeWidth={2.5} className="text-[#B9887B]" />
                      <span className="font-sans text-[10px] text-[#B9887B] font-bold uppercase tracking-[0.15em]">
                        Xác nhận từ Chủ sở hữu tòa nhà {project.name}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Agoda Review và Guest Verification Strip */}
          {project.agodaUrl && (
            <div className="bg-white p-5 rounded-xl border border-[#0F1A41]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0F1A41] text-white flex flex-col items-center justify-center font-sans shrink-0">
                  <Star size={14} className="fill-[#C79A3B] text-[#C79A3B] mb-0.5" />
                  <span className="text-xs font-bold leading-none">{project.agodaScore?.split('/')[0] || '9.0'}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-bold text-[#0F1A41] uppercase">
                      Đánh giá thực tế trên nền tảng AGODA
                    </span>
                    <span className="text-[10px] font-sans text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                      Đã xác thực
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/70 mt-0.5">
                    Hơn {project.reviewCount || 'hàng trăm đánh giá'} từ khách lưu trú quốc tế và trong nước.
                  </p>
                </div>
              </div>

              <a
                href={project.agodaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF6EF] hover:bg-[#F4EFEA] border border-[#0F1A41]/15 text-[#0F1A41] hover:text-[#B9887B] font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Xem trên Agoda</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Sticky Modal Bottom Action Bar */}
        <div className="bg-white px-6 py-4 border-t border-[#0F1A41]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-sans text-[#0F1A41]/70 text-center sm:text-left">
            <span>Bạn sở hữu tài sản tương tự tại <strong>{project.district}</strong>?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.agodaUrl && (
              <a
                href={project.agodaUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-sans text-[#0F1A41]/70 hover:text-[#B9887B] px-4 py-2.5 transition-colors rounded-full"
              >
                <span>Đánh giá Agoda</span>
                <ArrowUpRight size={12} />
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onConsult) onConsult(project);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#B9887B] hover:bg-[#A37467] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ĐẶT LỊCH TƯ VẤN DỰ ÁN TƯƠNG TỰ</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

