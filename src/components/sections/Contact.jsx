import React from 'react';
import ContactForm from '../ContactForm.jsx';
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2, Building } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-pad bg-[#0F1A41] text-white">
      <div className="contact-layout">
        {/* Left Column: Partnership Info */}
        <div className="contact-info-col">
          <p className="eyebrow eyebrow-accent flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
            TRỞ THÀNH ĐỐI TÁC CHIẾN LƯỢC
          </p>

          <h2 className="text-white">
            XÂY DỰNG DÒNG TIỀN<br />
            <span>VỮNG BỀN GIA TỘC</span>
          </h2>

          <p className="text-white/75 text-sm leading-relaxed mb-6">
            Hãy chia sẻ thông tin về bất động sản của bạn. Đội ngũ chuyên gia giàu kinh nghiệm của CityHouse More sẽ trực tiếp khảo sát hiện trạng, phân tích tiềm năng và đề xuất phương án khai thác tối ưu nhất trong vòng <strong>24 giờ làm việc</strong>.
          </p>

          <div className="contact-security-badge bg-white/5 border border-[#B9887B]/30 p-3.5 rounded flex items-center gap-2.5 mb-6">
            <ShieldCheck size={20} className="shrink-0 text-[#B9887B]" />
            <span className="text-xs text-white/90">Cam kết bảo mật 100% hồ sơ tài sản & thông tin khách hàng</span>
          </div>

          <div className="contact-detail-list grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono mb-6">
            <div className="bg-white/[0.03] p-3 rounded border border-white/10">
              <span className="text-white/60 block text-[10px] uppercase">GỌI TRỰC TIẾP (HOTLINE 24/7)</span>
              <strong className="text-sm text-[#B9887B]">0878 253 545</strong>
            </div>

            <div className="bg-white/[0.03] p-3 rounded border border-white/10">
              <span className="text-white/60 block text-[10px] uppercase">EMAIL HỢP TÁC</span>
              <strong className="text-sm text-white">info@cityhousemore.com</strong>
            </div>

            <div className="sm:col-span-2 bg-white/[0.03] p-3 rounded border border-white/10">
              <span className="text-white/60 block text-[10px] uppercase">TRỤ SỞ CHÍNH</span>
              <strong className="text-xs text-white/90 font-sans block mt-0.5">
                485B Nguyễn Đình Chiểu, Phường Bàn Cờ, Quận 3, TP.HCM
              </strong>
            </div>
          </div>

          {/* Visual Showcase: CityHouse Corporate Lobby Photo */}
          <div className="relative rounded overflow-hidden border border-white/10 shadow-lg">
            <img
              src="https://cityhousemore.com/uploads/gallery/gallery-1782196352717-398720.webp"
              alt="Văn phòng điều hành & Tiếp đón đối tác CityHouse More"
              loading="lazy"
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41] via-transparent to-transparent"></div>
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-white/90">
                <Building size={13} className="text-[#B9887B]" />
                Không gian tiếp đón đối tác & Chủ đầu tư
              </span>
              <span className="text-[#B9887B]">Quận 3, TP.HCM</span>
            </div>
          </div>
        </div>

        {/* Right Column: B2B Contact Form */}
        <div className="contact-form-col bg-white p-6 md:p-8 rounded text-[#0F1A41] shadow-2xl">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#0F1A41] mb-2.5 leading-snug">
              ĐĂNG KÝ TƯ VẤN & ĐÁNH GIÁ TÀI SẢN
            </h3>
            <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed">
              Điền thông tin bên dưới để chuyên gia CityHouse chuẩn bị dữ liệu phân tích thị trường tốt nhất trước khi liên hệ.
            </p>
          </div>

          <ContactForm
            submitLabel="NHẬN ĐÁNH GIÁ SƠ BỘ TÀI SẢN (MIỄN PHÍ)"
          />
        </div>
      </div>
    </section>
  );
}
