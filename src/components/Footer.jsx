import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin, Download, Calendar, ShieldCheck, ArrowUpRight, Check } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

export default function Footer({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (path, e) => {
    e.preventDefault();
    navigate(path);
  };

  const handleDownloadProfile = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);
  };

  return (
    <footer className="footer bg-[#080E24] text-[#F4EFEA] border-t border-[#B9887B]/20 pt-0 font-sans">
      {/* ── 1. End-of-Page High-Converting CTA Banner (Part 14 Request) ── */}
      <div className="bg-gradient-to-r from-[#0F1A41] via-[#162456] to-[#0F1A41] border-b border-[#B9887B]/30 py-12 px-6 font-sans">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-2">
              KẾT NỐI VỚI CHUYÊN GIA QUẢN LÝ GIA SẢN
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              Bạn đang tìm cách nâng cao hiệu quả khai thác tài sản?
            </h3>
            <p className="text-xs md:text-sm text-white/75 mt-1.5 max-w-xl font-normal">
              Trao đổi với CityHouseMore ngay hôm nay để nhận báo cáo phân tích tiềm năng và lộ trình tối ưu dòng tiền hoàn toàn miễn phí.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-sans">
            {/* Action 1: Đặt lịch tư vấn (Solid Terracotta #B9887B - Never Transparent) */}
            <button
              onClick={() => {
                if (onOpenModal) onOpenModal();
                else navigate('/contact');
              }}
              className="w-[260px] max-w-full shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-xl cursor-pointer hover:shadow-2xl whitespace-nowrap"
              style={{
                backgroundColor: '#B9887B',
                color: '#FFFFFF',
                border: '1px solid #B9887B',
                boxShadow: '0 4px 20px rgba(185, 136, 123, 0.45)',
              }}
            >
              <Calendar size={15} className="text-white shrink-0" />
              <span>ĐẶT LỊCH TƯ VẤN NGAY</span>
            </button>

            {/* Action 2: Tải hồ sơ năng lực PDF */}
            <button
              onClick={handleDownloadProfile}
              className={`w-[260px] max-w-full shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full cursor-pointer whitespace-nowrap border ${
                downloadSuccess
                  ? 'border-[#B9887B] text-[#B9887B] bg-[#B9887B]/10'
                  : 'text-white border-white/40 hover:border-[#B9887B] hover:text-[#B9887B]'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <Check size={15} className="text-[#B9887B] shrink-0" />
                  <span>ĐÃ TẢI XUỐNG HỒ SƠ (PDF)</span>
                </>
              ) : (
                <>
                  <Download size={15} className="shrink-0" />
                  <span>TẢI HỒ SƠ NĂNG LỰC</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. Footer Main Information ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand và Prominent Contact Info (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <a
              href="/"
              className="wordmark flex flex-col mb-4"
              onClick={(e) => handleLink('/', e)}
            >
              <span className="font-serif tracking-wider font-semibold text-2xl text-white">
                <span className="font-light">CITY</span>HOUSE<small className="text-[#B9887B] text-xs tracking-[0.25em] font-sans font-bold block ml-1">MORE</small>
              </span>
            </a>

            <p className="text-xs text-white/70 leading-relaxed mb-6 max-w-sm font-normal">
              Hệ thống giải pháp may đo về tư vấn đầu tư, phát triển, cải tạo tái định vị và quản lý vận hành bất động sản lưu trú dòng tiền hàng đầu TP.HCM.
            </p>

            {/* Prominent Contact Details (Part 14 Request) */}
            <div className="flex flex-col gap-2.5 text-xs text-white/80 border-t border-white/10 pt-4 font-sans">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#B9887B] shrink-0" />
                <span>Hotline 24/7: <a href="tel:0878253545" className="font-bold text-white hover:text-[#B9887B]">0878 253 545</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#B9887B] shrink-0" />
                <span>Email: <a href="mailto:info@cityhousemore.com" className="hover:text-[#B9887B]">info@cityhousemore.com</a></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#B9887B] shrink-0 mt-0.5" />
                <span className="leading-snug">Trụ sở: 485B Nguyễn Đình Chiểu, Phường Bàn Cờ, Quận 3, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#B9887B] mb-4">
              GIẢI PHÁP TÀI SẢN
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="/tu-van" onClick={(e) => handleLink('/tu-van', e)} className="hover:text-white transition-colors">
                  Tôi đang chuẩn bị đầu tư
                </a>
              </li>
              <li>
                <a href="/tu-van" onClick={(e) => handleLink('/tu-van', e)} className="hover:text-white transition-colors">
                  Cải tạo và Tái định vị tòa nhà cũ
                </a>
              </li>
              <li>
                <a href="/tu-van" onClick={(e) => handleLink('/tu-van', e)} className="hover:text-white transition-colors">
                  Ủy thác Quản lý vận hành 24/7
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="hover:text-white transition-colors">
                  Hợp tác Thuê khoán trọn gói
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="hover:text-white transition-colors">
                  Bảo toàn giá trị gia sản gia tộc
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Case Studies và Brands (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#B9887B] mb-4">
              CASE STUDY VÀ DỰ ÁN
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="/danh-muc-tai-san" onClick={(e) => handleLink('/danh-muc-tai-san', e)} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Case Study VIBE City Oasis</span>
                  <span className="text-[10px] text-[#B9887B] font-bold">Q.3</span>
                </a>
              </li>
              <li>
                <a href="/danh-muc-tai-san" onClick={(e) => handleLink('/danh-muc-tai-san', e)} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Case Study TERA Kim Nguyen</span>
                  <span className="text-[10px] text-[#B9887B] font-bold">Bình Thạnh</span>
                </a>
              </li>
              <li>
                <a href="/danh-muc-tai-san" onClick={(e) => handleLink('/danh-muc-tai-san', e)} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Case Study VIBE Abora Tái Định Vị</span>
                  <span className="text-[10px] text-[#B9887B] font-bold">Q.3</span>
                </a>
              </li>
              <li>
                <a href="/thuong-hieu" onClick={(e) => handleLink('/thuong-hieu', e)} className="hover:text-white transition-colors">
                  Hệ sinh thái 5 dòng thương hiệu
                </a>
              </li>
              <li>
                <a href="/careers" onClick={(e) => handleLink('/careers', e)} className="hover:text-white text-[#B9887B] font-semibold transition-colors flex items-center justify-between">
                  <span>Tuyển dụng và Cơ hội nghề nghiệp</span>
                  <span className="text-[10px] bg-[#B9887B]/20 text-[#B9887B] px-2 py-0.5 rounded-full font-bold">10 vị trí</span>
                </a>
              </li>
              <li>
                <a href="/goc-nhin" onClick={(e) => handleLink('/goc-nhin', e)} className="hover:text-white transition-colors">
                  Báo cáo phân tích thị trường 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Actions và Trust (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#B9887B] mb-4">
              BẢO CHỨNG B2B
            </h4>
            <div className="flex flex-col gap-3 text-xs text-white/70 font-sans">
              <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                <ShieldCheck size={14} className="text-[#B9887B] shrink-0" />
                <span>Bảo mật hồ sơ tài sản 100%</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                <Check size={14} strokeWidth={2.5} className="text-[#B9887B] shrink-0" />
                <span>Phản hồi sau 24h làm việc</span>
              </div>
              <div className="mt-2">
                <a
                  href="https://linkedin.com/company/cityhouse-apartment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white bg-white/10 hover:bg-[#B9887B] px-3.5 py-1.5 rounded-full transition-colors font-bold"
                >
                  <span>LinkedIn Doanh Nghiệp</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Footer Bottom Bar ── */}
      <div className="border-t border-white/10 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
        <div>
          © 2009–2026 CityHouse More. Tất cả quyền được bảo lưu.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/contact"
            onClick={(e) => handleLink('/contact', e)}
            className="hover:text-[#B9887B] transition-colors"
          >
            Chính Sách Bảo Mật Tài Sản
          </a>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#B9887B] text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Lên đầu trang"
            aria-label="Lên đầu trang"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
