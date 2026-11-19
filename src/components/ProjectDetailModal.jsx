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
  CheckCircle2,
  Layers,
  Calendar,
  Sparkles,
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
              <span className="font-mono text-[11px] font-bold text-white bg-[#B9887B] px-2.5 py-0.5 rounded uppercase tracking-wider">
                {project.brand} COLLECTION
              </span>
              <span className="font-mono text-[11px] text-[#0F1A41]/60 font-medium">
                {project.accompanied}
              </span>
              <span className="font-mono text-[11px] text-[#0F1A41]/40">·</span>
              <span className="font-mono text-[11px] text-[#0F1A41]/70">
                {project.propertyType}
              </span>
            </div>

            <h2
              id="modal-project-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] tracking-tight leading-snug"
            >
              {project.name}
            </h2>

            <div className="flex items-center gap-1.5 text-xs text-[#0F1A41]/75 font-mono mt-1">
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
          {/* Visual Showcase: Architecture & Interior Reality Tabs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#0F1A41] uppercase tracking-wider flex items-center gap-1.5">
                  <Eye size={14} className="text-[#B9887B]" />
                  Hình ảnh thực tế dự án
                </span>
              </div>

              {/* Photo View Switcher */}
              <div className="inline-flex p-1 bg-white rounded-lg border border-[#0F1A41]/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveImageTab('exterior')}
                  className={`px-3 py-1 rounded transition-all cursor-pointer ${
                    activeImageTab === 'exterior'
                      ? 'bg-[#0F1A41] text-white font-bold shadow-xs'
                      : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
                  }`}
                >
                  Kiến trúc & Tổng thể
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
                <span className="bg-[#0F1A41]/85 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded border border-white/20">
                  {project.tag}
                </span>
                <span className="bg-emerald-700/90 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded border border-emerald-400/30">
                  Kín phòng {project.occupancy}
                </span>
              </div>

              {/* Agoda Score Overlay */}
              {project.agodaScore && (
                <div className="absolute top-3 right-3 bg-[#0F1A41]/90 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded flex items-center gap-1.5 border border-white/20">
                  <Star size={13} className="fill-[#C79A3B] text-[#C79A3B]" />
                  <span className="font-bold">{project.agodaScore}</span>
                  <span className="text-white/60 text-[10px]">Agoda</span>
                </div>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-8 text-white">
                <p className="text-xs sm:text-sm font-medium">
                  {activeImageTab === 'interior'
                    ? 'Nội thất hoàn thiện & tiêu chuẩn buồng phòng thực tế đang đón khách lưu trú'
                    : 'Kiến trúc cảnh quan, mặt tiền & hệ tiện ích tổng thể được quản lý bởi CityHouse More'}
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
                <div className="text-[11px] font-mono">
                  <strong className="block text-[#0F1A41] font-bold">1. Kiến trúc & Ngoại thất</strong>
                  <span className="text-[#0F1A41]/60 text-[10px]">Cảnh quan & mặt bằng</span>
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
                <div className="text-[11px] font-mono">
                  <strong className="block text-[#0F1A41] font-bold">2. Nội thất căn hộ</strong>
                  <span className="text-[#0F1A41]/60 text-[10px]">Không gian sống thực tế</span>
                </div>
              </button>
            </div>
          </div>

          {/* Key Specifications & Operational Dossier */}
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#0F1A41]/10">
              <h3 className="font-mono text-xs font-bold text-[#0F1A41] uppercase tracking-wider flex items-center gap-2">
                <Building2 size={14} className="text-[#B9887B]" />
                Hồ sơ kỹ thuật & Vận hành tài sản
              </h3>
              <span className="font-mono text-[10px] text-[#0F1A41]/60 bg-[#FAF6EF] px-2 py-0.5 rounded border border-[#0F1A41]/10">
                4 Trụ cột chuẩn hóa
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Pillar 1 */}
              <div className="bg-white p-3.5 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#0F1A41]/60 uppercase font-bold flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#0F1A41] text-white text-[9px] flex items-center justify-center">01</span>
                      Quy mô & Kiến trúc
                    </span>
                    <Layers size={13} className="text-[#0F1A41]/50" />
                  </div>
                  <p className="text-sm font-bold text-[#0F1A41] mb-1">
                    {project.rooms}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#0F1A41]/80 font-semibold flex items-center gap-1">
                    <Maximize2 size={11} className="text-[#B9887B]" />
                    {project.scale}
                  </span>
                  <span className="text-[10px] text-[#0F1A41]/55">{project.propertyTypeCategory === 'apartment' ? 'Căn hộ' : 'Lưu trú'}</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-3.5 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#B9887B] uppercase font-bold flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#B9887B] text-white text-[9px] flex items-center justify-center">02</span>
                      Gói giải pháp
                    </span>
                    <Briefcase size={13} className="text-[#B9887B]/60" />
                  </div>
                  <p className="text-sm font-bold text-[#B9887B] mb-1">
                    {project.solutionLabel || project.service || 'Quản lý Vận hành Toàn diện'}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#0F1A41]/80 font-semibold truncate">
                    {project.propertyType}
                  </span>
                  <span className="text-[10px] text-[#0F1A41]/55">{project.brand}</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-3.5 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#0F1A41]/60 uppercase font-bold flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#0F1A41] text-white text-[9px] flex items-center justify-center">03</span>
                      Mô hình hợp tác
                    </span>
                    <Handshake size={13} className="text-[#0F1A41]/50" />
                  </div>
                  <p className="text-sm font-bold text-[#0F1A41] mb-1">
                    {project.model}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#0F1A41]/80 font-semibold flex items-center gap-1">
                    <Calendar size={11} className="text-[#B9887B]" />
                    {project.accompanied}
                  </span>
                  <span className="text-[10px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">Ổn định</span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white p-3.5 rounded-xl border border-[#0F1A41]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-emerald-700 uppercase font-bold flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-700 text-white text-[9px] flex items-center justify-center">04</span>
                      Vai trò triển khai
                    </span>
                    <CheckCircle2 size={13} className="text-emerald-600/70" />
                  </div>
                  <p className="text-sm font-bold text-[#0F1A41] mb-1">
                    Trách nhiệm trọn gói
                  </p>
                </div>
                <div className="pt-2 border-t border-[#0F1A41]/8">
                  <div className="flex flex-wrap gap-1">
                    {(project.role || '').split(',').map((r, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-mono bg-[#FAF6EF] px-1.5 py-0.5 rounded border border-[#0F1A41]/10 text-[#0F1A41]">
                        <Check size={9} className="text-emerald-600 stroke-[3]" />
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
                <strong className="font-mono text-[11px] text-[#B9887B] uppercase tracking-wider block mb-0.5">
                  Hiệu quả kinh doanh & Dòng tiền thực tế
                </strong>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </div>

          {/* Deep-Dive Case Study: 5 Pillars */}
          {project.caseStudy && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs font-bold text-[#0F1A41] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={14} className="text-[#B9887B]" />
                  Phân tích Case Study & Bài toán đầu tư
                </h3>
                <span className="font-mono text-[10px] text-[#0F1A41]/50 bg-white px-2 py-0.5 rounded border border-[#0F1A41]/10">
                  DỮ LIỆU ĐO LƯỜNG THỰC TẾ
                </span>
              </div>

              <div className="space-y-3.5">
                {/* 1. Context */}
                <div className="bg-white p-4 rounded-xl border-l-4 border-[#0F1A41] border-y border-r border-[#0F1A41]/10 shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold text-[#0F1A41] uppercase tracking-wider">
                      1. Bối cảnh ban đầu
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/85 leading-relaxed">
                    {project.caseStudy.context}
                  </p>
                </div>

                {/* 2. Challenge / Problem */}
                <div className="bg-amber-50/70 p-4 rounded-xl border-l-4 border-amber-600 border-y border-r border-amber-200/50 shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                      2. Thách thức & Điểm nghẽn của Chủ đầu tư
                    </span>
                  </div>
                  <p className="text-xs text-amber-950/85 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* 3. Solution */}
                <div className="bg-[#FAF6EF] p-4 rounded-xl border-l-4 border-[#B9887B] border-y border-r border-[#B9887B]/20 shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold text-[#B9887B] uppercase tracking-wider">
                      3. Giải pháp chiến lược từ CityHouse More
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/85 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>

                {/* 4. Scope */}
                <div className="bg-white p-4 rounded-xl border-l-4 border-slate-500 border-y border-r border-[#0F1A41]/10 shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      4. Phạm vi CityHouse More triển khai thực tế
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/85 leading-relaxed">
                    {project.caseStudy.scope}
                  </p>
                </div>

                {/* 5. Result Metrics */}
                {project.caseStudy.resultMetrics && project.caseStudy.resultMetrics.length > 0 && (
                  <div className="bg-white p-4 rounded-xl border border-[#B9887B]/30 shadow-xs">
                    <span className="font-mono text-[11px] font-bold text-[#B9887B] uppercase tracking-wider block mb-3">
                      5. Kết quả đo lường định lượng
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {project.caseStudy.resultMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FAF6EF] p-3 rounded-lg border border-[#B9887B]/20 text-center"
                        >
                          <span className="font-mono text-[10px] text-[#0F1A41]/65 block mb-1 uppercase">
                            {metric.label}
                          </span>
                          <strong className="text-sm font-bold text-[#0F1A41] block">
                            {metric.val}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Owner Testimonial */}
                {project.caseStudy.ownerFeedback && (
                  <div className="bg-[#0F1A41] text-white p-5 rounded-xl flex items-start gap-4 shadow-md">
                    <Quote size={28} className="text-[#B9887B] shrink-0 opacity-80 mt-1" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/95 italic leading-relaxed mb-2 font-serif">
                        "{project.caseStudy.ownerFeedback}"
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#B9887B]" />
                        <span className="font-mono text-[11px] text-[#B9887B] font-bold uppercase tracking-wider">
                          Xác nhận từ Chủ sở hữu tòa nhà {project.name}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Agoda Review & Guest Verification Strip */}
          {project.agodaUrl && (
            <div className="bg-white p-5 rounded-xl border border-[#0F1A41]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0F1A41] text-white flex flex-col items-center justify-center font-mono shrink-0">
                  <Star size={14} className="fill-[#C79A3B] text-[#C79A3B] mb-0.5" />
                  <span className="text-xs font-bold leading-none">{project.agodaScore?.split('/')[0] || '9.0'}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#0F1A41] uppercase">
                      Đánh giá thực tế trên nền tảng AGODA
                    </span>
                    <span className="text-[10px] font-mono text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
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
                className="w-full sm:w-auto px-4 py-2.5 bg-[#FAF6EF] hover:bg-[#F4EFEA] border border-[#0F1A41]/15 text-[#0F1A41] hover:text-[#B9887B] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Xem trên Agoda</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Sticky Modal Bottom Action Bar */}
        <div className="bg-white px-6 py-4 border-t border-[#0F1A41]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-[#0F1A41]/70 text-center sm:text-left">
            <span>Bạn sở hữu tài sản tương tự tại <strong>{project.district}</strong>?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.agodaUrl && (
              <a
                href={project.agodaUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#0F1A41]/70 hover:text-[#B9887B] px-3 py-2.5 transition-colors"
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
              className="w-full sm:w-auto px-6 py-3 bg-[#B9887B] hover:bg-[#A37467] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
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

