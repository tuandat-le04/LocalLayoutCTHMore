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
  Sparkles,
  Layers,
  ArrowRight,
  Home,
  Percent,
  Paintbrush
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';

const RENOVATION_SCOPES = [
  {
    stepNum: "01",
    title: "Thẩm định Hiện trạng & Hệ Thống Kỹ thuật MEP",
    subtitle: "Rà soát toàn diện kết cấu & hạ tầng",
    desc: "Đo đạc, kiểm định kết cấu chịu lực, hệ thống điện chiếu sáng, cấp thoát nước, điều hòa không khí và thiết bị PCCC hiện hữu để xác định chính xác các hạng mục cần giữ lại và tái cấu trúc.",
    points: [
      "Báo cáo thẩm định hiện trạng kết cấu chịu lực và độ võng sàn",
      "Rà soát tuổi thọ và công suất hệ thống cơ điện (MEP)",
      "Đánh giá mức độ hao mòn trang thiết bị nội thất và công năng"
    ]
  },
  {
    stepNum: "02",
    title: "Thiết kế Concept 3D Boutique Tối ưu Chi phí",
    subtitle: "Tận dụng tối đa khung kết cấu có sẵn",
    desc: "Đội ngũ kiến trúc sư nội bộ CityHouse thiết kế phối cảnh 3D theo ngôn ngữ kiến trúc boutique đương đại, giảm thiểu đập phá tường kết cấu, phối vật liệu bền bỉ và tạo điểm nhấn thị giác sang trọng.",
    points: [
      "Bộ phối cảnh 3D không gian phòng và khu vực công cộng sảnh/lễ tân",
      "Phương án vật liệu hoàn thiện chịu độ ẩm cao và dễ bảo trì",
      "Tối ưu ánh sáng tự nhiên và công năng sử dụng tiện ích thông minh"
    ]
  },
  {
    stepNum: "03",
    title: "Tái Định Vị Phân Khúc & Chiến Lược Giá Thuê",
    subtitle: "Mở rộng biên độ lợi nhuận",
    desc: "Nâng cấp từ mô hình phòng trọ hoặc khách sạn bình dân sang chuỗi căn hộ dịch vụ cao cấp, tái cấu trúc bảng giá bán buồng phòng theo mùa vụ để tiếp cận tệp khách quốc tế và chuyên gia FDI.",
    points: [
      "Xác lập bộ nhận diện thương hiệu boutique mới cho tòa nhà",
      "Chiến lược định giá buồng phòng động (Dynamic Pricing) theo ngày và theo tháng",
      "Kế hoạch truyền thông đẩy bán trước ngày khai trương 30 ngày"
    ]
  },
  {
    stepNum: "04",
    title: "Dự toán BOQ Bóc Tách & Kế hoạch Khai Trương",
    subtitle: "Thi công thần tốc 45 – 60 ngày hoàn thiện",
    desc: "Lập bảng tiên lượng dự toán bóc tách chi tiết (BOQ) đến từng mét vật tư, kiểm soát nghiêm ngặt ngân sách không phát sinh, đồng thời đẩy bán trên 8 kênh OTA để phủ kín 85% phòng ngay tháng đầu.",
    points: [
      "Bảng BOQ dự toán thi công bóc tách vật tư và nội thất chi tiết",
      "Tiến độ thi công cuốn chiếu 45 – 60 ngày không gián đoạn toàn bộ tòa nhà",
      "Kích hoạt chiến dịch mở bán đa kênh OTA quốc tế (Booking, Agoda, Airbnb, v.v.)"
    ]
  }
];

const COLLABORATION_RENOVATION = [
  {
    code: "01",
    title: "CityHouse Đầu Tư 100% Nội Thất",
    highlight: "Không tốn vốn đầu tư ban đầu",
    desc: "CityHouse chịu toàn bộ chi phí thiết kế, thi công và đầu tư mới 100% nội thất trang trí. Chủ sở hữu nhận chia sẻ doanh thu hàng tháng và sở hữu toàn bộ tài sản được nâng cấp sau thời hạn hợp đồng."
  },
  {
    code: "02",
    title: "Thuê Khoán Toàn Bộ Dài Hạn",
    highlight: "Dòng tiền cố định 5 – 10 năm",
    desc: "CityHouse thuê lại trọn gói tòa nhà với mức lợi nhuận cố định cam kết dài hạn. Chủ tài sản an tâm tuyệt đối, không bận tâm về mùa thấp điểm, rủi ro trống phòng hay chi phí sửa chữa hằng ngày."
  },
  {
    code: "03",
    title: "Ủy Thác Quản Lý & Tối Đa Dòng Tiền",
    highlight: "Chia sẻ lợi nhuận minh bạch",
    desc: "Chủ đầu tư chi trả chi phí cải tạo theo dự toán BOQ tối ưu. CityHouse đưa vào hệ sinh thái vận hành chuyên nghiệp và chia sẻ lợi nhuận doanh thu với báo cáo đối soát tài chính ngày 5 hàng tháng."
  }
];

export default function ConsultingRenovationPage({ onOpenModal }) {
  const { navigate } = useNavigation();

  const handleCta = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      const el = document.getElementById('cai-tao-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="consulting-renovation-page font-sans bg-[#F4EFEA]">
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
          <span className="text-[#B9887B] font-medium">Tư vấn Cải tạo và Tái định vị Tòa nhà</span>
        </div>
      </div>

      {/* ── 1. Hero Banner ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B9887B]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#B9887B] text-xs font-bold uppercase tracking-wider mb-5 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
            DỊCH VỤ TƯ VẤN 02 — CITYHOUSE MORE
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl mb-4">
            Đánh thức giá trị.<br />
            <span className="text-[#B9887B] font-serif italic">Mở ra một chu kỳ tăng trưởng mới.</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B9887B] mb-4">
            TƯ VẤN CẢI TẠO VÀ TÁI ĐỊNH VỊ TÒA NHÀ CŨ
          </p>

          <p className="lead text-base md:text-lg text-[#F4EFEA]/80 max-w-3xl leading-relaxed mt-4 font-normal font-sans">
            Hồi sinh các tòa nhà xuống cấp hoặc kinh doanh sa sút thông qua thiết kế nội thất đương đại và chiến lược tái định vị thương hiệu. Tận dụng tối đa khung kết cấu có sẵn để nhân đôi doanh thu khai thác thương mại.
          </p>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">+45%</div>
              <div className="text-xs text-white/90 font-medium">Tăng Trưởng Giá Thuê Phòng</div>
              <div className="text-[11px] text-white/60 mt-0.5">Tiếp cận khách quốc tế chi trả cao</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">45 – 60 Ngày</div>
              <div className="text-xs text-white/90 font-medium">Cải Tạo Thần Tốc Cuốn Chiếu</div>
              <div className="text-[11px] text-white/60 mt-0.5">Hạn chế tối đa gián đoạn dòng tiền</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold text-[#B9887B] mb-1">85%+</div>
              <div className="text-xs text-white/90 font-medium">Tỷ Lệ Kín Phòng Tháng Đầu</div>
              <div className="text-[11px] text-white/60 mt-0.5">Đẩy bán đa kênh OTA đồng loạt</div>
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
              <span>ĐĂNG KÝ THẨM ĐỊNH HIỆN TRẠNG</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('hang-muc-cai-tao');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] border border-white/30 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-all rounded-full font-sans cursor-pointer"
            >
              <span>XEM HẠNG MỤC CẢI TẠO</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Challenges & Renovation Assessment ── */}
      <section className="py-16 md:py-24 bg-white text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                HIỆN TRẠNG PHỔ BIẾN
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug mb-4">
                Tài sản của bạn có đang<br />
                <em>rơi vào những tình trạng này?</em>
              </h2>
              <p className="text-sm text-[#0F1A41]/75 leading-relaxed font-normal mb-6">
                Nhiều tòa nhà tại TP.HCM có vị trí rất đắc địa nhưng doanh thu chỉ bằng 50% tiềm năng thực tế do nội thất cũ kỹ, dịch vụ thiếu chuyên nghiệp và không biết cách bán phòng đa kênh.
              </p>

              <div className="space-y-3.5 text-xs text-[#0F1A41]/85">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/5">
                  <CheckCircle2 size={18} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F1A41] mb-0.5">Tỷ lệ phòng trống cao kéo dài (&gt; 35%):</strong>
                    Doanh thu sụt giảm, phụ thuộc vào khách thuê ngắn hạn qua môi giới với chi phí hoa hồng cao.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/5">
                  <CheckCircle2 size={18} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F1A41] mb-0.5">Hạ tầng kỹ thuật (MEP) thường xuyên sự cố:</strong>
                    Máy lạnh rò rỉ, thấm dột nhà vệ sinh, hệ thống điện nước chập chờn gây khiếu nại liên tục.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/5">
                  <CheckCircle2 size={18} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F1A41] mb-0.5">Muốn cải tạo nhưng ngại chi phí phát sinh:</strong>
                    Sợ bị đội vốn xây dựng, kéo dài thời gian thi công làm mất doanh thu tiền thuê nhà.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F1A41]">
                <img
                  src="https://cityhousemore.com/uploads/gallery/gallery-1782202629642-67015.webp"
                  alt="Tư vấn cải tạo tòa nhà cũ CityHouse"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 text-[#0F1A41]">
                  <div className="flex items-center gap-2 mb-2 text-[#B9887B] text-xs font-bold uppercase tracking-wider">
                    <Paintbrush size={16} />
                    <span>Phương châm cải tạo CityHouse</span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed">
                    "Tối đa hóa giá trị thẩm mỹ trên từng đồng vốn đầu tư — giữ lại tối đa những gì còn tốt, làm mới tinh tế những điểm chạm khách hàng đánh giá cao nhất."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 4 Core Renovation Scopes ── */}
      <section id="hang-muc-cai-tao" className="py-20 md:py-28 text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HẠNG MỤC TƯ VẤN CẢI TẠO CHI TIẾT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              4 giải pháp biến tòa nhà cũ<br />
              <em>thành tài sản sinh lời vượt bậc</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RENOVATION_SCOPES.map((scope, idx) => (
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

      {/* ── 4. 3 Collaboration Models For Renovation ── */}
      <section className="py-20 md:py-24 bg-[#0B1330] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              PHƯƠNG ÁN HỢP TÁC CẢI TẠO LINH HOẠT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-snug">
              Chọn phương án phù hợp<br />
              <em>khẩu vị tài chính của bạn</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COLLABORATION_RENOVATION.map((m, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#B9887B] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="font-serif text-2xl font-light text-[#B9887B]">0{m.code}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-[#B9887B] border border-white/10">
                      {m.highlight}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#B9887B] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                <button
                  onClick={handleCta}
                  className="w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-wider rounded-full transition-all border border-white/20 text-white hover:border-[#B9887B] hover:bg-[#B9887B] cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>TƯ VẤN PHƯƠNG ÁN NÀY</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Case Study: VIBE Abora ── */}
      <section className="py-20 md:py-28 bg-white text-[#0F1A41] border-t border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3 text-[#B9887B]">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              CASE STUDY ĐIỂN HÌNH
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-snug">
              Hồi sinh VIBE Abora Quận 3<br />
              <em>tăng 60% giá phòng sau 50 ngày</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#0F1A41]/75 mt-3 leading-relaxed">
              Tòa nhà cũ 6 tầng trước đây hoạt động theo mô hình phòng trọ giá rẻ, tỷ lệ trống buồng phòng trên 40%. CityHouse đã tư vấn tái cấu trúc toàn diện thành chuỗi boutique phong cách Wabi-sabi đương đại.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#0F1A41]/5">
              <div className="font-serif text-4xl font-bold text-[#B9887B] mb-2">50 Ngày</div>
              <div className="text-xs font-bold text-[#0F1A41] uppercase">Thời Gian Hoàn Thiện</div>
              <p className="text-[11px] text-[#0F1A41]/60 mt-1">Thi công trọn gói bóc tách BOQ không phát sinh chi phí</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#0F1A41]/5">
              <div className="font-serif text-4xl font-bold text-[#B9887B] mb-2">+62%</div>
              <div className="text-xs font-bold text-[#0F1A41] uppercase">Tăng Trưởng Giá Thuê</div>
              <p className="text-[11px] text-[#0F1A41]/60 mt-1">Từ 8 triệu/tháng lên 13 triệu/tháng cho tệp khách FDI</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#0F1A41]/5">
              <div className="font-serif text-4xl font-bold text-[#B9887B] mb-2">97%</div>
              <div className="text-xs font-bold text-[#0F1A41] uppercase">Công Suất Phòng Quanh Năm</div>
              <p className="text-[11px] text-[#0F1A41]/60 mt-1">Lấp đầy liên tục qua 8 kênh OTA và khách chuyên gia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Dedicated Booking Form ── */}
      <section id="cai-tao-form" className="py-20 md:py-28 bg-[#F4EFEA] text-[#0F1A41]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3 text-[#B9887B]">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                ĐĂNG KÝ KHẢO SÁT HIỆN TRẠNG
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1A41] leading-tight mb-4">
                Chuyên gia CityHouse<br />
                <em>đến tận nơi khảo sát miễn phí</em>
              </h2>
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6 font-normal">
                Chúng tôi sẽ trực tiếp cử kiến trúc sư và chuyên gia kỹ thuật rà soát kết cấu công trình của Quý vị trong vòng 48 giờ làm việc.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#0F1A41]/10 space-y-3 mb-6 text-xs text-[#0F1A41]/85">
                <div className="flex items-center gap-2.5 font-bold text-[#0F1A41]">
                  <Phone size={15} className="text-[#B9887B]" />
                  <span>Hotline Thẩm định: 0878 253 545</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-[#B9887B]" />
                  <span>Miễn phí 100% khảo sát và lập phương án sơ bộ</span>
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
                title="ĐĂNG KÝ TƯ VẤN CẢI TẠO TÒA NHÀ"
                subtitle="Cung cấp thông tin hiện trạng để Chuyên gia CityHouse gửi phương án sơ bộ và lịch khảo sát."
                submitLabel="GỬI YÊU CẦU THẨM ĐỊNH HIỆN TRẠNG"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
