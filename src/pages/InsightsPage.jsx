import React, { useState } from 'react';
import { insightsCategories, insightsArticles } from '../data/insights.js';
import { ArrowUpRight, Clock, BookOpen, Calendar, TrendingUp, FileText, ShieldCheck } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const { navigate } = useNavigation();

  const filteredArticles = activeTab === 'all'
    ? insightsArticles
    : insightsArticles.filter(a => a.category === activeTab);

  return (
    <div className="insights-page font-sans">
      {/* Hero */}
      <section className="inner-hero section-pad font-sans">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
          CITYHOUSE INSIGHTS - GÓC NHÌN CHUYÊN GIA
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.18] font-normal mb-5">
          Nghiên cứu thị trường<br />
          <span className="text-[#B9887B] font-serif italic">và thực tiễn vận hành</span>
        </h1>
        <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal font-sans">
          Nơi đội ngũ chuyên gia CityHouse More chia sẻ những phân tích dữ liệu chuyên sâu, xu hướng chuyển dịch của thị trường lưu trú và kinh nghiệm thực chiến tối ưu hóa tài sản.
        </p>
      </section>

      {/* Featured Article Banner - Luxury Strategic Briefing Dossier */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41] pb-0">
        <div className="bg-white border border-[#B9887B]/25 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_50px_-12px_rgba(16,28,66,0.08)] ring-1 ring-black/[0.03]">
          {/* Left Column: Visual Cover & Proof (5 Cols) */}
          <div className="lg:col-span-5 relative overflow-hidden bg-[#0A1128] min-h-[320px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8">
            <img
              src="https://cityhousemore.com/uploads/gallery/gallery-1782195854670-640977.webp"
              alt="Báo cáo nghiên cứu thị trường CityHouse More 2026"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-black/25 pointer-events-none" />

            {/* Top Badges */}
            <div className="relative z-10 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#0A1128]/90 backdrop-blur-md text-[#F4EFEA] font-sans text-[10px] font-bold tracking-[0.16em] rounded-full uppercase border border-white/20 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                BÁO CÁO TIÊU ĐIỂM 2026
              </span>
              <span className="px-3 py-1 bg-[#B9887B] text-white font-sans text-[10px] font-bold tracking-[0.14em] rounded-full uppercase">
                EXECUTIVE SUMMARY
              </span>
            </div>

            {/* Bottom Citation Overlay */}
            <div className="relative z-10 mt-auto pt-6 text-white">
              <div className="bg-[#0A1128]/90 backdrop-blur-md border border-[#B9887B]/30 p-4 rounded-xl shadow-lg">
                <p className="text-[11px] font-sans text-[#B9887B] uppercase tracking-[0.16em] mb-1.5 flex items-center gap-2 font-bold">
                  <ShieldCheck size={14} className="text-[#B9887B]" />
                  Dữ liệu khảo sát thực chứng độc quyền
                </p>
                <p className="text-xs text-white/85 leading-relaxed font-sans font-normal">
                  Khảo sát từ 35+ tòa nhà lưu trú trung tâm và 1.850+ căn hộ dịch vụ đang vận hành tại TP.HCM.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Rich Editorial Dossier (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              {/* Meta Header */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-sans text-xs mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase bg-[#101C42] text-[#F4EFEA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                  THỊ TRƯỜNG & ĐẦU TƯ
                </span>
                <span className="text-[#101C42]/20 font-serif">/</span>
                <span className="text-[#101C42]/65 font-medium text-[11px] flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#B9887B]" /> 10.02.2026
                </span>
                <span className="text-[#101C42]/20 font-serif">/</span>
                <span className="text-[#101C42]/65 font-medium text-[11px] flex items-center gap-1.5">
                  <Clock size={12} className="text-[#B9887B]" /> 6 phút đọc
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-medium mb-3.5 leading-[1.28] text-[#101C42] tracking-tight">
                Dòng tiền bền vững trong bất động sản lưu trú đô thị:{' '}
                <span className="font-serif italic text-[#B9887B] block sm:inline">
                  Xu hướng dịch chuyển 2026
                </span>
              </h2>

              {/* Lead Summary with Luxury Accent Line */}
              <p className="text-xs sm:text-[13.5px] text-[#101C42]/80 leading-relaxed mb-5 font-sans border-l-2 border-[#B9887B] pl-4 py-0.5">
                Nghiên cứu chỉ ra sự chuyển dịch mạnh mẽ từ mô hình thuê thuần dài hạn sang mô hình lưu trú linh hoạt <strong className="text-[#101C42] font-semibold">(Hybrid Living)</strong> kết hợp ngắn hạn du lịch và trung hạn chuyên gia công tác, giúp công suất phòng duy trì trên <strong className="text-[#101C42] font-semibold">92%</strong> và gia tăng doanh thu thuần tới <strong className="text-[#B9887B] font-semibold">30%</strong>.
              </p>

              {/* 3 Key Takeaways: Refined Clean Editorial Box */}
              <div className="bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/10 p-5 mb-5 font-sans">
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-[#0F1A41]/10">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#101C42] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                    3 ĐÚC KẾT THEN CHỐT CHO CHỦ SỞ HỮU BẤT ĐỘNG SẢN
                  </span>
                  <span className="text-[10px] font-sans font-semibold tracking-wider text-[#B9887B] uppercase">
                    CITYHOUSE RESEARCH
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-[#B9887B] font-bold text-base leading-none mt-0.5 tracking-tight w-5 shrink-0">
                      01
                    </span>
                    <p className="text-xs leading-relaxed text-[#101C42]/85">
                      <strong className="text-[#101C42] font-semibold">Tỷ trọng 65% khách dài hạn:</strong> Đảm bảo dòng tiền móng vững chắc bù đắp chi phí vận hành ngay cả trong mùa thấp điểm du lịch.
                    </p>
                  </div>

                  <div className="h-[1px] bg-[#0F1A41]/8" />

                  {/* Item 2 */}
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-[#B9887B] font-bold text-base leading-none mt-0.5 tracking-tight w-5 shrink-0">
                      02
                    </span>
                    <p className="text-xs leading-relaxed text-[#101C42]/85">
                      <strong className="text-[#101C42] font-semibold">Tăng 25 – 35% giá phòng bình quân (ADR):</strong> Khai thác tệp khách quốc tế ngắn hạn vào cuối tuần và mùa cao điểm lễ hội.
                    </p>
                  </div>

                  <div className="h-[1px] bg-[#0F1A41]/8" />

                  {/* Item 3 */}
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-[#B9887B] font-bold text-base leading-none mt-0.5 tracking-tight w-5 shrink-0">
                      03
                    </span>
                    <p className="text-xs leading-relaxed text-[#101C42]/85">
                      <strong className="text-[#101C42] font-semibold">Số hóa & Đa kênh OTA:</strong> Cắt giảm tới 40% chi phí hoa hồng môi giới truyền thống, minh bạch dòng tiền hàng tháng.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Metric Chips: High-End Architectural Stat Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#0F1A41]/8 text-center transition-all group">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#101C42] block tracking-tight group-hover:text-[#B9887B] transition-colors">
                    92%+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.12em] text-[#101C42]/65 font-semibold block mt-1">
                    Công suất thực tế
                  </span>
                  <span className="text-[9.5px] font-sans text-[#B9887B] font-medium hidden sm:block mt-0.5">
                    Duy trì quanh năm
                  </span>
                </div>

                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#0F1A41]/8 text-center transition-all group">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#B9887B] block tracking-tight">
                    +30%
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.12em] text-[#101C42]/65 font-semibold block mt-1">
                    Doanh thu thuần
                  </span>
                  <span className="text-[9.5px] font-sans text-[#B9887B] font-medium hidden sm:block mt-0.5">
                    Mô hình Hybrid
                  </span>
                </div>

                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#0F1A41]/8 text-center transition-all group">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#101C42] block tracking-tight group-hover:text-[#B9887B] transition-colors">
                    1.850+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.12em] text-[#101C42]/65 font-semibold block mt-1">
                    Phòng khảo sát
                  </span>
                  <span className="text-[9.5px] font-sans text-[#B9887B] font-medium hidden sm:block mt-0.5">
                    35+ tòa nhà TP.HCM
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Actions & Source */}
            <div className="pt-4 border-t border-[#0F1A41]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#0F1A41]/60 font-sans">
                Được xuất bản bởi Hội Đồng Nghiên Cứu CityHouse More
              </span>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-6 py-3 bg-[#101C42] hover:bg-[#1C2D6B] text-white font-sans text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>ĐĂNG KÝ NHẬN BẢN ĐẦY ĐỦ (PDF)</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs and Articles Grid */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41]">
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {insightsCategories.map(tab => (
            <button
              key={tab.id}
              className={`font-sans text-xs px-5 py-2.5 border rounded-full transition-all cursor-pointer ${activeTab === tab.id
                ? 'bg-[#0F1A41] text-white border-[#0F1A41]'
                : 'bg-white text-[#0F1A41]/70 border-[#0F1A41]/15 hover:border-[#0F1A41]'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article key={article.id} className="bg-white border border-[#B9887B]/20 rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(16,28,66,0.04)] hover:shadow-xl hover:border-[#B9887B]/50 transition-all duration-300 hover:-translate-y-1 group ring-1 ring-black/[0.02]">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-sans uppercase text-[#101C42]/60 mb-2.5">
                  <span className="text-[#B9887B] font-bold tracking-wider">{article.categoryLabel}</span>
                  <span className="flex items-center gap-1 font-medium"><Clock size={11} className="text-[#B9887B]" /> {article.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#101C42] mb-2.5 leading-snug group-hover:text-[#B9887B] transition-colors">{article.title}</h3>
                <p className="text-xs text-[#101C42]/70 leading-relaxed mb-6 flex-grow">{article.excerpt}</p>

                <div className="border-t border-[#101C42]/10 pt-3.5 flex justify-between items-center text-xs font-sans">
                  <span className="text-[#101C42]/50 font-medium">{article.date}</span>
                  <button
                    onClick={() => navigate('/contact')}
                    className="font-bold flex items-center gap-1 text-[#101C42] hover:text-[#B9887B] uppercase tracking-wider text-[11px] transition-colors"
                  >
                    ĐỌC BÀI VIẾT <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

