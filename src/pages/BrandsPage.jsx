import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  Star, 
  Building2, 
  Users, 
  DollarSign, 
  Table, 
  LayoutGrid, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

const BRAND_PORTFOLIO = [
  {
    code: "MARK",
    name: "CityHouse MARK",
    tagline: "Tinh tế · Chuẩn mực · Riêng tư tuyệt đối",
    segment: "Phân khúc Siêu sang (Luxury Hospitality)",
    shortDesc: "Đỉnh cao lưu trú đương đại kết hợp quản gia cá nhân hóa cho giới tinh hoa và chuyên gia quốc tế cao cấp.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782197864517-764256.webp",
    accent: "#C79A3B",
    stats: "Kín phòng 96%+ · 9.2 Agoda",
    priceRange: "2.000 – 5.000 USD / tháng",
    assetFit: "Tòa nhà cao cấp hoặc biệt thự trung tâm (10 – 25 căn)",
    targetGuests: "Lãnh đạo C-Level tập đoàn đa quốc gia, nhà ngoại giao, chuyên gia cấp cao",
    flagship: "CityHouse MARK Atelier Thảo Điền",
    flagshipSlug: "cityhouse-mark-atelier-thao-dien",
    highlights: [
      "Quản gia riêng & Concierge 24/7",
      "Nội thất gỗ đá tự nhiên thượng hạng",
      "Hệ thống lọc khí & âm học riêng biệt",
      "Bảo mật an ninh đa lớp tuyệt đối"
    ]
  },
  {
    code: "SOUL",
    name: "CityHouse SOUL",
    tagline: "Tĩnh tại · Bản sắc · Cân bằng thân tâm trí",
    segment: "Boutique Hotel & Trải nghiệm Di sản",
    shortDesc: "Điểm chạm cảm xúc giữa lòng đô thị với kiến trúc bền vững, mảng xanh nhiệt đới và văn hóa bản địa độc bản.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854670-640977.webp",
    accent: "#7B9B88",
    stats: "Boutique 17 phòng độc bản · 5 Sao",
    priceRange: "1.200 – 2.500 USD/tháng (1.8 – 3.8tr/đêm)",
    assetFit: "Biệt thự cổ, nhà Pháp hoặc boutique có sân vườn (15 – 35 phòng)",
    targetGuests: "Du khách tìm kiếm văn hóa bản địa, chuyên gia nghệ thuật, khách yêu sự an yên",
    flagship: "CityHouse SOUL Kabana (Quận 1)",
    flagshipSlug: "cityhouse-soul-kabana",
    highlights: [
      "Vườn nhiệt đới & giếng trời tự nhiên",
      "Không gian trà đạo & thư viện sách",
      "Liệu trình thư giãn & yoga nội khu",
      "Bếp ẩm thực hữu cơ chọn lọc"
    ]
  },
  {
    code: "VIBE",
    name: "CityHouse VIBE",
    tagline: "Cảm hứng · Nghệ thuật · Đậm bản sắc thị giác",
    segment: "Đô thị Năng động & Du lịch Sáng tạo",
    shortDesc: "Nhịp đập sôi động mang phong cách nhiệt đới đương đại, tối đa hóa doanh thu qua mô hình kết hợp ngắn - dài hạn.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782189976085-753167.webp",
    accent: "#B9887B",
    stats: "9.1/10 Agoda · Gold Circle Award",
    priceRange: "1.000 – 2.200 USD/tháng (1.2 – 2.5tr/đêm)",
    assetFit: "Tòa nhà mặt tiền, hẻm lớn Quận 1, Quận 3, Thảo Điền (20 – 50 căn)",
    targetGuests: "Khách du lịch quốc tế tự do (FIT), digital nomads, doanh nhân sáng tạo",
    flagship: "CityHouse VIBE City Oasis (Quận 3)",
    flagshipSlug: "cityhouse-vibe-city-oasis",
    highlights: [
      "Hồ bơi nhiệt đới / Rooftop lounge",
      "Không gian co-working sáng tạo",
      "Tự động hóa check-in số thông minh",
      "Mô hình hybrid tối đa hóa giá bán phòng"
    ]
  },
  {
    code: "TERA",
    name: "CityHouse TERA",
    tagline: "Tiện nghi · Thực tế · Bền vững cùng thời gian",
    segment: "Lưu trú Dài hạn & Khách Doanh nghiệp",
    shortDesc: "Công năng gia đình hoàn chỉnh, dòng tiền ổn định với tỷ lệ khách gia hạn hợp đồng năm vượt mốc 78%.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195172539-438850.webp",
    accent: "#8A5A3D",
    stats: "Kín phòng 96%+ · Gia hạn 78%+",
    priceRange: "700 – 1.600 USD / tháng",
    assetFit: "Tòa nhà căn hộ dịch vụ độc lập (25 – 80 căn hộ)",
    targetGuests: "Chuyên gia expat công tác dài hạn, kỹ sư dự án FDI, gia đình nhỏ",
    flagship: "CityHouse TERA Kim Nguyen & Villea",
    flagshipSlug: "cityhouse-tera-kim-nguyen",
    highlights: [
      "Bếp gia đình đầy đủ thiết bị nấu nướng",
      "Máy giặt sấy riêng từng căn hộ",
      "Phòng gym & khu thể thao nội khu",
      "Hợp đồng thuê năm chiếm 80%+, ít trống"
    ]
  },
  {
    code: "NEST",
    name: "CityHouse NEST",
    tagline: "Ấm cúng · Linh hoạt · Tối ưu từng mét vuông",
    segment: "Căn hộ Studio Thông minh Đô thị",
    shortDesc: "Mô hình căn hộ studio thông minh, thời gian thu hồi vốn nhanh nhất và tối ưu chi phí vận hành nhân sự.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782196353358-771017.webp",
    accent: "#A37367",
    stats: "Kín phòng 97% · 350+ Căn hộ",
    priceRange: "450 – 900 USD / tháng (700k – 1.3tr/đêm)",
    assetFit: "Nhà phố cải tạo, tòa nhà mini Quận 1, 3, Bình Thạnh (20 – 60 căn)",
    targetGuests: "Chuyên gia trẻ làm việc trung tâm, người độc thân, nhân sự công tác",
    flagship: "CityHouse NEST LightHouse & Metro",
    flagshipSlug: "cityhouse-nest-lighthouse",
    highlights: [
      "Nội thất thông minh biến đổi đa năng",
      "Khóa từ thông minh & App quản lý số",
      "Khu giặt sấy chung tiện lợi",
      "Chi phí hoàn thiện hợp lý, hoàn vốn nhanh"
    ]
  }
];

export default function BrandsPage({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [selectedBrandCode, setSelectedBrandCode] = useState("MARK");
  const [viewMode, setViewMode] = useState("showcase"); // 'showcase' | 'matrix'

  const activeBrand = BRAND_PORTFOLIO.find(b => b.code === selectedBrandCode) || BRAND_PORTFOLIO[0];

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="brands-page font-sans">
      {/* ── Page Hero: Focused & High Impact ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#101C42] text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            HỆ SINH THÁI THƯƠNG HIỆU — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white leading-[1.15] mb-5 font-normal">
            5 DÒNG THƯƠNG HIỆU<br />
            <span className="text-[#B9887B] font-serif italic">ĐỊNH VỊ CHÍNH XÁC CHO TÀI SẢN</span>
          </h1>
          <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed mt-4 font-normal">
            Mỗi bất động sản chỉ phát huy tối đa doanh thu khi gắn đúng phân khúc thương hiệu. CityHouse chuẩn hóa 5 mô hình lưu trú với tệp khách hàng và tiêu chuẩn vận hành riêng biệt.
          </p>

          {/* Quick Metrics Bar for Investors: Unified Sans Font */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-3xl border-t border-white/10 pt-6 font-sans">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight">05</div>
              <div className="text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Phân khúc độc bản</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight">95%+</div>
              <div className="text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Tỷ lệ kín phòng</div>
            </div>
            <div>
              <div className="font-sans text-2xl sm:text-3xl font-extrabold text-[#B9887B] tracking-tight">$450 – $5.000</div>
              <div className="text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Phổ giá linh hoạt</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight">35+</div>
              <div className="text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Tòa nhà vận hành</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Navigation Bar & Mode Switcher: Synchronized Sans ── */}
      <section className="bg-[#FAF6EF] border-b border-[#0F1A41]/10 sticky top-[72px] z-30 shadow-xs backdrop-blur-md bg-opacity-95 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            {BRAND_PORTFOLIO.map((b) => {
              const isActive = selectedBrandCode === b.code;
              return (
                <button
                  key={b.code}
                  onClick={() => {
                    setSelectedBrandCode(b.code);
                    if (viewMode !== 'showcase') setViewMode('showcase');
                  }}
                  className={`px-3.5 sm:px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#0F1A41] text-white shadow-sm'
                      : 'bg-white/80 text-[#0F1A41]/75 hover:bg-white hover:text-[#0F1A41] border border-[#0F1A41]/10'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: b.accent }}
                  />
                  <span>{b.code}</span>
                  <span className={`text-[10px] hidden sm:inline font-medium ${isActive ? 'text-white/70' : 'text-[#0F1A41]/50'}`}>
                    · {b.segment.split('(')[0].replace('Phân khúc', '').trim()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button: Showcase vs Matrix */}
          <div className="flex items-center gap-1 bg-white p-1 rounded border border-[#0F1A41]/10 self-end md:self-auto shrink-0 text-xs font-semibold">
            <button
              onClick={() => setViewMode('showcase')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'showcase'
                  ? 'bg-[#0F1A41] text-white'
                  : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
              }`}
            >
              <LayoutGrid size={13} />
              <span>Chi tiết</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-[#0F1A41] text-white'
                  : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
              }`}
            >
              <Table size={13} />
              <span>Đối chiếu 5 Brand</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="section-pad bg-[#F9F8F5] text-[#0F1A41]">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'showcase' ? (
            /* ── VIEW 1: INTERACTIVE LUXURY STAGE (SHOWCASE) ── */
            <div className="bg-white border border-[#0F1A41]/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Anchor (5 Cols) */}
                <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[580px] bg-[#0F1A41] overflow-hidden group font-sans">
                  <img
                    src={activeBrand.image}
                    alt={activeBrand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/20 to-transparent"></div>

                  {/* Overlaid Brand Badge: Synchronized Sans */}
                  <div className="absolute top-5 left-5 bg-[#101C42] border border-white/20 px-3.5 py-1.5 rounded-full text-white flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeBrand.accent }}></span>
                    <span className="text-sm font-extrabold tracking-wider font-sans">{activeBrand.code}</span>
                  </div>

                  {/* Overlaid Performance Badge: Synchronized Sans */}
                  <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[#101C42] text-xs font-bold shadow-lg border border-slate-200/80 font-sans">
                    <Star size={13} className="fill-[#C79A3B] text-[#C79A3B]" />
                    <span>{activeBrand.stats}</span>
                  </div>

                  {/* Bottom Flagship Card: Synchronized Sans */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#101C42]/95 backdrop-blur-md text-white p-4.5 rounded-xl border border-white/15 shadow-xl font-sans">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-[#B9887B] uppercase tracking-[0.15em] font-bold">
                        Dự án biểu tượng mẫu
                      </span>
                      <span className="text-[10px] text-white/60 uppercase tracking-wider font-semibold px-2 py-0.5 bg-white/10 rounded-full">Flagship</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mb-1.5">
                      {activeBrand.flagship}
                    </div>
                    <button
                      onClick={() => navigate(`/dang-hoat-dong/${activeBrand.flagshipSlug}`)}
                      className="text-xs font-semibold text-[#B9887B] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Xem hình ảnh thực tế công trình</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Content Dossier (7 Cols) - Harmonized & Clean */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between font-sans">
                  <div>
                    {/* Header: Brand Name + Segment + Tagline */}
                    <div className="border-b border-[#101C42]/10 pb-5 mb-6">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#101C42] tracking-tight">
                          {activeBrand.name}
                        </h2>
                        <span
                          className="text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1 rounded-full border font-sans"
                          style={{
                            backgroundColor: `${activeBrand.accent}12`,
                            color: activeBrand.accent,
                            borderColor: `${activeBrand.accent}35`
                          }}
                        >
                          {activeBrand.segment}
                        </span>
                      </div>

                      <div className="font-serif text-sm sm:text-base italic text-[#B9887B] font-medium mb-3 tracking-wide">
                        "{activeBrand.tagline}"
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal font-sans">
                        {activeBrand.shortDesc}
                      </p>
                    </div>

                    {/* 4 Core Executive Decision Metrics (Synchronized Inter Typography Stack) */}
                    <div className="mb-6 font-sans">
                      <span className="text-[10.5px] text-[#101C42]/60 uppercase tracking-[0.2em] font-bold block mb-3 font-sans">
                        THÔNG SỐ ĐẦU TƯ CỐT LÕI (CHỦ SỞ HỮU CẦN BIẾT):
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {/* Metric 1: Giá thuê kỳ vọng */}
                        <div className="bg-[#F8FAFC] p-4.5 rounded-xl border border-[#101C42]/10 hover:border-[#B9887B]/40 transition-all shadow-2xs flex flex-col justify-between">
                          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#101C42]/60 uppercase tracking-[0.15em] mb-1.5 font-sans">
                            <DollarSign size={13} className="text-[#B9887B]" />
                            <span>MỨC GIÁ CHO THUÊ KỲ VỌNG</span>
                          </div>
                          <div className="text-sm sm:text-base font-bold text-[#101C42] leading-snug font-sans">
                            {activeBrand.priceRange}
                          </div>
                        </div>

                        {/* Metric 2: Quy mô BĐS phù hợp */}
                        <div className="bg-[#F8FAFC] p-4.5 rounded-xl border border-[#101C42]/10 hover:border-[#B9887B]/40 transition-all shadow-2xs flex flex-col justify-between">
                          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#101C42]/60 uppercase tracking-[0.15em] mb-1.5 font-sans">
                            <Building2 size={13} className="text-[#B9887B]" />
                            <span>LOẠI HÌNH BĐS PHÙ HỢP</span>
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-[#101C42] leading-snug font-sans">
                            {activeBrand.assetFit}
                          </div>
                        </div>

                        {/* Metric 3: Khách thuê mục tiêu */}
                        <div className="bg-[#F8FAFC] p-4.5 rounded-xl border border-[#101C42]/10 hover:border-[#B9887B]/40 transition-all shadow-2xs flex flex-col justify-between">
                          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#101C42]/60 uppercase tracking-[0.15em] mb-1.5 font-sans">
                            <Users size={13} className="text-[#B9887B]" />
                            <span>HỒ SƠ KHÁCH THUÊ MỤC TIÊU</span>
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-[#101C42] leading-snug font-sans">
                            {activeBrand.targetGuests}
                          </div>
                        </div>

                        {/* Metric 4: Hiệu suất vận hành */}
                        <div className="bg-[#F8FAFC] p-4.5 rounded-xl border border-[#101C42]/10 hover:border-[#B9887B]/40 transition-all shadow-2xs flex flex-col justify-between">
                          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#101C42]/60 uppercase tracking-[0.15em] mb-1.5 font-sans">
                            <TrendingUp size={13} className="text-[#B9887B]" />
                            <span>HIỆU SUẤT & UY TÍN</span>
                          </div>
                          <div className="text-sm sm:text-base font-bold text-[#101C42] leading-snug font-sans">
                            {activeBrand.stats}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4 Distinct Privileges (Đặc quyền nổi bật - Ngắn gọn) */}
                    <div className="mb-6 font-sans">
                      <span className="text-[10.5px] text-[#101C42]/60 uppercase tracking-[0.2em] font-bold block mb-2.5 font-sans">
                        TIÊU CHUẨN VẬN HÀNH & ĐẶC QUYỀN:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans">
                        {activeBrand.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium font-sans">
                            <Check size={14} className="text-[#B9887B] shrink-0" strokeWidth={2.5} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 border-t border-[#101C42]/10 flex flex-col sm:flex-row items-center gap-3 font-sans">
                    <button
                      onClick={handleCtaClick}
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#101C42] hover:bg-[#1A2C6B] text-white rounded text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg font-sans"
                    >
                      <span>TƯ VẤN ĐỊNH VỊ CHO TÒA NHÀ NÀY</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <button
                      onClick={() => navigate('/danh-muc-tai-san')}
                      className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-[#FAF6EF] text-[#101C42] border border-[#101C42]/20 hover:border-[#B9887B] hover:text-[#B9887B] rounded text-xs font-bold uppercase tracking-[0.15em] transition-all cursor-pointer text-center font-sans"
                    >
                      <span>XEM TẤT CẢ DỰ ÁN {activeBrand.code}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ── VIEW 2: EXECUTIVE COMPARISON MATRIX (BẢNG ĐỐI CHIẾU 5 BRAND) ── */
            <div className="bg-white border border-[#0F1A41]/10 rounded-2xl overflow-hidden shadow-sm p-6 sm:p-8 font-sans">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#B9887B] font-bold block mb-1">
                  BẢNG ĐỐI CHIẾU TỔNG QUAN
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1A41]">
                  So sánh 5 thương hiệu CityHouse Collection
                </h3>
                <p className="text-xs sm:text-sm text-[#0F1A41]/70 mt-1">
                  Giúp Chủ đầu tư nhanh chóng nhận diện mô hình phù hợp nhất với diện tích, vị trí và ngân sách của tài sản.
                </p>
              </div>

              {/* Responsive Table Container */}
              <div className="overflow-x-auto no-scrollbar border border-[#0F1A41]/10 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-[#0F1A41]/10 text-[11px] text-[#0F1A41] uppercase tracking-wider">
                      <th className="p-4 font-bold">Thương hiệu</th>
                      <th className="p-4 font-bold">Phân khúc</th>
                      <th className="p-4 font-bold">Mức giá kỳ vọng</th>
                      <th className="p-4 font-bold">Quy mô BĐS tối ưu</th>
                      <th className="p-4 font-bold">Khách thuê cốt lõi</th>
                      <th className="p-4 font-bold">Hiệu suất</th>
                      <th className="p-4 font-bold text-right">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0F1A41]/10">
                    {BRAND_PORTFOLIO.map((b) => (
                      <tr key={b.code} className="hover:bg-[#FAF9F6]/80 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: b.accent }}></span>
                            <span className="text-sm font-bold text-[#0F1A41]">{b.code}</span>
                          </div>
                          <span className="text-[10px] text-[#0F1A41]/50 font-medium">{b.flagship}</span>
                        </td>
                        <td className="p-4 font-medium text-[#0F1A41]">
                          {b.segment}
                        </td>
                        <td className="p-4 font-bold text-[#0F1A41]">
                          {b.priceRange}
                        </td>
                        <td className="p-4 text-[#0F1A41]/80 max-w-[200px]">
                          {b.assetFit}
                        </td>
                        <td className="p-4 text-[#0F1A41]/80 max-w-[220px]">
                          {b.targetGuests}
                        </td>
                        <td className="p-4 font-bold text-[#B9887B]">
                          {b.stats}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              setSelectedBrandCode(b.code);
                              setViewMode('showcase');
                            }}
                            className="px-3 py-1.5 bg-[#0F1A41] hover:bg-[#B9887B] text-white rounded text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Xem chi tiết
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Quick Cards Strip of All 5 Brands (Glanceable) ── */}
          <div className="mt-12 font-sans">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B9887B] font-bold block mb-1">
                  BỘ SƯU TẬP 5 DÒNG THƯƠNG HIỆU
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1A41]">
                  Khám phá toàn bộ hệ sinh thái
                </h3>
              </div>
              <span className="text-xs text-[#0F1A41]/60 font-medium">
                Click vào thẻ để chuyển đổi nhanh
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {BRAND_PORTFOLIO.map((b) => {
                const isSelected = selectedBrandCode === b.code;
                return (
                  <div
                    key={b.code}
                    onClick={() => {
                      setSelectedBrandCode(b.code);
                      setViewMode('showcase');
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className={`bg-white rounded-xl border p-4.5 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? 'border-[#0F1A41] shadow-md ring-2 ring-[#0F1A41]/10'
                        : 'border-[#0F1A41]/10 hover:border-[#B9887B] shadow-2xs'
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-[#0F1A41]">
                      <img src={b.image} alt={b.name} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute top-2 left-2 bg-[#0F1A41]/90 text-white text-xs font-bold px-2 py-0.5 rounded">
                        {b.code}
                      </div>
                    </div>

                    <div className="text-sm font-bold text-[#0F1A41] mb-0.5">
                      {b.name}
                    </div>
                    <div className="text-[10px] text-[#0F1A41]/60 uppercase tracking-wider mb-2 truncate font-semibold">
                      {b.segment.split('(')[0].trim()}
                    </div>

                    <div className="pt-2 border-t border-[#0F1A41]/10 flex items-center justify-between text-[11px]">
                      <span className="text-[#B9887B] font-bold">{b.priceRange.split('(')[0].trim()}</span>
                      <ArrowUpRight size={12} className="text-[#0F1A41]/40" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Consultation Form Section ── */}
      <section className="section-pad bg-[#0B1330] text-white font-sans">
        <div className="contact-layout">
          <div className="contact-info-col">
            <p className="eyebrow eyebrow-accent flex items-center gap-1.5 font-semibold text-xs tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              TƯ VẤN ĐỊNH VỊ THƯƠNG HIỆU MIỄN PHÍ
            </p>
            <h2 className="font-serif">
              LỰA CHỌN THƯƠNG HIỆU<br />
              <span>TỐI ƯU NHẤT CHO BẤT ĐỘNG SẢN</span>
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-6 font-normal">
              Mỗi vị trí và diện tích bất động sản sẽ đạt dòng tiền cao nhất khi gắn đúng thương hiệu. Chuyên gia CityHouse sẽ khảo sát và lập báo cáo định vị chi tiết trong vòng <strong>24 giờ</strong>.
            </p>

            <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-xs text-white/80 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#B9887B]" />
                <span>Khảo sát hiện trạng & phân tích tệp khách miễn phí</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={14} className="text-[#B9887B]" />
                <span>Dự phóng bảng dòng tiền 5–10 năm minh bạch</span>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <ContactForm submitLabel="GỬI YÊU CẦU ĐỊNH VỊ THƯƠNG HIỆU" />
          </div>
        </div>
      </section>
    </div>
  );
}
