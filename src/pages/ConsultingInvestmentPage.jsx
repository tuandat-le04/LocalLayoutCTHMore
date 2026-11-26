import React from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
  Check,
  Building2,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  BarChart3,
  Layers,
  ArrowRight,
  Home
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

const INVESTMENT_SCOPES = [
  {
    stepNum: "01",
    title: "Khảo sát Địa bàn & Cung - Cầu Thực tế",
    subtitle: "Nghiên cứu thị trường bán kính 3km",
    desc: "Đo lường dung lượng khách lưu trú, cơ cấu khách thuê quốc tế và chuyên gia FDI; thống kê đối thủ cạnh tranh trực tiếp về giá bán, công suất buồng phòng và khoảng trống phân khúc.",
    points: [
      "Bản đồ khảo sát đối thủ và thị phần trong bán kính 3km",
      "Phân tích tệp khách mục tiêu: FDI, công tác, du lịch, expat",
      "Xác lập khoảng trống thị trường chưa được khai thác tối ưu"
    ]
  },
  {
    stepNum: "02",
    title: "Cơ cấu Diện tích & Tối ưu Diện tích Thương phẩm",
    subtitle: "Tăng 15 – 20% buồng phòng khai thác",
    desc: "Hoạch định tỷ lệ cơ cấu phòng (Studio, 1PN, 2PN) và bố trí diện tích tiện ích dịch vụ thông minh ngay từ bản vẽ kỹ thuật đầu tiên, loại bỏ góc chết và tăng diện tích khai thác thực tế.",
    points: [
      "Bản vẽ layout cơ cấu phòng phác thảo tối ưu diện tích",
      "Tối ưu hành lang, thang máy và không gian kỹ thuật phụ trợ",
      "Quy hoạch khu vực tiện ích (lounge, gym, laundry, cafe) gia tăng giá trị thuê"
    ]
  },
  {
    stepNum: "03",
    title: "Mô hình Tài chính & Điểm Hòa Vốn (BEP)",
    subtitle: "Báo cáo FS & Dự phóng dòng tiền 10 năm",
    desc: "Xây dựng bảng tính tài chính chi tiết bóc tách tổng vốn đầu tư (CAPEX), chi phí vận hành thường niên (OPEX), chu kỳ hoàn vốn và bảng dự phóng dòng tiền thu chi minh bạch suốt 10 năm.",
    points: [
      "Dự toán suất đầu tư xây dựng & hoàn thiện nội thất trên mỗi m²",
      "Mô hình độ nhạy tài chính theo 3 kịch bản thị trường (Bi quan, Trung bình, Kỳ vọng)",
      "Tính toán chỉ số ROI (12 – 15%), IRR, NPV và điểm hòa vốn chính xác"
    ]
  },
  {
    stepNum: "04",
    title: "Thẩm định Pháp lý & Chuẩn PCCC Lưu trú",
    subtitle: "Rà soát điều kiện nghiệm thu & cấp phép",
    desc: "Rà soát tiêu chuẩn thiết kế kiến trúc theo quy chuẩn phòng cháy chữa cháy mới nhất, hỗ trợ hồ sơ cấp phép kinh doanh khách sạn, căn hộ dịch vụ và an ninh trật tự.",
    points: [
      "Checklist tiêu chuẩn PCCC hiện hành cho công trình lưu trú",
      "Tư vấn pháp lý chuyển đổi mục đích hoặc đăng ký lưu trú dài hạn",
      "Giảm thiểu rủi ro đình chỉ hoặc phát sinh chi phí sửa đổi sau xây dựng"
    ]
  }
];

const DELIVERABLES = [
  {
    title: "Báo cáo Thẩm định Khả thi (Feasibility Study - FS)",
    desc: "Hồ sơ phân tích chi tiết dữ liệu thị trường, tệp khách mục tiêu, đối thủ và đề xuất định vị sản phẩm tối ưu."
  },
  {
    title: "Bản vẽ Cơ cấu Buồng phòng & Bố trí Tiện ích",
    desc: "Phương án mặt bằng layout tối ưu hóa diện tích thương phẩm, tăng 15–20% số lượng buồng phòng khai thác sinh lời."
  },
  {
    title: "File Mô hình Tài chính Dự phóng Dòng tiền 10 Năm",
    desc: "Bảng tính Excel động tính toán CAPEX, OPEX, chu kỳ hoàn vốn và phân tích độ nhạy dòng tiền theo từng mùa vụ."
  },
  {
    title: "Báo cáo Rà soát Tiêu chuẩn Pháp lý & PCCC",
    desc: "Đánh giá mức độ đáp ứng quy chuẩn PCCC, thang thoát hiểm, thông gió và hồ sơ cấp phép kinh doanh lưu trú."
  }
];

export default function ConsultingInvestmentPage({ onOpenModal }) {
  const { navigate } = useNavigation();

  const handleCta = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      const el = document.getElementById('tu-van-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="consulting-investment-page font-sans bg-[#FAF6EF]">
      {/* ── Breadcrumb ── */}
      <div className="bg-[#0B1536] border-b border-white/10 py-3 px-6 text-xs text-white/60 font-sans">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-white flex items-center gap-1 cursor-pointer">
            <Home size={12} />
            <span>Trang chủ</span>
          </button>
          <span>/</span>
          <button onClick={() => navigate('/tu-van')} className="hover:text-white cursor-pointer">
            Tư vấn
          </button>
          <span>/</span>
          <span className="text-[#B9887B] font-medium">Tư vấn Đầu tư và Phát triển Dự án</span>
        </div>
      </div>

      {/* ── 1. Hero Banner ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9887B]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#B9887B] text-xs font-bold uppercase tracking-wider mb-5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
            DỊCH VỤ TƯ VẤN 01 — CITYHOUSE MORE
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl mb-6">
            Tư vấn Đầu tư &amp;<br />
            <span className="text-[#B9887B] font-serif italic">Phát triển Dự án Mới</span>
          </h1>

          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-3xl leading-relaxed mt-4 font-normal font-sans">
            Xác lập nền móng vững chắc ngay từ quyết định đầu tư ban đầu. Chúng tôi đồng hành cùng Chủ đầu tư khảo sát thực địa, tối ưu hóa cơ cấu buồng phòng và thiết lập bài toán tài chính hoàn vốn nhanh nhất trước khi đặt viên gạch đầu tiên.
          </p>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">12 – 15%</div>
              <div className="text-xs text-white/90 font-medium">ROI Dự phóng / Năm</div>
              <div className="text-[11px] text-white/60 mt-0.5">Dòng tiền thực thu ổn định</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">20 – 30%</div>
              <div className="text-xs text-white/90 font-medium">Tiết kiệm CAPEX Ban Đầu</div>
              <div className="text-[11px] text-white/60 mt-0.5">Nhờ tối ưu thiết kế & vật tư</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">+15 – 20%</div>
              <div className="text-xs text-white/90 font-medium">Diện tích Khai thác Thương phẩm</div>
              <div className="text-[11px] text-white/60 mt-0.5">Loại bỏ góc chết kiến trúc</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 font-sans">
            <button
              onClick={handleCta}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] rounded-full cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl text-white font-sans"
              style={{
                backgroundColor: '#B9887B',
                boxShadow: '0 6px 24px rgba(185, 136, 123, 0.45)',
              }}
            >
              <Calendar size={15} />
              <span>ĐẶT LỊCH TƯ VẤN ĐẦU TƯ</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('hang-muc-chi-tiet');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/30 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-all rounded-full font-sans cursor-pointer"
            >
              <span>XEM HẠNG MỤC TƯ VẤN</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Target Audience & Problems We Solve ── */}
      <section className="py-16 md:py-24 bg-white text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                ĐỐI TƯỢNG PHÙ HỢP
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug mb-4">
                Dành cho ai đang chuẩn bị<br />
                <em>xuống vốn xây dựng</em>
              </h2>
              <p className="text-sm text-[#0F1A41]/75 leading-relaxed font-normal mb-6">
                Quyết định sai lầm lớn nhất của các Chủ đầu tư là bắt tay vẽ phối cảnh trước khi xác định bài toán tài chính và tệp khách mục tiêu, dẫn đến chi phí vượt dự toán hoặc xây xong không bán được phòng giá cao.
              </p>

              <div className="space-y-3.5 text-xs text-[#0F1A41]/85">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF6EF] border border-[#0F1A41]/5">
                  <CheckCircle2 size={18} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F1A41] mb-0.5">Chủ sở hữu quỹ đất trống hoặc nhà phố mặt tiền:</strong>
                    Muốn chuyển đổi sang mô hình căn hộ dịch vụ cao cấp hoặc boutique hotel.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF6EF] border border-[#0F1A41]/5">
                  <CheckCircle2 size={18} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F1A41] mb-0.5">Chủ đầu tư chuẩn bị nộp hồ sơ xin phép xây dựng:</strong>
                    Cần tối ưu hóa cơ cấu buồng phòng và tiêu chuẩn PCCC để tránh phải sửa chữa tốn kém sau này.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF6EF] border border-[#0F1A41]/5">
                  <CheckCircle2 size={18} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F1A41] mb-0.5">Nhà đầu tư tìm kiếm dòng tiền an toàn:</strong>
                    Cần một báo cáo khả thi (FS) độc lập, minh bạch để đánh giá mức độ hấp thụ của thị trường.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F1A41]">
                <img
                  src="https://cityhousemore.com/uploads/gallery/gallery-1782203499266-983125.webp"
                  alt="Tư vấn đầu tư dự án CityHouse"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 text-[#0F1A41]">
                  <div className="flex items-center gap-2 mb-2 text-[#B9887B] text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck size={16} />
                    <span>Bảo chứng bởi 35+ tòa nhà thực tế</span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed">
                    "Chúng tôi không chỉ là đơn vị tư vấn trên giấy tờ, mà là đơn vị trực tiếp đứng ra vận hành và chịu trách nhiệm với hiệu quả dòng tiền cam kết."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 4 Core Detailed Scope of Work ── */}
      <section id="hang-muc-chi-tiet" className="py-20 md:py-28 text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HẠNG MỤC TƯ VẤN ĐẦU TƯ TOÀN DIỆN
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              4 bước thiết lập<br />
              <em>nền tảng tài chính &amp; kiến trúc</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INVESTMENT_SCOPES.map((scope, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#0F1A41]/10 hover:border-[#B9887B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0F1A41]/10">
                    <span className="font-serif text-3xl font-bold text-[#B9887B]">
                      {scope.stepNum}
                    </span>
                    <span className="text-[11px] font-sans px-3 py-1 rounded-full bg-[#FAF6EF] text-[#0F1A41]/70 font-semibold border border-[#0F1A41]/5">
                      {scope.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0F1A41] mb-3 leading-snug group-hover:text-[#B9887B] transition-colors">
                    {scope.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6 font-normal">
                    {scope.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#0F1A41]/5 mb-6">
                    {scope.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#0F1A41]/85">
                        <Check size={14} className="text-[#B9887B] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Deliverables Dossier ── */}
      <section className="py-20 md:py-24 bg-[#0F1A41] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HỒ SƠ BÀN GIAO THỰC TẾ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-snug">
              Chủ đầu tư nhận được gì<br />
              <em>sau quá trình tư vấn?</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERABLES.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#B9887B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#B9887B]/20 text-[#B9887B] border border-[#B9887B]/30 flex items-center justify-center mb-5">
                    <FileText size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Case Studies In Investment ── */}
      <section className="py-20 md:py-28 bg-white text-[#0F1A41] border-t border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                CASE STUDY BẢO CHỨNG
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
                Dự án áp dụng thành công<br />
                <em>gói Tư vấn Đầu tư CityHouse</em>
              </h2>
            </div>
            <button
              onClick={() => navigate('/danh-muc-tai-san')}
              className="text-xs font-bold uppercase tracking-wider text-[#0F1A41] hover:text-[#B9887B] transition-colors inline-flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <span>Xem toàn bộ 35+ dự án</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-[#0F1A41]/10 overflow-hidden bg-[#FAF6EF]/50 hover:shadow-xl transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp"
                  alt="CityHouse VIBE City Oasis"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#0F1A41]/90 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  Quận 3 · Đầu tư mới từ đất trống
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-[#0F1A41] mb-2">CityHouse VIBE City Oasis</h3>
                <p className="text-xs text-[#0F1A41]/75 leading-relaxed mb-4">
                  Được CityHouse đồng hành tư vấn từ mảnh đất trống trong hẻm Quận 3. Tối ưu cơ cấu buồng phòng theo phong cách ốc đảo nhiệt đới, đạt tỷ lệ lấp đầy 98% ngay từ tháng khai trương đầu tiên.
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-[#B9887B]">
                  <span>ROI: 14.2% / Năm</span>
                  <span>·</span>
                  <span>72 Căn hộ Studio &amp; 1PN</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#0F1A41]/10 overflow-hidden bg-[#FAF6EF]/50 hover:shadow-xl transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp"
                  alt="CityHouse TERA Kim Nguyen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#0F1A41]/90 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  Bình Thạnh · Tư vấn quy hoạch
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-[#0F1A41] mb-2">CityHouse TERA Kim Nguyen</h3>
                <p className="text-xs text-[#0F1A41]/75 leading-relaxed mb-4">
                  Tư vấn phân bổ diện tích thương phẩm và định vị phục vụ chuyên gia Nhật Bản &amp; Hàn Quốc làm việc tại trung tâm TP.HCM, ký kết hợp đồng lưu trú dài hạn lấp đầy trên 95% quanh năm.
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-[#B9887B]">
                  <span>ROI: 13.8% / Năm</span>
                  <span>·</span>
                  <span>Hợp đồng FDI ổn định</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Dedicated Booking Form ── */}
      <section id="tu-van-form" className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                ĐẶT LỊCH LÀM VIỆC CHUYÊN GIA
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-tight mb-4">
                Nhận thẩm định sơ bộ<br />
                <em>tiềm năng khu đất trong 48h</em>
              </h2>
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6 font-normal">
                Điền thông tin cơ bản về diện tích và vị trí dự án. Chuyên gia CityHouseMore sẽ liên hệ bảo mật và gửi báo cáo phân tích tiềm năng miễn phí.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#0F1A41]/10 space-y-3 mb-6 text-xs text-[#0F1A41]/85">
                <div className="flex items-center gap-2.5 font-bold text-[#0F1A41]">
                  <Phone size={15} className="text-[#B9887B]" />
                  <span>Hotline Tư vấn Trực tiếp: 0878 253 545</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-[#B9887B]" />
                  <span>Ký Thỏa thuận Bảo mật Thông tin (NDA) 100%</span>
                </div>
              </div>

              {/* Cross-Link to other services */}
              <div className="p-5 rounded-2xl bg-[#0F1A41] text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#B9887B] block mb-1">
                  DỊCH VỤ TƯ VẤN KHÁC
                </span>
                <div className="space-y-2 mt-3">
                  <button
                    onClick={() => navigate('/tu-van/cai-tao')}
                    className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-xs cursor-pointer"
                  >
                    <span>Tư vấn Cải tạo &amp; Tái định vị Tòa nhà Cũ</span>
                    <ChevronRight size={14} className="text-[#B9887B]" />
                  </button>
                  <button
                    onClick={() => navigate('/tu-van/mo-hinh')}
                    className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-xs cursor-pointer"
                  >
                    <span>Tư vấn Mô hình &amp; Quản lý Vận hành</span>
                    <ChevronRight size={14} className="text-[#B9887B]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                title="ĐĂNG KÝ TƯ VẤN ĐẦU TƯ DỰ ÁN"
                subtitle="Cung cấp thông tin vị trí và quy mô dự phóng để nhận báo cáo phân tích tiềm năng sơ bộ."
                submitLabel="GỬI YÊU CẦU TƯ VẤN ĐẦU TƯ"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
