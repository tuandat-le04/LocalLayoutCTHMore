import React from 'react';
import { brands } from '../../data/brands.js';
import { Sparkles, ArrowUpRight, Users, Compass, DollarSign, Building, Award, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Brands({ onContactClick }) {
  const { navigate } = useNavigation();

  return (
    <section id="brands" className="brands-section section-pad bg-[#0F1A41] text-white">
      <div className="section-heading row-heading">
        <div>
          <p className="eyebrow eyebrow-accent flex items-center gap-1.5">
            <Sparkles size={14} className="text-[#B9887B]" />
            HỆ SINH THÁI 5 DÒNG THƯƠNG HIỆU LƯU TRÚ
          </p>
          <h2 className="text-white leading-[1.25] mb-3">
            Định vị chính xác<br />
            cho <em>từng tệp khách hàng & tài sản</em>
          </h2>
          <p className="text-sm text-white/75 max-w-xl leading-relaxed">
            Mỗi thương hiệu trong bộ sưu tập CityHouse Collection được thiết kế chuyên biệt cho một phân khúc khách thuê và mô hình bất động sản cụ thể, giúp tối ưu hóa công suất phòng và giá thuê trên từng mét vuông.
          </p>
        </div>

        <button
          onClick={() => navigate('/thuong-hieu')}
          className="outline-btn text-xs flex items-center gap-1.5 border border-white/20 text-white/90 hover:border-[#B9887B] hover:text-[#B9887B] transition-colors rounded px-4 py-2.5 cursor-pointer"
        >
          <span>Xem chi tiết 5 thương hiệu</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Responsive Grid View with Brand Photos (Part 5 Request) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10">
        {brands.map((brand) => (
          <div
            key={brand.code}
            className="bg-white/[0.04] border border-white/10 rounded overflow-hidden flex flex-col justify-between hover:border-[#B9887B] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
            style={{ borderTop: `3px solid ${brand.accentColor}` }}
          >
            <div>
              {/* Brand Representative Visual Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-900">
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41] via-transparent to-black/30"></div>

                {/* Overlaid Brand Code Badge */}
                <div className="absolute top-3 left-3 bg-[#0F1A41]/90 backdrop-blur-sm border border-white/20 px-3 py-1 rounded">
                  <span className="font-serif text-2xl font-bold text-white tracking-wider">
                    {brand.code}
                  </span>
                </div>

                {/* Overlaid Performance Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] font-mono px-2 py-0.5 text-white/90 rounded border border-white/10">
                  {brand.stats.split('·')[0]}
                </div>
              </div>

              {/* Brand Card Content (Streamlined & Minimalist) */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="font-serif text-sm italic text-[#B9887B] mb-2 font-medium">
                    "{brand.tagline}"
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed mb-4 line-clamp-3">
                    {brand.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span className="text-[#B9887B] font-bold">{brand.badge}</span>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="p-5 pt-0">
              <button
                onClick={() => navigate('/thuong-hieu')}
                className="w-full py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-white/20 text-white hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white"
              >
                <span>XEM CHI TIẾT</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
