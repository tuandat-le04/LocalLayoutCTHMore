import React from 'react';
import LuxuryIcon, { LuxuryCheckBadge } from '../components/common/LuxuryIcon.jsx';
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
  Cpu,
  Users,
  Layers,
  ArrowRight,
  Home,
  Percent,
  Settings
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

const MODEL_SCOPES = [
  {
    stepNum: "01",
    title: "Thẩm định & Thiết Lập Mô Hình Khai Thác",
    subtitle: "Lựa chọn phương án sinh lời tối ưu",
    desc: "Đánh giá khẩu vị rủi ro và mục tiêu tài chính của Chủ sở hữu để tư vấn mô hình phù hợp: Thuê khoán cố định (an tâm tuyệt đối), Chia sẻ doanh thu (hưởng trọn tăng trưởng) hoặc Quản lý gia sản ủy thác dài hạn.",
    points: [
      "So sánh chi tiết dòng tiền kỳ vọng giữa 3 mô hình kinh doanh",
      "Xác lập cơ chế phân chia lợi nhuận và trách nhiệm bảo dưỡng rõ ràng",
      "Tư vấn điều khoản hợp đồng pháp lý bảo vệ tối đa quyền lợi Chủ sở hữu"
    ]
  },
  {
    stepNum: "02",
    title: "Chuyển Giao Bộ Quy Chuẩn SOP 5 Sao",
    subtitle: "Vận hành chuyên nghiệp chuẩn quốc tế 24/7",
    desc: "Đồng bộ hóa toàn bộ quy trình vận hành dịch vụ: Lễ tân đón tiếp đa ngôn ngữ, buồng phòng tiêu chuẩn khách sạn quốc tế, kỹ thuật xử lý sự cố trong 15 phút và an ninh camera bảo mật nhiều lớp.",
    points: [
      "Bộ tài liệu Quy trình Thao tác Chuẩn (SOP) cho từng vị trí nhân sự",
      "Tiêu chuẩn checklist vệ sinh buồng phòng và kiểm tra trước khi check-in",
      "Kế hoạch tuyển dụng, đào tạo và giám sát chất lượng định kỳ"
    ]
  },
  {
    stepNum: "03",
    title: "Tích Hợp Công Nghệ Cloud PMS & Smart IoT",
    subtitle: "Số hóa quản lý & Tiết kiệm 40% chi phí",
    desc: "Cài đặt và chuyển giao phần mềm quản trị khách sạn PMS trên nền tảng đám mây, tích hợp khóa điện tử thông minh Smart Lock IoT và thuật toán Dynamic Pricing định giá phòng linh hoạt theo cung cầu thị trường.",
    points: [
      "Cấu hình tài khoản Cloud PMS quản lý trạng thái buồng phòng từ xa",
      "Tích hợp thuật toán định giá tự động tối ưu hóa doanh thu (RevPAR)",
      "Kiểm soát điện năng tiêu thụ và khóa cửa từ qua ứng dụng di động"
    ]
  },
  {
    stepNum: "04",
    title: "Kết Nối Mạng Lưới Khách Thuê FDI & Kênh OTA",
    subtitle: "Bảo đảm tỷ lệ kín phòng trên 95%",
    desc: "Đưa tài sản vào hệ thống phân phối đa kênh toàn cầu của CityHouse: 8+ kênh OTA quốc tế (Booking, Agoda, Airbnb, Expedia) và mạng lưới hơn 120 tập đoàn đa quốc gia có nhu cầu lưu trú dài hạn.",
    points: [
      "Đồng bộ buồng phòng tự động tránh tình trạng trùng phòng (overbooking)",
      "Ký kết hợp đồng cung cấp căn hộ cho chuyên gia FDI và phái đoàn ngoại giao",
      "Chương trình chăm sóc khách hàng thân thiết CityHouse Loyalty Club"
    ]
  }
];

const DELIVERABLES_MODEL = [
  {
    title: "Bộ Quy Trình SOP Vận Hành Khách Sạn Trọn Gói",
    desc: "Toàn bộ tài liệu quy chuẩn vận hành buồng phòng, lễ tân, an ninh, kỹ thuật và xử lý tình huống khẩn cấp 24/7."
  },
  {
    title: "Hệ Thống & Tài Khoản Cấu Hình PMS Cloud",
    desc: "Thiết lập hoàn chỉnh phần mềm quản trị buồng phòng trực tuyến, đào tạo sử dụng cho nhân sự và bàn giao tài khoản quản trị cho Chủ nhà."
  },
  {
    title: "Danh Mục Kết Nối Đối Tác FDI & Mạng Lưới OTA",
    desc: "Hồ sơ liên kết với 120+ doanh nghiệp quốc tế và thiết lập đồng bộ lịch bán phòng trên 8 kênh phân phối toàn cầu."
  },
  {
    title: "Quy Chế Bảo Dưỡng Kỹ Thuật & Mẫu Báo Cáo Đối Soát",
    desc: "Checklist bảo trì định kỳ hệ MEP và mẫu báo cáo tài chính minh bạch gửi định kỳ vào ngày 5 hàng tháng."
  }
];

export default function ConsultingModelPage({ onOpenModal }) {
  const { navigate } = useNavigation();

  const handleCta = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      const el = document.getElementById('mo-hinh-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="consulting-model-page font-sans bg-[#F4EFEA]">
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
          <span className="text-[#B9887B] font-medium">Tư vấn Mô hình và Quản lý Vận hành</span>
        </div>
      </div>

      {/* ── 1. Hero Banner ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9887B]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#B9887B] text-xs font-bold uppercase tracking-wider mb-5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
            DỊCH VỤ TƯ VẤN 03 — CITYHOUSE MORE
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl mb-4">
            Vận hành tạo dòng tiền.<br />
            <span className="text-[#B9887B] font-serif italic">Quản trị bồi đắp giá trị.</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-4">
            TƯ VẤN MÔ HÌNH VÀ QUẢN LÝ VẬN HÀNH TOÀN DIỆN
          </p>

          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-3xl leading-relaxed mt-4 font-normal font-sans">
            Vận hành chuẩn mực quốc tế 24/7, ứng dụng công nghệ Cloud PMS &amp; Dynamic Pricing tối đa hóa công suất phòng và giải phóng 100% thời gian cho Chủ đầu tư với cam kết dòng tiền bền vững.
          </p>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">95%+</div>
              <div className="text-xs text-white/90 font-medium">Tỷ Lệ Kín Phòng Quanh Năm</div>
              <div className="text-[11px] text-white/60 mt-0.5">Không phụ thuộc mùa thấp điểm</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">-40%</div>
              <div className="text-xs text-white/90 font-medium">Chi Phí Vận Hành Bộ Máy</div>
              <div className="text-[11px] text-white/60 mt-0.5">Nhờ Cloud PMS &amp; Smart IoT</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">120+</div>
              <div className="text-xs text-white/90 font-medium">Đối Tác Doanh Nghiệp FDI</div>
              <div className="text-[11px] text-white/60 mt-0.5">Ký kết lưu trú dài hạn ổn định</div>
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
              <span>ĐẶT LỊCH TƯ VẤN VẬN HÀNH</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('hang-muc-van-hanh');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/30 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-all rounded-full font-sans cursor-pointer"
            >
              <span>XEM HẠNG MỤC THIẾT LẬP</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Owner's Pain Points ── */}
      <section className="py-16 md:py-24 bg-white text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Cột Trái: Tháo gỡ Gánh nặng Quản trị Tòa nhà (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#B9887B] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                  GIẢI TỎA ÁP LỰC QUẢN TRỊ GIA SẢN
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-tight mb-4 font-normal">
                  Sở hữu tài sản lớn<br />
                  <span className="italic text-[#B9887B]">nhưng bị ràng buộc thời gian?</span>
                </h2>
                <p className="text-sm text-[#0F1A41]/75 leading-relaxed font-normal mb-6">
                  Tự quản lý một tòa nhà đòi hỏi giải quyết hàng trăm sự cố mỗi ngày: khách khiếu nại lúc nửa đêm, nhân viên buồng phòng nghỉ đột xuất, giá phòng bị môi giới ép giảm vào mùa ế...
                </p>

                <div className="space-y-3.5">
                  {/* Pain Point 01 */}
                  <div className="group p-4 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 hover:border-[#B9887B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#B9887B]/10 text-[#B9887B] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B9887B] group-hover:text-white transition-colors duration-300">
                        <LuxuryIcon name="concierge" size={17} strokeWidth={1.3} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <strong className="text-xs sm:text-[13px] font-bold text-[#0F1A41]">
                            Gánh nặng điều hành nhân sự & dịch vụ trực tiếp
                          </strong>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9887B] px-2.5 py-0.5 bg-[#B9887B]/10 rounded-full shrink-0">
                            Áp lực nhân sự
                          </span>
                        </div>
                        <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                          Chủ sở hữu bận rộn với công việc kinh doanh chính, không thể túc trực 24/7 để giám sát quy trình buồng phòng, lễ tân và xử lý sự cố phát sinh.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pain Point 02 */}
                  <div className="group p-4 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 hover:border-[#B9887B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#B9887B]/10 text-[#B9887B] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B9887B] group-hover:text-white transition-colors duration-300">
                        <LuxuryIcon name="globe" size={17} strokeWidth={1.3} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <strong className="text-xs sm:text-[13px] font-bold text-[#0F1A41]">
                            Thiếu kênh phân phối quốc tế và công nghệ bán phòng
                          </strong>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9887B] px-2.5 py-0.5 bg-[#B9887B]/10 rounded-full shrink-0">
                            Khai thác cục bộ
                          </span>
                        </div>
                        <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                          Chỉ đăng tin thủ công hoặc phụ thuộc môi giới lẻ, thiếu kết nối mạng lưới khách FDI dài hạn dẫn đến tỷ lệ phòng trống cao vào mùa thấp điểm.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pain Point 03 */}
                  <div className="group p-4 rounded-xl bg-[#FAF9F6] border border-[#0F1A41]/8 hover:border-[#B9887B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#B9887B]/10 text-[#B9887B] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B9887B] group-hover:text-white transition-colors duration-300">
                        <LuxuryIcon name="wrench" size={17} strokeWidth={1.3} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <strong className="text-xs sm:text-[13px] font-bold text-[#0F1A41]">
                            Hạ tầng kỹ thuật MEP không được bảo dưỡng dự phòng
                          </strong>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9887B] px-2.5 py-0.5 bg-[#B9887B]/10 rounded-full shrink-0">
                            Khấu hao nhanh
                          </span>
                        </div>
                        <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                          Chỉ sửa chữa khi máy móc hư hỏng nặng, dẫn đến chi phí phát sinh đột biến, công trình nhanh xuống cấp và làm giảm giá trị chuyển nhượng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột Phải: Giải pháp Vận hành An nhàn & Minh chứng (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              {/* Ảnh dự án vận hành với Badge sang trọng */}
              <div className="relative rounded-2xl overflow-hidden border border-[#0F1A41]/10 shadow-lg bg-[#0F1A41] group aspect-[16/10] sm:aspect-[16/10] min-h-[260px]">
                <img
                  src="https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp"
                  alt="Tư vấn vận hành tòa nhà CityHouse More"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/85 via-[#0F1A41]/20 to-transparent"></div>

                {/* Badge nhận diện dự án góc trên */}
                <div className="absolute top-4 left-4 bg-[#0F1A41]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B] animate-pulse"></span>
                  <span className="font-sans text-[10.5px] uppercase tracking-wider font-bold">
                    Chuỗi vận hành tiêu biểu: CityHouse Suites
                  </span>
                </div>

                {/* 3 Metric Pills kết quả thực tế ở chân ảnh */}
                <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
                  <div className="bg-[#0F1A41]/85 backdrop-blur-md border border-white/10 rounded-lg p-2 text-center text-white">
                    <div className="font-serif text-base sm:text-lg font-bold text-[#B9887B] leading-none mb-0.5">92%+</div>
                    <div className="text-[10px] text-white/70 uppercase tracking-tight">Công suất bình quân</div>
                  </div>
                  <div className="bg-[#0F1A41]/85 backdrop-blur-md border border-white/10 rounded-lg p-2 text-center text-white">
                    <div className="font-serif text-base sm:text-lg font-bold text-[#B9887B] leading-none mb-0.5">Ngày 5</div>
                    <div className="text-[10px] text-white/70 uppercase tracking-tight">Đối soát dòng tiền</div>
                  </div>
                  <div className="bg-[#0F1A41]/85 backdrop-blur-md border border-white/10 rounded-lg p-2 text-center text-white">
                    <div className="font-serif text-base sm:text-lg font-bold text-[#B9887B] leading-none mb-0.5">24/7</div>
                    <div className="text-[10px] text-white/70 uppercase tracking-tight">Giám sát Cloud PMS</div>
                  </div>
                </div>
              </div>

              {/* Khối Giải pháp Vận hành An nhàn */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1A41] text-white border border-[#B9887B]/25 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2 text-[#B9887B] text-xs font-bold uppercase tracking-wider">
                      <LuxuryIcon name="concierge" size={15} strokeWidth={1.3} />
                      <span>Giải pháp vận hành an nhàn</span>
                    </div>
                    <span className="text-[10.5px] text-[#B9887B] uppercase tracking-wider font-semibold">
                      Chuyên nghiệp & Minh bạch
                    </span>
                  </div>

                  <p className="font-serif text-xs sm:text-[13px] text-white/90 italic leading-relaxed mb-3.5">
                    "Chúng tôi thiết lập bộ máy chuyên nghiệp thay bạn quản lý 365 ngày/năm. Bạn chỉ việc theo dõi doanh thu minh bạch trên ứng dụng và nhận đối soát chuẩn xác vào ngày 5 hàng tháng."
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] text-white/75">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] shrink-0"></span>
                    <span>Minh bạch 100% dòng tiền qua Cloud PMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] shrink-0"></span>
                    <span>Kỹ thuật MEP xử lý sự cố trong 15 phút</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 4 Core Scopes Of Operations ── */}
      <section id="hang-muc-van-hanh" className="py-20 md:py-28 text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HẠNG MỤC THIẾT LẬP VẬN HÀNH
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              Bộ máy điều hành 24/7<br />
              <em>chuẩn mực khách sạn quốc tế</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MODEL_SCOPES.map((scope, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#0F1A41]/10 hover:border-[#B9887B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0F1A41]/10">
                    <span className="font-serif text-3xl font-bold text-[#B9887B]">
                      {scope.stepNum}
                    </span>
                    <span className="text-[11px] font-sans px-3 py-1 rounded-full bg-[#F4EFEA] text-[#0F1A41]/70 font-semibold border border-[#0F1A41]/5">
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
                        <LuxuryCheckBadge size="sm" className="mt-0.5" />
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
              Sở hữu hệ thống vận hành<br />
              <em>chuẩn hóa trọn gói</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERABLES_MODEL.map((item, i) => (
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

      {/* ── 5. Dedicated Booking Form ── */}
      <section id="mo-hinh-form" className="py-20 md:py-28 bg-[#F4EFEA] text-[#0F1A41]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                ĐẶT LỊCH TRAO ĐỔI VẬN HÀNH
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-tight mb-4">
                Tối ưu hóa dòng tiền<br />
                <em>cho tòa nhà của bạn hôm nay</em>
              </h2>
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6 font-normal">
                Dù bạn đang sở hữu tòa nhà chuẩn bị đi vào hoạt động hay muốn chuyển đổi đơn vị quản lý, chúng tôi đều sẵn sàng gửi báo cáo đối soát và đề xuất mô hình phù hợp nhất.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#0F1A41]/10 space-y-3 mb-6 text-xs text-[#0F1A41]/85">
                <div className="flex items-center gap-2.5 font-bold text-[#0F1A41]">
                  <Phone size={15} className="text-[#B9887B]" />
                  <span>Hotline Vận hành 24/7: 0878 253 545</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-[#B9887B]" />
                  <span>Minh bạch số liệu và cam kết hoàn vốn</span>
                </div>
              </div>

              {/* Cross-Link to other services */}
              <div className="p-5 rounded-2xl bg-[#0F1A41] text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#B9887B] block mb-1">
                  DỊCH VỤ TƯ VẤN KHÁC
                </span>
                <div className="space-y-2 mt-3">
                  <button
                    onClick={() => navigate('/tu-van/dau-tu')}
                    className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-xs cursor-pointer"
                  >
                    <span>Tư vấn Đầu tư &amp; Phát triển Dự án Mới</span>
                    <ChevronRight size={14} className="text-[#B9887B]" />
                  </button>
                  <button
                    onClick={() => navigate('/tu-van/cai-tao')}
                    className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-xs cursor-pointer"
                  >
                    <span>Tư vấn Cải tạo &amp; Tái định vị Tòa nhà Cũ</span>
                    <ChevronRight size={14} className="text-[#B9887B]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                title="ĐĂNG KÝ TƯ VẤN MÔ HÌNH VẬN HÀNH"
                subtitle="Cung cấp thông tin quy mô buồng phòng để Chuyên gia CityHouse gửi phương án vận hành chi tiết."
                submitLabel="GỬI YÊU CẦU TƯ VẤN VẬN HÀNH"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
