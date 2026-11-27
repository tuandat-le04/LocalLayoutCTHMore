import React, { useState } from 'react';
import { ArrowUp, Download, Calendar } from 'lucide-react';
import LuxuryIcon, { LuxuryCheckBadge } from './common/LuxuryIcon.jsx';
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
      {/* ── 1. End-of-Page CTA Banner ── */}
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
              Trao đổi với CityHouse ngay hôm nay để nhận báo cáo phân tích tiềm năng và lộ trình tối ưu dòng tiền hoàn toàn miễn phí.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-sans">
            {/* Action 1: Đặt lịch tư vấn */}
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
                  <LuxuryCheckBadge size="xs" variant="copper" />
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

      {/* ── 2. Footer Main Information (Chuẩn theo cityhousemore.com) ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Công ty (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <a
              href="/"
              className="wordmark flex flex-col mb-4 select-none group"
              onClick={(e) => handleLink('/', e)}
            >
              <span className="font-serif tracking-wider font-semibold text-2xl text-white">
                <span className="font-light">CITY</span>HOUSE<small className="text-[#B9887B] text-xs tracking-[0.25em] font-sans font-bold block ml-1">MORE</small>
              </span>
            </a>
            
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-2">
              CÔNG TY TNHH CITYHOUSE MORE
            </h4>
            
            <p className="text-xs text-white/70 leading-relaxed mb-5 max-w-sm font-normal">
              Giải pháp toàn diện giúp bất động sản tạo dòng tiền hôm nay và bồi đắp giá trị bền vững qua nhiều thế hệ.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-white/80 border-t border-white/10 pt-4 font-sans">
              <div className="flex items-start gap-2">
                <LuxuryIcon name="mapPin" size={14} className="text-[#B9887B] shrink-0 mt-0.5" strokeWidth={1.35} />
                <span className="leading-snug">485B Nguyễn Đình Chiểu, Phường Bàn Cờ, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B9887B] font-bold text-[11px] uppercase tracking-wider">MÃ SỐ THUẾ:</span>
                <span className="font-mono text-white/90">0316749902</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <LuxuryIcon name="phone" size={14} className="text-[#B9887B] shrink-0" strokeWidth={1.35} />
                <span>Tư vấn trực tiếp: <a href="tel:0878253545" className="font-bold text-white hover:text-[#B9887B]">0878 253 545</a></span>
              </div>
              <div className="flex items-center gap-2">
                <LuxuryIcon name="mail" size={14} className="text-[#B9887B] shrink-0" strokeWidth={1.35} />
                <span>Email: <a href="mailto:info@cityhousemore.com" className="hover:text-[#B9887B]">info@cityhousemore.com</a></span>
              </div>
            </div>
          </div>

          {/* Column 2: Giải pháp (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#B9887B] mb-4">
              GIẢI PHÁP
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="/giai-phap/dau-tu-phat-trien-du-an" onClick={(e) => handleLink('/giai-phap/dau-tu-phat-trien-du-an', e)} className="hover:text-white transition-colors">
                  Tư vấn Đầu tư
                </a>
              </li>
              <li>
                <a href="/giai-phap/cai-tao-tai-dinh-vi" onClick={(e) => handleLink('/giai-phap/cai-tao-tai-dinh-vi', e)} className="hover:text-white transition-colors">
                  Tư vấn Cải tạo
                </a>
              </li>
              <li>
                <a href="/giai-phap/khai-thac-van-hanh" onClick={(e) => handleLink('/giai-phap/khai-thac-van-hanh', e)} className="hover:text-white transition-colors">
                  Tư vấn Mô hình
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="hover:text-white transition-colors">
                  Đặt lịch tư vấn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CityHouse (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#B9887B] mb-4">
              CITYHOUSE
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="/ve-he-thong" onClick={(e) => handleLink('/ve-he-thong', e)} className="hover:text-white transition-colors">
                  Về CityHouse
                </a>
              </li>
              <li>
                <a href="/dang-hoat-dong" onClick={(e) => handleLink('/dang-hoat-dong', e)} className="hover:text-white transition-colors">
                  Dự án đang hoạt động
                </a>
              </li>
              <li>
                <a href="/careers" onClick={(e) => handleLink('/careers', e)} className="hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Góc nhìn (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#B9887B] mb-4">
              GÓC NHÌN
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="/goc-nhin" onClick={(e) => handleLink('/goc-nhin', e)} className="hover:text-white transition-colors">
                  Kiến thức và Cập nhật
                </a>
              </li>
              <li>
                <a href="/goc-nhin" onClick={(e) => handleLink('/goc-nhin', e)} className="hover:text-white transition-colors">
                  Thị trường
                </a>
              </li>
              <li>
                <a href="/ve-he-thong" onClick={(e) => handleLink('/ve-he-thong', e)} className="hover:text-white transition-colors">
                  CityHouse More
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Hỗ trợ (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#B9887B] mb-4">
              <a href="/ho-tro" onClick={(e) => handleLink('/ho-tro', e)} className="hover:text-white transition-colors">
                HỖ TRỢ
              </a>
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="/ho-tro" onClick={(e) => handleLink('/ho-tro', e)} className="hover:text-white transition-colors">
                  Trung tâm trợ giúp (FAQ)
                </a>
              </li>
              <li>
                <a href="/dieu-khoan-dieu-kien" onClick={(e) => handleLink('/dieu-khoan-dieu-kien', e)} className="hover:text-white transition-colors">
                  Điều khoản và Điều kiện
                </a>
              </li>
              <li>
                <a href="/chinh-sach-bao-mat" onClick={(e) => handleLink('/chinh-sach-bao-mat', e)} className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/khieu-nai" onClick={(e) => handleLink('/khieu-nai', e)} className="hover:text-white transition-colors">
                  Gửi khiếu nại
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── 3. Footer Bottom Bar (Chuẩn theo cityhousemore.com) ── */}
      <div className="border-t border-white/10 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
        <div>
          © 2009–2026 CityHouse More, Inc. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/chinh-sach-bao-mat"
            onClick={(e) => handleLink('/chinh-sach-bao-mat', e)}
            className="hover:text-[#B9887B] transition-colors"
          >
            Quyền riêng tư
          </a>

          <a
            href="/dieu-khoan-dieu-kien"
            onClick={(e) => handleLink('/dieu-khoan-dieu-kien', e)}
            className="hover:text-[#B9887B] transition-colors"
          >
            Điều khoản sử dụng
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#B9887B] text-white/70 transition-colors cursor-pointer"
            title="Lên đầu trang"
            aria-label="Lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <div className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#B9887B] text-white flex items-center justify-center transition-colors">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
