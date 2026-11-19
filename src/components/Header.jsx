import React from 'react';
import { ArrowUpRight, Menu, X, Phone, Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const PRIMARY_NAV_LINKS = [
  { href: '/tu-van', label: 'GIẢI PHÁP', desc: 'Đầu tư · Cải tạo · Vận hành' },
  { href: '/danh-muc-tai-san', label: 'DỰ ÁN', desc: 'Danh mục tài sản thực chiến' },
  { href: '/thuong-hieu', label: 'THƯƠNG HIỆU', desc: '5 dòng thương hiệu lưu trú' },
  { href: '/ve-he-thong', label: 'VỀ CITYHOUSE', desc: '15 năm quản lý gia sản' },
  { href: '/goc-nhin', label: 'GÓC NHÌN', desc: 'Phân tích thị trường & Case study' },
  { href: '/careers', label: 'TUYỂN DỤNG', desc: 'Cơ hội nghề nghiệp & Lộ trình' },
  { href: '/contact', label: 'LIÊN HỆ', desc: 'Trao đổi cùng chuyên gia' },
];

export default function Header({ menuOpen, setMenuOpen, onOpenModal }) {
  const { currentPath, navigate } = useNavigation();

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Auto-close menu when resized to desktop (lg: >= 1024px)
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen, setMenuOpen]);

  const handleNavClick = (href) => {
    navigate(href);
    setMenuOpen(false);
  };

  const isLinkActive = (href) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    if (href === '/danh-muc-tai-san' && currentPath === '/dang-hoat-dong') return true;
    if (href === '/tu-van' && currentPath === '/giai-phap') return true;
    if (href === '/ve-he-thong' && currentPath === '/about') return true;
    if (href === '/careers' && currentPath === '/tuyen-dung') return true;
    return false;
  };

  return (
    <>
      <header className="header sticky top-0 z-50 bg-[#0F1A41]/95 backdrop-blur-md border-b border-[#B9887B]/20">
        {/* Brand Logo */}
        <a
          href="/"
          className="wordmark flex flex-col"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          aria-label="CityHouse More Trang chủ"
        >
          <span className="font-serif tracking-wider font-semibold text-lg md:text-xl text-white">
            <span>CITY</span>HOUSE<small className="text-[#B9887B] text-[10px] tracking-widest font-mono font-bold block ml-1">MORE</small>
          </span>
        </a>

        {/* Main Desktop & Tablet Navigation Menu (5 main links) */}
        <nav className="hidden lg:flex items-center gap-7 mx-auto">
          {PRIMARY_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-[11.5px] uppercase tracking-wider py-1.5 transition-colors duration-200 relative ${
                isLinkActive(link.href)
                  ? 'text-[#B9887B] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B9887B]'
                  : 'text-[#F4EFEA]/80 hover:text-[#B9887B]'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto lg:ml-0">
          {/* Click-to-call Phone */}
          <a
            href="tel:0878253545"
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#F4EFEA] hover:text-[#B9887B] transition-colors"
            title="Gọi Hotline 24/7"
          >
            <Phone size={13} className="text-[#B9887B]" />
            <span className="font-semibold tracking-wide">0878 253 545</span>
          </a>

          {/* High-visibility Action Button (Solid Terracotta #B9887B - Never Transparent) */}
          <button
            className="solid-btn flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm shadow-md hover:shadow-lg cursor-pointer"
            style={{
              backgroundColor: '#B9887B',
              color: '#FFFFFF',
              border: '1px solid #B9887B',
              boxShadow: '0 4px 16px rgba(185, 136, 123, 0.45)',
            }}
            onClick={() => {
              if (onOpenModal) {
                onOpenModal();
              } else {
                handleNavClick('/contact');
              }
            }}
            aria-label="Đặt lịch tư vấn"
          >
            <Calendar size={14} className="text-white shrink-0" />
            <span className="whitespace-nowrap font-bold sm:hidden">ĐẶT LỊCH</span>
            <span className="whitespace-nowrap font-bold hidden sm:inline">ĐẶT LỊCH TƯ VẤN</span>
          </button>

          {/* Mobile / Tablet Menu Hamburger Button */}
          <button
            className="lg:hidden p-2 text-[#F4EFEA] hover:text-[#B9887B] transition-colors focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-featured Mobile & Tablet Drawer (Rendered outside header to escape containing block) */}
      {menuOpen && (
        <div className="mobile-nav-drawer text-white animate-fadeIn">
          {/* Drawer Menu Links */}
          <div className="p-6 flex flex-col gap-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#B9887B] mb-2 font-bold">
              DANH MỤC TRUY CẬP CHÍNH
            </div>
            {PRIMARY_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between p-3.5 rounded border transition-all cursor-pointer ${
                  isLinkActive(link.href)
                    ? 'bg-[#B9887B]/15 border-[#B9887B] text-white font-bold'
                    : 'bg-white/[0.02] border-white/10 text-white/90 hover:bg-white/[0.06] hover:border-[#B9887B]/40'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <div>
                  <div className="font-mono text-sm tracking-wider uppercase">{link.label}</div>
                  <div className="text-xs text-white/50 mt-0.5">{link.desc}</div>
                </div>
                <ChevronRight size={16} className="text-[#B9887B]" />
              </a>
            ))}
          </div>

          {/* Fixed CTA at the Bottom of Mobile Menu */}
          <div className="p-6 bg-[#080E24] border-t border-[#B9887B]/30 flex flex-col gap-3 mt-auto shrink-0">
            <button
              onClick={() => {
                setMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              className="w-full py-3.5 px-4 text-center font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 rounded shadow-lg cursor-pointer"
              style={{
                backgroundColor: '#B9887B',
                color: '#FFFFFF',
                border: '1px solid #B9887B',
                boxShadow: '0 4px 18px rgba(185, 136, 123, 0.45)',
              }}
            >
              <Calendar size={16} className="text-white" />
              <span>ĐẶT LỊCH TƯ VẤN NGAY (MIỄN PHÍ)</span>
            </button>

            <a
              href="tel:0878253545"
              className="w-full py-3 px-4 text-center font-semibold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 rounded bg-white/5 border border-white/20 hover:border-[#B9887B] transition-colors"
            >
              <Phone size={14} className="text-[#B9887B]" />
              <span>HOTLINE 24/7: 0878 253 545</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
