import React from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
  Check,
  Percent
} from 'lucide-react';
import LuxuryIcon from '../components/common/LuxuryIcon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { useNavigation } from '../context/NavigationContext.jsx';

const DETAILED_SOLUTIONS = [
  {
    code: "01",
    pillarName: "TRỤ CỘT 01",
    title: "Tư vấn Đầu tư & Phát triển Dự án",
    subtitle: "Xác lập nền móng vững chắc ngay từ quyết định đầu tư đầu tiên",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499266-983125.webp",
    metricValue: "12 – 15%",
    metricLabel: "ROI Dự phóng / Năm",
    metricHighlight: "Tiết kiệm 20 – 30% tổng suất đầu tư (CAPEX)",
    desc: "Đồng hành từ ý tưởng sơ khởi: khảo sát thực địa, tối ưu cơ cấu phòng và lập bài toán tài chính hoàn vốn nhanh nhất ngay từ bản vẽ đầu tiên.",
    deliverable: "Báo cáo Thẩm định Khả thi (FS) · Bản vẽ Cơ cấu Phòng · Dự phóng Dòng tiền 10 Năm",
    items: [
      {
        icon: 'survey',
        title: "Khảo sát Địa bàn & Cung - Cầu",
        desc: "Phân tích nhân khẩu học và đối thủ cạnh tranh trong bán kính 3km."
      },
      {
        icon: 'zoning',
        title: "Cơ cấu Diện tích & Tiện ích",
        desc: "Hoạch định tỷ lệ phòng tối ưu tối đa diện tích thương phẩm."
      },
      {
        icon: 'finance',
        title: "Mô hình Tài chính & Điểm hòa vốn",
        desc: "Tính toán chi tiết CAPEX, OPEX, BEP và chu kỳ thu hồi vốn."
      },
      {
        icon: 'legal',
        title: "Pháp lý Lưu trú & Chuẩn PCCC",
        desc: "Thẩm định quy chuẩn nghiệm thu PCCC và hồ sơ cấp phép kinh doanh."
      }
    ]
  },
  {
    code: "02",
    pillarName: "TRỤ CỘT 02",
    title: "Tư vấn Cải tạo & Tái định vị Tòa nhà",
    subtitle: "Hồi sinh tài sản cũ, nhân đôi giá trị khai thác thương mại",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782202629642-67015.webp",
    metricValue: "+45%",
    metricLabel: "Tăng Trưởng Giá Thuê",
    metricHighlight: "Thời gian cải tạo thần tốc: 45 – 60 ngày hoàn thiện",
    desc: "Hồi sinh tòa nhà xuống cấp qua thiết kế nội thất đương đại và tái định vị thương hiệu tiếp cận tệp khách quốc tế sẵn sàng chi trả cao.",
    deliverable: "Thiết kế Concept 3D Boutique · Dự toán Thi công Bóc tách (BOQ) · Kế hoạch Ra mắt",
    items: [
      {
        icon: 'mep',
        title: "Thẩm định Hiện trạng & Hệ MEP",
        desc: "Rà soát toàn diện kết cấu, hạ tầng kỹ thuật và trải nghiệm lưu trú."
      },
      {
        icon: 'design',
        title: "Thiết kế Concept Tối ưu Chi phí",
        desc: "Tận dụng tối đa khung kết cấu có sẵn, nâng tầm thẩm mỹ không gian."
      },
      {
        icon: 'growth',
        title: "Tái định vị Phân khúc Mục tiêu",
        desc: "Nâng cấp từ mô hình bình dân sang chuỗi boutique sang trọng."
      },
      {
        icon: 'launch',
        title: "Chiến dịch Ra mắt & Khai trương",
        desc: "Đẩy bán đồng loạt trên 8+ kênh OTA, phủ kín 85% phòng ngay tháng đầu."
      }
    ]
  },
  {
    code: "03",
    pillarName: "TRỤ CỘT 03",
    title: "Tư vấn Mô hình & Quản lý Vận hành Toàn diện",
    subtitle: "Vận hành chuẩn mực quốc tế, tối đa hóa công suất và bảo toàn tài sản",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
    metricValue: "95%+",
    metricLabel: "Tỷ Lệ Kín Phòng Quanh Năm",
    metricHighlight: "Tiết kiệm 40% chi phí lễ tân qua Smart IoT & PMS Cloud",
    desc: "Thiết lập bộ máy quản trị 24/7 ứng dụng công nghệ PMS số hóa và định giá buồng phòng động, đảm bảo dòng tiền đỉnh cao qua mọi mùa vụ.",
    deliverable: "Quy chuẩn SOP Vận hành 5 Sao · Hệ thống Cloud PMS · Báo cáo Đối soát Ngày 5 Hàng Tháng",
    items: [
      {
        icon: 'legal',
        title: "Quy chuẩn SOP Vận hành 5 Sao",
        desc: "Đồng bộ nghiệp vụ Lễ tân 24/7, Buồng phòng, Kỹ thuật và An ninh bảo mật."
      },
      {
        icon: 'finance',
        title: "Định giá Doanh thu Động (Dynamic)",
        desc: "Thuật toán Revenue Management tự động tối ưu giá bán theo thị trường."
      },
      {
        icon: 'building',
        title: "Mạng lưới Khách thuê FDI",
        desc: "Ký kết lưu trú dài hạn với hơn 120+ tập đoàn đa quốc gia."
      },
      {
        icon: 'deliverable',
        title: "Minh bạch Tài chính & Bảo trì",
        desc: "Báo cáo doanh thu đối soát chi tiết ngày 5; bảo dưỡng công trình định kỳ."
      }
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
      "CityHouse chịu 100% chi phí nội thất & decor",
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
      "CityHouse chịu toàn bộ chi phí vận hành & bảo trì"
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

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Khảo sát & Thẩm định Hiện trạng",
    time: "Ngày 1 – 3",
    desc: "Đội ngũ chuyên gia trực tiếp khảo sát hiện trạng công trình, đánh giá vị trí, kỹ thuật hạ tầng (MEP) và đo lường dung lượng khách mục tiêu trong khu vực."
  },
  {
    step: "02",
    title: "Phương án & Bài toán Tài chính",
    time: "Ngày 4 – 7",
    desc: "Xây dựng phương án định vị thương hiệu, concept cải tạo, dự phóng bảng dòng tiền 5-10 năm chi tiết và đề xuất mô hình hợp tác tối ưu nhất cho Chủ sở hữu."
  },
  {
    step: "03",
    title: "Ký kết & Chuẩn hóa Sản phẩm",
    time: "Ngày 8 – 45",
    desc: "Hoàn thiện hợp đồng pháp lý minh bạch, triển khai thi công nâng cấp không gian kiến trúc và chuẩn hóa toàn bộ bộ máy vận hành SOP."
  },
  {
    step: "04",
    title: "Khai thác & Đối soát Báo cáo",
    time: "Liên tục 24/7",
    desc: "Đưa tài sản vào hệ thống phân phối đa kênh toàn cầu, tối đa hóa tỷ lệ kín phòng trên 95% và gửi báo cáo doanh thu chi tiết vào ngày 5 hàng tháng."
  }
];

export default function SolutionsPage({ onOpenModal }) {
  const { navigate } = useNavigation();

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="solutions-page font-sans">
      {/* ── Page Hero ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            GIẢI PHÁP TÀI SẢN — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl mb-6">
            Giải pháp chuyên biệt<br />
            cho <span className="text-[#B9887B] font-serif italic">chu kỳ bất động sản lưu trú</span>
          </h1>
          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed mt-4 font-normal font-sans">
            Đồng hành cùng Chủ đầu tư từ ý tưởng quy hoạch ban đầu đến khi tòa nhà đi vào vận hành ổn định, đảm bảo tài sản vừa sinh dòng tiền vượt trội hôm nay, vừa gia tăng giá trị trường tồn qua các thế hệ.
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
              <span>ĐẶT LỊCH TƯ VẤN NGAY</span>
              <ArrowUpRight size={16} />
            </button>
            <a
              href="#partnership-models"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/40 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-all rounded-full font-sans"
            >
              <span>3 MÔ HÌNH HỢP TÁC</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 3 Core Strategic Pillars (Architectural Dossier Layout) ── */}
      <section id="solutions-detail" className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              3 TRỤ CỘT GIẢI PHÁP CHIẾN LƯỢC
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F1A41] leading-snug mb-3">
              Tối ưu hóa tài sản<br />
              theo <em>từng giai đoạn phát triển</em>
            </h2>
            <p className="text-sm sm:text-base text-[#0F1A41]/75 leading-relaxed">
              Mỗi giải pháp được thiết kế tỉ mỉ, kết hợp giữa tư duy tài chính sắc bén và năng lực thực thi kiến trúc – vận hành thực tế tại hơn 35 tòa nhà khắp TP.HCM.
            </p>
          </div>

          {/* Pillars List with Alternating Visual / Content Layout */}
          <div className="flex flex-col gap-16 md:gap-24">
            {DETAILED_SOLUTIONS.map((sol, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={sol.code}
                  className="bg-white rounded-lg border border-[#0F1A41]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
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
                      <div className="absolute top-5 left-5 bg-[#0F1A41]/90 backdrop-blur-md border border-[#B9887B]/40 px-3.5 py-1.5 rounded text-white flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B9887B]">
                          {sol.pillarName}
                        </span>
                      </div>

                      {/* Overlaid Frosted Glass Metric Card */}
                      <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded border border-white/60 shadow-2xl text-[#0F1A41]">
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
                        {/* Eyebrow badge: Unified, clean, no code slashes */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[11px] font-sans font-bold tracking-widest text-[#B9887B] uppercase">
                            {sol.pillarName}
                          </span>
                          <span className="text-gray-300">·</span>
                          <span className="text-[11px] font-sans tracking-wider text-[#0F1A41]/50 uppercase font-medium">
                            GIẢI PHÁP GIA SẢN
                          </span>
                        </div>

                        {/* Title: Unified Serif Cormorant Garamond, bold */}
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] mb-3 leading-snug tracking-tight">
                          {sol.title}
                        </h3>

                        {/* Narrative Description: Clean lead copy without distracting quote marks */}
                        <p className="font-sans text-sm text-[#0F1A41]/75 leading-relaxed mb-8 max-w-2xl">
                          {sol.desc}
                        </p>

                        {/* Scope of Work Grid (4 Balanced Minimalist Cards) */}
                        <div className="mb-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {sol.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="p-4.5 rounded-xl bg-white border border-[#0F1A41]/10 hover:border-[#0F1A41]/30 hover:shadow-2xs transition-all duration-300 group/item flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center gap-3 mb-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#0F1A41]/8 text-[#0F1A41] flex items-center justify-center shrink-0 group-hover/item:bg-[#0F1A41] group-hover/item:text-white transition-all duration-300 shadow-2xs">
                                      <LuxuryIcon name={item.icon} size={15} strokeWidth={1.35} />
                                    </div>
                                    <h4 className="font-serif text-[13.5px] sm:text-sm text-[#0F1A41] font-bold leading-snug">
                                      {item.title}
                                    </h4>
                                  </div>
                                  <p className="font-sans text-xs text-[#0F1A41]/70 leading-relaxed font-normal pl-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Deliverables: Sleek metadata line, not an overpowering heavy box */}
                        <div className="pt-4 pb-2 border-t border-[#0F1A41]/10 flex items-start gap-2.5 mb-8 text-xs text-[#0F1A41]/80 font-sans">
                          <LuxuryIcon name="deliverable" size={15} strokeWidth={1.35} className="text-[#0F1A41]/70 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="text-[#0F1A41] font-bold">Kết quả bàn giao: </span>
                            <span className="text-[#0F1A41]/75">{sol.deliverable}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div>
                        <button
                          onClick={handleCtaClick}
                          className="solid-btn inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                          style={{
                            backgroundColor: '#B9887B',
                            color: '#FFFFFF',
                            border: '1px solid #B9887B',
                            boxShadow: '0 4px 18px rgba(185, 136, 123, 0.45)',
                          }}
                        >
                          <span>TƯ VẤN {sol.pillarName}</span>
                          <ArrowUpRight size={15} className="text-white" />
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

      {/* ── 3 Collaboration Models (Elevated Cards) ── */}
      <section id="partnership-models" className="py-20 md:py-28 bg-[#0B1330] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3">
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
                className="p-8 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#B9887B] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#B9887B] group-hover:border-[#B9887B]/60 group-hover:bg-[#B9887B]/10 transition-all">
                      <LuxuryIcon name={m.icon} size={20} strokeWidth={1.25} />
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-[#B9887B] font-bold border border-white/10">
                      {m.badge}
                    </span>
                  </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-1.5 group-hover:text-[#B9887B] transition-colors">
                      {m.name}
                    </h3>

                    <div className="font-sans text-xs text-[#B9887B] mb-4 font-semibold">
                      {m.tagline}
                    </div>

                    <div className="p-2.5 rounded bg-white/5 border border-white/10 text-xs text-white/90 font-medium mb-4 flex items-center gap-2">
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
                    className="w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-white/20 text-white hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white"
                  >
                    <span>TƯ VẤN MÔ HÌNH NÀY</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-Step Standardized Workflow ── */}
      <section className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41]">
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
                className="p-6 bg-white rounded border border-[#0F1A41]/10 shadow-sm hover:shadow-md hover:border-[#B9887B]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#B9887B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-[#FAF6EF] text-[#0F1A41]/60 font-semibold border border-[#0F1A41]/5">
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
        </div>
      </section>

      {/* ── Consultation Form Section ── */}
      <section id="contact-solutions" className="py-20 md:py-28 bg-[#0F1A41] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="contact-layout">
            <div className="contact-info-col">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                KẾT NỐI VỚI CHUYÊN GIA CITYHOUSE MORE
              </p>
              <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.25] mb-6">
                ĐẶT LỊCH TƯ VẤN<br />
                <span className="text-[#B9887B]">GIẢI PHÁP TÀI SẢN</span>
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-lg">
                Hãy chia sẻ thông tin về bất động sản của bạn. Đội ngũ chuyên gia giàu kinh nghiệm của CityHouse More sẽ trực tiếp khảo sát hiện trạng và gửi báo cáo phân tích tiềm năng khai thác trong vòng <strong>24 giờ làm việc</strong>.
              </p>

              <div className="contact-detail-list grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans mb-6">
                <div className="bg-white/[0.04] p-3.5 rounded border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase">HOTLINE TƯ VẤN 24/7</span>
                  <strong className="text-sm text-[#B9887B]">0878 253 545</strong>
                </div>
                <div className="bg-white/[0.04] p-3.5 rounded border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase">EMAIL HỢP TÁC</span>
                  <strong className="text-sm text-white">info@cityhousemore.com</strong>
                </div>
              </div>
            </div>

            <div className="contact-form-col bg-white p-6 sm:p-8 rounded text-[#0F1A41] shadow-2xl">
              <div className="mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] mb-2.5 leading-snug">
                  GỬI YÊU CẦU TƯ VẤN GIẢI PHÁP
                </h3>
                <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed">
                  Nhận báo cáo sơ bộ phân tích hiện trạng & mô hình khai thác phù hợp nhất.
                </p>
              </div>

              <ContactForm submitLabel="GỬI YÊU CẦU TƯ VẤN GIẢI PHÁP" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
