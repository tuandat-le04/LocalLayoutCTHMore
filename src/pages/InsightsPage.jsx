import React, { useState } from 'react';
import { insightsCategories, insightsArticles } from '../data/insights.js';
import { ArrowUpRight, Clock, BookOpen, Mail, Check } from 'lucide-react';
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
    <div className="insights-page">
      {/* Hero */}
      <section className="inner-hero section-pad">
        <p className="eyebrow eyebrow-accent">
          <BookOpen size={14} className="inline mr-1" />
          CITYHOUSE INSIGHTS — GÓC NHÌN CHUYÊN GIA
        </p>
        <h1>
          Nghiên cứu thị trường<br />
          <em>và thực tiễn vận hành</em>
        </h1>
        <p className="lead">
          Nơi đội ngũ chuyên gia CityHouse More chia sẻ những phân tích dữ liệu chuyên sâu, xu hướng chuyển dịch của thị trường lưu trú và kinh nghiệm thực chiến tối ưu hóa tài sản.
        </p>
      </section>

      {/* Featured Article Banner */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41] pb-0">
        <div className="bg-white border border-[#0F1A41]/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img
              src="https://cityhousemore.com/uploads/gallery/gallery-1782189975616-358643.webp"
              alt="Featured Insight"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 font-mono text-xs uppercase mb-3">
              <span className="text-[#B9887B] font-bold">BÀI VIẾT TIÊU ĐIỂM</span>
              <span>·</span>
              <span className="text-[#0F1A41]/60">10.02.2026</span>
              <span>·</span>
              <span className="text-[#0F1A41]/60 flex items-center gap-1"><Clock size={12} /> 6 phút đọc</span>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Dòng tiền bền vững trong bất động sản lưu trú đô thị: Xu hướng dịch chuyển 2026
            </h2>

            <p className="text-sm text-[#0F1A41]/70 leading-relaxed mb-6">
              Nghiên cứu chỉ ra sự chuyển dịch mạnh mẽ từ mô hình thuê thuần dài hạn sang mô hình lưu trú linh hoạt kết hợp ngắn hạn (du lịch) và trung hạn (chuyên gia công tác), giúp công suất phòng duy trì trên 92% và gia tăng doanh thu thuần tới 30%.
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="solid-btn text-xs w-max"
            >
              ĐĂNG KÝ NHẬN BẢN ĐẦY ĐỦ <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs and Articles Grid */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41]">
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {insightsCategories.map(tab => (
            <button
              key={tab.id}
              className={`font-mono text-xs px-5 py-2.5 border transition-all ${
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
            <article key={article.id} className="bg-white border border-[#0F1A41]/10 overflow-hidden flex flex-col hover:shadow-lg transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#0F1A41]/60 mb-2">
                  <span className="text-[#B9887B] font-bold">{article.categoryLabel}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-semibold mb-3 leading-snug">{article.title}</h3>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed mb-6 flex-grow">{article.excerpt}</p>

                <div className="border-t border-[#0F1A41]/10 pt-3 flex justify-between items-center text-xs font-mono">
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
            <div className="flex items-center justify-center gap-2 text-[#B9887B] font-mono text-sm py-4 border border-[#B9887B]/40 bg-[#B9887B]/10">
              <Check size={18} />
              <span>Cảm ơn bạn đã đăng ký nhận bản tin thành công!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Nhập địa chỉ email của bạn..."
                className="bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 flex-grow outline-none focus:border-[#B9887B]"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <button type="submit" className="solid-btn whitespace-nowrap">
                ĐĂNG KÝ NGAY <ArrowUpRight size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

