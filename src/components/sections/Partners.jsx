import React from 'react';
import LuxuryIcon from '../common/LuxuryIcon.jsx';

const FEATURED_PARTNERS = [
  {
    name: "Coteccons Group",
    category: "Phát triển dự án",
    role: "Đối tác xây dựng & công trình biểu tượng",
    icon: 'building',
  },
  {
    name: "MIA Design Studio",
    category: "Kiến trúc & Cảnh quan",
    role: "Tư vấn concept kiến trúc xanh & không gian di sản",
    icon: 'building',
  },
  {
    name: "Agoda Global",
    category: "Kênh phân phối quốc tế",
    role: "Đối tác chiến lược · Gold Circle Award",
    icon: 'globe',
  },
  {
    name: "Booking.com",
    category: "Kênh khách Âu - Mỹ",
    role: "Kênh phân phối du khách & chuyên gia toàn cầu",
    icon: 'globe',
  },
  {
    name: "Airbnb",
    category: "Lưu trú trải nghiệm",
    role: "Superhost với hàng ngàn lượt đánh giá 5 sao",
    icon: 'globe',
  },
  {
    name: "Vietcombank & Techcombank",
    category: "Bảo trợ tài chính",
    role: "Dịch vụ tài khoản ký quỹ & đối soát doanh thu",
    icon: 'landmark',
  },
  {
    name: "Cộng đồng Doanh nghiệp FDI",
    category: "Khách thuê dài hạn",
    role: "120+ tập đoàn Nhật Bản, Hàn Quốc & Châu Âu",
    icon: 'shield',
  },
  {
    name: "Hệ thống PMS & Smart IoT",
    category: "Công nghệ vận hành",
    role: "Tự động hóa quản trị buồng phòng thời gian thực",
    icon: 'laptop',
  },
];

export default function Partners() {
  return (
    <section id="partners" className="partners-section py-16 md:py-20 bg-[#FAF6EF] text-[#0F1A41] border-t border-[#0F1A41]/8 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-3 flex items-center gap-2 font-sans">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
              HỆ SINH THÁI ĐỒNG HÀNH CHIẾN LƯỢC
            </p>
            <h2 className="text-[#0F1A41] text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-[1.25]">
              Hợp tác kiến tạo<br />
              và <span className="text-[#B9887B] font-serif italic">tối ưu hóa giá trị tài sản</span>
            </h2>
          </div>

          <div className="text-xs font-sans text-[#0F1A41]/75 bg-white border border-[#0F1A41]/10 px-4 py-2.5 rounded-full shadow-sm flex items-center gap-2 self-start md:self-auto font-medium">
            <LuxuryIcon name="globe" size={15} strokeWidth={1.25} className="text-[#0F1A41]/70" />
            <span>Mạng lưới <strong>120+</strong> Đối tác doanh nghiệp & Phân phối toàn cầu</span>
          </div>
        </div>

        {/* Clean, Prestigious 4x2 Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 font-sans">
          {FEATURED_PARTNERS.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#0F1A41]/10 shadow-sm hover:shadow-md hover:border-[#B9887B]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#B9887B] font-bold">
                    {p.category}
                  </span>
                  <LuxuryIcon name={p.icon} size={15} strokeWidth={1.25} className="text-[#0F1A41]/40 group-hover:text-[#B9887B] transition-colors" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#0F1A41] mb-1 group-hover:text-[#B9887B] transition-colors">
                  {p.name}
                </h3>
              </div>
              <p className="text-[11px] text-[#0F1A41]/65 mt-2 leading-relaxed font-normal">
                {p.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
