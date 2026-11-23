import React, { useState } from 'react';
import { insightsCategories, insightsArticles } from '../data/insights.js';
import { ArrowUpRight, Clock, BookOpen, Mail, Check, Calendar, TrendingUp, FileText } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const { navigate } = useNavigation();

  const filteredArticles = activeTab === 'all'
    ? insightsArticles
    : insightsArticles.filter(a => a.category === activeTab);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
    }
  };

  return (
    <div className="insights-page font-sans">
      {/* Hero */}
      <section className="inner-hero section-pad font-sans">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
          CITYHOUSE INSIGHTS — GÓC NHÌN CHUYÊN GIA
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.18] font-normal mb-5">
          Nghiên cứu thị trường<br />
          <span className="text-[#B9887B] font-serif italic">và thực tiễn vận hành</span>
        </h1>
        <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal font-sans">
          Nơi đội ngũ chuyên gia CityHouse More chia sẻ những phân tích dữ liệu chuyên sâu, xu hướng chuyển dịch của thị trường lưu trú và kinh nghiệm thực chiến tối ưu hóa tài sản.
        </p>
      </section>

      {/* Featured Article Banner */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41] pb-0">
        <div className="bg-white border border-[#0F1A41]/10 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          {/* Left Column: Visual Image (5 Cols) */}
          <div className="lg:col-span-5 relative overflow-hidden bg-[#0F1A41] min-h-[280px] lg:min-h-full flex flex-col justify-between">
            <img
              src="https://cityhousemore.com/uploads/gallery/gallery-1782195854670-640977.webp"
              alt="Báo cáo nghiên cứu thị trường CityHouse More 2026"
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/25 to-black/30 pointer-events-none" />

            {/* Top Badges */}
            <div className="relative z-10 p-5 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#0F1A41]/90 backdrop-blur-md text-white font-sans text-[10px] font-bold tracking-wider rounded uppercase border border-white/20 shadow">
                BÁO CÁO TIÊU ĐIỂM 2026
              </span>
              <span className="px-2.5 py-1 bg-[#B9887B] text-white font-sans text-[10px] font-bold tracking-wider rounded uppercase shadow">
                EXECUTIVE SUMMARY
              </span>
            </div>

            {/* Bottom Citation Overlay */}
            <div className="relative z-10 p-5 text-white">
              <div className="bg-[#0F1A41]/75 backdrop-blur-md border border-white/15 p-3.5 rounded-lg">
                <p className="text-[11px] font-sans text-[#B9887B] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                  Dữ liệu khảo sát thực chứng
                </p>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  Khảo sát từ 35+ tòa nhà lưu trú trung tâm và 1.850+ căn hộ dịch vụ đang vận hành tại TP.HCM.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Rich Editorial Content (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Meta Header */}
              <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs uppercase mb-3.5">
                <span className="px-2.5 py-0.5 bg-[#FAF6EF] border border-[#B9887B]/40 text-[#B9887B] font-bold rounded text-[11px]">
                  THỊ TRƯỜNG VÀ ĐẦU TƯ
                </span>
                <span className="text-[#0F1A41]/30">·</span>
                <span className="text-[#0F1A41]/70 font-semibold flex items-center gap-1">
                  <Calendar size={12} className="text-[#B9887B]" /> 10.02.2026
                </span>
                <span className="text-[#0F1A41]/30">·</span>
                <span className="text-[#0F1A41]/70 flex items-center gap-1">
                  <Clock size={12} className="text-[#B9887B]" /> 6 phút đọc
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3.5 leading-snug text-[#0F1A41]">
                Dòng tiền bền vững trong bất động sản lưu trú đô thị: Xu hướng dịch chuyển 2026
              </h2>

              {/* Lead Summary */}
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-5">
                Nghiên cứu chỉ ra sự chuyển dịch mạnh mẽ từ mô hình thuê thuần dài hạn sang mô hình lưu trú linh hoạt (Hybrid Living) kết hợp ngắn hạn du lịch và trung hạn chuyên gia công tác, giúp công suất phòng duy trì trên 92% và gia tăng doanh thu thuần tới 30%.
              </p>

              {/* 3 Key Takeaways in Structured Box */}
              <div className="bg-[#FAF9F6] p-4.5 rounded-lg border border-[#0F1A41]/10 mb-5">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#0F1A41]/8">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#0F1A41] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#B9887B] rounded-full"></span>
                    3 Đúc Kết Then Chốt Cho Chủ Sở Hữu Bất Động Sản
                  </span>
                  <span className="text-[10px] font-sans text-[#0F1A41]/50">CityHouse Research</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#0F1A41]/85">
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#B9887B]/15 text-[#B9887B] text-[10px] font-sans font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <p className="leading-relaxed">
                      <strong className="text-[#0F1A41]">Tỷ trọng 65% khách dài hạn:</strong> Đảm bảo dòng tiền móng vững chắc bù đắp chi phí vận hành ngay cả trong mùa thấp điểm du lịch.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#B9887B]/15 text-[#B9887B] text-[10px] font-sans font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <p className="leading-relaxed">
                      <strong className="text-[#0F1A41]">Tăng 25 - 35% giá phòng bình quân (ADR):</strong> Khai thác tệp khách quốc tế ngắn hạn vào cuối tuần và mùa cao điểm lễ hội.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#B9887B]/15 text-[#B9887B] text-[10px] font-sans font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <p className="leading-relaxed">
                      <strong className="text-[#0F1A41]">Số hóa và Đa kênh OTA:</strong> Cắt giảm tới 40% chi phí hoa hồng môi giới truyền thống, minh bạch dòng tiền hàng tháng.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Metric Chips */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                <div className="bg-[#FAF6EF] p-2.5 sm:p-3 rounded border border-[#0F1A41]/8 text-center">
                  <span className="font-sans text-base sm:text-lg font-bold text-[#0F1A41] block">92%+</span>
                  <span className="text-[10px] font-sans text-[#0F1A41]/60 block mt-0.5">Công suất thực tế</span>
                </div>
                <div className="bg-[#FAF6EF] p-2.5 sm:p-3 rounded border border-[#0F1A41]/8 text-center">
                  <span className="font-sans text-base sm:text-lg font-bold text-[#B9887B] block">+30%</span>
                  <span className="text-[10px] font-sans text-[#0F1A41]/60 block mt-0.5">Doanh thu thuần</span>
                </div>
                <div className="bg-[#FAF6EF] p-2.5 sm:p-3 rounded border border-[#0F1A41]/8 text-center">
                  <span className="font-sans text-base sm:text-lg font-bold text-[#0F1A41] block">1.850+</span>
                  <span className="text-[10px] font-sans text-[#0F1A41]/60 block mt-0.5">Phòng khảo sát</span>
                </div>
              </div>
            </div>

            {/* Footer Actions và Source */}
            <div className="pt-4 border-t border-[#0F1A41]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
              <div className="text-[11px] font-sans text-[#0F1A41]/60">
                <span>Tác giả: <strong>Ban Nghiên cứu Thị trường CityHouse More</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#B9887B] hover:bg-[#A37367] text-white font-sans text-xs font-bold uppercase tracking-wider rounded transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>ĐĂNG KÝ NHẬN BẢN FULL (PDF)</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
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
              className={`font-sans text-xs px-5 py-2.5 border rounded-full transition-all cursor-pointer ${
                activeTab === tab.id
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
            <article key={article.id} className="bg-white border border-[#0F1A41]/10 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-sans uppercase text-[#0F1A41]/60 mb-2">
                  <span className="text-[#B9887B] font-bold">{article.categoryLabel}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-semibold mb-3 leading-snug">{article.title}</h3>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed mb-6 flex-grow">{article.excerpt}</p>

                <div className="border-t border-[#0F1A41]/10 pt-3 flex justify-between items-center text-xs font-sans">
                  <span className="text-[#0F1A41]/50">{article.date}</span>
                  <button
                    onClick={() => navigate('/contact')}
                    className="font-bold flex items-center gap-1 text-[#0F1A41] hover:text-[#B9887B]"
                  >
                    ĐỌC BÀI VIẾT <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription Strip */}
      <section className="section-pad bg-[#0B1330] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow eyebrow-accent">BẢN TIN THỊ TRƯỜNG ĐỊNH KỲ</p>
          <h2 className="font-serif text-3xl font-semibold mb-4">
            Đón đầu xu hướng<br /><em>bất động sản lưu trú</em>
          </h2>
          <p className="text-sm text-white/70 mb-8 leading-relaxed">
            Đăng ký nhận báo cáo phân tích công suất phòng, chỉ số doanh thu và các chuyển động chính sách mới nhất do CityHouse More tổng hợp hàng tháng.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-[#B9887B] font-sans text-sm py-4 border border-[#B9887B]/40 bg-[#B9887B]/10 rounded-2xl">
              <Check size={18} />
              <span>Cảm ơn bạn đã đăng ký nhận bản tin thành công!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Nhập địa chỉ email của bạn..."
                className="bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder:text-white/40 flex-grow outline-none focus:border-[#B9887B] rounded-full transition-all"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <button type="submit" className="solid-btn whitespace-nowrap rounded-full">
                ĐĂNG KÝ NGAY <ArrowUpRight size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

