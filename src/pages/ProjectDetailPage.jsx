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
  ChevronRight,
  ArrowLeft,
  X,
  Phone,
  Mail,
  Eye,
  Layers,
  Calendar,
  Share2,
  Check,
  Briefcase,
  Handshake,
  Maximize2
} from 'lucide-react';

export default function ProjectDetailPage({ slug, onOpenModal }) {
  const { navigate } = useNavigation();

  // Find project by slug, fuzzy alias, or fallback to first
  const normalizedSlug = (slug || '').toLowerCase();
  const project = projects.find((p) => {
    if (!normalizedSlug) return false;
    if (p.slug === normalizedSlug) return true;
    if (p.slug.includes(normalizedSlug) || normalizedSlug.includes(p.slug)) return true;
    if (normalizedSlug.includes('atelier') && p.slug.includes('atelier')) return true;
    if ((normalizedSlug.includes('abora') || normalizedSlug.includes('ariosa')) && p.slug.includes('abora')) return true;
    if (normalizedSlug.includes('kim-nguyen') && p.slug.includes('kim-nguyen')) return true;
    if (normalizedSlug.includes('oasis') && p.slug.includes('city-oasis')) return true;
    if (normalizedSlug.includes('kabana') && p.slug.includes('kabana')) return true;
    if (normalizedSlug.includes('lighthouse') && p.slug.includes('lighthouse')) return true;
    if (normalizedSlug.includes('villea') && p.slug.includes('villea')) return true;
    return false;
  }) || projects[0];

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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-[#0F1A41]/70 overflow-x-auto whitespace-nowrap">
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
            className="hidden sm:flex items-center gap-1.5 text-xs font-sans text-[#0F1A41]/70 hover:text-[#B9887B] transition-colors cursor-pointer px-2.5 py-1 rounded hover:bg-black/5"
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
              <span className="bg-[#B9887B] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                {project.brand} COLLECTION
              </span>
              <span className="bg-[#0F1A41]/90 backdrop-blur-md text-white text-[10px] font-sans font-semibold px-3 py-1 rounded-full border border-white/20 shadow-xs inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]"></span>
                Kín phòng {project.occupancy}
              </span>
            </div>

            <div className="absolute inset-0 bg-[#0F1A41]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/95 text-[#0F1A41] text-xs font-sans font-bold px-3.5 py-2 rounded shadow-lg flex items-center gap-2">
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
                    <div className="absolute inset-0 bg-[#0F1A41]/75 backdrop-blur-xs text-white flex flex-col items-center justify-center font-sans transition-colors group-hover:bg-[#0F1A41]/85">
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
            {/* Status & Editorial Metadata */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5 font-sans">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1A41] text-[#FAF6EF] text-[10.5px] font-bold uppercase tracking-[0.14em] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]"></span>
                Đang vận hành
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF6EF] text-[#0F1A41] border border-[#B9887B]/35 text-[10.5px] font-semibold uppercase tracking-[0.12em]">
                {project.brand} · {project.tag}
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#0F1A41]/60 pl-0.5">
                <span className="w-1 h-1 rotate-45 bg-[#B9887B]"></span>
                {project.accompanied}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A41] tracking-tight leading-tight mb-3">
              {project.name}
            </h1>

            {/* Address */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-sans text-[#0F1A41]/75 mb-4">
              <MapPin size={15} className="text-[#B9887B] shrink-0" />
              <span>{project.fullAddress}</span>
            </div>

            {/* Lead Description */}
            <p className="text-sm sm:text-base text-[#0F1A41]/85 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Hero Actions và Agoda Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:min-w-[260px]">
            {project.agodaScore && project.agodaUrl && (
              <div className="bg-white p-3.5 rounded-xl border border-[#0F1A41]/15 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0F1A41] text-white flex flex-col items-center justify-center font-sans shrink-0">
                    <Star size={13} className="fill-[#C79A3B] text-[#C79A3B]" />
                    <span className="text-[11px] font-bold leading-none mt-0.5">{project.agodaScore.split('/')[0]}</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold text-[#0F1A41] block">Agoda Verified</span>
                    <span className="text-[11px] text-[#0F1A41]/60 font-sans">{project.reviewCount}</span>
                  </div>
                </div>

                {project.agodaUrl && (
                  <a
                    href={project.agodaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-sans text-[#B9887B] hover:underline flex items-center gap-0.5 font-bold"
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
              className="w-full py-3.5 px-6 bg-[#B9887B] hover:bg-[#A37367] text-white text-xs font-sans font-bold uppercase tracking-[0.14em] rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(185, 136, 123, 0.45)',
              }}
            >
              <span>ĐĂNG KÝ KHẢO SÁT TÀI SẢN</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Sticky Sub-Navigation Bar (Project Nav) */}
      <nav className="sticky top-[72px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-y border-[#0F1A41]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-6 overflow-x-auto whitespace-nowrap text-xs font-sans font-bold uppercase tracking-wider no-scrollbar touch-pan-x">
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'specs', label: 'Thông số kỹ thuật' },
              { id: 'case-study', label: 'Case Study và Dòng tiền' },
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
            className="hidden lg:inline-flex items-center gap-1.5 px-4.5 py-2 bg-[#B9887B] hover:bg-[#A37467] text-white text-[11px] font-sans font-bold uppercase tracking-[0.14em] rounded-full transition-colors cursor-pointer"
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
              <span className="font-sans text-[10px] text-[#0F1A41]/60 uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <strong className="text-xs sm:text-sm font-semibold text-[#0F1A41]">
                {item.val}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Section: Key Specifications và Operational Dossier (#specs) */}
      <section id="specs" className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#0F1A41]/10 shadow-xs mb-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#0F1A41]/10">
            <div>
              <div className="flex items-center gap-2 text-[#B9887B] font-sans text-xs font-bold uppercase tracking-wider mb-1">
                <Building2 size={15} />
                <span>THÔNG SỐ TIÊU CHUẨN — DỰ ÁN #{project.id}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1A41]">
                Hồ sơ kỹ thuật và Mô hình vận hành
              </h2>
            </div>
            <span className="font-sans text-xs text-[#0F1A41]/60 bg-[#FAF6EF] px-3.5 py-1.5 rounded-full border border-[#0F1A41]/15 self-start sm:self-auto">
              Chuẩn hóa 4 trụ cột vận hành
            </span>
          </div>

          {/* 4 Standardized Operational Pillars (2x2 Balanced Minimalist Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pillar 1: Quy mô và Kiến trúc */}
            <div className="p-5 sm:p-6 bg-[#FAF6EF]/50 hover:bg-[#FAF6EF]/80 rounded-xl border border-[#101C42]/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif italic text-base sm:text-lg font-bold text-[#B9887B] leading-none">
                      01
                    </span>
                    <span className="text-[#101C42]/20 text-xs">/</span>
                    <span className="font-sans text-[10.5px] font-bold text-[#101C42]/65 uppercase tracking-[0.16em]">
                      Quy mô & Kiến trúc
                    </span>
                  </div>
                  <Layers size={16} className="text-[#101C42]/35 shrink-0" />
                </div>

                <div className="mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#101C42] leading-snug tracking-tight">
                    {project.rooms}
                  </h3>
                  <p className="text-xs text-[#101C42]/65 leading-relaxed mt-1.5 font-sans">
                    Cấu trúc không gian được quy hoạch công năng tối ưu cho lưu trú chuyên sâu
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#101C42]/8 flex items-center justify-between gap-2 text-xs font-sans">
                <span className="text-[#101C42]/75 font-medium flex items-center gap-1.5">
                  <Maximize2 size={12} className="text-[#B9887B]" />
                  <span>Tổng diện tích: <strong className="text-[#101C42] font-semibold">{project.scale}</strong></span>
                </span>
                <span className="text-[11px] text-[#101C42]/55 font-medium">
                  {project.propertyTypeCategory === 'apartment' ? 'Căn hộ dịch vụ' : 'Lưu trú chuyên gia'}
                </span>
              </div>
            </div>

            {/* Pillar 2: Gói giải pháp CityHouse */}
            <div className="p-5 sm:p-6 bg-[#FAF6EF]/50 hover:bg-[#FAF6EF]/80 rounded-xl border border-[#101C42]/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif italic text-base sm:text-lg font-bold text-[#B9887B] leading-none">
                      02
                    </span>
                    <span className="text-[#101C42]/20 text-xs">/</span>
                    <span className="font-sans text-[10.5px] font-bold text-[#101C42]/65 uppercase tracking-[0.16em]">
                      Gói giải pháp CityHouse
                    </span>
                  </div>
                  <Briefcase size={16} className="text-[#101C42]/35 shrink-0" />
                </div>

                <div className="mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#101C42] leading-snug tracking-tight">
                    {project.solutionLabel || 'Quản lý Vận hành'}
                  </h3>
                  <p className="text-xs text-[#101C42]/65 leading-relaxed mt-1.5 font-sans">
                    Định vị tài sản chuẩn hóa theo tiêu chuẩn thương hiệu CityHouse {project.brand}
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#101C42]/8 flex items-center justify-between gap-2 text-xs font-sans">
                <span className="text-[#101C42]/75 font-medium flex items-center gap-1.5">
                  <Building2 size={12} className="text-[#B9887B]" />
                  <span>Phân khúc: <strong className="text-[#101C42] font-semibold">{project.propertyType}</strong></span>
                </span>
                <span className="text-[11px] text-[#101C42]/55 font-medium">
                  {project.brand} Collection
                </span>
              </div>
            </div>

            {/* Pillar 3: Mô hình hợp tác */}
            <div className="p-5 sm:p-6 bg-[#FAF6EF]/50 hover:bg-[#FAF6EF]/80 rounded-xl border border-[#101C42]/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif italic text-base sm:text-lg font-bold text-[#B9887B] leading-none">
                      03
                    </span>
                    <span className="text-[#101C42]/20 text-xs">/</span>
                    <span className="font-sans text-[10.5px] font-bold text-[#101C42]/65 uppercase tracking-[0.16em]">
                      Mô hình hợp tác
                    </span>
                  </div>
                  <Handshake size={16} className="text-[#101C42]/35 shrink-0" />
                </div>

                <div className="mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#101C42] leading-snug tracking-tight">
                    {project.model}
                  </h3>
                  <p className="text-xs text-[#101C42]/65 leading-relaxed mt-1.5 font-sans">
                    Kiểm toán định kỳ, quản trị dòng tiền minh bạch và đối soát ngày 5 hàng tháng
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#101C42]/8 flex items-center justify-between gap-2 text-xs font-sans">
                <span className="text-[#101C42]/75 font-medium flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#B9887B]" />
                  <span>Thời gian: <strong className="text-[#101C42] font-semibold">{project.accompanied}</strong></span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#101C42]/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]"></span>
                  <span>Vận hành ổn định</span>
                </span>
              </div>
            </div>

            {/* Pillar 4: Vai trò triển khai */}
            <div className="p-5 sm:p-6 bg-[#FAF6EF]/50 hover:bg-[#FAF6EF]/80 rounded-xl border border-[#101C42]/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif italic text-base sm:text-lg font-bold text-[#B9887B] leading-none">
                      04
                    </span>
                    <span className="text-[#101C42]/20 text-xs">/</span>
                    <span className="font-sans text-[10.5px] font-bold text-[#101C42]/65 uppercase tracking-[0.16em]">
                      Vai trò triển khai
                    </span>
                  </div>
                  <Check size={16} className="text-[#101C42]/35 shrink-0" />
                </div>

                <div className="mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#101C42] leading-snug tracking-tight">
                    Trách nhiệm thực thi toàn diện
                  </h3>
                  <p className="text-xs text-[#101C42]/65 leading-relaxed mt-1.5 font-sans">
                    Các hạng mục chuyên môn do CityHouse More trực tiếp đảm trách:
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#101C42]/8">
                <div className="flex flex-wrap gap-1.5">
                  {(project.role || '').split(',').map((r, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans bg-white px-2.5 py-1 rounded-full border border-[#101C42]/10 text-[#101C42]/80 font-medium shadow-2xs"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#B9887B]"></span>
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
              <span className="font-sans text-xs text-[#B9887B] uppercase tracking-wider font-bold block mb-1">
                Hiệu quả kinh doanh và Dòng tiền thực tế
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
                <span className="font-sans text-xs text-[#B9887B] font-bold uppercase tracking-wider block mb-1">
                  CASE STUDY #{project.id} — DỮ LIỆU ĐO LƯỜNG THỰC TẾ
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1A41]">
                  Phân tích bài toán đầu tư và Chiến lược triển khai
                </h2>
              </div>
              <span className="font-sans text-xs text-[#0F1A41]/60 bg-[#FAF6EF] px-3 py-1.5 rounded-full border border-[#0F1A41]/15 self-start">
                Tài sản đang vận hành hiệu quả
              </span>
            </div>

            {/* Executive KPI Strip */}
            {project.caseStudy.resultMetrics && project.caseStudy.resultMetrics.length > 0 && (
              <div className="p-5 md:p-6 bg-[#FAF6EF] rounded-xl border border-[#0F1A41]/10 mb-6 shadow-2xs">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#0F1A41]/10">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#C79A3B]"></span>
                  <strong className="font-sans text-xs text-[#0F1A41] uppercase tracking-[0.14em] font-bold">
                    Các chỉ số đo lường hiệu quả định lượng
                  </strong>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#0F1A41]/10 bg-white rounded-xl border border-[#0F1A41]/10 p-4">
                  {project.caseStudy.resultMetrics.map((m, idx) => (
                    <div key={idx} className="py-2.5 sm:py-1 sm:px-4 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0 text-center sm:text-left">
                      <span className="font-sans text-[11px] text-[#0F1A41]/60 uppercase tracking-wider font-semibold block mb-1">
                        {m.label}
                      </span>
                      <strong className="font-serif text-lg sm:text-xl font-bold text-[#0F1A41] block">
                        {m.val}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4 Strategic Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Pillar 1 */}
              <div className="p-5 bg-[#FAF6EF]/60 rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                    01
                  </span>
                  <strong className="font-sans text-xs text-[#0F1A41] uppercase tracking-[0.14em]">
                    Bối cảnh ban đầu
                  </strong>
                </div>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.context}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 bg-[#FAF6EF]/60 rounded-xl border border-[#0F1A41]/10 border-l-2 border-l-[#B9887B] shadow-2xs">
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                    02
                  </span>
                  <strong className="font-sans text-xs text-[#0F1A41] uppercase tracking-[0.14em]">
                    Thách thức & Điểm nghẽn của Chủ đầu tư
                  </strong>
                </div>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 bg-[#FAF6EF]/60 rounded-xl border border-[#0F1A41]/10 border-l-2 border-l-[#0F1A41] shadow-2xs">
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-serif italic text-base font-bold text-[#0F1A41] leading-none">
                    03
                  </span>
                  <strong className="font-sans text-xs text-[#0F1A41] uppercase tracking-[0.14em] font-bold">
                    Giải pháp chiến lược từ CityHouse More
                  </strong>
                </div>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-5 bg-[#FAF6EF]/60 rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-serif italic text-base font-bold text-[#B9887B] leading-none">
                    04
                  </span>
                  <strong className="font-sans text-xs text-[#0F1A41] uppercase tracking-[0.14em]">
                    Phạm vi triển khai thực tế
                  </strong>
                </div>
                <p className="text-xs sm:text-sm text-[#0F1A41]/85 leading-relaxed">
                  {project.caseStudy.scope}
                </p>
              </div>
            </div>

            {/* Owner Testimonial Quote */}
            {project.caseStudy.ownerFeedback && (
              <div className="bg-gradient-to-br from-[#0F1A41] to-[#162456] text-white p-6 md:p-8 rounded-xl flex items-start gap-4 shadow-md border border-white/10">
                <Quote size={32} className="text-[#B9887B] shrink-0 opacity-80 mt-1" />
                <div>
                  <p className="text-sm md:text-base font-serif italic text-white/95 leading-relaxed mb-3">
                    "{project.caseStudy.ownerFeedback}"
                  </p>
                  <div className="flex items-center gap-2">
                    <Check size={14} strokeWidth={2.5} className="text-[#B9887B]" />
                    <span className="font-sans text-xs text-[#B9887B] font-bold uppercase tracking-wider">
                      Nhận xét xác thực từ Chủ sở hữu tòa nhà {project.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. Section: Space và Photography Gallery (#gallery) */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#0F1A41]/10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-sans text-xs text-[#B9887B] font-bold uppercase tracking-wider block mb-1">
                KHÔNG GIAN VÀ TIÊU CHUẨN THỰC TẾ
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41]">
                Bộ sưu tập hình ảnh kiến trúc và nội thất
              </h2>
            </div>

            <div className="inline-flex p-1 bg-[#FAF6EF] rounded-lg border border-[#0F1A41]/10 text-xs font-sans">
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
                  <span className="bg-white/95 text-[#0F1A41] text-xs font-sans font-bold px-3 py-1.5 rounded shadow flex items-center gap-1.5">
                    <Eye size={13} className="text-[#B9887B]" />
                    Xem ảnh lớn
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section: CTA Banner (#contact) - Minimalist Luxury Single-Action */}
      <section id="contact" className="section-pad bg-[#0F1A41] text-white mt-12">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center font-sans">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            ĐỒNG HÀNH KHAI THÁC & GIA TĂNG GIÁ TRỊ TÀI SẢN
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] mb-5 text-white">
            Quản lý gia sản<br />
            <span className="text-[#B9887B] font-serif italic">vững bền gia tộc</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            CityHouse More khảo sát hiện trạng tài sản, xác định điểm nghẽn khai thác và đề xuất phương án tạo dòng tiền tối ưu hoàn toàn miễn phí và bảo mật.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={() => onOpenModal ? onOpenModal() : navigate('/contact')}
              className="bg-[#B9887B] text-white px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase font-semibold hover:bg-[#a6776b] transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-[#B9887B]/25"
            >
              <span>ĐẶT LỊCH TƯ VẤN DỰ ÁN</span>
              <ArrowUpRight size={15} />
            </button>
            <a
              href="tel:0878253545"
              className="border border-white/20 text-white hover:border-[#B9887B] hover:text-[#B9887B] px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              <Phone size={14} />
              <span>HOTLINE: 0878 253 545</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#B9887B]" />
              <span>info@cityhousemore.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#B9887B]" />
              <span>485B Nguyễn Đình Chiểu, P. Bàn Cờ, Q.3, TP.HCM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section: Related Properties */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-sans text-xs text-[#B9887B] font-bold uppercase tracking-wider block mb-1">
              DANH MỤC THAM KHẢO
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0F1A41]">
              Các tài sản khác trong hệ thống CityHouse
            </h2>
          </div>

          <button
            onClick={() => navigate('/danh-muc-tai-san')}
            className="text-xs font-sans font-bold text-[#0F1A41] hover:text-[#B9887B] flex items-center gap-1 cursor-pointer transition-colors"
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
                <div className="absolute top-3 left-3 bg-[#B9887B] text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {rel.brand} COLLECTION
                </div>
                {rel.agodaScore && rel.agodaUrl && (
                  <div className="absolute bottom-3 right-3 bg-[#0F1A41]/90 backdrop-blur-md text-white text-[11px] font-sans px-2 py-0.5 rounded flex items-center gap-1">
                    <Star size={11} className="fill-[#C79A3B] text-[#C79A3B]" />
                    <span>{rel.agodaScore}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-sans mb-1.5">
                  <span className="text-[#0F1A41]/60">{rel.district}</span>
                  <span className="text-emerald-700 font-bold">Kín phòng {rel.occupancy}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0F1A41] group-hover:text-[#B9887B] transition-colors mb-2">
                  {rel.name}
                </h3>

                <p className="text-xs text-[#0F1A41]/70 line-clamp-2 mb-4 leading-relaxed flex-grow">
                  {rel.description}
                </p>

                <div className="border-t border-[#0F1A41]/10 pt-3 flex items-center justify-between text-xs font-sans font-bold text-[#0F1A41] group-hover:text-[#B9887B]">
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
          <div className="absolute top-5 left-5 font-sans text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full z-10">
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

