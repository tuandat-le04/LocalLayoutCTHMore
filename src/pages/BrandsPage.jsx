import React from 'react';
import { brands } from '../data/brands.js';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

const BRAND_DETAILS = [
  {
    code: "MARK",
    tagline: "Tinh tế · Chuẩn mực · Riêng tư tuyệt đối",
    segment: "Phân khúc Thượng lưu (Luxury Hospitality)",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782197864517-764256.webp",
    desc: "Đỉnh cao của nghệ thuật lưu trú đương đại, nơi kiến trúc tối giản tinh tế kết hợp cùng dịch vụ quản gia cá nhân hóa. Mỗi không gian MARK được thiết kế như một chốn trú ngụ biệt lập, đảm bảo sự an yên và riêng tư cao nhất cho giới tinh hoa.",
    targetGuests: "Lãnh đạo tập đoàn đa quốc gia, chuyên gia cấp cao, nhà đầu tư quốc tế",
    amenities: ["Dịch vụ Concierge 24/7", "Nội thất gỗ & đá tự nhiên cao cấp", "Hệ thống lọc không khí & âm học riêng biệt", "An ninh đa lớp bảo mật"],
    flagship: "CityHouse MARK Atelier Thảo Điền",
    accent: "#B9887B"
  },
  {
    code: "SOUL",
    tagline: "Tĩnh tại · Bản sắc · Cân bằng thân tâm trí",
    segment: "Phân khúc Boutique Hotel & Trải nghiệm",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854670-640977.webp",
    desc: "SOUL là điểm chạm của cảm xúc và sự chữa lành giữa lòng đô thị. Thiết kế đề cao ánh sáng tự nhiên, mảng xanh nhiệt đới và vật liệu thân thiện với môi trường, mang lại năng lượng tĩnh tại sau những giờ làm việc căng thẳng.",
    targetGuests: "Du khách tìm kiếm trải nghiệm văn hóa địa phương, người sáng tạo nghệ thuật, chuyên gia yêu thích lối sống cân bằng",
    amenities: ["Vườn nhiệt đới nội khu", "Không gian trà đạo & đọc sách", "Liệu trình thư giãn & yoga", "Bếp hữu cơ chọn lọc"],
    flagship: "CityHouse SOUL Kabana (Cao Bá Nhạ, Quận 1)",
    accent: "#7B9B88"
  },
  {
    code: "VIBE",
    tagline: "Cảm hứng · Nghệ thuật · Đậm bản sắc thị giác",
    segment: "Phân khúc Đô thị năng động & Khách quốc tế",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782189976085-753167.webp",
    desc: "VIBE mang trong mình nhịp đập sôi động của thành phố hiện đại. Phong cách thiết kế mang tính thị giác cao, kết hợp nghệ thuật đương đại và không gian sinh hoạt chung kết nối cộng đồng văn minh toàn cầu.",
    targetGuests: "Khách du lịch quốc tế tự do (FIT), digital nomads, doanh nhân thế hệ mới",
    amenities: ["Hồ bơi nhiệt đới / Rooftop lounge", "Khu co-working sáng tạo", "Cà phê & quầy bar nghệ thuật", "Tự động hóa check-in số"],
    flagship: "CityHouse VIBE City Oasis (Quận 3) & VIBE Abora",
    accent: "#B9887B"
  },
  {
    code: "TERA",
    tagline: "Tiện nghi · Thực tế · Bền vững cùng thời gian",
    segment: "Phân khúc Lưu trú dài hạn & Doanh nghiệp",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195172539-438850.webp",
    desc: "Được tối ưu hóa cho nhu cầu sinh sống và làm việc dài hạn. TERA chú trọng đến công năng thực tế, đồ gia dụng tiện nghi đầy đủ chuẩn mực quốc tế, dịch vụ chăm sóc buồng phòng chu đáo và chi phí khai thác hợp lý.",
    targetGuests: "Chuyên gia nước ngoài công tác dài hạn (Expat), kỹ sư dự án, gia đình chuyên gia",
    amenities: ["Bếp đầy đủ thiết bị nấu nướng", "Máy giặt sấy riêng từng căn", "Phòng gym & khu thể thao", "Dịch vụ giặt ủi và dọn phòng định kỳ"],
    flagship: "CityHouse TERA Kim Nguyen & TERA Villea",
    accent: "#8A5A3D"
  },
  {
    code: "NEST",
    tagline: "Ấm cúng · Linh hoạt · Tối ưu từng mét vuông",
    segment: "Phân khúc Căn hộ Studio Đô thị",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782196353358-771017.webp",
    desc: "Mô hình căn hộ studio thông minh với thiết kế ấm áp, đa năng. Tối ưu từng mét vuông sàn xây dựng để vừa đem lại cảm giác thoải mái cho người ở, vừa tạo ra tỷ suất lợi nhuận trên vốn đầu tư (Yield) cao nhất cho chủ tòa nhà.",
    targetGuests: "Nhân sự làm việc tại khu trung tâm, người độc thân, chuyên gia trẻ",
    amenities: ["Nội thất thông minh đa chức năng", "Khóa từ thông minh thông qua App", "Khu giặt sấy chung tiện lợi", "Chi phí sinh hoạt tối ưu"],
    flagship: "CityHouse NEST LightHouse & NEST Metro Thảo Điền",
    accent: "#A37367"
  }
];

export default function BrandsPage() {
  const { navigate } = useNavigation();

  return (
    <div className="brands-page">
      {/* Hero */}
      <section className="inner-hero section-pad">
        <p className="eyebrow eyebrow-accent">
          <Sparkles size={14} className="inline mr-1" />
          HỆ SINH THÁI THƯƠNG HIỆU — CITYHOUSE MORE
        </p>
        <h1>
          5 dòng thương hiệu<br />
          <em>định hình phong cách sống</em>
        </h1>
        <p className="lead">
          Để tối ưu hóa giá trị của từng bất động sản, CityHouse More phát triển hệ sinh thái gồm 5 thương hiệu lưu trú chuyên biệt, mỗi thương hiệu tương ứng với một phân khúc khách hàng và tiêu chuẩn vận hành riêng biệt.
        </p>
      </section>

      {/* Brand Detailed Cards */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41]">
        <div className="flex flex-col gap-12">
          {BRAND_DETAILS.map((b) => (
            <div key={b.code} className="bg-white border border-[#0F1A41]/10 p-8 md:p-12 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#0F1A41]/10 pb-6 mb-8">
                <div>
                  <span className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#0F1A41] block">{b.code}</span>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#B9887B] font-semibold mt-1">{b.segment}</div>
                </div>

                <div className="text-right">
                  <div className="font-serif text-sm italic text-[#0F1A41]/80">"{b.tagline}"</div>
                  <div className="font-mono text-xs text-[#0F1A41]/50 mt-1">Dự án tiêu biểu: <strong>{b.flagship}</strong></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Brand Image Preview */}
                <div className="lg:col-span-4 overflow-hidden border border-[#0F1A41]/10 group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F1A41]">
                    <img
                      src={b.image}
                      alt={b.code}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#0F1A41]/90 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono border border-white/10">
                      {b.flagship}
                    </div>
                  </div>
                </div>

                {/* Brand Info */}
                <div className="lg:col-span-5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#0F1A41]/60 mb-2.5 font-semibold">Triết lý thiết kế & Vận hành</h4>
                  <p className="text-sm text-[#0F1A41]/80 leading-relaxed mb-6">{b.desc}</p>

                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#0F1A41]/60 mb-2.5 font-semibold">Tệp khách hàng mục tiêu</h4>
                  <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed bg-[#F4EFEA] p-4 border-l-2 border-[#B9887B]">{b.targetGuests}</p>
                </div>

                {/* Amenities & Action */}
                <div className="lg:col-span-3 bg-[#FAF6EF] p-5 border border-[#0F1A41]/5 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#B9887B] mb-3 font-semibold">Đặc quyền & Tiện ích chuẩn</h4>
                    <ul className="flex flex-col gap-2.5">
                      {b.amenities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#0F1A41]/80">
                          <CheckCircle2 size={13} className="text-[#B9887B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="solid-btn text-xs mt-6 w-full"
                  >
                    ĐỊNH VỊ CHO TÒA NHÀ <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Consultation Form */}
      <section className="section-pad bg-[#0B1330] text-white">
        <div className="contact-layout">
          <div className="contact-info-col">
            <p className="eyebrow eyebrow-accent">TƯ VẤN ĐỊNH VỊ THƯƠNG HIỆU</p>
            <h2>
              LỰA CHỌN THƯƠNG HIỆU<br />
              <span>PHÙ HỢP NHẤT VỚI TÀI SẢN</span>
            </h2>
            <p>
              Mỗi vị trí và diện tích bất động sản sẽ phát huy doanh thu tốt nhất khi gắn liền với đúng phân khúc thương hiệu. Hãy để chuyên gia CityHouse giúp bạn lựa chọn mô hình chính xác nhất.
            </p>
          </div>

          <div className="contact-form-col">
            <ContactForm submitLabel="GỬI YÊU CẦU ĐỊNH VỊ THƯƠNG HIỆU" />
          </div>
        </div>
      </section>
    </div>
  );
}

