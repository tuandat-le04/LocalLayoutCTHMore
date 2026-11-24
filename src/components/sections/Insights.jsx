import React from 'react';
import { insightsArticles } from '../../data/insights.js';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext.jsx';

export default function Insights() {
  const { navigate } = useNavigation();
  // Display top 3 flagship articles on the homepage
  const featuredArticles = insightsArticles.slice(0, 3);

  return (
    <section id="insights" className="insights py-16 md:py-24 bg-white text-[#0F1A41]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              CITYHOUSE INSIGHTS VÀ GÓC NHÌN CHUYÊN MÔN
            </p>
            <h2 className="text-[#0F1A41] text-2xl sm:text-3xl md:text-4xl font-serif leading-[1.25] mb-3">
              Phân tích thị trường<br />
              và <em>kinh nghiệm quản lý gia sản</em>
            </h2>
            <p className="text-sm text-[#0F1A41]/75 max-w-xl leading-relaxed">
              Dữ liệu thực chiến từ việc vận hành hơn 1.850 phòng lưu trú và những đúc kết chuyên sâu dành riêng cho các Chủ sở hữu bất động sản dòng tiền.
            </p>
          </div>

          <button
            onClick={() => navigate('/goc-nhin')}
            className="outline-btn-dark inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md self-start md:self-auto"
            style={{
              color: '#0F1A41',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid rgba(15, 26, 65, 0.25)',
            }}
            aria-label="Xem tất cả bài viết"
          >
            <span className="font-bold">Xem tất cả bài viết</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* 3 Clean Luxury Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigate('/goc-nhin')}
              className="bg-white rounded-2xl border border-[#B9887B]/20 overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(16,28,66,0.04)] hover:shadow-2xl hover:border-[#B9887B]/50 transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer ring-1 ring-black/[0.02]"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#101C42]/90 backdrop-blur-md text-[#F4EFEA] border border-white/20 px-3 py-1 text-[10px] font-sans font-bold tracking-wider uppercase rounded-full shadow-sm">
                    {article.categoryLabel}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-[11px] font-sans text-[#101C42]/60 mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar size={12} className="text-[#B9887B]" /> {article.date}
                    </span>
                    <span className="text-[#101C42]/20">/</span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock size={12} className="text-[#B9887B]" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101C42] mb-2.5 group-hover:text-[#B9887B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#101C42]/70 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-[#101C42]/5 mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#B9887B] group-hover:text-[#101C42] transition-colors pt-4">
                  <span>Đọc bài phân tích</span>
                  <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
