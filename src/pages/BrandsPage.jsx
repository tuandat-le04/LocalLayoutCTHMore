import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  Star, 
  Table, 
  LayoutGrid, 
  ChevronRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const BRAND_PORTFOLIO = [
  {
    code: "MARK",
    name: "CityHouse MARK",
    tagline: "Tinh tế · Chuẩn mực · Riêng tư tuyệt đối",
    segment: "Lưu trú Siêu sang và Quản gia Riêng",
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
      "Quản gia riêng và Concierge 24/7",
      "Nội thất gỗ đá tự nhiên thượng hạng",
      "Hệ thống lọc khí và âm học riêng biệt",
      "Bảo mật an ninh đa lớp tuyệt đối"
    ]
  },
  {
    code: "SOUL",
    name: "CityHouse SOUL",
    tagline: "Tĩnh tại · Bản sắc · Cân bằng thân tâm trí",
    segment: "Boutique Hotel và Trải nghiệm Di sản",
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
      "Vườn nhiệt đới và giếng trời tự nhiên",
      "Không gian trà đạo và thư viện sách",
      "Liệu trình thư giãn và yoga nội khu",
      "Bếp ẩm thực hữu cơ chọn lọc"
    ]
  },
  {
    code: "VIBE",
    name: "CityHouse VIBE",
    tagline: "Cảm hứng · Nghệ thuật · Đậm bản sắc thị giác",
    segment: "Đô thị Năng động và Du lịch Sáng tạo",
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
    segment: "Lưu trú Dài hạn và Khách Doanh nghiệp",
    shortDesc: "Công năng gia đình hoàn chỉnh, dòng tiền ổn định với tỷ lệ khách gia hạn hợp đồng năm vượt mốc 78%.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195172539-438850.webp",
    accent: "#8A5A3D",
    stats: "Kín phòng 96%+ · Gia hạn 78%+",
    priceRange: "700 – 1.600 USD / tháng",
    assetFit: "Tòa nhà căn hộ dịch vụ độc lập (25 – 80 căn hộ)",
    targetGuests: "Chuyên gia expat công tác dài hạn, kỹ sư dự án FDI, gia đình nhỏ",
    flagship: "CityHouse TERA Kim Nguyen và Villea",
    flagshipSlug: "cityhouse-tera-kim-nguyen",
    highlights: [
      "Bếp gia đình đầy đủ thiết bị nấu nướng",
      "Máy giặt sấy riêng từng căn hộ",
      "Phòng gym và khu thể thao nội khu",
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
    flagship: "CityHouse NEST LightHouse và Metro",
    flagshipSlug: "cityhouse-nest-lighthouse",
    highlights: [
      "Nội thất thông minh biến đổi đa năng",
      "Khóa từ thông minh và App quản lý số",
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
      {/* ── Page Hero: Focused và High Impact ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#101C42] text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            HỆ SINH THÁI THƯƠNG HIỆU — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.25] mb-5 font-normal">
            5 DÒNG THƯƠNG HIỆU<br />
            <span className="text-[#B9887B] font-serif italic block mt-1.5">ĐỊNH VỊ CHÍNH XÁC CHO TÀI SẢN</span>
          </h1>
          <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed mt-4 font-normal">
            Mỗi bất động sản chỉ phát huy tối đa doanh thu khi gắn đúng phân khúc thương hiệu. CityHouse chuẩn hóa 5 mô hình lưu trú với tệp khách hàng và tiêu chuẩn vận hành riêng biệt.
          </p>

          {/* Quick Metrics Bar for Investors: Unified Typography */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-3xl border-t border-white/10 pt-6">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight">05</div>
              <div className="font-sans text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Phân khúc độc bản</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight">95%+</div>
              <div className="font-sans text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Tỷ lệ kín phòng</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight whitespace-nowrap">$450 – $5.000</div>
              <div className="font-sans text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Phổ giá linh hoạt</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9887B] tracking-tight">35+</div>
              <div className="font-sans text-[10.5px] font-bold tracking-[0.15em] text-white/70 uppercase mt-0.5">Tòa nhà vận hành</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Navigation Bar và Mode Switcher: Synchronized Sans ── */}
      <section className="bg-[#F4EFEA] border-b border-[#0F1A41]/10 sticky top-[72px] z-30 shadow-xs backdrop-blur-md bg-opacity-95 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Brand Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0 scroll-smooth">
            {BRAND_PORTFOLIO.map((b) => {
              const isActive = selectedBrandCode === b.code;
              const shortTag = {
                MARK: 'Siêu sang',
                SOUL: 'Boutique',
                VIBE: 'Sáng tạo',
                TERA: 'Dài hạn',
                NEST: 'Studio'
              }[b.code] || b.code;

              return (
                <button
                  key={b.code}
                  onClick={() => {
                    setSelectedBrandCode(b.code);
                    if (viewMode !== 'showcase') setViewMode('showcase');
                  }}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#0F1A41] text-white shadow-sm'
                      : 'bg-white text-[#0F1A41]/75 hover:bg-white hover:text-[#0F1A41] border border-[#0F1A41]/12 hover:border-[#B9887B]/40'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: b.accent }}
                  />
                  <span>{b.code}</span>
                  <span className={`text-[10.5px] hidden sm:inline font-normal ${isActive ? 'text-white/75' : 'text-[#0F1A41]/55'}`}>
                    · {shortTag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button: Showcase vs Matrix */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#0F1A41]/12 self-end md:self-auto shrink-0 text-xs font-semibold shadow-2xs">
            <button
              onClick={() => setViewMode('showcase')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'showcase'
                  ? 'bg-[#0F1A41] text-white shadow-xs'
                  : 'text-[#0F1A41]/70 hover:text-[#0F1A41]'
              }`}
            >
              <LayoutGrid size={13} />
              <span>Chi tiết</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-[#0F1A41] text-white shadow-xs'
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
            /* ── VIEW 1: REFINED LUXURY ARCHITECTURAL SHOWCASE ── */
            <div className="bg-white border border-[#0F1A41]/10 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Anchor (5 Cols): Clean, Cinematic Presentation */}
                <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[580px] bg-[#0F1A41] overflow-hidden group font-sans flex flex-col justify-between p-6">
                  <img
                    src={activeBrand.image}
                    alt={activeBrand.name}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/25 to-black/20 pointer-events-none"></div>

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-[#0F1A41]/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white flex items-center gap-2 shadow-md">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeBrand.accent }}></span>
                      <span className="text-xs font-bold tracking-wider font-sans">{activeBrand.code} COLLECTION</span>
                    </div>

                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[#0F1A41] text-xs font-semibold shadow-md border border-white/60">
                      <Star size={12} className="fill-[#C79A3B] text-[#C79A3B]" />
                      <span>{activeBrand.stats.split('·')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Refined Bottom Flagship Showcase Caption */}
                  <div className="relative z-10 bg-[#0F1A41]/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/15 shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-[#B9887B] uppercase tracking-[0.16em] font-semibold">
                        Công trình biểu tượng
                      </span>
                      <span className="text-[10px] text-white/60 uppercase tracking-wider px-2 py-0.5 bg-white/10 rounded-full font-medium">Flagship</span>
                    </div>
                    <div className="text-sm font-semibold text-white mb-1.5">
                      {activeBrand.flagship}
                    </div>
                    <button
                      onClick={() => navigate(`/dang-hoat-dong/${activeBrand.flagshipSlug}`)}
                      className="text-xs font-medium text-[#B9887B] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Khám phá dự án thực tế</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Content Dossier (7 Cols) - Spacious & Minimalist */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between font-sans bg-white">
                  <div>
                    {/* Header: Brand Name + Segment + Tagline */}
                    <div className="border-b border-[#0F1A41]/10 pb-5 mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-2.5">
                        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A41] tracking-tight">
                          {activeBrand.name}
                        </h2>
                        <span
                          className="text-[10.5px] font-semibold uppercase tracking-[0.14em] px-3.5 py-1 rounded-full border whitespace-nowrap self-start sm:self-auto"
                          style={{
                            backgroundColor: `${activeBrand.accent}12`,
                            color: activeBrand.accent,
                            borderColor: `${activeBrand.accent}30`
                          }}
                        >
                          {activeBrand.segment}
                        </span>
                      </div>

                      <div className="font-serif text-sm sm:text-base italic text-[#B9887B] font-normal mb-3">
                        "{activeBrand.tagline}"
                      </div>

                      <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed font-normal">
                        {activeBrand.shortDesc}
                      </p>
                    </div>

                    {/* 4 Core Financial & Asset Specifications: Clean Minimalist Architectural Grid */}
                    <div className="mb-6 font-sans">
                      <div className="text-[10.5px] text-[#B9887B] uppercase tracking-[0.18em] font-bold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                        THÔNG SỐ ĐẦU TƯ & KHAI THÁC TÀI SẢN
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Metric 1: Giá thuê kỳ vọng */}
                        <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 flex flex-col justify-between">
                          <span className="text-[10px] font-bold text-[#0F1A41]/60 uppercase tracking-[0.12em] mb-1">
                            GIÁ CHO THUÊ KỲ VỌNG
                          </span>
                          <span className="text-sm font-semibold text-[#0F1A41]">
                            {activeBrand.priceRange}
                          </span>
                        </div>

                        {/* Metric 2: Quy mô BĐS phù hợp */}
                        <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 flex flex-col justify-between">
                          <span className="text-[10px] font-bold text-[#0F1A41]/60 uppercase tracking-[0.12em] mb-1">
                            QUY MÔ BẤT ĐỘNG SẢN PHÙ HỢP
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-[#0F1A41]">
                            {activeBrand.assetFit}
                          </span>
                        </div>

                        {/* Metric 3: Khách thuê mục tiêu */}
                        <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 flex flex-col justify-between">
                          <span className="text-[10px] font-bold text-[#0F1A41]/60 uppercase tracking-[0.12em] mb-1">
                            HỒ SƠ KHÁCH THUÊ CỐT LÕI
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-[#0F1A41]">
                            {activeBrand.targetGuests}
                          </span>
                        </div>

                        {/* Metric 4: Hiệu suất vận hành */}
                        <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 flex flex-col justify-between">
                          <span className="text-[10px] font-bold text-[#0F1A41]/60 uppercase tracking-[0.12em] mb-1">
                            BẢO CHỨNG HIỆU SUẤT
                          </span>
                          <span className="text-sm font-semibold text-[#B9887B]">
                            {activeBrand.stats}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Operational Highlights (Đặc quyền vận hành chuẩn mực) */}
                    <div className="mb-6 font-sans">
                      <div className="text-[10.5px] text-[#0F1A41]/60 uppercase tracking-[0.18em] font-bold mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#0F1A41]/40"></span>
                        TIÊU CHUẨN VẬN HÀNH & ĐẶC QUYỀN
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-[#0F1A41]/80 font-medium">
                        {activeBrand.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check size={13} className="text-[#B9887B] shrink-0" strokeWidth={2.5} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 border-t border-[#0F1A41]/10 flex flex-col sm:flex-row items-center gap-3 font-sans">
                    <button
                      onClick={handleCtaClick}
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#0F1A41] hover:bg-[#1A2C6B] text-white rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md font-sans"
                    >
                      <span>TƯ VẤN ĐỊNH VỊ CHO TÒA NHÀ NÀY</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <button
                      onClick={() => navigate('/danh-muc-tai-san')}
                      className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-[#F4EFEA] text-[#0F1A41] border border-[#0F1A41]/20 hover:border-[#B9887B] hover:text-[#B9887B] rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all cursor-pointer text-center font-sans"
                    >
                      <span>XEM DỰ ÁN {activeBrand.code}</span>
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
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#0F1A41]">
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
                            className="px-4 py-2 bg-[#0F1A41] hover:bg-[#B9887B] text-white rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
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
        </div>
      </section>
    </div>
  );
}
