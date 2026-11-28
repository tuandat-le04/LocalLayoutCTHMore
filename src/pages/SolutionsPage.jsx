import React, { useState } from 'react';
import LuxuryIcon, { LuxuryCheckBadge } from '../components/common/LuxuryIcon.jsx';
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Building,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  MapPin,
  Layers,
  Sparkles,
  Clock,
  Award
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

// ── 1. Thách thức & Giải pháp tương ứng (Khó khăn của Chủ tòa nhà) ──
const CHALLENGES_AND_SOLUTIONS = [
  {
    num: "01",
    challengeTitle: "Đầu tư Tòa nhà mới không hiệu quả",
    challengePoints: [
      "Thiết kế không đúng phân khúc khách hàng",
      "Phát sinh tăng vốn đầu tư xây dựng (CAPEX)"
    ],
    solutionTitle: "Tư vấn mô hình tối ưu giá trị kép",
    solutionPoints: [
      "Dòng tiền lợi nhuận khai thác ổn định",
      "Gia tăng giá trị vốn của chính bất động sản"
    ],
    link: "/giai-phap/dau-tu-phat-trien-du-an"
  },
  {
    num: "02",
    challengeTitle: "Tòa nhà cũ lợi nhuận thấp",
    challengePoints: [
      "Nội thất không đẹp / cũ đã xuống cấp",
      "Vận hành theo tiêu chuẩn thấp, trống buồng phòng"
    ],
    solutionTitle: "Đầu tư cải tạo mới để tăng hiệu quả",
    solutionPoints: [
      "Sửa chữa và nâng cấp nội thất theo xu hướng mới",
      "Chuẩn hóa tiêu chuẩn vận hành SOP 5 sao"
    ],
    link: "/giai-phap/cai-tao-tai-dinh-vi"
  }
];

// ── 2. Năng Lực Thực Thi (Operational Metrics) ──
const PERFORMANCE_METRICS = [
  {
    value: "92%",
    label: "TỶ LỆ LẤP ĐẦY",
    desc: "Tối ưu hóa doanh thu thực tế quanh năm"
  },
  {
    value: "127k+",
    label: "LƯỢT KHÁCH NĂM 2025",
    desc: "Hệ sinh thái khách lưu trú đa dạng & trung thành"
  },
  {
    value: "15+ Năm",
    label: "KINH NGHIỆM THỊ TRƯỜNG",
    desc: "Kinh nghiệm quản lý thực chiến từ 2009"
  },
  {
    value: "+45%",
    label: "TĂNG TRƯỞNG DOANH THU",
    desc: "Tăng trưởng dòng tiền sau 6 tháng tiếp quản"
  }
];

// ── 3. 3 Trụ Cột Giải Pháp Tài Sản Chuyên Biệt ──
const THREE_CORE_SOLUTIONS = [
  {
    code: "GIẢI PHÁP 01",
    title: "TƯ VẤN ĐẦU TƯ VÀ PHÁT TRIỂN DỰ ÁN",
    subtitle: "Xây dựng đúng mô hình ngay từ điểm khởi đầu",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499266-983125.webp",
    desc: "Đồng hành từ quyết định đầu tư: đánh giá vị trí, khảo sát cung - cầu thị trường, xác lập định vị sản phẩm và lập bài toán tài chính hoàn vốn tối ưu nhất trước khi xây dựng.",
    items: [
      "Đánh giá tiềm năng đầu tư và thị trường",
      "Xác lập mô hình và định vị sản phẩm",
      "Định hướng phát triển và hiệu quả tài sản"
    ],
    path: "/giai-phap/dau-tu-phat-trien-du-an"
  },
  {
    code: "GIẢI PHÁP 02",
    title: "TƯ VẤN CẢI TẠO VÀ TÁI ĐỊNH VỊ",
    subtitle: "Đánh thức giá trị, mở ra chu kỳ tăng trưởng mới",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782202629642-67015.webp",
    desc: "Hồi sinh các tòa nhà cũ hoặc khai thác sa sút thông qua thiết kế nội thất boutique đương đại, tái định vị thương hiệu và tiếp cận tệp khách lưu trú chi trả cao.",
    items: [
      "Đánh giá hiện trạng và tiềm năng tài sản",
      "Định hướng cải tạo và nâng cấp sản phẩm",
      "Tái định vị và nâng cao năng lực khai thác"
    ],
    path: "/giai-phap/cai-tao-tai-dinh-vi"
  },
  {
    code: "GIẢI PHÁP 03",
    title: "TƯ VẤN MÔ HÌNH VÀ QUẢN LÝ VẬN HÀNH",
    subtitle: "Vận hành tạo dòng tiền, quản trị bồi đắp giá trị",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
    desc: "Thiết lập hệ thống vận hành 24/7 ứng dụng công nghệ Cloud PMS, chiến lược kinh doanh đa kênh quốc tế và kiểm soát tài chính minh bạch cho Chủ đầu tư.",
    items: [
      "Thiết lập bộ máy vận hành",
      "Thiết lập kế hoạch MKT - Kinh doanh",
      "Quản lý & kiểm soát toàn diện"
    ],
    path: "/giai-phap/khai-thac-van-hanh"
  }
];

// ── 4. Sự Chuyển Hóa Giá Trị (Transformation Case Studies - cityhousemore.com) ──
const TRANSFORMATION_PROJECTS = [
  {
    id: "01",
    tabLabel: "[01] KIM NGUYÊN",
    name: "Cityhouse - Kim Nguyên",
    location: "Phú Nhuận, TP.HCM",
    quote: "Dự án xây mới hướng đến nhóm khách hàng business cấp trung",
    area: "2.500 m²",
    rooms: "54 phòng",
    highlightBadge: "CÔNG SUẤT ĐẠT 95% SAU 3 THÁNG KHAI THÁC",
    beforeImg: "https://cityhousemore.com/images/kimnguyen-truoc.jpg",
    afterImg: "https://cityhousemore.com/images/kimnguyen-sau.webp",
    slug: "kim-nguyen"
  },
  {
    id: "02",
    tabLabel: "[02] CITYOASIS",
    name: "CityHouse - CityOasis",
    location: "Quận 1, TP.HCM",
    quote: "Cải tạo toàn diện tòa nhà cũ thành không gian sống xanh với hồ bơi và ốc đảo nhiệt đới giữa lòng Sài Gòn",
    area: "3.200 m²",
    rooms: "32 phòng",
    highlightBadge: "TỶ LỆ LẤP ĐẦY 98% NGAY SAU KHI CẢI TẠO",
    beforeImg: "https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp",
    afterImg: "https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp",
    slug: "city-oasis"
  },
  {
    id: "03",
    tabLabel: "[03] ATELIER",
    name: "CityHouse - Atelier",
    location: "Quận 2, TP.HCM",
    quote: "Dự án nâng cấp toàn diện nội thất boutique cao cấp và tái định vị phục vụ chuyên gia quốc tế Thảo Điền",
    area: "1.800 m²",
    rooms: "45 phòng",
    highlightBadge: "TĂNG TRƯỞNG GIÁ THUÊ +45% SAU TÁI ĐỊNH VỊ",
    beforeImg: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
    afterImg: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
    slug: "atelier"
  }
];

// ── 5. Hệ Sinh Thái Thương Hiệu (Brand Ecosystem) ──
const BRAND_ECOSYSTEM = [
  {
    code: "01",
    brand: "MARK",
    tagline: "Urban Timeless",
    desc: "Định vị giá trị văn hóa và chuẩn mực lưu trú cao cấp."
  },
  {
    code: "02",
    brand: "SOUL",
    tagline: "Urban Rhythm",
    desc: "Cân bằng thân tâm với không gian xanh và nhịp sống chậm."
  },
  {
    code: "03",
    brand: "VIBE",
    tagline: "Urban Visual",
    desc: "Ngôn ngữ kiến trúc mạnh mẽ, đề cao cảm xúc thị giác."
  },
  {
    code: "04",
    brand: "TERA",
    tagline: "Urban Modern",
    desc: "Tôn trọng cá tính riêng biệt với cách tiếp cận phá cách."
  },
  {
    code: "05",
    brand: "NEST",
    tagline: "Urban Cozy",
    desc: "Tối ưu hóa không gian lưu trú, duy trì hiệu quả vận hành."
  }
];

// ── 6. Qui Trình Kiến Tạo Giá Trị (3 Bước Thực Hiện) ──
const CREATION_PROCESS = [
  {
    step: "01",
    title: "Khảo sát, xác định mô hình phù hợp",
    points: [
      "Đánh giá vị trí, qui mô công trình",
      "Phân tích tiềm năng khai thác & khách mục tiêu",
      "Đề xuất phân khúc sản phẩm tối ưu tài chính"
    ]
  },
  {
    step: "02",
    title: "Triển khai vận hành",
    points: [
      "Giám sát quá trình nghiệm thu, bàn giao",
      "Thiết lập bộ máy nhân sự và quy trình chuẩn SOP",
      "Quảng cáo, tiếp thị và phân phối đa kênh"
    ]
  },
  {
    step: "03",
    title: "Tối ưu dòng tiền",
    points: [
      "Liên tục tinh chỉnh qui trình & dịch vụ",
      "Tiết giảm chi phí thực tế qua công nghệ số",
      "Cập nhật các xu hướng lưu trú mới nhất"
    ]
  }
];

// ── 7. Phương Thức Hợp Tác (3 Mô Hình) ──
const PARTNERSHIP_MODELS = [
  {
    num: "01",
    name: "Đầu tư cải tạo mới",
    badge: "Mô hình 01",
    desc: "CityHouse chịu 100% chi phí đầu tư nội thất tòa nhà theo concept mới.",
    highlight: "Không áp lực vốn đầu tư ban đầu cho Chủ đầu tư"
  },
  {
    num: "02",
    name: "Thuê khoán toàn bộ",
    badge: "Mô hình 02",
    desc: "Cam kết lợi nhuận cố định hàng tháng cho chủ đầu tư.",
    highlight: "Dòng tiền cố định, loại bỏ hoàn toàn rủi ro thị trường"
  },
  {
    num: "03",
    name: "Quản lý gia sản",
    badge: "Mô hình 03",
    desc: "CityHouse vận hành tòa nhà, chia sẻ lợi nhuận theo tỷ lệ thỏa thuận.",
    highlight: "Minh bạch tuyệt đối, bồi đắp giá trị tài sản qua nhiều thế hệ"
  }
];

export default function SolutionsPage({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [activeProjectTab, setActiveProjectTab] = useState('after'); // 'before' or 'after'
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentCase = TRANSFORMATION_PROJECTS[selectedCaseIndex];

  return (
    <div className="solutions-page font-sans bg-[#F4EFEA] text-[#0F1A41]">
      
      {/* ══════════════════════════════════════════════════════════
          1. HERO BANNER — QUẢN LÝ GIA SẢN VỮNG BỀN GIA TỘC
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0F1A41] text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#B9887B]/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B9887B] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#B9887B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4">
              CITYHOUSE
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] mb-6 text-white tracking-tight">
              Quản lý gia sản<br />
              <span className="text-[#B9887B] font-serif italic">Vững bền gia tộc</span>
            </h1>
            <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed mb-8 font-light max-w-2xl">
              Nền tảng quản lý bất động sản dòng tiền Căn hộ – Khách sạn – Văn phòng – Resort. Đồng hành cùng Chủ đầu tư từ định hướng phát triển, cải tạo nâng cấp đến khai thác vận hành bền vững.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCtaClick}
                className="font-sans inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] bg-[#B9887B] text-white hover:bg-[#8A5A3D] rounded-full transition-all shadow-lg cursor-pointer"
              >
                KHÁM PHÁ GIẢI PHÁP
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('partnership');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-sans inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/40 text-white hover:border-[#B9887B] hover:text-[#B9887B] rounded-full transition-all cursor-pointer"
              >
                PHƯƠNG THỨC HỢP TÁC
              </button>
            </div>
          </div>

          {/* 3 Large Hero Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B9887B]">40+</span>
              <div>
                <div className="font-sans text-xs uppercase tracking-wider font-bold text-white">TÒA NHÀ</div>
                <div className="font-sans text-xs text-white/60">Danh mục vận hành</div>
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B9887B]">1.000+</span>
              <div>
                <div className="font-sans text-xs uppercase tracking-wider font-bold text-white">PHÒNG</div>
                <div className="font-sans text-xs text-white/60">Đơn vị lưu trú toàn hệ thống</div>
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B9887B]">5.000+</span>
              <span className="text-xl font-bold text-[#B9887B]">Tỷ</span>
              <div>
                <div className="font-sans text-xs uppercase tracking-wider font-bold text-white">TÀI SẢN ĐANG QUẢN LÝ</div>
                <div className="font-sans text-xs text-white/60">Bảo tồn và gia tăng giá trị</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. KHÓ KHĂN CỦA CHỦ TÒA NHÀ (Thực trạng vs Giải pháp CityHouse)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F4EFEA] border-b border-[#0F1A41]/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
              THỰC TRẠNG & THÁCH THỨC
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A41] uppercase tracking-wide">
              KHÓ KHĂN CỦA CHỦ TÒA NHÀ
            </h2>
            <div className="w-12 h-[1px] bg-[#B9887B] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHALLENGES_AND_SOLUTIONS.map((item) => (
              <div 
                key={item.num}
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0F1A41]/10">
                    <span className="font-serif text-3xl font-light text-[#B9887B]">
                      {item.num}
                    </span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F1A41]/50">
                      THÁCH THỨC & LỐI THOÁT
                    </span>
                  </div>

                  {/* Challenge Block */}
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5A3D] bg-[#B9887B]/10 border border-[#B9887B]/20 px-3 py-1 mb-2 inline-block rounded-full">
                      VẤN ĐỀ THƯỜNG GẶP
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-3">
                      {item.challengeTitle}
                    </h3>
                    <ul className="space-y-2 text-xs text-[#0F1A41]/75 font-sans">
                      {item.challengePoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#B9887B] font-bold shrink-0">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution Block */}
                  <div className="pt-6 border-t border-[#0F1A41]/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9887B] bg-[#B9887B]/10 px-3 py-1 mb-2 inline-block rounded-full">
                      GIẢI PHÁP CITYHOUSE
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#0F1A41] mb-3">
                      {item.solutionTitle}
                    </h4>
                    <ul className="space-y-2 text-xs text-[#0F1A41]/85 font-sans">
                      {item.solutionPoints.map((sPt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <LuxuryCheckBadge size="xs" className="mt-0.5" />
                          <span className="font-medium">{sPt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#0F1A41]/10">
                  <button
                    onClick={() => navigate(item.link)}
                    className="font-sans inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B9887B] hover:text-[#8A5A3D] transition-colors cursor-pointer group-hover:translate-x-1 duration-300"
                  >
                    <span>Xem giải pháp chi tiết</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. NĂNG LỰC THỰC THI (Mỗi con số là một minh chứng)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0F1A41] text-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="max-w-2xl mb-14">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
              CAM KẾT HIỆU QUẢ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white uppercase tracking-wide">
              Năng lực Thực thi.
            </h2>
            <p className="font-sans text-xs md:text-sm text-white/70 mt-3 font-light leading-relaxed">
              Mỗi con số là một minh chứng cho sự cam kết về hiệu quả và tính minh bạch trong quản trị tài sản của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERFORMANCE_METRICS.map((metric, i) => (
              <div 
                key={i}
                className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#B9887B] transition-colors rounded-2xl"
              >
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[#B9887B] mb-3">
                    {metric.value}
                  </div>
                  <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white mb-2">
                    {metric.label}
                  </h3>
                  <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. 3 TRỤ CỘT GIẢI PHÁP TÀI SẢN CHI TIẾT
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F4EFEA] border-b border-[#0F1A41]/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0F1A41]/10 gap-6">
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
                HỆ THỐNG DỊCH VỤ TOÀN DIỆN
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#0F1A41] uppercase tracking-wide">
                GIẢI PHÁP TÀI SẢN CITYHOUSE
              </h2>
              <p className="font-sans text-[#0F1A41]/70 mt-2 text-sm max-w-xl font-light">
                Đồng hành cùng Chủ đầu tư từ quyết định đầu tư, phát triển sản phẩm đến khai thác và tối ưu tài sản.
              </p>
            </div>
            <button
              onClick={() => navigate('/dang-hoat-dong')}
              className="font-sans inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F1A41] hover:text-[#B9887B] transition-colors cursor-pointer px-4 py-2 rounded-full border border-[#0F1A41]/15 hover:border-[#B9887B] bg-white shadow-2xs"
            >
              <span>XEM TẤT CẢ DỰ ÁN</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {THREE_CORE_SOLUTIONS.map((sol, index) => (
              <div 
                key={index}
                className="bg-white border border-[#0F1A41]/10 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group rounded-2xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F1A41] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {sol.code}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-2 group-hover:text-[#B9887B] transition-colors leading-snug">
                      {sol.title}
                    </h3>
                    <p className="font-sans text-xs text-[#B9887B] font-semibold mb-3">
                      {sol.subtitle}
                    </p>
                    <p className="font-sans text-xs text-[#0F1A41]/75 leading-relaxed mb-6 font-light">
                      {sol.desc}
                    </p>

                    <div className="space-y-2 border-t border-[#0F1A41]/10 pt-4">
                      {sol.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#0F1A41]/85 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B] shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => navigate(sol.path)}
                    className="w-full py-3.5 px-4 text-center font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A41] border border-[#0F1A41]/20 hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>KHÁM PHÁ GIẢI PHÁP</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. SỰ CHUYỂN HÓA GIÁ TRỊ (Chuẩn theo cityhousemore.com)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#F4EFEA] text-[#0F1A41] py-16 md:py-24 px-6 md:px-12 font-sans border-t border-[#0F1A41]/10">
        <div className="max-w-[1300px] mx-auto">

          {/* Section Header with Left Title and Right Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
                DỰ ÁN TIÊU BIỂU
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F1A41] uppercase tracking-wide">
                SỰ CHUYỂN HÓA GIÁ TRỊ.
              </h2>
            </div>

            {/* Horizontal Tabs Matching Live Website */}
            <div className="flex items-center gap-2 flex-wrap">
              {TRANSFORMATION_PROJECTS.map((proj, idx) => {
                const isActive = selectedCaseIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setSelectedCaseIndex(idx);
                      setActiveProjectTab('after');
                    }}
                    className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F1A41] text-white shadow-md'
                        : 'bg-white text-[#0F1A41] hover:bg-white/80 border border-[#0F1A41]/10'
                    }`}
                  >
                    {proj.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-md border border-[#0F1A41]/10 bg-white items-stretch overflow-hidden rounded-2xl">

            {/* Left Column: Visual Area with Before/After Switcher and Ribbon (lg:col-span-7) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] bg-[#0F1A41] overflow-hidden flex flex-col justify-end">
              <img
                src={activeProjectTab === 'before' ? currentCase.beforeImg : currentCase.afterImg}
                alt={`${currentCase.name} - ${activeProjectTab === 'before' ? 'Hiện trạng' : 'Sau cải tạo'}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />

              {/* Floating Top-Left Switcher Pills */}
              <div className="absolute top-4 left-4 z-20 flex items-center p-1 rounded-full bg-black/60 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setActiveProjectTab('before')}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeProjectTab === 'before'
                      ? 'bg-[#8A5A3D] text-white shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  HIỆN TRẠNG
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProjectTab('after')}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeProjectTab === 'after'
                      ? 'bg-[#8A5A3D] text-white shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  SAU CẢI TẠO
                </button>
              </div>

              {/* Bottom Solid Dark Navy Ribbon */}
              <div className="relative z-20 bg-[#0F1A41]/95 text-white px-5 py-3 flex items-center justify-between text-xs font-sans tracking-wide border-t border-white/10">
                <span className="font-bold uppercase tracking-wider text-white">
                  {currentCase.highlightBadge}
                </span>
                <span className="text-white/70 hidden sm:inline text-xs">
                  {currentCase.location}
                </span>
              </div>
            </div>

            {/* Right Column: Clean Luxury Detail Card (lg:col-span-5) */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-white">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
                  DỰ ÁN [{currentCase.id}]
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1A41] mb-2 leading-tight">
                  {currentCase.name}
                </h3>
                <p className="font-sans text-xs text-[#0F1A41]/60 flex items-center gap-1.5 mb-6">
                  <MapPin size={13} className="text-[#B9887B]" />
                  <span>{currentCase.location}</span>
                </p>

                <p className="font-sans text-xs md:text-sm text-[#0F1A41]/75 leading-relaxed font-light mb-8">
                  {currentCase.quote}
                </p>

                {/* Technical Specifications */}
                <div className="pt-6 border-t border-[#0F1A41]/10 grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#0F1A41]/50 mb-1">
                      DIỆN TÍCH SÀN
                    </p>
                    <p className="font-serif text-2xl font-bold text-[#0F1A41]">
                      {currentCase.area}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#0F1A41]/50 mb-1">
                      SỐ PHÒNG
                    </p>
                    <p className="font-serif text-2xl font-bold text-[#0F1A41]">
                      {currentCase.rooms}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#0F1A41]/10">
                <button
                  onClick={() => navigate(`/dang-hoat-dong/${currentCase.slug}`)}
                  className="w-full bg-[#0F1A41] hover:bg-[#B9887B] text-white py-4 px-6 text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-md group"
                >
                  <span>XEM CHI TIẾT DỰ ÁN</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. HỆ SINH THÁI THƯƠNG HIỆU (5 Định vị thương hiệu)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0F1A41] text-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
              CHIẾN LƯỢC ĐỊNH VỊ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white uppercase tracking-wide">
              HỆ SINH THÁI THƯƠNG HIỆU
            </h2>
            <div className="w-12 h-[1px] bg-[#B9887B] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BRAND_ECOSYSTEM.map((brand) => (
              <div 
                key={brand.code}
                className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#B9887B] transition-colors group rounded-2xl"
              >
                <div>
                  <span className="font-serif text-xl font-light text-[#B9887B]/60 group-hover:text-[#B9887B] transition-colors block mb-4">
                    {brand.code}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {brand.brand}
                  </h3>
                  <div className="font-sans text-xs text-[#B9887B] font-semibold mb-3">
                    {brand.tagline}
                  </div>
                  <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                    {brand.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. QUI TRÌNH KIẾN TẠO GIÁ TRỊ (3 Bước Thực Hiện)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F4EFEA] border-b border-[#0F1A41]/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
              LỘ TRÌNH ĐỒNG HÀNH
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A41] uppercase tracking-wide">
              Qui trình Kiến tạo giá trị.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#0F1A41]/60 mt-3 font-light">
              Cam kết minh bạch trong từng giai đoạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CREATION_PROCESS.map((proc) => (
              <div 
                key={proc.step}
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all rounded-2xl"
              >
                <div>
                  <div className="font-serif text-4xl font-light text-[#B9887B] mb-4">
                    {proc.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-4 leading-snug">
                    {proc.title}
                  </h3>
                  <ul className="space-y-2.5 text-xs text-[#0F1A41]/80 font-sans">
                    {proc.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B] mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. PHƯƠNG THỨC HỢP TÁC (3 Mô hình)
      ══════════════════════════════════════════════════════════ */}
      <section id="partnership" className="py-16 md:py-24 bg-[#F4EFEA] border-b border-[#0F1A41]/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-2">
              HỢP TÁC BỀN VỮNG
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A41] uppercase tracking-wide">
              PHƯƠNG THỨC HỢP TÁC
            </h2>
            <div className="w-12 h-[1px] bg-[#B9887B] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNERSHIP_MODELS.map((model) => (
              <div 
                key={model.num}
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-light text-[#B9887B]">
                      {model.num}
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B9887B] bg-[#B9887B]/10 px-3 py-1 rounded-full">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0F1A41] mb-3 group-hover:text-[#B9887B] transition-colors">
                    {model.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0F1A41]/80 leading-relaxed mb-6 font-light">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0F1A41]/10">
                  <div className="text-[11px] text-[#B9887B] font-semibold mb-4">
                    ★ {model.highlight}
                  </div>
                  <button
                    onClick={handleCtaClick}
                    className="w-full py-3 px-4 text-center font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A41] border border-[#0F1A41]/20 hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white rounded-full transition-all cursor-pointer shadow-xs"
                  >
                    ĐĂNG KÝ HỢP TÁC
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. ĐĂNG KÝ TƯ VẤN GIẢI PHÁP TÀI SẢN (Dedicated Contact Section)
      ══════════════════════════════════════════════════════════ */}
      <section id="contact-form" className="py-20 md:py-28 bg-[#F4EFEA] text-[#0F1A41] border-t border-[#0F1A41]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                ĐỒNG HÀNH CHIẾN LƯỢC
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-tight mb-4">
                Đăng ký Tư vấn<br />
                <span className="text-[#B9887B] italic">Giải pháp Tài sản</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6 font-light">
                Chuyên gia của CityHouse More sẽ trực tiếp liên hệ trong vòng 24 giờ làm việc để phân tích hiện trạng và đề xuất giải pháp tối ưu dòng tiền phù hợp nhất với tài sản của bạn.
              </p>

              <div className="flex flex-col gap-3.5 mb-8 text-xs text-[#0F1A41]/85 font-sans">
                <div className="flex items-center gap-3">
                  <LuxuryCheckBadge size="sm" />
                  <span>Khảo sát thực địa và báo cáo đánh giá tiềm năng miễn phí</span>
                </div>
                <div className="flex items-center gap-3">
                  <LuxuryCheckBadge size="sm" />
                  <span>Dự phóng doanh thu và phương án tối ưu dòng tiền</span>
                </div>
                <div className="flex items-center gap-3">
                  <LuxuryCheckBadge size="sm" />
                  <span>Bảo mật 100% hồ sơ tài sản và thông tin khách hàng</span>
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#0F1A41]/10 shadow-sm">
                <div className="text-[11px] font-bold uppercase text-[#B9887B] tracking-wider mb-1">
                  CẦN TRAO ĐỔI TRỰC TIẾP VỚI CHUYÊN GIA?
                </div>
                <p className="text-xs text-[#0F1A41]/70 mb-3 leading-relaxed">
                  Gọi ngay Hotline tư vấn chiến lược 24/7 của CityHouse More.
                </p>
                <a
                  href="tel:0878253545"
                  className="text-xs font-bold uppercase tracking-wider text-[#0F1A41] hover:text-[#B9887B] transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={14} className="text-[#B9887B]" />
                  <span>Hotline: 0878 253 545</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#0F1A41]/10">
              <ContactForm
                submitLabel="GỬI YÊU CẦU TƯ VẤN GIẢI PHÁP"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
