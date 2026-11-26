import React from 'react';
import { ArrowUpRight, ChevronRight, TrendingUp, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Solutions({ onOpenModal }) {
  const { navigate } = useNavigation();

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      navigate('/contact');
    }
  };

  const CLIENT_SITUATIONS = [
    {
      code: "01",
      badge: "GIAI ĐOẠN KHỞI TẠO",
      phaseTitle: "Định hình & Hoàn vốn",
      assetTag: "Đất trống · Xây mới · Cấp phép",
      image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499079-253480.webp",
      situationTitle: "Tôi đang chuẩn bị đầu tư",
      situationSubtitle: "Có quỹ đất, nhà phố hoặc chuẩn bị xin phép xây dựng",
      desc: "Đồng hành từ ý tưởng sơ khởi: khảo sát thực địa, tối ưu hóa cơ cấu buồng phòng và lập bài toán tài chính hoàn vốn nhanh nhất ngay từ bản vẽ thiết kế đầu tiên.",
      metric: {
        value: "12 – 15%",
        label: "ROI Dự phóng",
        sub: "Tiết kiệm 20–30% CAPEX"
      },
      roadmap: [
        "Khảo sát FS & phân tích cung - cầu bán kính 2km",
        "Quy hoạch cơ cấu phòng, tăng 15–20% diện tích khai thác",
        "Lập mô hình tài chính hoàn vốn & dự phóng dòng tiền 10 năm"
      ],
      deliverable: "Báo cáo FS · Bản vẽ Layout · Kế hoạch vốn",
      ctaLabel: "TƯ VẤN MÔ HÌNH ĐẦU TƯ"
    },
    {
      code: "02",
      badge: "GIAI ĐOẠN PHỤC HỒI",
      phaseTitle: "Tái định vị & Cải tạo",
      assetTag: "Tòa nhà cũ · Doanh thu sụt giảm",
      image: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
      situationTitle: "Tài sản hoạt động chưa hiệu quả",
      situationSubtitle: "Tòa nhà cũ, tỷ lệ trống cao, doanh thu phòng sụt giảm",
      desc: "Hồi sinh tòa nhà xuống cấp qua thiết kế nội thất đương đại và tái định vị thương hiệu, tận dụng tối đa kết cấu có sẵn để tiếp cận tệp khách quốc tế sẵn sàng chi trả cao.",
      metric: {
        value: "+45%",
        label: "Tăng trưởng giá thuê",
        sub: "Cải tạo thần tốc 45 – 60 ngày"
      },
      roadmap: [
        "Thẩm định hiện trạng kết cấu & hạ tầng kỹ thuật (MEP)",
        "Thiết kế concept nội thất boutique & tái định vị thương hiệu",
        "Đẩy bán đa kênh OTA, phủ kín 85% phòng ngay tháng đầu"
      ],
      deliverable: "Concept 3D · Dự toán BOQ · Kế hoạch Launch",
      ctaLabel: "NHẬN ĐÁNH GIÁ TÀI SẢN"
    },
    {
      code: "03",
      badge: "GIAI ĐOẠN KHAI THÁC",
      phaseTitle: "Quản trị & Tối ưu dòng tiền",
      assetTag: "Chủ nhà bận rộn · Tòa nhà mới",
      image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
      situationTitle: "Cần đơn vị vận hành chuyên nghiệp",
      situationSubtitle: "Bận rộn công việc chính, muốn nhận dòng tiền an nhàn",
      desc: "Thiết lập bộ máy quản trị 24/7 ứng dụng công nghệ PMS số hóa và định giá buồng phòng động, giải phóng thời gian cho Chủ sở hữu với cam kết dòng tiền bền vững.",
      metric: {
        value: "95%+",
        label: "Tỷ lệ kín phòng",
        sub: "Tiết kiệm 40% chi phí qua PMS Cloud"
      },
      roadmap: [
        "Thiết lập quy chuẩn SOP dịch vụ khách sạn chuẩn mực 24/7",
        "Ứng dụng thuật toán định giá buồng phòng động (Dynamic Pricing)",
        "Khai thác mạng lưới 120+ đối tác FDI & đối soát ngày 5 hàng tháng"
      ],
      deliverable: "Quy chuẩn SOP · Hệ thống PMS · Báo cáo đối soát",
      ctaLabel: "ĐẶT LỊCH TRAO ĐỔI VẬN HÀNH"
    }
  ];

  return (
    <section id="solutions" className="solutions section-pad bg-[#FAF6EF] text-[#0F1A41] font-sans relative overflow-hidden">
      {/* Subtle architectural background ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B9887B]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F1A41]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading with Editorial Polish */}
        <div className="section-heading row-heading mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
              GIẢI PHÁP TÀI SẢN THEO TÌNH HUỐNG THỰC TẾ
            </p>
            <h2 className="text-[#0F1A41] font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-3">
              Giải pháp chuyên biệt<br />
              cho <span className="text-[#B9887B] font-serif italic">từng bài toán của Chủ sở hữu</span>
            </h2>
            <p className="text-sm sm:text-base text-[#0F1A41]/75 max-w-xl leading-relaxed font-normal">
              Phân loại theo đúng thực trạng tài sản để đề xuất lộ trình tối ưu dòng tiền hiệu quả nhất, đồng hành xuyên suốt chu kỳ sống của tòa nhà.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => navigate('/giai-phap')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md bg-white border border-[#0F1A41]/15 hover:border-[#B9887B] hover:text-[#B9887B] text-[#0F1A41] font-sans"
              aria-label="Khám phá toàn bộ giải pháp"
            >
              <span>Khám phá toàn bộ giải pháp</span>
              <ArrowUpRight size={15} />
            </button>
            <button
              onClick={() => navigate('/tu-van')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md bg-[#B9887B] text-white hover:bg-[#a57467] font-sans"
              aria-label="Đặt lịch tư vấn"
            >
              <span>Đặt lịch tư vấn</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* ── Lifecycle Continuum Ribbon (Breaks the rigid boxed-in feeling & shows continuous flow) ── */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-[#0F1A41]/8 shadow-sm hidden md:flex items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B9887B] animate-pulse"></span>
            <span className="font-bold text-[#0F1A41] uppercase tracking-wider text-[11px]">Chu kỳ tài sản:</span>
          </div>

          <div className="flex items-center flex-1 justify-around text-[#0F1A41]/80 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B9887B]/15 text-[#B9887B] font-bold text-[11px] flex items-center justify-center font-serif">1</span>
              <span>Khởi tạo & Quy hoạch đầu tư</span>
            </div>
            <ChevronRight size={14} className="text-[#0F1A41]/30" />
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B9887B]/15 text-[#B9887B] font-bold text-[11px] flex items-center justify-center font-serif">2</span>
              <span>Cải tạo & Tái định vị thương hiệu</span>
            </div>
            <ChevronRight size={14} className="text-[#0F1A41]/30" />
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B9887B]/15 text-[#B9887B] font-bold text-[11px] flex items-center justify-center font-serif">3</span>
              <span>Vận hành chuẩn 24/7 & Tối đa dòng tiền</span>
            </div>
          </div>

          <span className="text-[11px] text-[#B9887B] font-semibold italic">
            35+ Tòa nhà bảo chứng
          </span>
        </div>

        {/* ── 3 Architectural Editorial Dossier Cards (Airy, Deep, Unboxed) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
          {CLIENT_SITUATIONS.map((item) => (
            <article
              key={item.code}
              className="relative bg-white/80 hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#0F1A41]/8 hover:border-[#B9887B]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(15,26,65,0.12)] flex flex-col justify-between group"
            >
              <div>
                {/* Card Topline: Elegant Serif Index & Phase Pill */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0F1A41]/8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#B9887B] leading-none">
                      {item.code}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#0F1A41]/60 uppercase">
                      / {item.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#B9887B] bg-[#B9887B]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.phaseTitle}
                  </span>
                </div>

                {/* Cinematic Architectural Photo (Contained inside with generous breathing room, not a split box) */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden my-5 bg-[#0F1A41]/5 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.situationTitle}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

                  {/* Overlaid Target Asset Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium px-3 py-1 bg-[#0F1A41]/80 backdrop-blur-md text-white/95 rounded-full uppercase tracking-wider border border-white/10 shadow-sm">
                      {item.assetTag}
                    </span>
                  </div>

                  {/* Key Metric Highlight Pill */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-white/20 flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-[#B9887B]" />
                    <span className="font-bold text-xs text-[#0F1A41]">{item.metric.value}</span>
                    <span className="text-[10px] text-[#0F1A41]/70 font-medium">({item.metric.label})</span>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <div className="mb-4">
                  <p className="text-[11px] font-bold text-[#B9887B] uppercase tracking-[0.15em] mb-1.5">
                    {item.situationSubtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-[#0F1A41] font-normal leading-snug group-hover:text-[#B9887B] transition-colors">
                    {item.situationTitle}
                  </h3>
                </div>

                {/* Narrative Thesis */}
                <p className="text-sm text-[#0F1A41]/75 leading-relaxed font-normal mb-5">
                  {item.desc}
                </p>

                {/* ── Concrete 3-Step Solution Roadmap (Solves the "cụt" / abrupt feeling) ── */}
                <div className="pt-4 pb-2 border-t border-[#0F1A41]/8 mb-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#0F1A41]/60 uppercase mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                    LỘ TRÌNH THỰC THI CHI TIẾT
                  </p>
                  <ul className="space-y-2.5">
                    {item.roadmap.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F1A41]/85 leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#B9887B]/15 text-[#B9887B] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-sans">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Concrete Deliverables Pill */}
                  <div className="mt-4 pt-3 border-t border-dashed border-[#0F1A41]/10 flex items-center justify-between text-[11px] text-[#0F1A41]/65">
                    <span className="font-semibold text-[#0F1A41]/50 uppercase tracking-wider text-[10px]">Bàn giao:</span>
                    <span className="font-medium text-[#0F1A41]/80 truncate max-w-[210px]">{item.deliverable}</span>
                  </div>
                </div>
              </div>

              {/* ── Elegant Interactive CTA Action (Replaces the clunky form block button) ── */}
              <div className="pt-2">
                <button
                  onClick={handleCtaClick}
                  className="w-full py-3.5 px-5 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-[#B9887B] hover:bg-[#0F1A41] text-white transition-all duration-300 flex items-center justify-between group/btn cursor-pointer shadow-md hover:shadow-xl font-sans"
                  style={{
                    boxShadow: '0 4px 16px rgba(185, 136, 123, 0.35)',
                  }}
                >
                  <span>{item.ctaLabel}</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-[#B9887B] group-hover/btn:text-white transition-colors">
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </span>
                </button>

                <div className="mt-3 text-center">
                  <button
                    onClick={() => navigate('/giai-phap')}
                    className="text-[11px] font-semibold text-[#0F1A41]/60 hover:text-[#B9887B] transition-colors inline-flex items-center gap-1 cursor-pointer font-sans"
                  >
                    <span>Khám phá toàn bộ hệ khung Giải pháp</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
