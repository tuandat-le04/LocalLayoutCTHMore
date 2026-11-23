import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Building2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="contact-page font-sans">
      {/* Hero */}
      <section className="inner-hero section-pad font-sans">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
          KẾT NỐI VỚI CHÚNG TÔI — CITYHOUSE MORE
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.18] font-normal mb-5">
          Khởi đầu hành trình<br />
          <span className="text-[#B9887B] font-serif italic">quản lý gia sản vững bền</span>
        </h1>
        <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal font-sans">
          Đội ngũ chuyên gia của CityHouse More luôn sẵn sàng lắng nghe, khảo sát thực tế và đồng hành cùng Quý đối tác để kiến tạo giải pháp sinh lời bền vững nhất cho bất động sản.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Details */}
          <div>
            <div className="bg-white p-8 md:p-12 border border-[#0F1A41]/10 mb-8 rounded-2xl shadow-sm">
              <span className="font-sans text-xs uppercase tracking-widest text-[#B9887B] font-semibold block mb-2">TRỤ SỞ CHÍNH</span>
              <h2 className="font-serif text-3xl font-semibold mb-6">CÔNG TY TNHH CITYHOUSE MORE</h2>

              <div className="flex flex-col gap-6 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#B9887B] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0F1A41]">Địa chỉ văn phòng:</strong>
                    <span className="text-[#0F1A41]/70">485B Nguyễn Đình Chiểu, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[#B9887B] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0F1A41]">Hotline tư vấn phát triển:</strong>
                    <a href="tel:0878253545" className="text-[#B9887B] font-sans font-bold hover:underline">0878 253 545</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-[#B9887B] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0F1A41]">Email liên hệ và Tiếp nhận hồ sơ:</strong>
                    <a href="mailto:info@cityhousemore.com" className="text-[#0F1A41]/80 hover:text-[#B9887B]">info@cityhousemore.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-[#B9887B] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0F1A41]">Thời gian làm việc:</strong>
                    <span className="text-[#0F1A41]/70">Thứ Hai – Thứ Sáu: 08:30 – 18:00 · Thứ Bảy: 08:30 – 12:00</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0F1A41]/10 text-xs font-sans text-[#0F1A41]/60">
                <div>Mã số doanh nghiệp: 0316749902 do Sở Kế hoạch và Đầu tư TP.HCM cấp</div>
              </div>
            </div>

            {/* Privacy Promise */}
            <div className="bg-[#FAF6EF] p-6 border border-[#0F1A41]/10 flex items-start gap-4 rounded-2xl">
              <ShieldCheck size={28} className="text-[#B9887B] shrink-0" />
              <div>
                <h4 className="font-serif text-base font-semibold mb-2">Cam kết bảo mật tuyệt đối</h4>
                <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed">
                  Tất cả tài liệu quy hoạch, hồ sơ kỹ thuật, thông tin doanh thu và danh tính của Chủ sở hữu bất động sản đều được bảo vệ nghiêm ngặt theo tiêu chuẩn quản lý gia sản độc quyền.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 border border-[#0F1A41]/10 rounded-2xl shadow-sm">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-3 leading-snug">ĐĂNG KÝ LỊCH HẸN TƯ VẤN</h3>
            <p className="text-xs sm:text-sm text-[#0F1A41]/70 leading-relaxed mb-8">
              Chuyên gia của CityHouse sẽ liên hệ lại trong vòng 24 giờ làm việc để sắp xếp buổi gặp trực tiếp tại trụ sở hoặc khảo sát tại địa điểm tòa nhà của bạn.
            </p>

            <ContactForm submitLabel="XÁC NHẬN ĐĂNG KÝ TƯ VẤN" />
          </div>
        </div>
      </section>
    </div>
  );
}

