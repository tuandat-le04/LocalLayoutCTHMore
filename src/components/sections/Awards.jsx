import React from 'react';
import { awards } from '../../data/awards.js';
import { Award, Star, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Awards() {
  const { navigate } = useNavigation();
  // Show top 4 flagship verified awards
  const featuredAwards = awards.slice(0, 4);

  return (
    <section id="awards" className="awards-section py-16 md:py-24 bg-[#0F1A41] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-3 flex items-center gap-2 font-sans">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
              BẢO CHỨNG TÍN NHIỆM — AGODA EXCELLENCE
            </p>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-[1.25] mb-3">
              Năng lực vận hành<br />
              được <span className="text-[#B9887B] font-serif italic">kiểm chứng thực tế</span>
            </h2>
            <p className="text-sm text-white/75 max-w-xl leading-relaxed font-normal">
              Điểm số đánh giá xuất sắc từ hàng trăm ngàn lượt du khách quốc tế là bảo chứng vững bền nhất cho chất lượng tài sản.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#B9887B] bg-white/5 border border-[#B9887B]/30 px-4 py-2.5 rounded-full self-start md:self-auto">
            <Star size={15} className="fill-[#C79A3B] text-[#C79A3B]" />
            <span>Điểm số bình quân: <strong className="text-white">9.0+ / 10</strong> (Xuất sắc)</span>
          </div>
        </div>

        {/* 4 Featured Verified Agoda Awards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {featuredAwards.map((item) => (
            <div
              className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#B9887B]/60 transition-all duration-300 group"
              key={item.id}
            >
              {/* Property Photo with Overlaid Score */}
              <div
                className="relative h-44 overflow-hidden bg-gray-900 cursor-pointer"
                onClick={() => item.projectSlug && navigate(`/dang-hoat-dong/${item.projectSlug}`)}
                title={item.projectSlug ? `Xem chi tiết dự án ${item.property}` : item.property}
              >
                <img
                  src={item.image}
                  alt={item.property}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41] via-transparent to-black/30"></div>

                <div className="absolute top-3 left-3 bg-[#0F1A41]/90 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-white font-sans text-[10px] font-bold uppercase tracking-wider">
                  {item.brand}
                </div>

                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-[#0F1A41] font-sans text-xs font-bold shadow">
                  <Star size={12} className="fill-[#C79A3B] text-[#C79A3B]" />
                  <span>{item.score}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-lg font-bold truncate group-hover:text-[#B9887B] transition-colors flex items-center gap-1">
                    <span>{item.property}</span>
                    {item.projectSlug && (
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B9887B] shrink-0" />
                    )}
                  </h3>
                  <span className="text-[11px] text-white/70 font-sans block truncate">
                    {item.district || item.location}
                  </span>
                </div>
              </div>

              {/* Verified Details */}
              <div className="p-4 flex flex-col justify-between flex-1 font-sans">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-sans text-white/60 mb-2">
                    <span className="text-[#B9887B] font-semibold">{item.awardName}</span>
                    <span className="text-white/50 text-[10.5px]">{item.reviewCount || item.reviewsCount}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed mb-4 font-normal">
                    {item.highlight}
                  </p>
                </div>

                {item.agodaUrl && (
                  <a
                    href={item.agodaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 text-center text-xs font-sans uppercase tracking-[0.12em] text-white/80 border border-white/15 hover:border-[#B9887B] hover:bg-[#B9887B] hover:text-white transition-all rounded-full flex items-center justify-center gap-1.5 font-bold"
                  >
                    <span>Xem trên Agoda</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
