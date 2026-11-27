import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const CONSULTATION_SUB_LINKS = [
  { href: '/giai-phap/dau-tu-phat-trien-du-an', label: 'TƯ VẤN ĐẦU TƯ', id: 'tu-van-dau-tu' },
  { href: '/giai-phap/cai-tao-tai-dinh-vi', label: 'TƯ VẤN CẢI TẠO', id: 'tu-van-cai-tao' },
  { href: '/giai-phap/khai-thac-van-hanh', label: 'TƯ VẤN MÔ HÌNH', id: 'tu-van-mo-hinh' },
];

const DESKTOP_NAV_LINKS = [
  { href: '/giai-phap', label: 'GIẢI PHÁP' },
  { href: '/dang-hoat-dong', label: 'DANH MỤC TÀI SẢN' },
  { 
    href: '/tu-van', 
    label: 'TƯ VẤN', 
    hasDropdown: true,
    subLinks: CONSULTATION_SUB_LINKS 
  },
  { href: '/ve-he-thong', label: 'VỀ HỆ THỐNG' },
  { href: '/goc-nhin', label: 'GÓC NHÌN' },
  { href: '/careers', label: 'TUYỂN DỤNG' },
];

const MOBILE_NAV_LINKS = [
  { href: '/giai-phap', label: 'GIẢI PHÁP', desc: 'Đầu tư · Cải tạo · Vận hành' },
  { href: '/dang-hoat-dong', label: 'DANH MỤC TÀI SẢN', desc: 'Danh mục tài sản thực chiến' },
  { 
    href: '/tu-van', 
    label: 'TƯ VẤN', 
    hasDropdown: true,
    desc: 'Đầu tư · Cải tạo · Mô hình',
    subLinks: CONSULTATION_SUB_LINKS 
  },
  { href: '/ve-he-thong', label: 'VỀ HỆ THỐNG', desc: 'Quản lý gia sản vững bền' },
  { href: '/goc-nhin', label: 'GÓC NHÌN', desc: 'Phân tích thị trường và Case study' },
  { href: '/careers', label: 'TUYỂN DỤNG', desc: 'Cơ hội nghề nghiệp và Lộ trình' },
];

export default function Header({ menuOpen, setMenuOpen, onOpenModal }) {
  const { currentPath, navigate } = useNavigation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);
  const [lang, setLang] = useState('vi'); // 'vi' or 'en'
  const dropdownTimerRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen, setMenuOpen]);

  const handleNavClick = (href, anchorId) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate(href);

    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const isLinkActive = (link) => {
    if (link.href === '/' && currentPath === '/') return true;
    if (link.href === '/tu-van') {
      return currentPath.startsWith('/tu-van');
    }
    if (link.href === '/giai-phap') {
      return currentPath === '/giai-phap';
    }
    if (link.href === '/dang-hoat-dong') {
      return currentPath.startsWith('/dang-hoat-dong') || currentPath.startsWith('/danh-muc-tai-san');
    }
    if (link.href === '/ve-he-thong') {
      return currentPath === '/ve-he-thong' || currentPath === '/about';
    }
    if (link.href === '/careers') {
      return currentPath === '/careers' || currentPath === '/tuyen-dung';
    }
    if (link.href !== '/' && currentPath.startsWith(link.href)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#0B1536]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-12 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* 1. Official CityHouse Brand Wordmark with Subtitle Badge */}
          <a
            href="/"
            className="flex flex-col items-center select-none group shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            aria-label="CityHouse Apartment - Hotel - Office"
          >
            <span className="font-sans font-bold tracking-[0.16em] text-lg sm:text-xl md:text-2xl text-white uppercase leading-tight group-hover:text-white/95 transition-colors">
              CITYHOUSE
            </span>
            <span className="mt-0.5 px-2 py-0.5 border border-white/70 rounded text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.18em] text-white/90 font-medium whitespace-nowrap leading-none group-hover:border-white transition-colors">
              APARTMENT - HOTEL - OFFICE
            </span>
          </a>

          {/* 2. Main Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            {DESKTOP_NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                const active = isLinkActive(link);
                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={`flex items-center gap-1.5 font-sans text-[11.5px] xl:text-[12px] uppercase tracking-[0.15em] font-semibold py-1 transition-colors duration-200 relative cursor-pointer ${
                        active || dropdownOpen
                          ? 'text-white border-b-2 border-white/80 pb-0.5'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {dropdownOpen ? (
                        <ChevronUp size={14} className="text-white/90 transition-transform duration-200" />
                      ) : (
                        <ChevronDown size={14} className="text-white/70 transition-transform duration-200" />
                      )}
                    </button>

                    {/* Dropdown Menu Card */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="w-56 bg-[#0B1536] border border-white/15 rounded-2xl shadow-2xl p-2 backdrop-blur-xl flex flex-col gap-1 animate-fadeIn">
                          {link.subLinks.map((sub) => {
                            const isSubActive = currentPath === sub.href;
                            return (
                              <a
                                key={sub.href}
                                href={sub.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavClick(sub.href, sub.id);
                                }}
                                className={`px-4 py-2.5 rounded-xl font-sans text-xs tracking-[0.12em] uppercase font-semibold transition-all duration-200 cursor-pointer ${
                                  isSubActive
                                    ? 'bg-white/15 text-white shadow-sm'
                                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                {sub.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isLinkActive(link);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[11.5px] xl:text-[12px] uppercase tracking-[0.15em] font-semibold py-1 transition-colors duration-200 relative cursor-pointer ${
                    active
                      ? 'text-white border-b-2 border-white/80 pb-0.5'
                      : 'text-white/80 hover:text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Header Actions (Language Toggle & CTA Button) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Language Capsule Switcher [ VI | EN ] */}
            <div className="flex items-center bg-[#070D1E]/80 border border-white/20 rounded-full p-0.5 shadow-inner">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  lang === 'vi'
                    ? 'bg-white text-[#0B1536] shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-label="Tiếng Việt"
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#0B1536] shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Pill Outline CTA Button: LIÊN HỆ NGAY */}
            <button
              type="button"
              onClick={() => {
                if (onOpenModal) {
                  onOpenModal();
                } else {
                  handleNavClick('/contact');
                }
              }}
              className="px-4 sm:px-5 py-2 rounded-full border border-white/85 hover:border-white text-white font-bold text-[11px] sm:text-xs uppercase tracking-[0.14em] hover:bg-white/10 transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
              aria-label="Liên hệ ngay"
            >
              LIÊN HỆ NGAY
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors focus:outline-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Mobile & Tablet Drawer */}
      {menuOpen && (
        <div className="mobile-nav-drawer text-white animate-fadeIn fixed inset-0 z-40 bg-[#0B1536] pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          {/* Drawer Menu Links */}
          <div className="flex flex-col gap-2 font-sans">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">
              DANH MỤC TRUY CẬP
            </div>

            {MOBILE_NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="flex flex-col rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between p-3.5 cursor-pointer w-full text-left"
                    >
                      <div>
                        <div className="font-bold text-sm tracking-wider uppercase text-white">{link.label}</div>
                        <div className="text-xs text-white/50 mt-0.5">{link.desc}</div>
                      </div>
                      {mobileDropdownOpen ? (
                        <ChevronUp size={18} className="text-white/80" />
                      ) : (
                        <ChevronDown size={18} className="text-white/60" />
                      )}
                    </button>

                    {mobileDropdownOpen && (
                      <div className="bg-black/20 border-t border-white/10 p-2 flex flex-col gap-1.5">
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(sub.href, sub.id);
                            }}
                            className="px-3.5 py-2.5 rounded-md font-sans text-xs tracking-wider uppercase font-semibold text-white/85 hover:bg-white/10 flex items-center justify-between cursor-pointer"
                          >
                            <span>{sub.label}</span>
                            <ChevronRight size={14} className="text-white/50" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isLinkActive(link);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between p-3.5 rounded-lg border transition-all cursor-pointer ${
                    active
                      ? 'bg-white/10 border-white/40 text-white font-bold'
                      : 'bg-white/[0.02] border-white/10 text-white/90 hover:bg-white/[0.06]'
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
                  <ChevronRight size={16} className="text-white/60" />
                </a>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-white/15 flex flex-col gap-3 mt-8 font-sans">
            <button
              onClick={() => {
                setMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              className="w-full py-3.5 px-4 text-center font-bold text-xs uppercase tracking-wider text-white border border-white hover:bg-white/10 flex items-center justify-center gap-2 rounded-full cursor-pointer"
            >
              <span>LIÊN HỆ NGAY</span>
            </button>

            <a
              href="tel:0878253545"
              className="w-full py-3 px-4 text-center font-bold text-xs uppercase tracking-wider text-white/80 flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 hover:border-white transition-colors"
            >
              <Phone size={14} className="text-white/80" />
              <span>HOTLINE 24/7: 0878 253 545</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
