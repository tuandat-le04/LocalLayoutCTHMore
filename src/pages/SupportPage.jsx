import React, { useState } from 'react';
import LuxuryIcon, { LuxuryCheckBadge } from '../components/common/LuxuryIcon.jsx';
import {
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  FileText,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Search,
  MessageSquare,
  ArrowRight,
  Send,
  Building2,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const SUPPORT_CATEGORIES = [
  { id: 'all', label: 'Tất cả câu hỏi' },
  { id: 'owner', label: 'Dành cho Chủ sở hữu' },
  { id: 'resident', label: 'Dành cho Khách lưu trú' },
  { id: 'partner', label: 'Dành cho Đối tác & Nhà thầu' },
  { id: 'finance', label: 'Tài chính & Thanh toán' },
];

const FAQS = [
  {
    category: 'owner',
    question: 'CityHouse More quản lý và tối ưu dòng tiền cho Chủ sở hữu theo cơ chế nào?',
    answer: 'CityHouse More áp dụng mô hình Ủy thác Quản lý & Khai thác toàn diện hoặc Hợp tác chia sẻ doanh thu minh bạch. Toàn bộ dòng tiền, chi phí vận hành (OPEX), tỷ lệ lấp đầy phòng và giá bán bình quân (ADR) đều được số hóa trên hệ thống PMS thời gian thực. Chủ sở hữu được nhận báo cáo tài chính kiểm toán chi tiết vào ngày 5 hàng tháng và quyết toán lợi nhuận định kỳ.'
  },
  {
    category: 'owner',
    question: 'Thời gian hoàn tất khảo sát và đưa ra phương án khai thác tòa nhà mất bao lâu?',
    answer: 'Sau khi tiếp nhận yêu cầu, đội ngũ chuyên gia của CityHouse More sẽ trực tiếp đến khảo sát hiện trạng công trình trong vòng 24–48 giờ làm việc. Báo cáo phân tích hiện trạng, bài toán tài chính hoàn vốn (ROI) và lộ trình định vị mô hình sẽ được bàn giao đầy đủ trong vòng 5–7 ngày làm việc.'
  },
  {
    category: 'owner',
    question: 'Tòa nhà cũ hoặc đang hoạt động kém hiệu quả có thể hợp tác cải tạo tái định vị không?',
    answer: 'Có. Giải pháp "Tư vấn Cải tạo & Tái định vị" của CityHouse chuyên xử lý các tòa nhà đã vận hành từ 5–15 năm bị xuống cấp hoặc giảm công suất phòng. Chúng tôi tối ưu hóa lại mặt bằng, nâng cấp nội thất theo phong cách chuẩn mực và áp dụng quy chuẩn quản lý 5 sao giúp tăng trưởng doanh thu bình quân từ 30% – 45% sau 6 tháng tiếp quản.'
  },
  {
    category: 'resident',
    question: 'Quy trình nhận phòng (Check-in) và trả phòng (Check-out) tại hệ thống CityHouse như thế nào?',
    answer: 'Hệ thống căn hộ dịch vụ và khách sạn của CityHouse hỗ trợ nhận phòng từ 14:00 và trả phòng trước 12:00 trưa. Đội ngũ lễ tân túc trực 24/7 hoặc áp dụng giải pháp Digital Self Check-in thông minh bằng mã khóa điện tử. Quý khách có nhu cầu nhận phòng sớm hoặc trả phòng trễ có thể thông báo trước với quản lý cơ sở để được hỗ trợ tối đa.'
  },
  {
    category: 'resident',
    question: 'Giá thuê phòng/căn hộ tại CityHouse đã bao gồm những dịch vụ và tiện ích gì?',
    answer: 'Tùy theo phân khúc thương hiệu (CityHouse Collection, VIBE, TERA, SIGNATURE), gói lưu trú đã bao gồm: dịch vụ dọn phòng định kỳ, thay drap gối tiêu chuẩn khách sạn, internet wifi tốc độ cao, truyền hình cáp, nước sinh hoạt, bảo vệ an ninh 24/7, phòng gym/hồ bơi (nếu tòa nhà có tiện ích) và đội ngũ kỹ thuật bảo trì túc trực.'
  },
  {
    category: 'resident',
    question: 'Tôi có thể xuất hóa đơn giá trị gia tăng (VAT) cho doanh nghiệp không?',
    answer: 'Có. CityHouse More phát hành hóa đơn điện tử VAT hợp pháp cho tất cả các dịch vụ lưu trú ngắn hạn và dài hạn của khách hàng doanh nghiệp hoặc cá nhân. Quý khách vui lòng cung cấp thông tin xuất hóa đơn trong vòng 24 giờ sau khi thanh toán hoặc khi làm thủ tục check-in.'
  },
  {
    category: 'partner',
    question: 'Quy trình lựa chọn nhà thầu thi công cải tạo và vật liệu nội thất của CityHouse?',
    answer: 'CityHouse More luôn duy trì danh mục đối tác nhà thầu uy tín với tiêu chuẩn kiểm duyệt khắt khe về tiến độ, an toàn lao động PCCC và chất lượng hoàn thiện. Mọi quy trình đấu thầu, báo giá vật liệu đều tuân theo nguyên tắc công khai, minh bạch nhằm tối ưu suất đầu tư cho Chủ sở hữu.'
  },
  {
    category: 'partner',
    question: 'Các đại lý du lịch, OTA và đối tác lữ hành hợp tác phân phối buồng phòng qua kênh nào?',
    answer: 'Đối tác có thể kết nối trực tiếp với Ban Kinh Doanh & Phân Phối của CityHouse More qua email b2b@cityhousemore.com hoặc hotline 0878 253 545 để ký kết hợp đồng đại lý, cấp mã chiết khấu định danh hoặc tích hợp API kết nối buồng phòng hai chiều.'
  },
  {
    category: 'finance',
    question: 'Các phương thức thanh toán được chấp nhận tại hệ thống?',
    answer: 'CityHouse More chấp nhận thanh toán qua chuyển khoản ngân hàng trực tiếp vào tài khoản công ty, thẻ tín dụng/ghi nợ quốc tế (Visa, MasterCard, JCB, Amex), quét mã VietQR và thanh toán qua các cổng đối tác trực tuyến bảo mật cao.'
  },
  {
    category: 'finance',
    question: 'Chính sách hoàn hủy và thay đổi lịch trình đặt phòng được quy định ra sao?',
    answer: 'Chính sách hoàn hủy phụ thuộc vào gói giá và loại hình hợp đồng: Đối với đặt phòng ngắn hạn linh hoạt, miễn phí hủy trước 48 giờ. Đối với hợp đồng thuê căn hộ dài hạn từ 6–12 tháng, tiền đặt cọc được hoàn trả 100% khi thanh lý hợp đồng đúng hạn và bàn giao hiện trạng tài sản.'
  }
];

export default function SupportPage({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [ticketSuccess, setTicketSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const filteredFaqs = FAQS.filter(faq => {
    const matchCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchSearch = searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setTicketSuccess(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      setTicketSuccess(false);
    }, 4000);
  };

  return (
    <div className="support-page font-sans bg-[#F4EFEA] min-h-screen">
      {/* ── 1. Hero Section ── */}
      <section className="inner-hero section-pad font-sans relative overflow-hidden bg-gradient-to-b from-[#080E24] via-[#0F1A41] to-[#080E24] text-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            TRUNG TÂM TRỢ GIÚP & HỖ TRỢ — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.2] font-normal mb-5">
            Chúng tôi luôn sẵn sàng<br />
            <span className="text-[#B9887B] font-serif italic">đồng hành và hỗ trợ bạn</span>
          </h1>
          <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal mb-8">
            Tìm kiếm nhanh câu trả lời cho các thắc mắc về vận hành tài sản, quy chuẩn lưu trú, chính sách hợp tác hoặc liên hệ trực tiếp với bộ phận chăm sóc chuyên biệt của CityHouse More.
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-xl relative">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm (Ví dụ: dòng tiền, check-in, hợp đồng, hoàn hủy...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 px-5 py-4 pl-12 rounded-xl text-sm focus:outline-none focus:border-[#B9887B] focus:bg-white/15 transition-all shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B9887B]" size={18} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/60 hover:text-white"
              >
                Xóa
              </button>
            )}
          </div>
        </div>

        <div className="inner-orbit">
          <span>CITYHOUSE<br />CARE</span>
        </div>
      </section>

      {/* ── 2. Quick Navigation Portals ── */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Điều khoản */}
          <div
            onClick={() => navigate('/dieu-khoan-dieu-kien')}
            className="bg-white p-7 rounded-2xl border border-[#0F1A41]/10 shadow-md hover:shadow-xl hover:border-[#B9887B] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1A41]/5 text-[#B9887B] flex items-center justify-center mb-5 group-hover:bg-[#B9887B] group-hover:text-white transition-colors">
                <FileText size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F1A41] mb-2 group-hover:text-[#B9887B] transition-colors">
                Điều khoản & Điều kiện
              </h3>
              <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                Quy định về phạm vi áp dụng, tiêu chuẩn vận hành, nghĩa vụ hợp tác của Chủ tài sản và Khách hàng.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#0F1A41]/5 flex items-center text-xs font-bold text-[#B9887B] tracking-wider uppercase gap-1 group-hover:gap-2 transition-all">
              <span>Xem chi tiết</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Card 2: Bảo mật */}
          <div
            onClick={() => navigate('/chinh-sach-bao-mat')}
            className="bg-white p-7 rounded-2xl border border-[#0F1A41]/10 shadow-md hover:shadow-xl hover:border-[#B9887B] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1A41]/5 text-[#B9887B] flex items-center justify-center mb-5 group-hover:bg-[#B9887B] group-hover:text-white transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F1A41] mb-2 group-hover:text-[#B9887B] transition-colors">
                Chính sách bảo mật
              </h3>
              <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                Cam kết bảo vệ 100% thông tin gia sản, dữ liệu doanh thu kinh doanh và quyền riêng tư theo tiêu chuẩn quốc tế.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#0F1A41]/5 flex items-center text-xs font-bold text-[#B9887B] tracking-wider uppercase gap-1 group-hover:gap-2 transition-all">
              <span>Xem chi tiết</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Card 3: Gửi khiếu nại */}
          <div
            onClick={() => navigate('/khieu-nai')}
            className="bg-white p-7 rounded-2xl border border-[#0F1A41]/10 shadow-md hover:shadow-xl hover:border-[#B9887B] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1A41]/5 text-[#B9887B] flex items-center justify-center mb-5 group-hover:bg-[#B9887B] group-hover:text-white transition-colors">
                <AlertCircle size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F1A41] mb-2 group-hover:text-[#B9887B] transition-colors">
                Gửi khiếu nại & Phản hồi
              </h3>
              <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                Quy trình tiếp nhận và giải quyết khiếu nại 4 bước rõ ràng, phản hồi chính thức trong 24 giờ làm việc.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#0F1A41]/5 flex items-center text-xs font-bold text-[#B9887B] tracking-wider uppercase gap-1 group-hover:gap-2 transition-all">
              <span>Gửi phản ánh</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Contact Support Channels Bar ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-[#0F1A41] text-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#B9887B]/30">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-2">
              KÊNH TIẾP NHẬN 24/7
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold">
              Kết nối trực tiếp với đội ngũ phụ trách
            </h2>
            <p className="text-xs md:text-sm text-white/70 mt-2">
              Chúng tôi luôn sẵn sàng lắng nghe mọi ý kiến đóng góp và giải quyết vướng mắc nhanh chóng nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#B9887B]/60 transition-colors">
              <Phone className="text-[#B9887B] mb-3" size={20} />
              <div className="text-white/60 mb-1 font-semibold uppercase tracking-wider text-[10px]">TƯ VẤN PHÁT TRIỂN</div>
              <a href="tel:0878253545" className="text-sm font-bold text-white hover:text-[#B9887B] block">
                0878 253 545
              </a>
              <div className="text-white/50 text-[11px] mt-1">Hỗ trợ 08:30 – 18:00 (T2–T7)</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#B9887B]/60 transition-colors">
              <Mail className="text-[#B9887B] mb-3" size={20} />
              <div className="text-white/60 mb-1 font-semibold uppercase tracking-wider text-[10px]">HỘP THƯ CHÍNH THỨC</div>
              <a href="mailto:info@cityhousemore.com" className="text-sm font-bold text-white hover:text-[#B9887B] block truncate">
                info@cityhousemore.com
              </a>
              <div className="text-white/50 text-[11px] mt-1">Phản hồi trong vòng 24 giờ</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#B9887B]/60 transition-colors">
              <MapPin className="text-[#B9887B] mb-3" size={20} />
              <div className="text-white/60 mb-1 font-semibold uppercase tracking-wider text-[10px]">TRỤ SỞ CHÍNH</div>
              <div className="text-sm font-bold text-white leading-tight">
                485B Nguyễn Đình Chiểu
              </div>
              <div className="text-white/50 text-[11px] mt-1">Phường Bàn Cờ, Quận 3, TP.HCM</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#B9887B]/60 transition-colors">
              <Clock className="text-[#B9887B] mb-3" size={20} />
              <div className="text-white/60 mb-1 font-semibold uppercase tracking-wider text-[10px]">THỜI GIAN LÀM VIỆC</div>
              <div className="text-sm font-bold text-white leading-tight">
                T2 - T6: 8:30 - 18:00
              </div>
              <div className="text-white/50 text-[11px] mt-1">Thứ Bảy: 8:30 - 12:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Interactive FAQ Section ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-2">
            CÂU HỎI THƯỜNG GẶP (FAQ)
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#0F1A41]">
            Giải đáp những thắc mắc phổ biến
          </h2>
          <p className="text-xs sm:text-sm text-[#0F1A41]/70 mt-2">
            Chọn danh mục bên dưới để lọc nhanh các câu hỏi liên quan đến nhu cầu của bạn.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SUPPORT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0F1A41] text-white shadow-md'
                  : 'bg-white text-[#0F1A41]/70 hover:bg-[#0F1A41]/5 border border-[#0F1A41]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#0F1A41]/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F4EFEA]/30 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#0F1A41] pr-2">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#B9887B] text-white rotate-180' : 'bg-[#0F1A41]/5 text-[#0F1A41]'
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#0F1A41]/80 leading-relaxed border-t border-[#0F1A41]/5">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center text-[#0F1A41]/60">
              <HelpCircle className="mx-auto mb-3 text-[#B9887B]" size={36} />
              <p className="font-semibold text-sm">Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 text-xs text-[#B9887B] font-bold hover:underline"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. Quick Support Ticket Form ── */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#0F1A41]/10 shadow-lg">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-2">
              GỬI YÊU CẦU TRỢ GIÚP
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F1A41]">
              Bạn vẫn chưa tìm thấy câu trả lời?
            </h3>
            <p className="text-xs sm:text-sm text-[#0F1A41]/70 mt-2 leading-relaxed">
              Hãy để lại lời nhắn, đội ngũ chuyên viên hỗ trợ của CityHouse More sẽ liên hệ phản hồi trực tiếp cho bạn trong thời gian sớm nhất.
            </p>
          </div>

          {ticketSuccess ? (
            <div className="bg-[#B9887B]/10 border border-[#B9887B] rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#B9887B] text-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0F1A41] mb-2">ĐÃ TIẾP NHẬN YÊU CẦU THÀNH CÔNG!</h4>
              <p className="text-xs text-[#0F1A41]/80 max-w-md mx-auto leading-relaxed">
                Cảm ơn bạn. Chuyên viên chăm sóc khách hàng của CityHouse More sẽ kiểm tra và phản hồi lại qua số điện thoại hoặc email đã cung cấp trong vòng 2–4 giờ làm việc.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                    Họ và tên <span className="text-[#B9887B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                    Số điện thoại <span className="text-[#B9887B]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0901 234 567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                    Email liên hệ
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                    Chủ đề cần hỗ trợ
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="owner">Tư vấn quản lý & ủy thác tài sản</option>
                    <option value="booking">Thắc mắc về đặt phòng & lưu trú</option>
                    <option value="billing">Hóa đơn, thanh toán & hợp đồng</option>
                    <option value="technical">Bảo trì kỹ thuật công trình</option>
                    <option value="partner">Hợp tác kinh doanh & nhà thầu</option>
                    <option value="other">Yêu cầu khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                  Nội dung chi tiết <span className="text-[#B9887B]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Mô tả cụ thể câu hỏi hoặc yêu cầu cần hỗ trợ..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B9887B] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-[#A37367] transition-all shadow-md cursor-pointer"
                >
                  <Send size={14} />
                  <span>GỬI YÊU CẦU HỖ TRỢ</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
