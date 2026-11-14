import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects.js';
import { useNavigation } from '../context/NavigationContext.jsx';
import {
  MapPin,
  Building2,
  Star,
  ArrowUpRight,
  Quote,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  X,
  Phone,
  Mail,
  Eye,
  Sparkles,
  Layers,
  Calendar,
  Share2,
  Check,
  Briefcase,
  Handshake,
  Maximize2
} from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';

export default function ProjectDetailPage({ slug, onOpenModal }) {
  const { navigate } = useNavigation();

  // Find project by slug or fallback to first
  const project = projects.find((p) => p.slug === slug) || projects[0];

  const [activeNav, setActiveNav] = useState('overview');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState('all'); // 'all' | 'exterior' | 'interior'
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Handle lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  const allImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image, project.interiorImage || project.image];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Related projects (exclude current)
  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="project-detail-page bg-[#FBFBFD] text-[#0F1A41] min-h-screen">
      {/* 1. Breadcrumb Bar */}
      <div className="w-full bg-[#FAF6EF] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#0F1A41]/70 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#B9887B] transition-colors cursor-pointer"
            >
              Trang chủ
            </button>
            <span className="text-[10px] text-[#0F1A41]/40">›</span>
            <button
              onClick={() => navigate('/danh-muc-tai-san')}
              className="hover:text-[#B9887B] transition-colors cursor-pointer"
            >
              Danh mục tài sản
            </button>
            <span className="text-[10px] text-[#0F1A41]/40">›</span>
            <span className="text-[#0F1A41] font-bold truncate">
              {project.name}
            </span>
          </nav>

          <button
            onClick={handleShare}
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#0F1A41]/70 hover:text-[#B9887B] transition-colors cursor-pointer px-2.5 py-1 rounded hover:bg-black/5"
            title="Sao chép liên kết"
          >
            {copiedLink ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-600">Đã sao chép</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span>Chia sẻ</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Hero Section: Asymmetric Multi-Photo Gallery Mosaic */}
      <header className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-8">
        {/* Photo Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 rounded-2xl overflow-hidden mb-8 shadow-sm border border-[#0F1A41]/10">
          {/* Main Hero Photo (50% width on desktop) */}
          <div
            onClick={() => openLightbox(0)}
            className="relative aspect-[4/3] md:aspect-auto md:h-[480px] overflow-hidden bg-[#0F1A41] cursor-pointer group"
          >
            <img
              src={allImages[0]}
              alt={`${project.name} - Mặt tiền chính`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-[#B9887B] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded shadow-xs">
                {project.brand} COLLECTION
              </span>
              <span className="bg-emerald-700 text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded shadow-xs">
                Kín phòng {project.occupancy}
              </span>
            </div>

            <div className="absolute inset-0 bg-[#0F1A41]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/95 text-[#0F1A41] text-xs font-mono font-bold px-3.5 py-2 rounded shadow-lg flex items-center gap-2">
                <Eye size={14} className="text-[#B9887B]" />
                Xem toàn cảnh
              </span>
            </div>
          </div>

          {/* 4 Thumbnails (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2.5 md:h-[480px]">
            {allImages.slice(1, 5).map((imgUrl, idx) => {
              const actualIndex = idx + 1;
              const isLast = idx === 3;
              const remainingCount = allImages.length - 5;

              return (
                <div
                  key={idx}
                  onClick={() => openLightbox(actualIndex)}
                  className="relative aspect-[4/3] md:aspect-auto md:h-[235px] overflow-hidden bg-[#0F1A41] cursor-pointer group"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.name} - Ảnh ${actualIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {isLast && remainingCount > 0 && (
                    <div className="absolute inset-0 bg-[#0F1A41]/75 backdrop-blur-xs text-white flex flex-col items-center justify-center font-mono transition-colors group-hover:bg-[#0F1A41]/85">
                      <span className="text-xl md:text-2xl font-bold">+{remainingCount + 1}</span>
                      <span className="text-xs tracking-wider uppercase mt-1">Xem thêm ảnh</span>
                    </div>
                  )}
                  {!isLast && (
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye size={18} className="text-white drop-shadow" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Info Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#0F1A41]/10">
          <div className="max-w-3xl">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Đang vận hành
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF6EF] text-[#0F1A41] border border-[#0F1A41]/15 font-medium">
                {project.brand} · {project.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF6EF] text-[#0F1A41]/75 border border-[#0F1A41]/15">
                {project.accompanied}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A41] tracking-tight leading-tight mb-3">
              {project.name}
            </h1>

            {/* Address */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#0F1A41]/75 mb-4">
              <MapPin size={15} className="text-[#B9887B] shrink-0" />
              <span>{project.fullAddress}</span>
            </div>

            {/* Lead Description */}
            <p className="text-sm sm:text-base text-[#0F1A41]/85 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Hero Actions & Agoda Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:min-w-[260px]">
            {project.agodaScore && (
              <div className="bg-white p-3.5 rounded-xl border border-[#0F1A41]/15 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0F1A41] text-white flex flex-col items-center justify-center font-mono shrink-0">
                    <Star size={13} className="fill-[#C79A3B] text-[#C79A3B]" />
                    <span className="text-[11px] font-bold leading-none mt-0.5">{project.agodaScore.split('/')[0]}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0F1A41] block">Agoda Verified</span>
                    <span className="text-[11px] text-[#0F1A41]/60 font-mono">{project.reviewCount}</span>
                  </div>
                </div>

                {project.agodaUrl && (
                  <a
                    href={project.agodaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#B9887B] hover:underline flex items-center gap-0.5 font-bold"
                  >
                    <span>Xem</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            )}

            <button
              onClick={() => {
                if (onOpenModal) {
                  onOpenModal();
                } else {
                  scrollToSection('contact');
                }
              }}
              className="w-full py-3.5 px-6 bg-[#0F1A41] hover:bg-[#B9887B] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ĐĂNG KÝ KHẢO SÁT TÀI SẢN</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Sticky Sub-Navigation Bar (Project Nav) */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-y border-[#0F1A41]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-6 overflow-x-auto whitespace-nowrap text-xs font-mono font-bold uppercase tracking-wider">
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'specs', label: 'Thông số kỹ thuật' },
              { id: 'case-study', label: 'Case Study & Dòng tiền' },
              { id: 'gallery', label: 'Không gian' },
              { id: 'contact', label: 'Đặt lịch tư vấn' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`py-4 px-2 sm:px-3 border-b-2 transition-all cursor-pointer ${
                  activeNav === tab.id
                    ? 'border-[#B9887B] text-[#0F1A41]'
                    : 'border-transparent text-[#0F1A41]/60 hover:text-[#0F1A41]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              if (onOpenModal) {
                onOpenModal();
              } else {
                scrollToSection('contact');
              }
            }}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-[#B9887B] hover:bg-[#A37467] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            <span>Trao đổi cùng CityHouse</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </nav>

      {/* 4. Section: Snapshot Matrix (#overview) */}
      <section id="overview" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Loại hình', val: project.propertyType },
            { label: 'Quy mô phòng', val: project.rooms },
            { label: 'Phân khúc', val: project.tag },
            { label: 'Thương hiệu', val: `${project.brand} Collection` },
            { label: 'Vai trò', val: project.solutionLabel || 'Quản lý toàn diện' },
            { label: 'Trạng thái', val: `Đang khai thác (${project.occupancy})` }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-[#0F1A41]/10 text-center flex flex-col justify-center"
            >
              <span className="font-mono text-[10px] text-[#0F1A41]/60 uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <strong className="text-xs sm:text-sm font-semibold text-[#0F1A41]">
                {item.val}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Section: Key Specifications & Operational Dossier (#specs) */}
      <section id="specs" className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#0F1A41]/10 shadow-xs mb-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#0F1A41]/10">
            <div>
              <div className="flex items-center gap-2 text-[#B9887B] font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <Building2 size={15} />
                <span>THÔNG SỐ TIÊU CHUẨN — DỰ ÁN #{project.id}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1A41]">
                Hồ sơ kỹ thuật & Mô hình vận hành
              </h2>
            </div>
            <span className="font-mono text-xs text-[#0F1A41]/60 bg-[#FAF6EF] px-3.5 py-1.5 rounded-full border border-[#0F1A41]/15 self-start sm:self-auto">
              Chuẩn hóa 4 trụ cột vận hành
            </span>
          </div>

          {/* 4 Standardized Operational Pillars (2x2 Balanced Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pillar 1: Quy mô & Kiến trúc */}
            <div className="p-5 md:p-6 bg-[#FAF6EF]/60 hover:bg-[#FAF6EF] rounded-xl border border-[#0F1A41]/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0F1A41] text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      01
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#0F1A41]/70 uppercase tracking-wider">
                      Quy mô & Kiến trúc
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#0F1A41]/10 flex items-center justify-center text-[#0F1A41]">
                    <Layers size={16} />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] block">
                    {project.rooms}
                  </span>
                  <p className="text-xs text-[#0F1A41]/70 mt-1">
                    Cấu trúc không gian được quy hoạch công năng tối ưu cho lưu trú chuyên sâu
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#0F1A41]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="bg-white px-2.5 py-1 rounded border border-[#0F1A41]/10 text-[#0F1A41] flex items-center gap-1.5 font-semibold shadow-2xs">
                  <Maximize2 size={12} className="text-[#B9887B]" />
                  Tổng diện tích: <strong>{project.scale}</strong>
                </span>
                <span className="text-[11px] text-[#0F1A41]/60">
                  Phân loại: {project.propertyTypeCategory === 'apartment' ? 'Căn hộ dịch vụ' : 'Lưu trú chuyên gia'}
                </span>
              </div>
            </div>

            {/* Pillar 2: Gói giải pháp CityHouse */}
            <div className="p-5 md:p-6 bg-[#FAF6EF]/60 hover:bg-[#FAF6EF] rounded-xl border border-[#0F1A41]/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#B9887B] text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      02
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#0F1A41]/70 uppercase tracking-wider">
                      Gói giải pháp CityHouse
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#0F1A41]/10 flex items-center justify-center text-[#B9887B]">
                    <Briefcase size={16} />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#B9887B] block">
                    {project.solutionLabel || 'Quản lý Vận hành'}
                  </span>
                  <p className="text-xs text-[#0F1A41]/70 mt-1">
                    Định vị tài sản chuẩn hóa theo tiêu chuẩn thương hiệu CityHouse {project.brand}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#0F1A41]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="bg-white px-2.5 py-1 rounded border border-[#0F1A41]/10 text-[#0F1A41] flex items-center gap-1.5 font-semibold shadow-2xs">
                  <Building2 size={12} className="text-[#B9887B]" />
                  Phân khúc: <strong>{project.propertyType}</strong>
                </span>
                <span className="text-[11px] text-[#0F1A41]/60">
                  {project.brand} Collection
                </span>
              </div>
            </div>

            {/* Pillar 3: Mô hình hợp tác */}
            <div className="p-5 md:p-6 bg-[#FAF6EF]/60 hover:bg-[#FAF6EF] rounded-xl border border-[#0F1A41]/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0F1A41] text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      03
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#0F1A41]/70 uppercase tracking-wider">
                      Mô hình hợp tác
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#0F1A41]/10 flex items-center justify-center text-[#0F1A41]">
                    <Handshake size={16} />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] block">
                    {project.model}
                  </span>
                  <p className="text-xs text-[#0F1A41]/70 mt-1">
                    Kiểm toán định kỳ, quản trị dòng tiền minh bạch và đối soát ngày 5 hàng tháng
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#0F1A41]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="bg-white px-2.5 py-1 rounded border border-[#0F1A41]/10 text-[#0F1A41] flex items-center gap-1.5 font-semibold shadow-2xs">
                  <Calendar size={12} className="text-[#B9887B]" />
                  Thời gian: <strong>{project.accompanied}</strong>
                </span>
                <span className="text-[11px] text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200 font-semibold">
                  Vận hành ổn định
                </span>
              </div>
            </div>

            {/* Pillar 4: Vai trò triển khai */}
            <div className="p-5 md:p-6 bg-[#FAF6EF]/60 hover:bg-[#FAF6EF] rounded-xl border border-[#0F1A41]/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      04
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#0F1A41]/70 uppercase tracking-wider">
                      Vai trò triển khai
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#0F1A41]/10 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                <div className="mb-3">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] block">
                    Trách nhiệm thực thi toàn diện
                  </span>
                  <p className="text-xs text-[#0F1A41]/70 mt-1">
                    Các hạng mục chuyên môn do CityHouse More trực tiếp đảm trách:
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#0F1A41]/10">
                <div className="flex flex-wrap gap-1.5">
                  {(project.role || '').split(',').map((r, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs font-mono bg-white px-2.5 py-1 rounded border border-[#0F1A41]/10 text-[#0F1A41] shadow-2xs font-semibold"
                    >
                      <Check size={11} className="text-emerald-600 stroke-[3]" />
                      <span>{r.trim()}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Highlight Card */}
          <div className="mt-6 bg-gradient-to-r from-[#0F1A41] to-[#1E2E62] text-white p-5 md:p-6 rounded-xl flex items-start gap-4 shadow-sm">
            <TrendingUp size={24} className="text-[#B9887B] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs text-[#B9887B] uppercase tracking-wider font-bold block mb-1">
                Hiệu quả kinh doanh & Dòng tiền thực tế
              </span>
              <p className="text-sm md:text-base text-white/95 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Case Study Deep-Dive (#case-study) */}
      {project.caseStudy && (
        <section id="case-study" className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#0F1A41]/10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#0F1A41]/10">
              <div>
                <span className="font-mono text-xs text-[#B9887B] font-bold uppercase tracking-wider block mb-1">
                  CASE STUDY #{project.id} — DỮ LIỆU ĐO LƯỜNG THỰC TẾ
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1A41]">
                  Phân tích bài toán đầu tư & Chiến lược triển khai
                </h2>
              </div>
              <span className="font-mono text-xs text-[#0F1A41]/60 bg-[#FAF6EF] px-3 py-1.5 rounded-full border border-[#0F1A41]/15 self-start">
                Tài sản đang vận hành hiệu quả
              </span>
            </div>

            {/* 4 Strategic Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Pillar 1 */}
              <div className="p-5 bg-[#FAF6EF] rounded-xl border-l-4 border-[#0F1A41]">
                <strong className="font-mono text-xs text-[#0F1A41] uppercase tracking-wider block mb-2">
                  1. Bối cảnh ban đầu:
                </strong>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.context}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 bg-amber-50/70 rounded-xl border-l-4 border-amber-600">
                <strong className="font-mono text-xs text-amber-900 uppercase tracking-wider block mb-2">
                  2. Thách thức & Điểm nghẽn của Chủ đầu tư:
                </strong>
                <p className="text-xs sm:text-sm text-amber-950/85 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 bg-[#FAF6EF] rounded-xl border-l-4 border-[#B9887B]">
                <strong className="font-mono text-xs text-[#B9887B] uppercase tracking-wider block mb-2">
                  3. Giải pháp chiến lược từ CityHouse More:
                </strong>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-5 bg-white rounded-xl border-l-4 border-slate-500 border border-[#0F1A41]/10">
                <strong className="font-mono text-xs text-slate-800 uppercase tracking-wider block mb-2">
                  4. Phạm vi triển khai thực tế:
                </strong>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.scope}
                </p>
              </div>
            </div>

            {/* Pillar 5: Measurable Result Metrics */}
            {project.caseStudy.resultMetrics && project.caseStudy.resultMetrics.length > 0 && (
              <div className="p-5 bg-[#FAF6EF] rounded-xl border border-[#B9887B]/30 mb-6">
                <strong className="font-mono text-xs text-[#B9887B] uppercase tracking-wider block mb-3">
                  5. Các chỉ số đo lường hiệu quả định lượng:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.caseStudy.resultMetrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg text-center border border-[#B9887B]/20">
                      <span className="font-mono text-[11px] text-[#0F1A41]/65 uppercase block mb-1">
                        {m.label}
                      </span>
                      <strong className="text-base sm:text-lg font-bold text-[#0F1A41] block">
                        {m.val}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Owner Testimonial Quote */}
            {project.caseStudy.ownerFeedback && (
              <div className="bg-[#0F1A41] text-white p-6 md:p-8 rounded-xl flex items-start gap-4 shadow-md">
                <Quote size={32} className="text-[#B9887B] shrink-0 opacity-80 mt-1" />
                <div>
                  <p className="text-sm md:text-base font-serif italic text-white/95 leading-relaxed mb-3">
                    "{project.caseStudy.ownerFeedback}"
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#B9887B]" />
                    <span className="font-mono text-xs text-[#B9887B] font-bold uppercase tracking-wider">
                      Nhận xét xác thực từ Chủ sở hữu tòa nhà {project.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. Section: Space & Photography Gallery (#gallery) */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#0F1A41]/10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#B9887B] font-bold uppercase tracking-wider block mb-1">
                KHÔNG GIAN & TIÊU CHUẨN THỰC TẾ
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41]">
                Bộ sưu tập hình ảnh kiến trúc và nội thất
              </h2>
            </div>

            <div className="inline-flex p-1 bg-[#FAF6EF] rounded-lg border border-[#0F1A41]/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveGalleryTab('all')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeGalleryTab === 'all'
                    ? 'bg-[#0F1A41] text-white font-bold shadow-xs'
                    : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
                }`}
              >
                Tất cả ảnh ({allImages.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveGalleryTab('exterior')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeGalleryTab === 'exterior'
                    ? 'bg-[#0F1A41] text-white font-bold shadow-xs'
                    : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
                }`}
              >
                Kiến trúc ngoại thất
              </button>
              <button
                type="button"
                onClick={() => setActiveGalleryTab('interior')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeGalleryTab === 'interior'
                    ? 'bg-[#0F1A41] text-white font-bold shadow-xs'
                    : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
                }`}
              >
                Nội thất thực tế
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allImages.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0F1A41] cursor-pointer group border border-[#0F1A41]/10 shadow-xs"
              >
                <img
                  src={imgUrl}
                  alt={`${project.name} - Chi tiết ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0F1A41]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-[#0F1A41] text-xs font-mono font-bold px-3 py-1.5 rounded shadow flex items-center gap-1.5">
                    <Eye size={13} className="text-[#B9887B]" />
                    Xem ảnh lớn
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section: CTA Contact (#contact) - Matching Reference Layout */}
      <section id="contact" className="section-pad bg-[#0F1A41] text-white mt-12">
        <div className="contact-layout max-w-7xl mx-auto px-4 md:px-8">
          <div className="contact-info-col">
            <p className="eyebrow eyebrow-accent">BẮT ĐẦU TƯ VẤN CHO BẤT ĐỘNG SẢN CỦA BẠN</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Quản lý gia sản<br />
              <span className="text-[#B9887B]">Vững bền gia tộc</span>
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              CityHouse More khảo sát hiện trạng tài sản, xác định điểm nghẽn khai thác và đề xuất phương án tạo dòng tiền tối ưu hoàn toàn miễn phí cho Anh/Chị.
            </p>
            <div className="contact-detail-list space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9887B]/20 flex items-center justify-center text-[#B9887B]">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase">Hotline Tiếp nhận dự án</span>
                  <strong className="text-white text-sm">0878 253 545</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9887B]/20 flex items-center justify-center text-[#B9887B]">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase">Email Bộ phận phát triển</span>
                  <strong className="text-white text-sm">info@cityhousemore.com</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9887B]/20 flex items-center justify-center text-[#B9887B]">
                  <MapPin size={15} />
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase">Trụ sở điều hành</span>
                  <strong className="text-white text-sm">485B Nguyễn Đình Chiểu, Phường Bàn Cờ, Quận 3, TP.HCM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <ContactForm submitLabel="ĐẶT LỊCH TRAO ĐỔI VỚI CHUYÊN GIA" />
          </div>
        </div>
      </section>

      {/* 9. Section: Related Properties */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-[#B9887B] font-bold uppercase tracking-wider block mb-1">
              DANH MỤC THAM KHẢO
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0F1A41]">
              Các tài sản khác trong hệ thống CityHouse
            </h2>
          </div>

          <button
            onClick={() => navigate('/danh-muc-tai-san')}
            className="text-xs font-mono font-bold text-[#0F1A41] hover:text-[#B9887B] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Xem tất cả 35+ tòa nhà</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <article
              key={rel.id}
              onClick={() => navigate(`/dang-hoat-dong/${rel.slug}`)}
              className="bg-white border border-[#0F1A41]/10 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1A41]">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#B9887B] text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {rel.brand} COLLECTION
                </div>
                {rel.agodaScore && (
                  <div className="absolute bottom-3 right-3 bg-[#0F1A41]/90 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                    <Star size={11} className="fill-[#C79A3B] text-[#C79A3B]" />
                    <span>{rel.agodaScore}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#0F1A41]/60">{rel.district}</span>
                  <span className="text-emerald-700 font-bold">Kín phòng {rel.occupancy}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0F1A41] group-hover:text-[#B9887B] transition-colors mb-2">
                  {rel.name}
                </h3>

                <p className="text-xs text-[#0F1A41]/70 line-clamp-2 mb-4 leading-relaxed flex-grow">
                  {rel.description}
                </p>

                <div className="border-t border-[#0F1A41]/10 pt-3 flex items-center justify-between text-xs font-mono font-bold text-[#0F1A41] group-hover:text-[#B9887B]">
                  <span>XEM CHI TIẾT DỰ ÁN</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full-Screen Interactive Lightbox Viewer */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Đóng"
          >
            <X size={26} />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-5 left-5 font-mono text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full z-10">
            {lightboxIndex + 1} / {allImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Ảnh trước"
          >
            <ChevronRight size={30} className="rotate-180" />
          </button>

          {/* Lightbox Image */}
          <div
            className="max-w-5xl max-h-[85vh] overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[lightboxIndex]}
              alt={`${project.name} - Phóng to ảnh ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Ảnh tiếp"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
}

