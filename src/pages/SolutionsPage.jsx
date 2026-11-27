import React, { useState } from 'react';
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
    name: "Cityhouse - Kim Nguyên",
    location: "Phú Nhuận, TP. HCM",
    quote: "Dự án xây mới hướng đến nhóm khách hàng business cấp trung",
    area: "2.500 m2",
    rooms: "54 phòng",
    beforeImg: "https://cityhousemore.com/images/kimnguyen-truoc.jpg",
    afterImg: "https://cityhousemore.com/images/kimnguyen-sau.webp",
    slug: "kim-nguyen"
  },
  {
    id: "02",
    name: "CityHouse - CityOasis",
    location: "Quận 1, TP. HCM",
    quote: "Cải tạo toàn diện tòa nhà cũ thành không gian sống xanh",
    area: "3.200 m2",
    rooms: "32 phòng",
    beforeImg: "https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp",
    afterImg: "https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp",
    slug: "city-oasis"
  },
  {
    id: "03",
    name: "CityHouse - Atelier",
    location: "Quận 2, TP. HCM",
    quote: "Dự án nâng cấp tiêu chuẩn dịch vụ và nội thất",
    area: "1.800 m2",
    rooms: "45 phòng",
    beforeImg: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
    afterImg: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
    slug: "atelier"
  },
  {
    id: "04",
    name: "CityHouse - Elpino",
    location: "Quận 1, TP. HCM",
    quote: "Chuyển đổi công năng thành căn hộ dịch vụ cao cấp",
    area: "4.100 m2",
    rooms: "80 phòng",
    beforeImg: "https://cityhousemore.com/uploads/gallery/gallery-1782196352717-398720.webp",
    afterImg: "https://cityhousemore.com/uploads/gallery/gallery-1782196352717-398720.webp",
    slug: "elpino"
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
  const [sliderPos, setSliderPos] = useState(50);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
    <div className="solutions-page font-sans bg-[#FAF6EF] text-[#0F1A41]">

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
                className="font-sans inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] bg-[#B9887B] text-white hover:bg-[#8A5A3D] transition-colors shadow-lg cursor-pointer"
              >
                KHÁM PHÁ GIẢI PHÁP
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('partnership');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-sans inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/40 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-colors cursor-pointer"
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
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 mb-2 inline-block">
                      VẤN ĐỀ THƯỜNG GẶP
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-3">
                      {item.challengeTitle}
                    </h3>
                    <ul className="space-y-2 text-xs text-[#0F1A41]/75 font-sans">
                      {item.challengePoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold shrink-0">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution Block */}
                  <div className="pt-6 border-t border-[#0F1A41]/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9887B] bg-[#B9887B]/10 px-2.5 py-1 mb-2 inline-block">
                      GIẢI PHÁP CITYHOUSE
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#0F1A41] mb-3">
                      {item.solutionTitle}
                    </h4>
                    <ul className="space-y-2 text-xs text-[#0F1A41]/85 font-sans">
                      {item.solutionPoints.map((sPt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#B9887B] shrink-0 mt-0.5" />
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
                className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#B9887B] transition-colors"
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
      <section className="py-16 md:py-24 bg-[#FAF6EF] border-b border-[#0F1A41]/10">
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
              className="font-sans inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F1A41] hover:text-[#B9887B] transition-colors cursor-pointer"
            >
              <span>XEM TẤT CẢ DỰ ÁN</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {THREE_CORE_SOLUTIONS.map((sol, index) => (
              <div
                key={index}
                className="bg-white border border-[#0F1A41]/10 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F1A41] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1">
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
                    className="w-full py-3 px-4 text-center font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A41] border border-[#0F1A41]/20 hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
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
      <section className="relative w-full bg-white text-[#0F1A41] py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-slate-200 font-sans">

        {/* Section Header */}
        <div className="max-w-[1300px] mx-auto mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
            <div className="md:col-span-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none text-[#0F1A41]">
                Sự chuyển hóa <br />
                <span className="font-light italic text-[#B9887B]/70">Giá trị.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* 3-Column Layout Matching Live Website */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-slate-200 pt-10 md:pt-12 items-start">

          {/* Column 1: Left Vertical Tabs List (lg:col-span-3) */}
          <div className="lg:col-span-3 order-1">
            <p className="text-[10px] tracking-widest uppercase opacity-75 mb-4 md:mb-6 font-bold text-[#B9887B]">
              Dự án tiêu biểu ({TRANSFORMATION_PROJECTS.length})
            </p>

            <div className="no-scrollbar overflow-x-auto lg:overflow-visible flex lg:flex-col gap-3 pb-3 lg:pb-0">
              {TRANSFORMATION_PROJECTS.map((proj, idx) => {
                const isActive = selectedCaseIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setSelectedCaseIndex(idx);
                      setSliderPos(50);
                    }}
                    className={`min-w-[210px] lg:min-w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-300 block group relative cursor-pointer ${isActive
                        ? 'bg-[#B9887B]/10 border-[#B9887B] shadow-sm'
                        : 'bg-transparent border-black/5 hover:border-slate-300'
                      }`}
                  >
                    <span className={`text-[10px] font-mono block mb-1 font-bold transition-colors ${isActive ? 'text-[#B9887B]' : 'text-slate-400'}`}>
                      [{proj.id}]
                    </span>
                    <h4 className={`text-xs md:text-sm uppercase font-bold tracking-wider transition-colors ${isActive ? 'text-[#0F1A41]' : 'text-slate-400 group-hover:text-slate-700'}`}>
                      {proj.name}
                    </h4>
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B9887B] rounded-l-xl hidden lg:block" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2 & 3: Interactive Visual & Project Details (lg:col-span-9) */}
          <div className="lg:col-span-9 order-2 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:sticky lg:top-10 h-fit">

            {/* Center: Image Comparison Slider (md:col-span-8) */}
            <div className="md:col-span-8 group relative h-fit">
              <div className="border border-slate-200 rounded-2xl p-2.5 bg-slate-50 shadow-xl">
                <div
                  className="relative h-[320px] sm:h-[420px] md:h-[500px] rounded-xl overflow-hidden select-none cursor-ew-resize bg-slate-900"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                    setSliderPos(pct);
                  }}
                  onTouchMove={(e) => {
                    if (e.touches[0]) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const pct = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
                      setSliderPos(pct);
                    }
                  }}
                >
                  {/* Sau cải tạo (After - Full color view) */}
                  <img
                    src={currentCase.afterImg}
                    alt={`${currentCase.name} - Sau cải tạo`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* Hiện trạng (Before - Clipped overlay with grayscale) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <img
                      src={currentCase.beforeImg}
                      alt={`${currentCase.name} - Hiện trạng`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none grayscale brightness-95"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Draggable Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none flex flex-col items-center z-20"
                    style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="w-[2px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)]" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-white bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
                      <div className="flex items-center gap-0.5 text-[8px] font-bold">
                        <span>◀</span>
                        <span>▶</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Badges */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 z-30">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setSliderPos(100); }}
                      className={`px-3 py-1 text-[8.5px] uppercase tracking-widest backdrop-blur-sm border transition-all font-bold cursor-pointer ${sliderPos > 70 ? 'bg-[#0F1A41] text-white border-[#0F1A41] shadow-md' : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-white'
                        }`}
                    >
                      Hiện trạng
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setSliderPos(0); }}
                      className={`px-3 py-1 text-[8.5px] uppercase tracking-widest transition-all font-bold cursor-pointer shadow-sm ${sliderPos < 30 ? 'bg-[#B9887B] text-white' : 'bg-white/90 text-[#B9887B] border border-slate-200 hover:bg-white'
                        }`}
                    >
                      Sau cải tạo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Meta Details (md:col-span-4) */}
            <div className="md:col-span-4 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <div>
                  <p className="text-[#B9887B] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                    {currentCase.location}
                  </p>
                  <h3 className="text-2xl font-bold text-[#0F1A41] uppercase tracking-tight mb-4 leading-tight">
                    {currentCase.name}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed italic border-l-2 border-[#B9887B]/40 pl-4">
                    {currentCase.quote}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1 font-semibold">
                      Diện tích sàn
                    </p>
                    <p className="text-2xl font-light text-[#0F1A41] tracking-tight">
                      {currentCase.area}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1 font-semibold">
                      Số phòng
                    </p>
                    <p className="text-2xl font-light text-[#0F1A41] tracking-tight">
                      {currentCase.rooms}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate(`/dang-hoat-dong/${currentCase.slug}`)}
                className="mt-8 flex items-center gap-3 group text-[#0F1A41] hover:text-[#B9887B] transition-colors cursor-pointer w-fit"
              >
                <span className="text-xs uppercase font-bold tracking-wider">Xem dự án</span>
                <div className="h-[1px] w-8 bg-[#B9887B] group-hover:w-14 transition-all duration-300"></div>
                <ArrowRight size={14} className="text-[#B9887B] group-hover:translate-x-1 transition-transform" />
              </button>
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
                className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-[#B9887B] transition-colors group"
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
      <section className="py-16 md:py-24 bg-[#FAF6EF] border-b border-[#0F1A41]/10">
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
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all"
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
                className="bg-white border border-[#0F1A41]/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-light text-[#B9887B]">
                      {model.num}
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B9887B] bg-[#B9887B]/10 px-2 py-0.5">
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
                    className="w-full py-2.5 px-4 text-center font-sans text-xs font-bold uppercase tracking-wider text-[#0F1A41] border border-[#0F1A41]/20 hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white transition-all cursor-pointer"
                  >
                    ĐĂNG KÝ HỢP TÁC
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
