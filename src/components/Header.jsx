import React from 'react';
import { ArrowUpRight, Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const PRIMARY_NAV_LINKS = [
  { href: '/tu-van', label: 'GIẢI PHÁP', desc: 'Đầu tư · Cải tạo · Vận hành' },
  { href: '/danh-muc-tai-san', label: 'DỰ ÁN', desc: 'Danh mục tài sản thực chiến' },
  { href: '/thuong-hieu', label: 'THƯƠNG HIỆU', desc: '5 dòng thương hiệu lưu trú' },
  { href: '/ve-he-thong', label: 'VỀ CITYHOUSE', desc: '15 năm quản lý gia sản' },
  { href: '/goc-nhin', label: 'GÓC NHÌN', desc: 'Phân tích thị trường và Case study' },
  { href: '/careers', label: 'TUYỂN DỤNG', desc: 'Cơ hội nghề nghiệp và Lộ trình' },
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
            <span className="font-light">CITY</span>HOUSE<small className="text-[#B9887B] text-[10px] tracking-[0.25em] font-sans font-bold block ml-1">MORE</small>
          </span>
        </a>

        {/* Main Desktop và Tablet Navigation Menu (7 main links) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 mx-auto">
          {PRIMARY_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-[11.5px] uppercase tracking-[0.15em] font-bold py-1.5 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-[#B9887B] after:transition-all after:duration-300 ${
                isLinkActive(link.href)
                  ? 'text-white after:w-full'
                  : 'text-white/70 hover:text-white after:w-0 hover:after:w-full'
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
        <div className="flex items-center gap-4 sm:gap-5 ml-auto lg:ml-0">
          {/* Click-to-call Phone */}
          <a
            href="tel:0878253545"
            className="hidden sm:flex items-center gap-2 text-xs font-sans text-[#F4EFEA] hover:text-[#B9887B] transition-colors"
            title="Gọi Hotline 24/7"
          >
            <Phone size={13} className="text-[#B9887B]" />
            <span className="font-bold tracking-wide">0878 253 545</span>
          </a>

          {/* Action Button: Rounded-full Luxury Button (Consistent with cityhousemore.com) */}
          <button
            className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
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
            <Calendar size={13} className="text-white shrink-0" />
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

      {/* Full-featured Mobile và Tablet Drawer (Rendered outside header to escape containing block) */}
      {menuOpen && (
        <div className="mobile-nav-drawer text-white animate-fadeIn">
          {/* Drawer Menu Links */}
          <div className="p-6 flex flex-col gap-2 font-sans">
            <div className="text-[10px] uppercase tracking-widest text-[#B9887B] mb-2 font-bold">
              DANH MỤC TRUY CẬP CHÍNH
            </div>
            {PRIMARY_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between p-3.5 rounded-lg border transition-all cursor-pointer ${
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
                  <div className="font-bold text-sm tracking-wider uppercase">{link.label}</div>
                  <div className="text-xs text-white/50 mt-0.5 font-normal">{link.desc}</div>
                </div>
                <ChevronRight size={16} className="text-[#B9887B]" />
              </a>
            ))}
          </div>

          {/* Fixed CTA at the Bottom of Mobile Menu */}
          <div className="p-6 bg-[#080E24] border-t border-[#B9887B]/30 flex flex-col gap-3 mt-auto shrink-0 font-sans">
            <button
              onClick={() => {
                setMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              className="w-full py-3.5 px-4 text-center font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 rounded-full shadow-lg cursor-pointer"
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
              className="w-full py-3.5 px-4 text-center font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/20 hover:border-[#B9887B] transition-colors"
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
