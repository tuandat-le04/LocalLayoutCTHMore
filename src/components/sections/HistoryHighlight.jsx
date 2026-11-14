import React from 'react';
import { ArrowUpRight, History, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

const CONDENSED_MILESTONES = [
  {
    year: "2009",
    tag: "KHỞI ĐẦU",
    title: "Saigon Pavillon Coteccons",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1787394527042-279548.png",
    desc: "Đặt nền móng chuyên sâu về phát triển và vận hành lưu trú cao cấp bậc nhất TP.HCM."
  },
  {
    year: "2017",
    tag: "MỞ RỘNG",
    title: "Mạng lưới 60 tòa nhà",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1784272224094-150091.webp",
    desc: "Khẳng định vị thế dẫn đầu trong phân khúc căn hộ dịch vụ và khách sạn boutique trung tâm."
  },
  {
    year: "2021",
    tag: "THÍCH ỨNG",
    title: "Mô hình lưu trú linh hoạt",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1784272586309-243597.jpg",
    desc: "Tái cấu trúc kết hợp khách dài hạn & du lịch ngắn hạn, tối ưu dòng tiền vượt qua biến động thị trường."
  },
  {
    year: "2024 – 2026",
    tag: "GIA SẢN",
    title: "Hệ sinh thái 3.800 tỷ",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1787394691228-716125.JPG",
    desc: "Chuẩn hóa 5 dòng thương hiệu độc bản, phục vụ các gia tộc và chủ đầu tư bất động sản truyền đời."
  }
];

export default function HistoryHighlight() {
  const { navigate } = useNavigation();

  return (
    <section className="story section-pad bg-[#0F1A41] text-white" id="story-highlight">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column: Summary value proposition */}
        <div className="lg:col-span-5">
          <p className="eyebrow eyebrow-accent flex items-center gap-1.5">
            <History size={14} className="text-[#B9887B]" />
            DẤU ẤN 15 NĂM ĐỒNG HÀNH (2009 – 2026)
          </p>

          <h2 className="text-white mb-4">
            Nền tảng thực chiến<br />
            từ <em>những công trình biểu tượng</em>
          </h2>

          <p className="text-sm text-white/75 leading-relaxed mb-6">
            Bắt đầu từ dự án lưu trú cao cấp Saigon Pavillon thuộc Coteccons Group năm 2009, CityHouse More đã trải qua 15+ năm tôi luyện năng lực, xây dựng bộ máy vận hành chuẩn quốc tế và chuẩn hóa hệ sinh thái quản lý gia sản bền vững cho hàng trăm Chủ sở hữu tại TP.HCM.
          </p>

          {/* Action CTAs: Explicit benefit */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => navigate('/danh-muc-tai-san')}
              className="solid-btn flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 shadow-md cursor-pointer"
              style={{
                backgroundColor: '#B9887B',
                color: '#FFFFFF',
                border: '1px solid #B9887B',
                boxShadow: '0 4px 18px rgba(185, 136, 123, 0.45)',
              }}
            >
              <span>XEM NĂNG LỰC & DỰ ÁN TIÊU BIỂU</span>
              <ArrowUpRight size={16} className="text-white" />
            </button>

            <button
              onClick={() => navigate('/ve-he-thong')}
              className="outline-btn flex items-center gap-1.5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/80 border border-white/20 hover:border-[#B9887B] hover:text-white transition-all rounded cursor-pointer"
            >
              <span>Xem lịch sử đầy đủ</span>
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Right column: 4 condensed milestones with real authentic photos */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONDENSED_MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/[0.04] border border-white/10 rounded overflow-hidden hover:border-[#B9887B] transition-all duration-300 flex flex-col group shadow-sm"
              >
                {/* Milestone Image */}
                <div className="relative h-32 sm:h-36 overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41] via-[#0F1A41]/40 to-transparent"></div>
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="font-mono text-sm text-[#B9887B] font-bold bg-[#0F1A41]/90 px-2 py-0.5 rounded border border-[#B9887B]/40">
                      {item.year}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black/60 text-white/90 rounded backdrop-blur-xs">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Milestone Details */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-white mb-2 group-hover:text-[#B9887B] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
