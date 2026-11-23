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
              CITYHOUSE INSIGHTS & GÓC NHÌN CHUYÊN MÔN
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

        {/* 3 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigate('/goc-nhin')}
              className="bg-[#FAF6EF] rounded border border-[#0F1A41]/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F1A41]/90 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-sans font-bold uppercase rounded">
                    {article.categoryLabel}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] font-sans text-[#0F1A41]/60 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-[#B9887B]" /> {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-[#B9887B]" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-2 group-hover:text-[#B9887B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#0F1A41]/70 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#B9887B] group-hover:text-[#0F1A41] transition-colors">
                  <span>Đọc bài viết</span>
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
