import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Building2, UserCheck, ShieldCheck } from 'lucide-react';
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
      image: "https://cityhousemore.com/uploads/gallery/gallery-1782203499079-253480.webp",
      situationTitle: "Tôi đang chuẩn bị đầu tư",
      situationSubtitle: "Có quỹ đất, nhà phố hoặc chuẩn bị xin phép xây dựng",
      desc: "Nghiên cứu thị trường bán kính 2km, xác lập cơ cấu phòng tối ưu và lập bài toán tài chính hoàn vốn nhanh nhất ngay từ bản vẽ đầu tiên.",
      ctaLabel: "TƯ VẤN MÔ HÌNH PHÙ HỢP"
    },
    {
      code: "02",
      badge: "GIAI ĐOẠN PHỤC HỒI",
      image: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
      situationTitle: "Tài sản hoạt động chưa hiệu quả",
      situationSubtitle: "Tòa nhà cũ, tỷ lệ trống cao, doanh thu phòng sụt giảm",
      desc: "Đánh giá hiện trạng, cải tạo nội thất tối ưu khung kết cấu có sẵn và tái định vị thương hiệu để tiếp cận tệp khách quốc tế sẵn sàng chi trả cao.",
      ctaLabel: "NHẬN ĐÁNH GIÁ TÀI SẢN"
    },
    {
      code: "03",
      badge: "GIAI ĐOẠN KHAI THÁC",
      image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
      situationTitle: "Cần đơn vị vận hành chuyên nghiệp",
      situationSubtitle: "Bận rộn công việc chính, muốn nhận dòng tiền an nhàn",
      desc: "Thiết lập bộ máy quản trị chuẩn khách sạn 24/7, phân phối đa kênh OTA và kiểm soát chi phí minh bạch với tỷ lệ lấp đầy cam kết 95%+.",
      ctaLabel: "ĐẶT LỊCH TRAO ĐỔI"
    }
  ];

  return (
    <section id="solutions" className="solutions section-pad bg-[#FAF6EF] text-[#0F1A41]">
      <div className="section-heading row-heading mb-10">
        <div>
          <p className="eyebrow eyebrow-accent flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
            GIẢI PHÁP TÀI SẢN THEO TÌNH HUỐNG THỰC TẾ
          </p>
          <h2 className="text-[#0F1A41] leading-[1.25] mb-3">
            Giải pháp chuyên biệt<br />
            cho <em>từng bài toán của Chủ sở hữu</em>
          </h2>
          <p className="text-sm text-[#0F1A41]/75 max-w-xl leading-relaxed">
            Phân loại theo đúng thực trạng tài sản để đề xuất lộ trình tối ưu dòng tiền hiệu quả nhất.
          </p>
        </div>

        <button
          onClick={() => navigate('/tu-van')}
          className="outline-btn-dark inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          style={{
            color: '#0F1A41',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(15, 26, 65, 0.25)',
          }}
          aria-label="Khám phá toàn bộ giải pháp"
        >
          <span className="font-bold">Khám phá toàn bộ giải pháp</span>
          <ArrowUpRight size={15} />
        </button>
      </div>

      {/* 3 Streamlined Client Situations Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CLIENT_SITUATIONS.map((item) => (
          <article
            key={item.code}
            className="bg-white rounded border border-[#0F1A41]/12 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-t-4 border-t-[#B9887B]"
          >
            <div>
              {/* Scenario Context Photo */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.situationTitle}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#0F1A41]/90 backdrop-blur-sm text-white rounded uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-mono text-xs font-bold text-[#B9887B] block mb-0.5">
                    NHÓM {item.code}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#B9887B] transition-colors">
                    {item.situationTitle}
                  </h3>
                </div>
              </div>

              {/* Card Body (Concise, no clutter) */}
              <div className="p-6">
                <p className="text-xs text-[#0F1A41]/60 mb-3 font-mono uppercase tracking-wider">
                  {item.situationSubtitle}
                </p>

                <p className="text-sm text-[#0F1A41]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Direct High-Converting Solid CTA */}
            <div className="p-6 pt-0">
              <button
                onClick={handleCtaClick}
                className="w-full py-3.5 px-4 text-center text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                style={{
                  backgroundColor: '#B9887B',
                  color: '#FFFFFF',
                  border: '1px solid #B9887B',
                  boxShadow: '0 4px 16px rgba(185, 136, 123, 0.4)',
                }}
              >
                <span>{item.ctaLabel}</span>
                <ArrowUpRight size={15} className="text-white" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
