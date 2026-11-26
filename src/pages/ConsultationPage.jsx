import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
  Check,
  Percent,
  Calendar,
  Phone,
  FileText,
  Building2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Briefcase
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

const CONSULTING_PILLARS = [
  {
    code: "01",
    id: "tu-van-dau-tu",
    path: "/tu-van/dau-tu",
    pillarName: "TRỤ CỘT 01",
    serviceTitle: "Tư vấn Đầu tư và Phát triển Dự án Mới",
    subtitle: "Xác lập nền móng vững chắc ngay từ quyết định đầu tư ban đầu",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499266-983125.webp",
    badge: "GIAI ĐOẠN KHỞI TẠO",
    metricValue: "12 – 15%",
    metricLabel: "ROI Dự phóng / Năm",
    metricHighlight: "Tiết kiệm 20 – 30% tổng suất đầu tư (CAPEX)",
    targetAsset: "Quỹ đất trống, nhà phố chuyển đổi, tòa nhà xây mới hoặc chuẩn bị xin phép",
    desc: "Đồng hành cùng Chủ đầu tư từ ý tưởng sơ khởi: khảo sát thực địa kỹ lưỡng, tối ưu hóa cơ cấu buồng phòng và thiết lập bài toán tài chính hoàn vốn nhanh nhất ngay từ bản vẽ thiết kế đầu tiên.",
    deliverable: "Báo cáo Thẩm định Khả thi (FS) · Bản vẽ Cơ cấu Phòng · Dự phóng Dòng tiền 10 Năm · Kế hoạch Vốn & Điểm Hòa Vốn (BEP)",
    items: [
      {
        stepNum: "01",
        title: "Khảo sát Địa bàn & Cung - Cầu",
        desc: "Đo lường dung lượng thị trường, phân tích nhân khẩu học và đối thủ cạnh tranh trực tiếp trong bán kính 3km."
      },
      {
        stepNum: "02",
        title: "Cơ cấu Diện tích & Tiện ích",
        desc: "Hoạch định tỷ lệ phòng thông minh, tăng thêm 15 – 20% diện tích thương phẩm khai thác cho Chủ sở hữu."
      },
      {
        stepNum: "03",
        title: "Mô hình Tài chính & Điểm hòa vốn",
        desc: "Tính toán chi tiết CAPEX, OPEX, dự phóng dòng tiền thu chi 10 năm và điểm hòa vốn theo từng kịch bản thị trường."
      },
      {
        stepNum: "04",
        title: "Pháp lý Lưu trú & Chuẩn PCCC",
        desc: "Thẩm định quy chuẩn nghiệm thu PCCC hiện hành, hỗ trợ hoàn thiện hồ sơ cấp phép kinh doanh khách sạn & căn hộ dịch vụ."
      }
    ]
  },
  {
    code: "02",
    id: "tu-van-cai-tao",
    path: "/tu-van/cai-tao",
    pillarName: "TRỤ CỘT 02",
    serviceTitle: "Tư vấn Cải tạo và Tái định vị Tòa nhà Cũ",
    subtitle: "Hồi sinh tài sản xuống cấp, nhân đôi giá trị khai thác thương mại",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782202629642-67015.webp",
    badge: "GIAI ĐOẠN NÂNG CẤP",
    metricValue: "+45%",
    metricLabel: "Tăng Trưởng Giá Thuê",
    metricHighlight: "Thời gian cải tạo thần tốc: 45 – 60 ngày hoàn thiện",
    targetAsset: "Tòa nhà cũ, khách sạn kinh doanh sa sút, tỷ lệ trống cao, xuống cấp trang thiết bị",
    desc: "Hồi sinh tòa nhà xuống cấp qua thiết kế nội thất đương đại và tái định vị thương hiệu, tận dụng tối đa kết cấu có sẵn để tiếp cận tệp khách quốc tế và chuyên gia sẵn sàng chi trả cao.",
    deliverable: "Thiết kế Concept 3D Boutique · Dự toán Thi công Bóc tách (BOQ) · Kế hoạch Ra mắt & Chiến dịch Đẩy bán 85% Tháng Đầu",
    items: [
      {
        stepNum: "01",
        title: "Thẩm định Hiện trạng & Hệ MEP",
        desc: "Rà soát toàn diện kết cấu chịu lực, hạ tầng điện nước, thoát nước, PCCC và đánh giá độ hao mòn vật tư."
      },
      {
        stepNum: "02",
        title: "Thiết kế Concept Tối ưu Chi phí",
        desc: "Tận dụng tối đa khung kết cấu có sẵn, phối vật liệu đương đại sang trọng, giảm thiểu đập phá không cần thiết."
      },
      {
        stepNum: "03",
        title: "Tái định vị Phân khúc Khách mục tiêu",
        desc: "Nâng tầm sản phẩm từ phòng trọ / căn hộ bình dân sang chuỗi boutique sang trọng, mở rộng biên độ giá thuê."
      },
      {
        stepNum: "04",
        title: "Chiến dịch Ra mắt & Phủ kín Buồng phòng",
        desc: "Đẩy bán đồng loạt trên 8+ kênh OTA quốc tế kết hợp mạng lưới khách FDI, cam kết phủ kín 85% phòng ngay tháng đầu tiên."
      }
    ]
  },
  {
    code: "03",
    id: "tu-van-mo-hinh",
    path: "/tu-van/mo-hinh",
    pillarName: "TRỤ CỘT 03",
    serviceTitle: "Tư vấn Mô hình và Thiết lập Bộ máy Vận hành",
    subtitle: "Vận hành chuẩn mực quốc tế, tối đa hóa công suất và bảo toàn tài sản",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
    badge: "GIAI ĐOẠN KHAI THÁC",
    metricValue: "95%+",
    metricLabel: "Tỷ Lệ Kín Phòng Quanh Năm",
    metricHighlight: "Tiết kiệm 40% chi phí qua Smart IoT và PMS Cloud",
    targetAsset: "Tòa nhà mới bàn giao, chủ nhà bận rộn cần đơn vị chuyên nghiệp quản lý toàn diện",
    desc: "Thiết lập bộ máy quản trị 24/7 ứng dụng công nghệ PMS số hóa và định giá buồng phòng động, đảm bảo dòng tiền đỉnh cao qua mọi mùa vụ và giải phóng hoàn toàn thời gian cho Chủ đầu tư.",
    deliverable: "Bộ Quy chuẩn SOP Vận hành 5 Sao · Tài khoản Cấu hình PMS Cloud · Mạng lưới Hợp đồng Doanh nghiệp FDI · Báo cáo Đối soát Định kỳ",
    items: [
      {
        stepNum: "01",
        title: "Xây dựng Quy chuẩn SOP Vận hành",
        desc: "Chuyển giao và chuẩn hóa quy trình Lễ tân 24/7, Buồng phòng tiêu chuẩn 5 sao, Kỹ thuật bảo trì và An ninh bảo mật."
      },
      {
        stepNum: "02",
        title: "Thuật toán Định giá Doanh thu Động",
        desc: "Tích hợp công cụ Dynamic Pricing tự động điều chỉnh giá bán theo thuật toán mùa vụ và diễn biến cung - cầu TP.HCM."
      },
      {
        stepNum: "03",
        title: "Kết nối Mạng lưới Khách thuê FDI",
        desc: "Đưa tài sản vào danh mục lưu trú ưu tiên của hơn 120+ tập đoàn đa quốc gia và đối tác lữ hành toàn cầu."
      },
      {
        stepNum: "04",
        title: "Minh bạch Tài chính & Bảo dưỡng Định kỳ",
        desc: "Hệ thống đối soát doanh thu chi tiết vào ngày 5 hàng tháng; quy trình bảo dưỡng kỹ thuật ngăn ngừa sự cố 24/7."
      }
    ]
  }
];

const CONSULTING_PROCESS = [
  {
    step: "01",
    title: "Tiếp nhận & Phân tích Sơ bộ",
    duration: "Trong 12 giờ",
    desc: "Chuyên gia tiếp nhận thông tin về vị trí, hiện trạng, quy mô và mục tiêu kỳ vọng của Quý khách qua form hoặc hotline tư vấn."
  },
  {
    step: "02",
    title: "Khảo sát Thực địa Tận nơi",
    duration: "Ngày 1 – 2",
    desc: "Đội ngũ chuyên gia kiến trúc và vận hành trực tiếp đến khảo sát công trình, đo đạc kết cấu, kiểm tra kỹ thuật MEP và đối thủ xung quanh."
  },
  {
    step: "03",
    title: "Xây dựng Báo cáo & Bài toán Tài chính",
    duration: "Ngày 3 – 5",
    desc: "Lập báo cáo thẩm định chuyên sâu, bản vẽ layout đề xuất, bảng dự phóng dòng tiền chi tiết và kịch bản phân bổ vốn tối ưu."
  },
  {
    step: "04",
    title: "Thuyết trình Phương án & Ký kết NDA",
    duration: "Ngày 6 – 7",
    desc: "Họp trực tiếp cùng Chủ sở hữu để phân tích từng chỉ số, cam kết bảo mật 100% dữ liệu tài sản và thống nhất lộ trình triển khai."
  }
];

export default function ConsultationPage({ onOpenModal }) {
  const { currentPath, navigate } = useNavigation();

  useEffect(() => {
    let targetId = '';
    if (currentPath === '/tu-van/dau-tu') targetId = 'tu-van-dau-tu';
    else if (currentPath === '/tu-van/cai-tao') targetId = 'tu-van-cai-tao';
    else if (currentPath === '/tu-van/mo-hinh') targetId = 'tu-van-mo-hinh';
    else if (window.location.hash) targetId = window.location.hash.replace('#', '');

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [currentPath]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleConsultCta = (serviceCode) => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      scrollToSection('consultation-booking');
    }
  };

  return (
    <div className="consultation-page font-sans bg-[#FAF6EF]">
      {/* ── 1. Page Hero Banner ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9887B]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            DỊCH VỤ TƯ VẤN CHUYÊN SÂU — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl mb-6">
            Tư vấn chiến lược<br />
            cho <span className="text-[#B9887B] font-serif italic">chủ sở hữu bất động sản lưu trú</span>
          </h1>
          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-3xl leading-relaxed mt-4 font-normal font-sans">
            Đội ngũ chuyên gia CityHouseMore cung cấp dịch vụ tư vấn đo ni đóng giày dựa trên dữ liệu vận hành thực tế tại 35+ tòa nhà khắp TP.HCM. Chúng tôi đồng hành giúp Quý vị tối ưu hóa suất đầu tư, giải cứu tài sản sa sút và thiết lập bộ máy khai thác dòng tiền an nhàn.
          </p>

          {/* Quick Pillar Direct Links */}
          <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10 font-sans">
            <button
              onClick={() => navigate('/tu-van/dau-tu')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#B9887B] text-white hover:text-white transition-all cursor-pointer border border-white/15"
            >
              <span>1. TƯ VẤN ĐẦU TƯ</span>
              <ChevronRight size={13} />
            </button>
            <button
              onClick={() => navigate('/tu-van/cai-tao')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#B9887B] text-white hover:text-white transition-all cursor-pointer border border-white/15"
            >
              <span>2. TƯ VẤN CẢI TẠO</span>
              <ChevronRight size={13} />
            </button>
            <button
              onClick={() => navigate('/tu-van/mo-hinh')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#B9887B] text-white hover:text-white transition-all cursor-pointer border border-white/15"
            >
              <span>3. TƯ VẤN MÔ HÌNH</span>
              <ChevronRight size={13} />
            </button>
            <button
              onClick={() => scrollToSection('consultation-booking')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:shadow-xl text-white ml-auto"
              style={{
                backgroundColor: '#B9887B',
                border: '1px solid #B9887B',
                boxShadow: '0 4px 16px rgba(185, 136, 123, 0.45)',
              }}
            >
              <Calendar size={14} />
              <span>ĐẶT LỊCH TƯ VẤN TÀI SẢN</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Why Choose CityHouse Advisory ── */}
      <section className="py-12 bg-white border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#0F1A41]">
            <div className="flex items-center gap-3.5 p-3">
              <div className="w-11 h-11 rounded-xl bg-[#FAF6EF] border border-[#B9887B]/30 flex items-center justify-center text-[#B9887B] shrink-0">
                <Building2 size={22} />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#0F1A41]">35+ Tòa nhà</div>
                <div className="text-xs text-[#0F1A41]/70">Đang vận hành thực chiến</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3">
              <div className="w-11 h-11 rounded-xl bg-[#FAF6EF] border border-[#B9887B]/30 flex items-center justify-center text-[#B9887B] shrink-0">
                <TrendingUp size={22} />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#0F1A41]">12 – 15%</div>
                <div className="text-xs text-[#0F1A41]/70">ROI hoàn vốn trung bình</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3">
              <div className="w-11 h-11 rounded-xl bg-[#FAF6EF] border border-[#B9887B]/30 flex items-center justify-center text-[#B9887B] shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#0F1A41]">48 Giờ</div>
                <div className="text-xs text-[#0F1A41]/70">Thẩm định thực địa nhanh</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3">
              <div className="w-11 h-11 rounded-xl bg-[#FAF6EF] border border-[#B9887B]/30 flex items-center justify-center text-[#B9887B] shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#0F1A41]">100% NDA</div>
                <div className="text-xs text-[#0F1A41]/70">Bảo mật thông tin tài sản</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 3 Core Strategic Consulting Pillars ── */}
      <section className="py-20 md:py-28 text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HỆ THỐNG GÓI TƯ VẤN CHUYÊN SÂU
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F1A41] leading-snug mb-3">
              Tư vấn toàn diện<br />
              theo <em>từng giai đoạn của bất động sản</em>
            </h2>
            <p className="text-sm sm:text-base text-[#0F1A41]/75 leading-relaxed">
              Dù Quý khách đang ở giai đoạn lập dự án, chuẩn bị cải tạo tòa nhà hay cần chuyển giao bộ máy vận hành chuẩn quốc tế, CityHouse đều có gói giải pháp tư vấn tương ứng.
            </p>
          </div>

          {/* Pillars List */}
          <div className="flex flex-col gap-16 md:gap-24">
            {CONSULTING_PILLARS.map((sol, index) => {
              const isEven = index % 2 === 1;

              return (
                <article
                  key={sol.code}
                  id={sol.id}
                  className="bg-white rounded-2xl border border-[#0F1A41]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group scroll-mt-28"
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
                        alt={sol.serviceTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/25 to-transparent"></div>

                      {/* Top Pillar Badge */}
                      <div className="absolute top-5 left-5 bg-[#0F1A41]/90 backdrop-blur-md border border-[#B9887B]/40 px-3.5 py-1.5 rounded-full text-white flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B9887B]">
                          {sol.pillarName}
                        </span>
                        <span className="text-white/40">·</span>
                        <span className="text-[10px] text-white/80 font-medium">
                          {sol.badge}
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
                        {/* Target Asset Tag */}
                        <div className="mb-3">
                          <span className="text-[11px] font-sans font-bold tracking-widest text-[#B9887B] uppercase block mb-1">
                            {sol.pillarName} — DỊCH VỤ TƯ VẤN
                          </span>
                          <div className="text-xs text-[#0F1A41]/60 italic font-medium">
                            Áp dụng cho: {sol.targetAsset}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] mb-2 leading-snug tracking-tight">
                          {sol.serviceTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B9887B] font-semibold mb-4">
                          {sol.subtitle}
                        </p>

                        {/* Narrative Description */}
                        <p className="font-sans text-sm text-[#0F1A41]/75 leading-relaxed mb-6 max-w-2xl">
                          {sol.desc}
                        </p>

                        {/* Scope of Work Grid (4 Cards) */}
                        <div className="mb-6">
                          <div className="text-[10px] font-bold tracking-[0.2em] text-[#0F1A41]/60 uppercase mb-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                            NỘI DUNG TƯ VẤN CHI TIẾT
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sol.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#FAF6EF]/70 border border-[#0F1A41]/8 hover:border-[#B9887B]/40 hover:bg-white transition-all duration-300"
                              >
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="text-[11px] font-sans font-bold text-[#B9887B]">
                                    {item.stepNum}
                                  </span>
                                  <h4 className="font-serif text-[13.5px] text-[#0F1A41] font-bold leading-tight">
                                    {item.title}
                                  </h4>
                                </div>
                                <p className="font-sans text-xs text-[#0F1A41]/70 leading-relaxed font-normal">
                                  {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Deliverables */}
                        <div className="p-3.5 rounded-xl bg-[#0F1A41]/[0.03] border border-[#0F1A41]/10 mb-6 text-xs text-[#0F1A41]/80 font-sans">
                          <div className="flex items-start gap-2">
                            <FileText size={15} className="text-[#B9887B] shrink-0 mt-0.5" />
                            <div className="leading-relaxed">
                              <span className="text-[#0F1A41] font-bold">Hồ sơ bàn giao thực tế: </span>
                              <span className="text-[#0F1A41]/80">{sol.deliverable}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#0F1A41]/10">
                        <button
                          onClick={() => navigate(sol.path)}
                          className="solid-btn inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer text-white"
                          style={{
                            backgroundColor: '#B9887B',
                            color: '#FFFFFF',
                            border: '1px solid #B9887B',
                            boxShadow: '0 4px 18px rgba(185, 136, 123, 0.45)',
                          }}
                        >
                          <span>XEM CHI TIẾT TRANG {sol.pillarName}</span>
                          <ArrowUpRight size={15} className="text-white" />
                        </button>

                        <button
                          onClick={() => handleConsultCta(sol.code)}
                          className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0F1A41] hover:text-[#B9887B] transition-colors cursor-pointer border border-[#0F1A41]/15 rounded-full"
                        >
                          <span>Đăng ký tư vấn gói này</span>
                          <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Standard 4-Step Consultation Workflow ── */}
      <section className="py-20 md:py-28 bg-[#0F1A41] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              QUY TRÌNH TIẾP NHẬN TƯ VẤN 4 BƯỚC
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-snug">
              Minh bạch, chuẩn xác<br />
              <em>và cam kết hoàn tiền nếu không hài lòng</em>
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
              Mỗi dự án tư vấn đều tuân thủ nguyên tắc khách quan, dựa trên dữ liệu thật và khảo sát hiện trường chuẩn mực.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONSULTING_PROCESS.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-white/[0.04] rounded-2xl border border-white/10 hover:border-[#B9887B] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#B9887B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-sans px-2.5 py-1 rounded-full bg-white/10 text-white/80 font-semibold border border-white/10">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#B9887B] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-3">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#142358] border border-[#B9887B]/30 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B9887B]/20 border border-[#B9887B]/40 flex items-center justify-center text-[#B9887B] shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white">Cam kết Thỏa thuận Bảo mật Thông tin (NDA)</h4>
                <p className="text-xs text-white/75 mt-0.5">Mọi thông tin về mặt bằng, số liệu kinh doanh và định vị tài sản của Quý khách đều được bảo mật tuyệt đối.</p>
              </div>
            </div>
            <a
              href="tel:0878253545"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#B9887B] hover:bg-[#B9887B] transition-all whitespace-nowrap"
            >
              <Phone size={14} className="text-[#B9887B]" />
              <span>Hotline: 0878 253 545</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Dedicated Interactive Consultation Booking Form ── */}
      <section id="consultation-booking" className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                ĐẶT LỊCH LÀM VIỆC TRỰC TIẾP
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-tight mb-4">
                Khởi đầu từ một buổi<br />
                <em>thảo luận chiến lược</em>
              </h2>
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6">
                Chuyên gia của CityHouseMore sẽ liên hệ lại trong vòng 24 giờ để lắng nghe nhu cầu cụ thể và sắp xếp lịch thẩm định thực địa trực tiếp tại công trình.
              </p>

              <div className="flex flex-col gap-3.5 mb-8 text-xs text-[#0F1A41]/85">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0" />
                  <span>Đánh giá sơ bộ hiện trạng & tiềm năng dòng tiền</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0" />
                  <span>Gợi ý mô hình hợp tác và phương án tối ưu thuế / pháp lý</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0" />
                  <span>Hoàn toàn miễn phí bước thẩm định ban đầu</span>
                </div>
              </div>

              {/* Direct Link to Solutions */}
              <div className="p-4 rounded-xl bg-white border border-[#0F1A41]/10">
                <div className="text-[11px] font-bold uppercase text-[#B9887B] tracking-wider mb-1">
                  BẠN CẦN TÌM HIỂU HỆ THỐNG GIẢI PHÁP?
                </div>
                <p className="text-xs text-[#0F1A41]/70 mb-3 leading-relaxed">
                  Xem chi tiết 3 mô hình hợp tác chiến lược (Đầu tư cải tạo mới, Thuê khoán trọn gói, Quản lý gia sản ủy thác).
                </p>
                <button
                  onClick={() => navigate('/giai-phap')}
                  className="text-xs font-bold uppercase tracking-wider text-[#0F1A41] hover:text-[#B9887B] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Khám phá Trang Giải Pháp</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="ĐĂNG KÝ TƯ VẤN TÀI SẢN CHUYÊN SÂU"
                subtitle="Vui lòng cung cấp thông tin sơ bộ. Chuyên gia CityHouseMore sẽ liên hệ bảo mật và trao đổi trực tiếp."
                submitLabel="GỬI YÊU CẦU TƯ VẤN NGAY"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
