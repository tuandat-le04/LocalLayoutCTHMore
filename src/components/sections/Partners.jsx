import React from 'react';
import { Handshake, Building2, Globe, ShieldCheck, Landmark, Laptop, CheckCircle2 } from 'lucide-react';

const FEATURED_PARTNERS = [
  {
    name: "Coteccons Group",
    category: "Phát triển dự án",
    role: "Đối tác xây dựng & công trình biểu tượng",
    icon: Building2,
  },
  {
    name: "MIA Design Studio",
    category: "Kiến trúc & Cảnh quan",
    role: "Tư vấn concept kiến trúc xanh & không gian di sản",
    icon: Building2,
  },
  {
    name: "Agoda Global",
    category: "Kênh phân phối quốc tế",
    role: "Đối tác chiến lược · Gold Circle Award",
    icon: Globe,
  },
  {
    name: "Booking.com",
    category: "Kênh khách Âu - Mỹ",
    role: "Kênh phân phối du khách & chuyên gia toàn cầu",
    icon: Globe,
  },
  {
    name: "Airbnb",
    category: "Lưu trú trải nghiệm",
    role: "Superhost với hàng ngàn lượt đánh giá 5 sao",
    icon: Globe,
  },
  {
    name: "Vietcombank & Techcombank",
    category: "Bảo trợ tài chính",
    role: "Dịch vụ tài khoản ký quỹ & đối soát doanh thu",
    icon: Landmark,
  },
  {
    name: "Cộng đồng Doanh nghiệp FDI",
    category: "Khách thuê dài hạn",
    role: "120+ tập đoàn Nhật Bản, Hàn Quốc & Châu Âu",
    icon: ShieldCheck,
  },
  {
    name: "Hệ thống PMS & Smart IoT",
    category: "Công nghệ vận hành",
    role: "Tự động hóa quản trị buồng phòng thời gian thực",
    icon: Laptop,
  },
];

export default function Partners() {
  return (
    <section id="partners" className="partners-section py-16 md:py-20 bg-[#FAF6EF] text-[#0F1A41] border-t border-[#0F1A41]/8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HỆ SINH THÁI ĐỒNG HÀNH CHIẾN LƯỢC
            </p>
            <h2 className="text-[#0F1A41] text-2xl sm:text-3xl md:text-4xl font-serif leading-[1.25]">
              Hợp tác kiến tạo<br />
              và <em>tối ưu hóa giá trị tài sản</em>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#0F1A41]/75 bg-white border border-[#0F1A41]/10 px-4 py-2.5 rounded shadow-sm flex items-center gap-2 self-start md:self-auto">
            <CheckCircle2 size={15} className="text-[#B9887B]" />
            <span>Mạng lưới <strong>120+</strong> Đối tác doanh nghiệp & Phân phối toàn cầu</span>
          </div>
        </div>

        {/* Clean, Prestigious 4x2 Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {FEATURED_PARTNERS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded border border-[#0F1A41]/10 shadow-sm hover:shadow-md hover:border-[#B9887B]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9887B] font-bold">
                      {p.category}
                    </span>
                    <Icon size={14} className="text-[#0F1A41]/40 group-hover:text-[#B9887B] transition-colors" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#0F1A41] mb-1 group-hover:text-[#B9887B] transition-colors">
                    {p.name}
                  </h3>
                </div>
                <p className="text-[11px] text-[#0F1A41]/65 mt-2 leading-relaxed">
                  {p.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
