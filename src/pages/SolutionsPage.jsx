import React from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
  Check,
  Percent,
  CheckCircle2,
  Building2,
  Cpu,
  Users,
  Compass,
  FileSpreadsheet,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const LIFECYCLE_SOLUTIONS = [
  {
    code: "01",
    phaseBadge: "GIAI ĐOẠN 01: KHỞI TẠO & ĐẦU TƯ",
    title: "Giải pháp Khởi tạo & Tối ưu Suất Đầu tư (CAPEX)",
    subtitle: "Xác lập nền móng chuẩn mực ngay từ bản vẽ đầu tiên",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499266-983125.webp",
    metricValue: "12 – 15%",
    metricLabel: "ROI Dự phóng / Năm",
    metricHighlight: "Tiết kiệm 20 – 30% tổng suất đầu tư (CAPEX)",
    desc: "Đồng hành cùng Chủ đầu tư từ ý tưởng quy hoạch ban đầu: tối ưu hóa cơ cấu buồng phòng, thẩm định báo cáo khả thi (FS) và lập bài toán tài chính hoàn vốn nhanh nhất trước khi đặt viên gạch đầu tiên.",
    deliverable: "Báo cáo Thẩm định Khả thi (FS) · Bản vẽ Cơ cấu Buồng phòng · Mô hình Dòng tiền 10 Năm",
    consultingLink: "/tu-van/dau-tu",
    features: [
      "Khảo sát địa bàn và phân tích cung - cầu trong bán kính 3km",
      "Hoạch định tỷ lệ phòng tối ưu, tăng 15–20% diện tích thương phẩm",
      "Dự phóng điểm hòa vốn (BEP) và dòng tiền thu chi 10 năm",
      "Thẩm định quy chuẩn nghiệm thu PCCC và hồ sơ cấp phép kinh doanh"
    ]
  },
  {
    code: "02",
    phaseBadge: "GIAI ĐOẠN 02: TÁI SINH & NÂNG CẤP",
    title: "Giải pháp Cải tạo & Tái Sinh Giá Trị Tòa Nhà Cũ",
    subtitle: "Hồi sinh tài sản sa sút, nhân đôi năng lực khai thác thương mại",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782202629642-67015.webp",
    metricValue: "+45%",
    metricLabel: "Tăng Trưởng Giá Thuê",
    metricHighlight: "Thời gian cải tạo thần tốc: 45 – 60 ngày hoàn thiện",
    desc: "Hồi sinh các tòa nhà xuống cấp hoặc kinh doanh kém hiệu quả thông qua ngôn ngữ thiết kế nội thất đương đại và chiến lược tái định vị thương hiệu, tiếp cận tệp khách quốc tế sẵn sàng chi trả cao.",
    deliverable: "Thiết kế Concept 3D Boutique · Dự toán Thi công Bóc tách (BOQ) · Kế hoạch Đẩy bán Ra mắt",
    consultingLink: "/tu-van/cai-tao",
    features: [
      "Thẩm định hiện trạng kết cấu chịu lực và hệ thống kỹ thuật MEP",
      "Thiết kế concept nội thất boutique tận dụng tối đa khung kết cấu có sẵn",
      "Tái định vị phân khúc từ bình dân lên căn hộ dịch vụ cao cấp",
      "Đẩy bán đồng loạt trên 8+ kênh OTA quốc tế, phủ 85% buồng phòng tháng đầu"
    ]
  },
  {
    code: "03",
    phaseBadge: "GIAI ĐOẠN 03: VẬN HÀNH & KHAI THÁC",
    title: "Giải pháp Vận Hành Chuẩn Quốc Tế & Bảo Toàn Gia Sản",
    subtitle: "Bộ máy điều hành 24/7 ứng dụng công nghệ số và định giá phòng động",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
    metricValue: "95%+",
    metricLabel: "Tỷ Lệ Kín Phòng Quanh Năm",
    metricHighlight: "Tiết kiệm 40% chi phí qua Smart IoT và PMS Cloud",
    desc: "Hệ thống quản trị buồng phòng tự động 24/7 ứng dụng Cloud PMS và thuật toán Revenue Management tối ưu giá theo thị trường, đảm bảo dòng tiền đỉnh cao qua mọi mùa vụ.",
    deliverable: "Quy chuẩn SOP Vận hành 5 Sao · Hệ thống Cloud PMS · Báo cáo Đối soát Định kỳ",
    consultingLink: "/tu-van/mo-hinh",
    features: [
      "Bộ quy chuẩn nghiệp vụ SOP đồng bộ 5 sao cho Lễ tân, Buồng phòng & Kỹ thuật",
      "Thuật toán định giá động Dynamic Pricing tối ưu công suất và doanh thu",
      "Mạng lưới hơn 120+ tập đoàn đa quốc gia và khách chuyên gia FDI lưu trú",
      "Minh bạch tài chính ngày 5 hàng tháng và quy trình bảo dưỡng công trình định kỳ"
    ]
  }
];

const COLLABORATION_MODELS = [
  {
    icon: 'design',
    badge: "Mô hình 01",
    name: "Đầu tư Cải tạo Mới",
    tagline: "CityHouse đầu tư 100% nội thất",
    highlight: "Không tốn vốn đầu tư ban đầu",
    desc: "CityHouse chịu toàn bộ chi phí thiết kế, thi công và đầu tư nội thất mới theo concept thương hiệu cao cấp. Chủ đầu tư nhận phần trăm doanh thu cố định và sở hữu tài sản nâng cấp giá trị sau thời hạn hợp đồng.",
    features: [
      "CityHouse chịu 100% chi phí nội thất và decor",
      "Chủ đầu tư nhận chia sẻ doanh thu hàng tháng",
      "Sở hữu toàn bộ tài sản được nâng cấp sau hợp đồng"
    ]
  },
  {
    icon: 'key',
    badge: "Mô hình 02",
    name: "Thuê Khoán Toàn Bộ",
    tagline: "Dòng tiền cố định, an tâm tuyệt đối",
    highlight: "Cam kết dài hạn từ 5 – 10 năm",
    desc: "CityHouse thuê lại toàn bộ tòa nhà với mức lợi nhuận cố định cam kết dài hạn. Chủ tài sản không phải bận tâm về rủi ro trống phòng, biến động của thị trường hay các chi phí bảo trì hằng ngày.",
    features: [
      "Thu nhập thụ động ổn định 365 ngày/năm",
      "Không chịu rủi ro mùa thấp điểm hay trống phòng",
      "CityHouse chịu toàn bộ chi phí vận hành và bảo trì"
    ]
  },
  {
    icon: 'growth',
    badge: "Mô hình 03",
    name: "Quản lý Gia sản Gia tộc",
    tagline: "Chia sẻ lợi nhuận, tối đa hóa dòng tiền",
    highlight: "Tối ưu hóa giá trị tài sản liên thế hệ",
    desc: "Mô hình ủy thác quản lý toàn diện chuyên nghiệp. CityHouse vận hành và chia sẻ lợi nhuận theo tỷ lệ thỏa thuận, cung cấp báo cáo tài chính minh bạch hàng tháng để cùng phát triển gia sản bền vững.",
    features: [
      "Hưởng trọn tiềm năng tăng trưởng doanh thu",
      "Báo cáo tài chính kiểm toán minh bạch ngày 5 hàng tháng",
      "Bảo dưỡng kỹ thuật định kỳ bảo toàn tuổi thọ công trình"
    ]
  }
];

const ECOSYSTEM_CAPABILITIES = [
  {
    icon: Cpu,
    title: "Công nghệ PMS Cloud & Smart IoT",
    desc: "Hệ thống quản lý buồng phòng trên nền tảng đám mây kết hợp thuật toán Dynamic Pricing định giá phòng linh hoạt và khóa điện tử IoT tiết kiệm 40% chi phí vận hành."
  },
  {
    icon: Users,
    title: "Mạng lưới 120+ Đối tác FDI",
    desc: "Ký kết thỏa thuận cung cấp lưu trú dài hạn độc quyền với hơn 120 tập đoàn đa quốc gia và phái đoàn ngoại giao, đảm bảo nguồn khách chi trả cao ổn định."
  },
  {
    icon: Shield,
    title: "Quy chuẩn SOP Khách sạn 5 Sao",
    desc: "Đồng bộ nghiệp vụ lễ tân đa ngôn ngữ 24/7, vệ sinh buồng phòng tiêu chuẩn quốc tế và an ninh bảo mật nhiều lớp giúp giữ gìn uy tín tài sản."
  },
  {
    icon: Layers,
    title: "Đội ngũ Kiến trúc & Thi công Nội bộ",
    desc: "Năng lực bóc tách dự toán (BOQ), thiết kế 3D boutique và tổ chức thi công thần tốc 45–60 ngày giúp rút ngắn thời gian tài sản nằm chờ sinh lời."
  }
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Khảo sát và Thẩm định Hiện trạng",
    time: "Ngày 1 – 3",
    desc: "Đội ngũ chuyên gia trực tiếp khảo sát hiện trạng công trình, đánh giá vị trí, kỹ thuật hạ tầng (MEP) và đo lường dung lượng khách mục tiêu trong khu vực."
  },
  {
    step: "02",
    title: "Phương án và Bài toán Tài chính",
    time: "Ngày 4 – 7",
    desc: "Xây dựng phương án định vị thương hiệu, concept cải tạo, dự phóng bảng dòng tiền 5-10 năm chi tiết và đề xuất mô hình hợp tác tối ưu nhất cho Chủ sở hữu."
  },
  {
    step: "03",
    title: "Ký kết và Chuẩn hóa Sản phẩm",
    time: "Ngày 8 – 45",
    desc: "Hoàn thiện hợp đồng pháp lý minh bạch, triển khai thi công nâng cấp không gian kiến trúc và chuẩn hóa toàn bộ bộ máy vận hành SOP."
  },
  {
    step: "04",
    title: "Khai thác và Đối soát Báo cáo",
    time: "Liên tục 24/7",
    desc: "Đưa tài sản vào hệ thống phân phối đa kênh toàn cầu, tối đa hóa tỷ lệ kín phòng trên 95% và gửi báo cáo doanh thu chi tiết vào ngày 5 hàng tháng."
  }
];

const COMPARISON_ROWS = [
  {
    criteria: "Tỷ lệ kín phòng trung bình",
    selfManaged: "60 – 70% (Phụ thuộc mùa vụ, thiếu kênh phân phối)",
    cityHouse: "95%+ quanh năm nhờ 120+ đối tác FDI & 8 kênh OTA",
    advantage: true
  },
  {
    criteria: "Giá thuê buồng phòng",
    selfManaged: "Khó tăng giá, dễ bị cạnh tranh giảm giá cục bộ",
    cityHouse: "Tăng 30 – 45% sau cải tạo định vị boutique",
    advantage: true
  },
  {
    criteria: "Chi phí nhân sự & bộ máy",
    selfManaged: "Tốn kém tuyển dụng, đào tạo và giám sát 24/7",
    cityHouse: "Bộ máy tập trung chia sẻ chi phí, tiết kiệm 30%",
    advantage: true
  },
  {
    criteria: "Bảo dưỡng & Hao mòn tài sản",
    selfManaged: "Thường xử lý khi đã hỏng hóc, chi phí đột xuất cao",
    cityHouse: "Bảo trì định kỳ theo checklist kỹ thuật MEP chuẩn mực",
    advantage: true
  },
  {
    criteria: "Thời gian của Chủ sở hữu",
    selfManaged: "Bận tâm giải quyết khiếu nại khách hàng, sửa chữa ngày đêm",
    cityHouse: "Giải phóng 100% thời gian, nhận đối soát an nhàn ngày 5",
    advantage: true
  }
];

export default function SolutionsPage({ onOpenModal }) {
  const { navigate } = useNavigation();

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      navigate('/tu-van');
    }
  };

  return (
    <div className="solutions-page font-sans bg-[#FAF6EF]">
      {/* ── 1. Page Hero Banner ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9887B]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            HỆ THỐNG GIẢI PHÁP TÀI SẢN TOÀN DIỆN — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl mb-6">
            Giải pháp chuyên biệt<br />
            cho <span className="text-[#B9887B] font-serif italic">toàn bộ chu kỳ bất động sản lưu trú</span>
          </h1>
          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-3xl leading-relaxed mt-4 font-normal font-sans">
            CityHouseMore kết nối tư duy tài chính nhạy bén, năng lực thiết kế cải tạo đương đại và bộ máy vận hành chuẩn quốc tế 24/7. Chúng tôi giúp Chủ tài sản tối ưu hóa dòng tiền hôm nay, đồng thời bảo toàn và nhân rộng giá trị gia sản trường tồn qua các thế hệ.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 font-sans">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] rounded-full cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl font-sans"
              style={{
                backgroundColor: '#B9887B',
                color: '#FFFFFF',
                border: '1px solid #B9887B',
                boxShadow: '0 6px 24px rgba(185, 136, 123, 0.45)',
              }}
            >
              <span>ĐẶT LỊCH TƯ VẤN GIẢI PHÁP</span>
              <ArrowUpRight size={16} />
            </button>
            <a
              href="#partnership-models"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/40 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-all rounded-full font-sans"
            >
              <span>3 MÔ HÌNH HỢP TÁC</span>
              <ChevronRight size={16} />
            </a>
            <button
              onClick={() => navigate('/tu-van')}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#B9887B] bg-white/10 hover:bg-white/20 transition-all rounded-full font-sans"
            >
              <span>XEM TRANG TƯ VẤN CHUYÊN SÂU</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Lifecycle Continuum Solutions (3 Phases) ── */}
      <section id="lifecycle-solutions" className="py-20 md:py-28 text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HỆ KHUNG GIẢI PHÁP THEO VÒNG ĐỜI
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F1A41] leading-snug mb-3">
              Tối ưu hóa giá trị tài sản<br />
              theo <em>từng giai đoạn phát triển</em>
            </h2>
            <p className="text-sm sm:text-base text-[#0F1A41]/75 leading-relaxed">
              Mỗi giải pháp được bảo chứng bởi dữ liệu thực tế tại hơn 35 tòa nhà khắp các quận trung tâm TP.HCM, kết hợp hài hòa giữa kiến trúc, tài chính và công nghệ vận hành.
            </p>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {LIFECYCLE_SOLUTIONS.map((sol, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={sol.code}
                  className="bg-white rounded-2xl border border-[#0F1A41]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Visual Column */}
                    <div
                      className={`lg:col-span-5 relative min-h-[380px] lg:min-h-[580px] overflow-hidden bg-[#0F1A41] ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/25 to-transparent"></div>

                      {/* Top Pillar Badge */}
                      <div className="absolute top-5 left-5 bg-[#0F1A41]/90 backdrop-blur-md border border-[#B9887B]/40 px-3.5 py-1.5 rounded-full text-white flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B9887B]">
                          GIẢI PHÁP {sol.code}
                        </span>
                      </div>

                      {/* Overlaid Frosted Glass Metric Card */}
                      <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/60 shadow-2xl text-[#0F1A41]">
                        <div className="flex items-baseline justify-between mb-1.5">
                          <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0F1A41] tracking-tight">
                            {sol.metricValue}
                          </span>
                          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#B9887B]">
                            {sol.metricLabel}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-[#0F1A41]/80 font-medium border-t border-[#0F1A41]/10 pt-2 leading-relaxed">
                          {sol.metricHighlight}
                        </p>
                      </div>
                    </div>

                    {/* Content & Scope Column */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Eyebrow badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[11px] font-sans font-bold tracking-widest text-[#B9887B] uppercase">
                            {sol.phaseBadge}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] mb-2 leading-snug tracking-tight">
                          {sol.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B9887B] font-semibold mb-4">
                          {sol.subtitle}
                        </p>

                        {/* Narrative Description */}
                        <p className="font-sans text-sm text-[#0F1A41]/75 leading-relaxed mb-6 max-w-2xl">
                          {sol.desc}
                        </p>

                        {/* Features Checklist */}
                        <div className="space-y-3 mb-8">
                          {sol.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0F1A41]/85">
                              <CheckCircle2 size={16} className="text-[#B9887B] shrink-0 mt-0.5" />
                              <span className="leading-relaxed font-medium">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Deliverables Bar */}
                        <div className="p-3.5 rounded-xl bg-[#0F1A41]/[0.03] border border-[#0F1A41]/10 mb-8 text-xs text-[#0F1A41]/80 font-sans">
                          <span className="text-[#0F1A41] font-bold">Hồ sơ giải pháp bàn giao: </span>
                          <span className="text-[#0F1A41]/75">{sol.deliverable}</span>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#0F1A41]/10">
                        <button
                          onClick={handleCtaClick}
                          className="solid-btn inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                          style={{
                            backgroundColor: '#B9887B',
                            color: '#FFFFFF',
                            border: '1px solid #B9887B',
                            boxShadow: '0 4px 18px rgba(185, 136, 123, 0.45)',
                          }}
                        >
                          <span>ÁP DỤNG GIẢI PHÁP NÀY</span>
                          <ArrowUpRight size={15} className="text-white" />
                        </button>

                        <button
                          onClick={() => navigate(sol.consultingLink)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F1A41] hover:text-[#B9887B] transition-colors cursor-pointer"
                        >
                          <span>Xem dịch vụ tư vấn chi tiết</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. 3 Collaboration Models ── */}
      <section id="partnership-models" className="py-20 md:py-28 bg-[#0B1330] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                PHƯƠNG THỨC HỢP TÁC CHIẾN LƯỢC
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
                3 mô hình linh hoạt<br />
                <em>phù hợp khẩu vị Chủ tài sản</em>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed self-start md:self-auto">
              Tùy thuộc vào mục tiêu tài chính, mức độ sẵn sàng đầu tư và mong muốn tham gia vận hành, CityHouse thiết kế các giải pháp hợp tác bảo vệ tối đa lợi ích của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COLLABORATION_MODELS.map((m, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#B9887B] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#B9887B]/70 group-hover:text-[#B9887B] font-light">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-[#B9887B] font-bold border border-white/10">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-1.5 group-hover:text-[#B9887B] transition-colors">
                    {m.name}
                  </h3>

                  <div className="font-sans text-xs text-[#B9887B] mb-4 font-semibold">
                    {m.tagline}
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 font-medium mb-4 flex items-center gap-2">
                    <Percent size={14} className="text-[#B9887B] shrink-0" />
                    <span>{m.highlight}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mb-8">
                    {m.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                        <Check size={13} className="text-[#B9887B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCtaClick}
                  className="w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-white/20 text-white hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white"
                >
                  <span>HỢP TÁC THEO MÔ HÌNH NÀY</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Ecosystem & Execution Capabilities ── */}
      <section id="ecosystem" className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              NĂNG LỰC HỆ SINH THÁI THỰC THI
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              Nền tảng bảo chứng<br />
              <em>cho sự thành công của tài sản</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#0F1A41]/75 mt-3 leading-relaxed">
              Giải pháp của CityHouse không dừng lại ở lý thuyết mà được vận hành trên hạ tầng công nghệ và mạng lưới đối tác đã được kiểm nghiệm qua 10+ năm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECOSYSTEM_CAPABILITIES.map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-[#0F1A41]/10 hover:border-[#B9887B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] text-[#B9887B] border border-[#B9887B]/20 flex items-center justify-center mb-5">
                      <IconComp size={24} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-2 leading-snug">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#0F1A41]/70 leading-relaxed mt-2">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Comparison: Self-Managed vs CityHouse Solution ── */}
      <section className="py-20 md:py-28 bg-white text-[#0F1A41] border-t border-[#0F1A41]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              SO SÁNH HIỆU QUẢ THỰC TẾ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              Tự vận hành đơn lẻ<br />
              <em>vs Đồng hành cùng Giải pháp CityHouse</em>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#0F1A41]/15 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <thead>
                <tr className="bg-[#0F1A41] text-white">
                  <th className="p-4 sm:p-5 font-semibold font-serif text-sm sm:text-base border-r border-white/10 w-1/3">
                    Tiêu chí Đánh giá
                  </th>
                  <th className="p-4 sm:p-5 font-medium text-white/70 border-r border-white/10 w-1/3">
                    Tự Khai thác / Quản lý Truyền thống
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-[#B9887B] bg-[#142358] w-1/3">
                    Giải pháp CityHouseMore
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0F1A41]/10">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF6EF]/60 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-[#0F1A41] border-r border-[#0F1A41]/10 bg-[#FAF6EF]/30">
                      {row.criteria}
                    </td>
                    <td className="p-4 sm:p-5 text-[#0F1A41]/75 border-r border-[#0F1A41]/10">
                      {row.selfManaged}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-[#0F1A41] bg-[#B9887B]/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#B9887B] shrink-0 mt-0.5" />
                        <span>{row.cityHouse}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. 4-Step Standardized Workflow ── */}
      <section className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41] border-t border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              QUY TRÌNH HỢP TÁC CHUẨN HÓA
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              4 bước minh bạch<br />
              <em>từ khảo sát đến vận hành</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-white rounded-2xl border border-[#0F1A41]/10 shadow-sm hover:shadow-md hover:border-[#B9887B]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#B9887B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-sans px-2.5 py-1 rounded-full bg-[#FAF6EF] text-[#0F1A41]/70 font-semibold border border-[#0F1A41]/5">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-2 leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed mt-3">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner bridging to Consultation */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0F1A41] to-[#162456] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B9887B] block mb-1">
                BẠN CẦN PHÂN TÍCH CHUYÊN SÂU TÀI SẢN?
              </span>
              <h3 className="font-serif text-2xl font-bold">
                Đặt lịch làm việc trực tiếp cùng Chuyên gia Tư vấn CityHouse
              </h3>
              <p className="text-xs text-white/75 mt-1 max-w-xl">
                Chúng tôi cung cấp dịch vụ tư vấn đầu tư mới, tư vấn cải tạo tái định vị và tư vấn mô hình vận hành theo từng bài toán cụ thể.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/tu-van')}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0F1A41] hover:bg-[#FAF6EF] transition-all cursor-pointer shadow-md"
              >
                TRANG TƯ VẤN CHUYÊN SÂU
              </button>
              <button
                onClick={handleCtaClick}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#B9887B] hover:bg-[#a57467] transition-all cursor-pointer shadow-md"
              >
                ĐẶT LỊCH TƯ VẤN NGAY
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
