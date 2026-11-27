import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Building, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Compass, 
  TrendingUp,
  MapPin,
  CheckCircle2,
  Phone,
  Flag,
  Briefcase,
  Clock,
  ArrowUpRight,
  Award
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

// ── 1. Milestones: 15 Năm Phát Triển và Đồng Hành (cityhousemore.com) ──
const TIMELINE_MILESTONES = [
  {
    year: "2009",
    tag: "Khởi đầu",
    desc: "Nhà sáng lập bắt đầu hoạt động trong lĩnh vực lưu trú cao cấp tại dự án Saigon Pavillon thuộc Coteccons Group, đặt nền móng cho kinh nghiệm phát triển và vận hành bất động sản lưu trú.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1787394527042-279548.png",
    alt: "Khởi đầu 2009"
  },
  {
    year: "2013",
    tag: "Ra đời thương hiệu",
    desc: "CityHouse chính thức ra đời, từng bước phát triển hệ sinh thái Căn hộ – Khách sạn – Văn phòng tại TP.HCM và xây dựng nền tảng quản lý, vận hành chuyên nghiệp.",
    image: "https://cityhousemore.com/uploads/b810c46ef2e5a1410010b30aac5981d6a1.jpeg",
    alt: "Ra đời thương hiệu CityHouse 2013"
  },
  {
    year: "2017",
    tag: "Mở rộng mạng lưới",
    desc: "Với danh mục phát triển đạt 60 tòa nhà, CityHouse khẳng định vị thế tiên phong trong phân khúc căn hộ dịch vụ trung cấp tại TP.HCM.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1784272224094-150091.webp",
    alt: "Mở rộng mạng lưới 2017"
  },
  {
    year: "2021",
    tag: "Tái định vị thương hiệu",
    desc: "CityHouse tái định vị thương hiệu và mô hình kinh doanh, chuyển từ căn hộ dịch vụ dài hạn sang hệ sinh thái lưu trú linh hoạt, kết hợp ngắn hạn và dài hạn nhằm thích ứng với thị trường và tối ưu hiệu quả khai thác.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1784272586309-243597.jpg",
    alt: "Tái định vị thương hiệu 2021"
  },
  {
    year: "2024",
    tag: "CHUẨN HÓA NỀN TẢNG",
    desc: "CityHouse tiếp tục hoàn thiện hệ sinh thái quản lý và vận hành, chuẩn hóa các mô hình bất động sản lưu trú linh hoạt, hướng đến hiệu quả khai thác và giá trị dòng tiền bền vững cho chủ đầu tư.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1787394691228-716125.JPG",
    alt: "Chuẩn hóa nền tảng 2024"
  }
];

// ── 2. Giải Pháp Tài Sản (Solutions Data) ──
const ASSET_SOLUTIONS = [
  {
    id: "01",
    code: "GIẢI PHÁP 01",
    title: "TƯ VẤN ĐẦU TƯ VÀ PHÁT TRIỂN DỰ ÁN",
    items: [
      "Đánh giá tiềm năng đầu tư và thị trường",
      "Xác lập mô hình và định vị sản phẩm",
      "Định hướng phát triển và hiệu quả tài sản"
    ],
    path: "/giai-phap/dau-tu-phat-trien-du-an"
  },
  {
    id: "02",
    code: "GIẢI PHÁP 02",
    title: "TƯ VẤN CẢI TẠO VÀ TÁI ĐỊNH VỊ",
    items: [
      "Đánh giá hiện trạng và tiềm năng tài sản",
      "Định hướng cải tạo và nâng cấp sản phẩm",
      "Tái định vị và nâng cao năng lực khai thác"
    ],
    path: "/giai-phap/cai-tao-tai-dinh-vi"
  },
  {
    id: "03",
    code: "GIẢI PHÁP 03",
    title: "TƯ VẤN MÔ HÌNH VÀ QUẢN LÝ VẬN HÀNH",
    items: [
      "Thiết lập bộ máy vận hành",
      "Thiết lập kế hoạch MKT - Kinh doanh",
      "Quản lý & kiểm soát toàn diện"
    ],
    path: "/giai-phap/khai-thac-van-hanh"
  }
];

// ── 3. 7 Dự Án Tiêu Biểu (Typical Projects - cityhousemore.com) ──
const TYPICAL_PROJECTS = [
  {
    id: 1,
    name: "CityHouse VIBE City Oasis",
    tag: "KHÁCH QUỐC TẾ & KHÁCH ĐÔ THỊ",
    service: "Tư vấn Đầu tư & Phát triển",
    companionYear: "2019",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp",
    slug: "city-oasis"
  },
  {
    id: 2,
    name: "CityHouse TERA Kim Nguyen",
    tag: "KHÁCH CÔNG TÁC & LƯU TRÚ DÀI HẠN",
    service: "Tư vấn Đầu tư & Phát triển",
    companionYear: "2017",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
    slug: "kim-nguyen"
  },
  {
    id: 3,
    name: "CityHouse VIBE Abora",
    tag: "KHÁCH QUỐC TẾ & KHÁCH ĐÔ THỊ",
    service: "Tư vấn Đầu tư & Phát triển",
    companionYear: "2020",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
    slug: "abora"
  },
  {
    id: 4,
    name: "CityHouse TERA Villea",
    tag: "KHÁCH CÔNG TÁC & LƯU TRÚ DÀI HẠN",
    service: "Tư vấn Đầu tư & Phát triển",
    companionYear: "2020",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782196352717-398720.webp",
    slug: "villea"
  },
  {
    id: 5,
    name: "CityHouse NEST DC Urban Lumen",
    tag: "KHÁCH QUỐC TẾ & CHUYÊN GIA",
    service: "Tư vấn Phát triển & Quản lý Vòng đời Tài sản",
    companionYear: "2015",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782197864346-660114.webp",
    slug: "nest-dc"
  },
  {
    id: 6,
    name: "CityHouse NEST LightHouse Saigon",
    tag: "DU LỊCH · CÔNG TÁC",
    service: "Tư vấn Đầu tư & Phát triển",
    companionYear: "2018",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782202629485-507494.webp",
    slug: "lighthouse-sg"
  },
  {
    id: 7,
    name: "CityHouse NEST Metro Thao Dien",
    tag: "KHÁCH QUỐC TẾ & CHUYÊN GIA",
    service: "Tư vấn Mô hình & Quản lý Vận hành",
    companionYear: "2025",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499079-253480.webp",
    slug: "nest-metro"
  }
];

// ── 4. Dấu Ấn Được Ghi Nhận (Agoda Awards & Reviews) ──
const AWARDS_DATA = [
  {
    brand: "MARK",
    name: "Atelier",
    year: "2024",
    score: "9.0",
    awardName: "Customer Review Award",
    goldCircle: "Gold Circle Award · 2022",
    history: "2023: 8.8/10"
  },
  {
    brand: "VIBE",
    name: "Abora (Ariosa)",
    year: "2024",
    score: "9.0",
    awardName: "Customer Review Award",
    goldCircle: "Gold Circle Award · 2024",
    history: "2023: 8.9/10 · 2022: 9.2/10"
  },
  {
    brand: "NEST",
    name: "LightHouse SG",
    year: "2025",
    score: "9.0",
    awardName: "Customer Review Award",
    goldCircle: "Gold Circle Award · 2025",
    history: "2024: 9.0/10"
  },
  {
    brand: "TERA",
    name: "Kim Nguyen",
    year: "2024",
    score: "9.2",
    awardName: "Customer Review Award",
    goldCircle: "Vận hành ổn định chuyên gia",
    history: "2023: 9.1/10"
  },
  {
    brand: "VIBE",
    name: "City Oasis",
    year: "2022",
    score: "8.9",
    awardName: "Customer Review Award",
    goldCircle: "Kiến trúc xanh đoạt giải",
    history: "94% Tỷ lệ lấp đầy năm"
  },
  {
    brand: "TERA",
    name: "Villea",
    year: "2023",
    score: "9.6",
    awardName: "Customer Review Award",
    goldCircle: "Top Rating Agoda TP.HCM",
    history: "Hợp đồng năm > 80%"
  }
];

// ── 5. Góc Nhìn & Phân Tích (Insights) ──
const INSIGHTS_DATA = [
  {
    id: 1,
    tag: "Thị trường BĐS",
    title: "Chuyển dịch mô hình lưu trú linh hoạt: Xu hướng tất yếu của BĐS dòng tiền TP.HCM",
    desc: "Phân tích số liệu khai thác và sự thích ứng giữa căn hộ dịch vụ dài hạn và lưu trú ngắn hạn trong chu kỳ mới.",
    date: "15/10/2024",
    readTime: "5 phút đọc",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp"
  },
  {
    id: 2,
    tag: "Kinh nghiệm vận hành",
    title: "Tối ưu hóa chi phí vận hành (OPEX) bằng chuẩn hóa quy trình và chuyển đổi số",
    desc: "Làm thế nào để các tòa nhà boutique và căn hộ dịch vụ giảm 30-40% chi phí quản trị mà vẫn nâng cao trải nghiệm khách hàng.",
    date: "28/09/2024",
    readTime: "7 phút đọc",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp"
  },
  {
    id: 3,
    tag: "Chiến lược tài sản",
    title: "Tái định vị tài sản cũ: Bí quyết hồi sinh dòng tiền cho tòa nhà trung tâm",
    desc: "Nghiên cứu điển hình về các công trình cải tạo thành công từ khách sạn truyền thống sang tổ hợp lưu trú phong cách sống.",
    date: "10/09/2024",
    readTime: "6 phút đọc",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp"
  }
];

export default function HomePage({ onOpenModal }) {
  const { navigate } = useNavigation();

  // State for Project Carousel
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // State for Form Submission
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: '',
    interests: [],
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % TYPICAL_PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + TYPICAL_PROJECTS.length) % TYPICAL_PROJECTS.length);
  };

  const handleCheckboxChange = (value) => {
    setFormData(prev => {
      const exists = prev.interests.includes(value);
      return {
        ...prev,
        interests: exists ? prev.interests.filter(i => i !== value) : [...prev.interests, value]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="homepage-cityhouse text-[#0F1A41] bg-[#FAF6EF] overflow-hidden selection:bg-[#B9887B] selection:text-white font-sans">
      
      {/* ══════════════════════════════════════════════════════════
          SECTION 0: HERO (TƯƠNG THÍCH CHUẨN XÁC VỚI CITYHOUSEMORE.COM)
          Split Screen: Left Linen Cream Text | Right Video | Bottom Stats Strip
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0F1A41]">
        
        {/* Desktop Split Layout (xl screens) */}
        <div className="absolute inset-0 z-0 hidden xl:flex">
          {/* Left Warm Linen Background */}
          <div className="relative min-w-0 flex-1 bg-[#F4EFEA] shadow-[20px_0_40px_rgba(0,0,0,0.18)] z-10"></div>
          
          {/* Right Video Container */}
          <div className="relative h-full aspect-[3/4] shrink-0 overflow-hidden bg-[#0F1A41] z-0">
            <video
              className="absolute inset-0 block w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="https://cityhousemore.com/videos/VIDMOREUPDATE.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
          </div>

          {/* Right Edge Architectural Vertical Tag */}
          <div className="relative w-12 shrink-0 bg-[#101C42] flex items-center justify-center border-l border-white/10 shadow-2xl z-20">
            <span className="font-sans text-white/60 text-[10px] font-semibold tracking-[0.4em] uppercase -rotate-90 whitespace-nowrap">
              HO CHI MINH CITY
            </span>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Background */}
        <div className="absolute inset-0 bg-[#F4EFEA] z-0 xl:hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <img
              src="https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp"
              alt="CityHouse Architectural"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="relative z-20 w-full h-full max-w-[1300px] mx-auto px-6 md:px-8 flex flex-col justify-center pb-[280px] md:pb-[220px] lg:pb-36 pt-28 md:pt-44">
          <div className="max-w-[500px] text-[#101C42]">
            {/* Tagline */}
            <p className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4">
              CITYHOUSE
            </p>

            {/* Headline (Playfair Display) */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.15] mb-5 md:mb-6 text-[#101C42] tracking-tight">
              QUẢN LÝ GIA SẢN<br />
              <span className="text-[#B9887B] font-serif italic">VỮNG BỀN GIA TỘC</span>
            </h1>

            {/* Description (Inter) */}
            <p className="font-sans text-[14px] md:text-[15px] font-normal leading-[1.8] text-[#101C42]/85 mb-8 md:mb-10 text-justify">
              CityHouse đồng hành cùng Chủ đầu tư từ định hướng đầu tư, phát triển sản phẩm đến khai thác và vận hành, giúp bất động sản tạo dòng tiền hiệu quả hôm nay và bồi đắp giá trị bền vững qua nhiều thế hệ.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
              <button
                onClick={() => {
                  if (onOpenModal) onOpenModal();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-sans inline-flex items-center justify-center px-8 py-4 sm:py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] bg-[#B9887B] text-white transition-all duration-300 hover:bg-[#8A5A3D] shadow-md active:scale-[0.98] cursor-pointer"
              >
                ĐẶT LỊCH TƯ VẤN
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('giai-phap');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/giai-phap');
                }}
                className="font-sans inline-flex items-center justify-center sm:justify-start py-4 sm:py-0 text-[11px] font-bold uppercase tracking-[0.15em] text-[#101C42] transition-colors duration-300 hover:text-[#B9887B] active:text-[#8A5A3D] cursor-pointer"
              >
                GIẢI PHÁP TÀI SẢN CITYHOUSE
                <span className="ml-2 font-light text-lg leading-none">→</span>
              </button>
            </div>

            {/* Sub-badge */}
            <div className="mt-8 md:mt-12 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[#101C42]/30 flex items-center justify-center shrink-0">
                <Flag className="w-4 h-4 text-[#101C42]" />
              </div>
              <span className="font-sans text-[13px] font-medium text-[#101C42]/80">
                Đồng hành từ chiến lược đến vận hành
              </span>
            </div>
          </div>
        </div>

        {/* Hero Bottom Stats Strip (Official Brand Navy Strip) */}
        <div className="w-full bg-[#101C42] border-t-2 border-[#B9887B] z-30">
          <div className="max-w-[1300px] mx-auto px-6 md:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 w-full">
              
              {/* Stat 1 */}
              <div className="py-5 md:py-6 lg:py-8 flex items-center gap-4 md:gap-6 md:pr-8">
                <Building className="w-8 h-8 md:w-10 md:h-10 text-[#B9887B] shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-serif text-2xl md:text-3xl lg:text-[40px] font-normal text-white tracking-wide leading-none mb-1 md:mb-2">
                    40<sup className="font-sans text-lg md:text-xl">+</sup>
                  </div>
                  <div className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 mb-0.5 md:mb-1">
                    BẤT ĐỘNG SẢN
                  </div>
                  <div className="font-sans text-[12px] md:text-[13px] text-white/60 font-light">
                    Hơn 1.000 Đơn vị lưu trú
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="py-5 md:py-6 lg:py-8 flex items-center gap-4 md:gap-6 md:px-8">
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-[#B9887B] shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-serif text-2xl md:text-3xl lg:text-[40px] font-normal text-white tracking-wide leading-none mb-1 md:mb-2">
                    200.000<sup className="font-sans text-lg md:text-xl">+</sup>
                  </div>
                  <div className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 mb-0.5 md:mb-1">
                    LƯỢT KHÁCH NĂM 2025
                  </div>
                  <div className="font-sans text-[12px] md:text-[13px] text-white/60 font-light">
                    Khách lưu trú toàn hệ thống
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="py-5 md:py-6 lg:py-8 flex items-center gap-4 md:gap-6 md:pl-8">
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#B9887B] shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-serif text-2xl md:text-3xl lg:text-[40px] font-normal text-white tracking-wide leading-none mb-1 md:mb-2">
                    5.000<span className="font-sans text-lg md:text-2xl uppercase ml-1.5 font-normal">Tỷ</span>
                  </div>
                  <div className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 mb-0.5 md:mb-1">
                    TỔNG GIÁ TRỊ TÀI SẢN QUẢN LÝ
                  </div>
                  <div className="font-sans text-[12px] md:text-[13px] text-white/60 font-light">
                    Giá trị danh mục CityHouse đang quản lý
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: DẤU ẤN CITYHOUSE - 15 NĂM PHÁT TRIỂN VÀ ĐỒNG HÀNH
      ══════════════════════════════════════════════════════════ */}
      <section id="milestone" className="relative overflow-hidden bg-[#F5EFE7] py-14 md:py-20 font-sans border-t border-[#E9E1D2]">
        
        {/* Background Decorative Vector Geometry */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridPattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#B9887B" strokeWidth="0.5" strokeOpacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
            <circle cx="0" cy="0" r="300" fill="none" stroke="#B9887B" strokeWidth="0.5" strokeOpacity="0.2" />
            <circle cx="100%" cy="100%" r="400" fill="none" stroke="#B9887B" strokeWidth="0.5" strokeOpacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1300px] px-6 md:px-8">
          
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
            <p className="font-sans mb-2 text-xs font-bold uppercase tracking-widest text-[#B9887B]">
              DẤU ẤN CITYHOUSE
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal uppercase leading-tight text-[#131E3D] tracking-tight">
              15 năm phát triển và đồng hành
            </h2>
            <div className="mx-auto mt-4 h-[1px] w-12 bg-[#B9887B]"></div>
          </div>

          {/* Desktop Timeline Grid (2 rows x 6 columns) */}
          <div className="hidden lg:block relative mt-8 pb-4">
            
            {/* Timeline Horizontal Line & Dots */}
            <div className="absolute left-0 top-1/2 z-0 h-[1px] w-full -translate-y-1/2 bg-[#B9887B]/40">
              <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#B9887B]/60 bg-[#F5EFE7]"></div>
              <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#B9887B]/60 bg-[#F5EFE7]"></div>
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9887B]/40"></div>
            </div>

            <div className="relative z-10 grid grid-cols-6 grid-rows-2 gap-x-4 gap-y-6 lg:gap-x-6">
              
              {/* Milestone 2009 */}
              <div className="flex flex-col justify-end pb-4 pr-2" style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
                <h3 className="mb-1 font-serif text-[36px] font-normal leading-none text-[#B9887B]">2009</h3>
                <h4 className="font-sans mb-1.5 text-[14px] font-bold uppercase tracking-wide text-[#131E3D]">Khởi đầu</h4>
                <p className="font-sans text-[13px] leading-snug text-[#131E3D]/80 font-normal">
                  Nhà sáng lập bắt đầu hoạt động trong lĩnh vực lưu trú cao cấp tại dự án Saigon Pavillon thuộc Coteccons Group, đặt nền móng cho kinh nghiệm phát triển và vận hành.
                </p>
              </div>
              <div className="pb-4" style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}>
                <div className="relative h-40 w-full bg-gray-200 mt-auto overflow-hidden shadow-sm">
                  <img src={TIMELINE_MILESTONES[0].image} alt="2009" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Milestone 2013 */}
              <div className="flex flex-col justify-end pb-4 px-2" style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}>
                <h3 className="mb-1 font-serif text-[36px] font-normal leading-none text-[#B9887B]">2013</h3>
                <h4 className="font-sans mb-1.5 text-[14px] font-bold uppercase tracking-wide text-[#131E3D]">Ra đời thương hiệu</h4>
                <p className="font-sans text-[13px] leading-snug text-[#131E3D]/80 font-normal">
                  CityHouse chính thức ra đời, từng bước phát triển hệ sinh thái Căn hộ – Khách sạn – Văn phòng tại TP.HCM và xây dựng nền tảng quản lý chuyên nghiệp.
                </p>
              </div>
              <div className="pb-4" style={{ gridColumn: '4 / 5', gridRow: '1 / 2' }}>
                <div className="relative h-40 w-full bg-gray-200 mt-auto overflow-hidden shadow-sm">
                  <img src={TIMELINE_MILESTONES[1].image} alt="2013" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Milestone 2017 */}
              <div className="flex flex-col justify-end pb-4 pl-2" style={{ gridColumn: '5 / 6', gridRow: '1 / 2' }}>
                <h3 className="mb-1 font-serif text-[36px] font-normal leading-none text-[#B9887B]">2017</h3>
                <h4 className="font-sans mb-1.5 text-[14px] font-bold uppercase tracking-wide text-[#131E3D]">Mở rộng mạng lưới</h4>
                <p className="font-sans text-[13px] leading-snug text-[#131E3D]/80 font-normal">
                  Với danh mục phát triển đạt 60 tòa nhà, CityHouse khẳng định vị thế tiên phong trong phân khúc căn hộ dịch vụ trung cấp tại TP.HCM.
                </p>
              </div>
              <div className="pb-4" style={{ gridColumn: '6 / 7', gridRow: '1 / 2' }}>
                <div className="relative h-40 w-full bg-gray-200 mt-auto overflow-hidden shadow-sm">
                  <img src={TIMELINE_MILESTONES[2].image} alt="2017" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Milestone 2021 (Row 2) */}
              <div className="flex flex-col justify-start pt-4 px-2" style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}>
                <h3 className="mb-1 font-serif text-[36px] font-normal leading-none text-[#B9887B]">2021</h3>
                <h4 className="font-sans mb-1.5 text-[14px] font-bold uppercase tracking-wide text-[#131E3D]">Tái định vị thương hiệu</h4>
                <p className="font-sans text-[13px] leading-snug text-[#131E3D]/80 font-normal">
                  Chuyển từ căn hộ dịch vụ dài hạn sang hệ sinh thái lưu trú linh hoạt, kết hợp ngắn hạn và dài hạn nhằm tối ưu hiệu quả khai thác dòng tiền.
                </p>
              </div>
              <div className="pt-4" style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}>
                <div className="relative h-40 w-full bg-gray-200 mb-auto overflow-hidden shadow-sm">
                  <img src={TIMELINE_MILESTONES[3].image} alt="2021" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Milestone 2024 (Row 2) */}
              <div className="flex flex-col justify-start pt-4 px-2" style={{ gridColumn: '4 / 5', gridRow: '2 / 3' }}>
                <h3 className="mb-1 font-serif text-[36px] font-normal leading-none text-[#B9887B]">2024</h3>
                <h4 className="font-sans mb-1.5 text-[14px] font-bold uppercase tracking-wide text-[#131E3D]">CHUẨN HÓA NỀN TẢNG</h4>
                <p className="font-sans text-[13px] leading-snug text-[#131E3D]/80 font-normal">
                  CityHouse tiếp tục hoàn thiện hệ sinh thái quản lý và vận hành, chuẩn hóa các mô hình lưu trú linh hoạt, hướng đến giá trị dòng tiền bền vững.
                </p>
              </div>
              <div className="pt-4" style={{ gridColumn: '5 / 6', gridRow: '2 / 3' }}>
                <div className="relative h-40 w-full bg-gray-200 mb-auto overflow-hidden shadow-sm">
                  <img src={TIMELINE_MILESTONES[4].image} alt="2024" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="mt-8 lg:hidden">
            <div className="relative pl-6 border-l-2 border-[#B9887B]/40 space-y-8">
              {TIMELINE_MILESTONES.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#B9887B] border-2 border-[#F5EFE7]"></div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200 mb-3 shadow-sm">
                    <img src={item.image} alt={item.year} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#B9887B] mb-1">{item.year}</h3>
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-[#131E3D] mb-1">{item.tag}</h4>
                  <p className="font-sans text-xs text-[#131E3D]/80 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Bottom CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/dang-hoat-dong')}
              className="font-sans inline-flex items-center gap-3 bg-[#B9887B] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#8A4A2B] active:scale-[0.98] cursor-pointer shadow-md"
            >
              Xem dự án
              <ArrowRight size={18} />
            </button>
            <p className="font-sans mt-4 text-[13px] font-medium text-[#131E3D]">
              Những công trình tạo nên dấu ấn CityHouse
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: GIẢI PHÁP TÀI SẢN CITYHOUSE & DỰ ÁN TIÊU BIỂU
      ══════════════════════════════════════════════════════════ */}
      <section id="giai-phap" className="w-full bg-[#FAF6EF] py-16 md:py-24 border-t border-[#0F1A41]/10 font-sans">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0F1A41]/10 gap-6">
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
                DỊCH VỤ TOÀN DIỆN
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#0F1A41] uppercase tracking-wide">
                GIẢI PHÁP TÀI SẢN CITYHOUSE
              </h2>
              <p className="font-sans text-[#0F1A41]/70 mt-2 text-sm max-w-xl font-light leading-relaxed">
                Đồng hành cùng Chủ đầu tư từ quyết định đầu tư, phát triển sản phẩm đến khai thác và tối ưu tài sản.
              </p>
            </div>
            <button
              onClick={() => navigate('/dang-hoat-dong')}
              className="font-sans inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F1A41] hover:text-[#B9887B] transition-colors whitespace-nowrap cursor-pointer"
            >
              XEM TẤT CẢ DỰ ÁN
              <ArrowRight size={14} />
            </button>
          </div>

          {/* 3 Core Asset Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {ASSET_SOLUTIONS.map((sol) => (
              <div 
                key={sol.id} 
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0F1A41]/10">
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#B9887B] uppercase">
                      {sol.code}
                    </span>
                    <span className="font-serif text-3xl text-[#0F1A41]/20 font-light group-hover:text-[#B9887B] transition-colors">
                      {sol.id}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-6 leading-snug group-hover:text-[#B9887B] transition-colors">
                    {sol.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {sol.items.map((item, idx) => (
                      <li key={idx} className="font-sans flex items-start gap-2.5 text-xs text-[#0F1A41]/80 leading-relaxed font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B] mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate(sol.path)}
                  className="font-sans inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F1A41] group-hover:text-[#B9887B] transition-colors cursor-pointer mt-auto"
                >
                  KHÁM PHÁ GIẢI PHÁP
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {/* ── Sub-component: DỰ ÁN TIÊU BIỂU ── */}
          <div className="pt-12 border-t border-[#0F1A41]/10">
            
            {/* Header with Slider Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-normal text-[#0F1A41] uppercase tracking-wide">
                  DỰ ÁN TIÊU BIỂU
                </h3>
                <p className="font-sans text-[#0F1A41]/60 mt-1 text-xs max-w-lg font-light">
                  Những tài sản CityHouse đã trực tiếp tư vấn và đồng hành.
                </p>
              </div>

              {/* Slider Arrows & Counter */}
              <div className="flex items-center gap-6">
                <button
                  onClick={prevProject}
                  className="text-[#0F1A41] hover:text-[#B9887B] hover:-translate-x-1 transition-all duration-300 p-2 cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={28} />
                </button>
                <div className="font-serif text-2xl md:text-3xl text-[#0F1A41] font-normal flex items-baseline gap-2">
                  {String(currentProjectIndex + 1).padStart(2, '0')}
                  <span className="font-sans text-[#0F1A41]/30 text-lg md:text-xl font-light">
                    / {String(TYPICAL_PROJECTS.length).padStart(2, '0')}
                  </span>
                </div>
                <button
                  onClick={nextProject}
                  className="text-[#0F1A41] hover:text-[#B9887B] hover:translate-x-1 transition-all duration-300 p-2 cursor-pointer"
                  aria-label="Next project"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>

            {/* Carousel Display (3 visible on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const item = TYPICAL_PROJECTS[(currentProjectIndex + offset) % TYPICAL_PROJECTS.length];
                return (
                  <div 
                    key={item.id}
                    onClick={() => navigate(`/dang-hoat-dong/${item.slug}`)}
                    className="group block h-full cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden mb-0 bg-[#0F1A41]/5 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
                        <span className="font-sans bg-[#B9887B] text-white text-[8px] font-bold uppercase tracking-wider px-2 py-1 shadow-sm">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="border border-[#0F1A41]/10 border-t-0 p-4 bg-[#F4EFEA]">
                      <h4 className="font-serif text-base font-normal text-[#0F1A41] uppercase tracking-wide group-hover:text-[#B9887B] transition-colors mb-1.5 line-clamp-1">
                        {item.name}
                      </h4>
                      <div className="flex items-center justify-between gap-1 text-[#0F1A41]/70 text-[11px] border-b border-[#0F1A41]/10 pb-2 mb-2 font-sans">
                        <span className="font-medium truncate">{item.service}</span>
                        {item.companionYear && (
                          <span className="text-[9.5px] font-bold text-[#B9887B] uppercase tracking-wider shrink-0 bg-[#B9887B]/10 px-1.5 py-0.5 rounded">
                            ĐỒNG HÀNH TỪ {item.companionYear}
                          </span>
                        )}
                      </div>
                      <div className="font-sans flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#B9887B]">
                        <span>Xem dự án</span>
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: DẤU ẤN ĐƯỢC GHI NHẬN (AGODA AWARDS & REVIEWS)
      ══════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-[#FAF6EF] py-14 sm:py-16 lg:py-24 border-t border-[#0F1A41]/10 font-sans">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="max-w-2xl mb-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#B9887B] uppercase mb-2">
              CityHouse Awards
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#0F1A41] mb-3 tracking-tight">
              Dấu ấn được ghi nhận
            </h2>
            <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
              Sự ghi nhận từ Agoda và khách lưu trú tại các cơ sở trong hệ thống CityHouse.
            </p>
          </div>

          {/* Awards Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS_DATA.map((award, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E9E1D2] p-6 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[9px] font-bold tracking-[0.16em] uppercase px-2 py-1 bg-[#0F1A41] text-white">
                    {award.brand}
                  </span>
                  <span className="font-sans text-xs text-[#0F1A41]/50 font-medium">
                    {award.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#0F1A41] mb-4">
                  {award.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-serif text-3xl font-bold text-[#B9887B]">
                    {award.score}
                  </span>
                  <span className="font-sans text-xs text-[#0F1A41]/50 font-medium">
                    /10
                  </span>
                  <span className="font-sans ml-auto text-[11px] font-bold text-[#C79A3B] uppercase tracking-wider flex items-center gap-1">
                    <Star size={12} className="fill-[#C79A3B] text-[#C79A3B]" />
                    {award.awardName}
                  </span>
                </div>

                <div className="font-sans pt-3 border-t border-[#E9E1D2] flex justify-between items-center text-xs text-[#0F1A41]/70">
                  <span className="font-medium text-[#C79A3B]">{award.goldCircle}</span>
                  <span className="text-[11px] text-[#0F1A41]/40">{award.history}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: GÓC NHÌN VÀ PHÂN TÍCH (INSIGHTS)
      ══════════════════════════════════════════════════════════ */}
      <section id="news" className="w-full bg-[#FCFAF7] py-14 md:py-20 border-t border-[#e5dfd5]/60 font-sans">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#B9887B] uppercase mb-2">
                CityHouse Insights
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#0F1A41] mb-3 tracking-tight">
                GÓC NHÌN VÀ PHÂN TÍCH
              </h2>
              <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                Cập nhật những chuyển động mới nhất của thị trường bất động sản lưu trú, đồng thời chia sẻ kiến thức, kinh nghiệm và các nghiên cứu thực tiễn.
              </p>
            </div>
            <div>
              <button
                onClick={() => navigate('/goc-nhin')}
                className="font-sans inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F1A41] hover:text-[#B9887B] transition-colors cursor-pointer group whitespace-nowrap"
              >
                XEM TẤT CẢ
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Insights Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS_DATA.map((article) => (
              <div 
                key={article.id}
                onClick={() => navigate('/goc-nhin')}
                className="bg-white border border-[#E9E1D2] overflow-hidden hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="font-sans absolute top-3 left-3 bg-[#0F1A41] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1">
                    {article.tag}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="font-sans flex items-center gap-3 text-[11px] text-[#0F1A41]/50 mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#0F1A41] group-hover:text-[#B9887B] transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs text-[#0F1A41]/70 leading-relaxed font-light mb-6 line-clamp-2">
                      {article.desc}
                    </p>
                  </div>

                  <div className="font-sans flex items-center gap-1.5 text-[11px] font-bold text-[#B9887B] uppercase tracking-wider pt-3 border-t border-[#0F1A41]/10">
                    <span>Đọc tiếp</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: TRỞ THÀNH ĐỐI TÁC — XÂY DỰNG GIÁ TRỊ BỀN VỮNG
          Official Split Polygon Layout (cityhousemore.com)
      ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative w-full overflow-hidden bg-[#0F1A41] text-white font-sans">
        
        {/* Desktop Angled Geometry Background */}
        <div 
          className="absolute inset-y-0 right-0 w-full lg:w-[55%] 2xl:w-[58%] bg-[#F4EFEA] z-0 hidden lg:block"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>
        <div className="absolute inset-y-0 right-0 w-full bg-[#F4EFEA] z-0 block lg:hidden top-1/2"></div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Brand Keynote */}
            <div className="lg:col-span-5 p-6 md:p-8 lg:py-16 lg:pl-6 lg:pr-8 xl:pr-12 flex flex-col justify-center h-full bg-[#0F1A41] lg:bg-transparent relative z-10">
              <div>
                <span className="font-sans mb-3 block text-[11px] font-bold uppercase tracking-[0.25em] text-[#B9887B]">
                  TRỞ THÀNH ĐỐI TÁC
                </span>
                <h2 className="font-serif mb-4 text-[28px] md:text-[54px] font-normal uppercase leading-[1.15] tracking-tight text-white max-w-full">
                  XÂY DỰNG <br />
                  GIÁ TRỊ <br />
                  <span className="text-[#B9887B] font-serif italic">BỀN VỮNG</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#B9887B]/40 mb-6"></div>
                <p className="font-sans text-xs md:text-sm leading-relaxed text-white/70 font-light mb-8 max-w-sm">
                  Để lại thông tin, CityHouse sẽ liên hệ để đề xuất giải pháp giúp tối ưu hiệu quả khai thác và giá trị dài hạn của bất động sản.
                </p>
                <div className="flex items-center gap-2.5 text-[#B9887B] mb-8">
                  <ShieldCheck size={20} className="shrink-0" />
                  <span className="font-sans text-xs font-light text-white/80">
                    Thông tin của quý khách được bảo mật tuyệt đối
                  </span>
                </div>

                {/* Direct Contact Links */}
                <div className="border-t border-white/10 pt-6 space-y-3 font-sans">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B9887B]">
                    KẾT NỐI CÙNG CITYHOUSE
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-white/80">
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-[#B9887B] shrink-0" />
                      <span>Tư vấn trực tiếp: <a href="tel:0878253545" className="font-bold text-white hover:text-[#B9887B]">0878 253 545</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 flex items-center justify-center text-[#B9887B] font-bold text-xs">@</span>
                      <span>Email: <a href="mailto:info@cityhousemore.com" className="text-white hover:text-[#B9887B]">info@cityhousemore.com</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Consultation Form Panel */}
            <div className="lg:col-span-7 bg-[#F4EFEA] p-6 md:p-8 lg:pl-16 xl:pl-24 lg:py-16 relative z-10 flex flex-col justify-center text-[#0F1A41]">
              <div className="w-full max-w-[560px] mx-auto lg:mx-0">
                <h3 className="font-serif text-xl md:text-2xl font-normal uppercase tracking-wide text-[#0F1A41] mb-1.5">
                  ĐĂNG KÝ TƯ VẤN
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#0F1A41]/60 mb-6 max-w-md font-light">
                  Vui lòng điền thông tin bên dưới để chúng tôi có thể hỗ trợ Anh/Chị tốt nhất.
                </p>

                {formSubmitted ? (
                  <div className="bg-white border border-[#B9887B]/40 p-8 text-center rounded-none shadow-sm animate-fade-in">
                    <CheckCircle2 size={44} className="text-[#B9887B] mx-auto mb-3" />
                    <h4 className="font-serif text-xl font-normal text-[#0F1A41] mb-2">
                      Gửi yêu cầu thành công!
                    </h4>
                    <p className="font-sans text-xs text-[#0F1A41]/70 leading-relaxed mb-6 font-light">
                      Chuyên gia tư vấn của CityHouse sẽ liên hệ trực tiếp với Anh/Chị trong vòng 24 giờ làm việc.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="font-sans px-6 py-2.5 bg-[#0F1A41] text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/70">
                        Quý danh *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="font-sans w-full bg-white border border-[#0F1A41]/25 px-3.5 py-3 text-sm text-[#0F1A41] rounded-none outline-none transition-all placeholder:text-[#0F1A41]/35 focus:border-[#B9887B] min-h-[44px]"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/70">
                          Số điện thoại *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Số điện thoại liên hệ"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="font-sans w-full bg-white border border-[#0F1A41]/25 px-3.5 py-2.5 text-xs md:text-sm text-[#0F1A41] rounded-none outline-none transition-all placeholder:text-[#0F1A41]/35 focus:border-[#B9887B] min-h-[44px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/70">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Email liên hệ"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="font-sans w-full bg-white border border-[#0F1A41]/25 px-3.5 py-2.5 text-xs md:text-sm text-[#0F1A41] rounded-none outline-none transition-all placeholder:text-[#0F1A41]/35 focus:border-[#B9887B] min-h-[44px]"
                        />
                      </div>
                    </div>

                    {/* Property Type */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/70">
                        Loại tài sản
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="font-sans w-full bg-white border border-[#0F1A41]/25 px-3.5 py-3 text-sm text-[#0F1A41] rounded-none outline-none transition-all focus:border-[#B9887B] min-h-[44px]"
                      >
                        <option value="" disabled>Chọn loại tài sản</option>
                        <option value="building">Tòa nhà / Chung cư mini</option>
                        <option value="land">Đất nền / Đất dự án</option>
                        <option value="hotel">Khách sạn / Resort</option>
                        <option value="apartment">Căn hộ dịch vụ</option>
                      </select>
                    </div>

                    {/* Interests Checkboxes */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/70">
                        Nhu cầu quan tâm
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { val: 'invest', label: 'Tư vấn đầu tư và Phát triển' },
                          { val: 'renovate', label: 'Tư vấn cải tạo và Tái định vị' },
                          { val: 'operate', label: 'Quản lý khai thác và Vận hành' },
                          { val: 'other', label: 'Nhu cầu khác' }
                        ].map((item) => (
                          <label 
                            key={item.val} 
                            onClick={() => handleCheckboxChange(item.val)}
                            className="flex items-center gap-2.5 cursor-pointer min-h-[40px] select-none p-1.5 hover:bg-white/60 transition-colors"
                          >
                            <div className={`w-4 h-4 flex items-center justify-center border transition-colors shrink-0 ${formData.interests.includes(item.val) ? 'bg-[#B9887B] border-[#B9887B] text-white' : 'bg-white border-[#0F1A41]/30'}`}>
                              {formData.interests.includes(item.val) && <CheckCircle2 size={12} />}
                            </div>
                            <span className="font-sans text-xs text-[#0F1A41]/85">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message Note */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/70">
                        Nội dung cần tư vấn *
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Chi tiết yêu cầu của Anh/Chị..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="font-sans w-full resize-none bg-white border border-[#0F1A41]/25 px-3.5 py-3 text-sm text-[#0F1A41] rounded-none outline-none transition-all placeholder:text-[#0F1A41]/35 focus:border-[#B9887B]"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="font-sans group flex items-center justify-between gap-4 w-full sm:w-auto bg-[#B9887B] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-[#A37367] min-h-[48px] active:scale-[0.98] cursor-pointer shadow-md"
                    >
                      <span>GỬI YÊU CẦU TƯ VẤN</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 shrink-0" />
                    </button>

                    {/* Trust Badges */}
                    <div className="pt-4 space-y-2 border-t border-[#0F1A41]/10">
                      <div className="flex items-start gap-2 text-[11px] text-[#0F1A41]/60">
                        <ShieldCheck size={14} className="shrink-0 mt-0.5" />
                        <span className="font-sans">Bằng việc gửi thông tin, quý khách đồng ý với Chính sách bảo mật của chúng tôi.</span>
                      </div>
                      <div className="flex items-start gap-2 text-[11px] text-[#0F1A41]/60">
                        <Clock size={14} className="shrink-0 mt-0.5" />
                        <span className="font-sans">Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.</span>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
