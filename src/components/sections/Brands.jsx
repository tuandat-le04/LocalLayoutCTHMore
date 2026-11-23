import React from 'react';
import { brands } from '../../data/brands.js';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Brands({ onContactClick }) {
  const { navigate } = useNavigation();

  return (
    <section id="brands" className="brands-section section-pad bg-[#0F1A41] text-white font-sans">
      <div className="section-heading row-heading">
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            HỆ SINH THÁI 5 DÒNG THƯƠNG HIỆU LƯU TRÚ
          </p>
          <h2 className="text-white font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-3">
            Định vị chính xác<br />
            cho <span className="text-[#B9887B] font-serif italic">từng tệp khách hàng & tài sản</span>
          </h2>
          <p className="text-sm text-white/75 max-w-xl leading-relaxed font-normal">
            Mỗi thương hiệu trong bộ sưu tập CityHouse Collection được thiết kế chuyên biệt cho một phân khúc khách thuê và mô hình bất động sản cụ thể, giúp tối ưu hóa công suất phòng và giá thuê trên từng mét vuông.
          </p>
        </div>

        <button
          onClick={() => navigate('/thuong-hieu')}
          className="text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-2 border border-white/30 text-white hover:border-[#B9887B] hover:text-[#B9887B] hover:bg-white/[0.04] transition-all duration-300 rounded-full px-5 py-2.5 cursor-pointer self-start md:self-auto shrink-0 font-sans"
        >
          <span>Xem chi tiết 5 thương hiệu</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Responsive Grid View with Brand Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10">
        {brands.map((brand) => (
          <div
            key={brand.code}
            className="bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#B9887B] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
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
                  <span className="text-lg font-extrabold text-white tracking-wider font-sans">
                    {brand.code}
                  </span>
                </div>

                {/* Overlaid Performance Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 text-white/90 rounded border border-white/10 font-sans">
                  {brand.stats.split('·')[0]}
                </div>
              </div>

              {/* Brand Card Content (Streamlined & Minimalist: Key Metrics First) */}
              <div className="p-5 flex flex-col justify-between flex-grow font-sans">
                <div>
                  <div className="font-serif text-xs sm:text-sm italic text-[#B9887B] mb-3 font-medium">
                    "{brand.tagline}"
                  </div>

                  {/* Core Metrics: Clean & Scannable instead of heavy text */}
                  <div className="space-y-1.5 mb-4 text-xs font-sans">
                    <div className="flex items-center justify-between text-white/80 bg-white/[0.03] px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-white/50 text-[10px] uppercase font-semibold">Giá thuê:</span>
                      <strong className="text-white font-bold">{brand.priceSegment.split('(')[0].trim()}</strong>
                    </div>
                    <div className="flex items-center justify-between text-white/80 bg-white/[0.03] px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-white/50 text-[10px] uppercase font-semibold">Tài sản:</span>
                      <span className="text-white/90 truncate max-w-[140px] text-[11px] font-medium">{brand.assetType.split('(')[1]?.replace(')', '') || 'Tòa nhà độc lập'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-sans text-white/70">
                  <span className="text-[#B9887B] font-bold uppercase truncate">{brand.badge.split('·')[0]}</span>
                  <span className="text-white/40 font-semibold">5 SAO</span>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="p-5 pt-0">
              <button
                onClick={() => navigate('/thuong-hieu')}
                className="w-full py-2.5 px-3 text-center text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-white/20 text-white hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white font-sans"
              >
                <span>XEM CHI TIẾT</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
