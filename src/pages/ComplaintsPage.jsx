import React, { useState } from 'react';
import LuxuryIcon, { LuxuryCheckBadge } from '../components/common/LuxuryIcon.jsx';
import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Send,
  Building2,
  FileText,
  UserCheck,
  Search,
  ArrowRight,
  Headphones,
  Check
} from 'lucide-react';
import { projects } from '../data/projects.js';
import { useNavigation } from '../context/NavigationContext.jsx';

const SLA_STEPS = [
  {
    step: '01',
    time: 'Trong vòng 02 giờ',
    title: 'Tiếp nhận & Cấp mã hồ sơ',
    desc: 'Hệ thống tự động ghi nhận khiếu nại, cấp mã Ticket định danh và phân công Trưởng bộ phận phụ trách liên hệ xác nhận với Quý vị.'
  },
  {
    step: '02',
    time: 'Trong vòng 12 giờ',
    title: 'Khảo sát & Xác minh thực tế',
    desc: 'Đội ngũ Giám sát chất lượng (QA) phối hợp với Quản lý cơ sở kiểm tra hiện trường, trích xuất camera an ninh hoặc đối soát hồ sơ tài chính.'
  },
  {
    step: '03',
    time: 'Trong 24 – 48 giờ',
    title: 'Đề xuất giải pháp xử lý',
    desc: 'Ban Giám đốc ban hành phương án giải quyết cụ thể, cam kết khắc phục dứt điểm sự cố hoặc tiến hành đền bù theo quy định hợp đồng.'
  },
  {
    step: '04',
    time: 'Nghiệm thu dứt điểm',
    title: 'Đóng hồ sơ & Đo lường hài lòng',
    desc: 'Khách hàng/Chủ sở hữu nghiệm thu kết quả xử lý. Bộ phận Chăm sóc khách hàng độc lập liên hệ đánh giá mức độ hài lòng.'
  }
];

export default function ComplaintsPage({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    role: 'owner', // owner | resident | partner | other
    projectSlug: '',
    issueCategory: 'operation', // operation | technical | finance | attitude | security | other
    priority: 'medium', // low | medium | urgent
    title: '',
    content: '',
    consent: true
  });

  const [ticketResult, setTicketResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.content) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate randomized realistic ticket code
      const randomCode = 'CTH-' + Math.floor(100000 + Math.random() * 900000);
      setTicketResult({
        ticketId: randomCode,
        createdAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' ngày ' + new Date().toLocaleDateString('vi-VN'),
        name: formData.fullName,
        phone: formData.phone,
        priority: formData.priority,
        category: formData.issueCategory
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }, 700);
  };

  const handleReset = () => {
    setTicketResult(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      role: 'owner',
      projectSlug: '',
      issueCategory: 'operation',
      priority: 'medium',
      title: '',
      content: '',
      consent: true
    });
  };

  return (
    <div className="complaints-page font-sans bg-[#F4EFEA] min-h-screen">
      {/* ── 1. Hero Section ── */}
      <section className="inner-hero section-pad font-sans relative overflow-hidden bg-gradient-to-b from-[#080E24] via-[#0F1A41] to-[#080E24] text-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            TRỰC TIẾP TỚI BAN GIÁM ĐỐC & KIỂM SOÁT CHẤT LƯỢNG — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.2] font-normal mb-5">
            Tiếp nhận khiếu nại<br />
            <span className="text-[#B9887B] font-serif italic">& giải quyết dứt điểm</span>
          </h1>
          <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal mb-6">
            Mọi ý kiến không hài lòng về chất lượng quản lý, vận hành buồng phòng, bảo trì kỹ thuật hay tính chính xác của báo cáo tài chính đều được tiếp nhận với tinh thần trách nhiệm cao nhất.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#B9887B]" />
              <span>Cam kết phản hồi xác nhận trong vòng 02 giờ</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#B9887B]" />
              <span>Được giám sát trực tiếp bởi Hội Đồng Quản Trị</span>
            </div>
          </div>
        </div>

        <div className="inner-orbit">
          <span>QUALITY<br />ASSURANCE</span>
        </div>
      </section>

      {/* ── 2. 4-Step Resolution SLA Workflow ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-2">
            QUY TRÌNH MINH BẠCH & TRÁCH NHIỆM
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F1A41]">
            Quy chuẩn 4 bước giải quyết khiếu nại
          </h2>
          <p className="text-xs sm:text-sm text-[#0F1A41]/70 mt-2">
            CityHouse More áp dụng quy chuẩn xử lý khép kín, minh bạch và có thời hạn cam kết (SLA) rõ ràng cho từng giai đoạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SLA_STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="bg-white rounded-2xl p-6 border border-[#0F1A41]/10 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-[#0F1A41]/5 select-none">
                {s.step}
              </div>
              <div>
                <div className="inline-block px-2.5 py-1 rounded-full bg-[#B9887B]/15 text-[#B9887B] text-[10px] font-bold uppercase tracking-wider mb-3">
                  {s.time}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0F1A41] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#0F1A41]/5 flex items-center text-[11px] font-bold text-[#B9887B]">
                <span>Bước {idx + 1} / 4</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Main Complaint Form and Hotline Escalation ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Board Hotline & Principles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F1A41] text-white p-8 rounded-3xl border border-[#B9887B]/40 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-2">
                ĐƯỜNG DÂY NÓNG ĐẶC BIỆT
              </span>
              <h3 className="font-serif text-2xl font-semibold mb-3">
                Kênh phản ánh khẩn cấp
              </h3>
              <p className="text-xs text-white/75 leading-relaxed mb-6">
                Trong các trường hợp khẩn cấp về an ninh, sự cố kỹ thuật tràn nước/chập điện hoặc vấn đề cần ý kiến chỉ đạo trực tiếp từ Ban Giám Đốc, Quý vị có thể gọi ngay:
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B9887B] text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-white/60 text-[10px] uppercase font-bold tracking-wider">HOTLINE ĐIỀU HÀNH & KHIẾU NẠI</div>
                    <a href="tel:0878253545" className="text-lg font-serif font-bold text-white hover:text-[#B9887B] transition-colors">
                      0878 253 545
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#B9887B] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-white/60 text-[10px] uppercase font-bold tracking-wider">HỘP THƯ BAN KIỂM SOÁT</div>
                    <a href="mailto:info@cityhousemore.com" className="text-sm font-semibold text-white hover:text-[#B9887B] transition-colors">
                      info@cityhousemore.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Principles of Complaint Handling */}
            <div className="bg-white p-7 rounded-2xl border border-[#0F1A41]/10 shadow-sm">
              <h4 className="font-serif text-base font-semibold text-[#0F1A41] mb-4 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#B9887B]" />
                <span>3 Cam Kết Cốt Lõi Khi Xử Lý</span>
              </h4>
              <ul className="space-y-3 text-xs text-[#0F1A41]/80">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span><strong>Không đổ lỗi vòng vo:</strong> Tiếp nhận trực diện vấn đề và nhận trách nhiệm xử lý dứt điểm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span><strong>Bảo mật người gửi:</strong> Danh tính của người phản ánh được bảo vệ tuyệt đối theo yêu cầu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span><strong>Bồi hoàn minh bạch:</strong> Bồi thường thiệt hại vật chất hoặc miễn giảm chi phí nếu lỗi xuất phát từ phía vận hành của CityHouse More.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Complaint Ticket Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#0F1A41]/10 shadow-lg">
              
              {ticketResult ? (
                /* Ticket Confirmation Card */
                <div className="py-4">
                  <div className="w-16 h-16 rounded-full bg-[#B9887B]/15 text-[#B9887B] flex items-center justify-center mx-auto mb-5 border border-[#B9887B]/40">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B9887B] block mb-1">
                      HỒ SƠ ĐÃ ĐƯỢC KHỞI TẠO
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0F1A41]">
                      Mã phiếu khiếu nại: <span className="text-[#B9887B]">{ticketResult.ticketId}</span>
                    </h3>
                    <p className="text-xs text-[#0F1A41]/70 mt-1">
                      Thời gian ghi nhận: {ticketResult.createdAt}
                    </p>
                  </div>

                  <div className="bg-[#F4EFEA] rounded-2xl p-5 border border-[#0F1A41]/10 text-xs text-[#0F1A41] mb-6 space-y-2">
                    <div className="flex justify-between border-b border-[#0F1A41]/10 pb-2">
                      <span className="text-[#0F1A41]/60">Người gửi phản ánh:</span>
                      <strong className="font-semibold">{ticketResult.name}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#0F1A41]/10 pb-2">
                      <span className="text-[#0F1A41]/60">Số điện thoại tiếp nhận:</span>
                      <strong className="font-semibold">{ticketResult.phone}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#0F1A41]/10 pb-2">
                      <span className="text-[#0F1A41]/60">Mức độ ưu tiên:</span>
                      <strong className="font-semibold uppercase text-[#B9887B]">
                        {ticketResult.priority === 'urgent' ? 'Khẩn cấp 24/7' : ticketResult.priority === 'high' ? 'Ưu tiên cao' : 'Thông thường'}
                      </strong>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#0F1A41]/60">Trạng thái hồ sơ:</span>
                      <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        Đang chuyển Trưởng Ban QA
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1A41]/5 border border-[#0F1A41]/10 text-xs text-[#0F1A41]/80 mb-6 leading-relaxed">
                    <strong>Thông báo tiến trình:</strong> Nhân sự Ban Kiểm Soát Chất Lượng của CityHouse More sẽ liên hệ trực tiếp qua số điện thoại <strong>{ticketResult.phone}</strong> trong vòng <strong>02 giờ làm việc</strong> để xác nhận và tiến hành xử lý dứt điểm.
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#0F1A41] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#080E24] transition-all cursor-pointer"
                    >
                      Gửi thêm phản ánh khác
                    </button>
                  </div>
                </div>
              ) : (
                /* Complaint Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#B9887B] block mb-1">
                      BIỂU MẪU ĐIỆN TỬ
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0F1A41] mb-1">
                      Gửi nội dung khiếu nại & phản ánh
                    </h3>
                    <p className="text-xs text-[#0F1A41]/70 leading-relaxed mb-6">
                      Vui lòng cung cấp chi tiết sự việc để chúng tôi có đủ căn cứ khảo sát và đưa ra giải pháp thỏa đáng nhất.
                    </p>
                  </div>

                  {/* Row 1: Full name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                        Họ và tên Quý vị <span className="text-[#B9887B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                        Số điện thoại liên hệ <span className="text-[#B9887B]">*</span>
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

                  {/* Row 2: Email & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                        Email nhận thông báo
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
                        Bạn là ai? <span className="text-[#B9887B]">*</span>
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                      >
                        <option value="owner">Chủ sở hữu / Chủ đầu tư bất động sản</option>
                        <option value="resident">Khách lưu trú / Cư dân tại tòa nhà</option>
                        <option value="partner">Đối tác nhà thầu / Đại lý lữ hành</option>
                        <option value="other">Đối tượng khác</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project selection & Issue Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                        Dự án / Tòa nhà liên quan
                      </label>
                      <select
                        value={formData.projectSlug}
                        onChange={(e) => setFormData({ ...formData, projectSlug: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                      >
                        <option value="">Chọn dự án (Hoặc để trống nếu khác)</option>
                        {projects.map((p) => (
                          <option key={p.id} value={p.slug}>
                            {p.name} ({p.district})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                        Phân loại vấn đề khiếu nại <span className="text-[#B9887B]">*</span>
                      </label>
                      <select
                        value={formData.issueCategory}
                        onChange={(e) => setFormData({ ...formData, issueCategory: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                      >
                        <option value="operation">Vận hành buồng phòng & Vệ sinh môi trường</option>
                        <option value="technical">Kỹ thuật cơ điện, Thang máy & Thiết bị</option>
                        <option value="finance">Báo cáo dòng tiền, Doanh thu & Hóa đơn</option>
                        <option value="attitude">Thái độ phục vụ của nhân sự / Bảo vệ</option>
                        <option value="security">An ninh trật tự & Tiếng ồn</option>
                        <option value="other">Vấn đề khác</option>
                      </select>
                    </div>
                  </div>

                  {/* Priority selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                      Mức độ ưu tiên
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'low', label: 'Thông thường', desc: 'Xử lý trong 48h' },
                        { id: 'medium', label: 'Ưu tiên cao', desc: 'Xử lý trong 24h' },
                        { id: 'urgent', label: 'Khẩn cấp 24/7', desc: 'Xử lý trong 2h' }
                      ].map((p) => (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => setFormData({ ...formData, priority: p.id })}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.priority === p.id
                              ? 'border-[#B9887B] bg-[#B9887B]/10 text-[#0F1A41]'
                              : 'border-[#0F1A41]/10 bg-white text-[#0F1A41]/70 hover:bg-[#F4EFEA]'
                          }`}
                        >
                          <div className="font-bold text-xs">{p.label}</div>
                          <div className="text-[10px] text-[#0F1A41]/60 mt-0.5">{p.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject Title */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                      Tiêu đề sự việc tóm tắt <span className="text-[#B9887B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Về việc chậm đối soát báo cáo doanh thu tháng trước hoặc Máy lạnh phòng 302 không mát..."
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                    />
                  </div>

                  {/* Detailed Content */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F1A41] uppercase tracking-wider mb-1.5">
                      Nội dung chi tiết & Đề xuất mong muốn <span className="text-[#B9887B]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Mô tả cụ thể thời gian, vị trí, diễn biến sự việc và hướng xử lý Quý vị mong muốn..."
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#F4EFEA]/40 border border-[#0F1A41]/15 rounded-xl focus:outline-none focus:border-[#B9887B] transition-all"
                    />
                  </div>

                  {/* Consent check */}
                  <div className="flex items-start gap-2 pt-1 text-xs text-[#0F1A41]/70">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-[#B9887B]"
                    />
                    <label htmlFor="consent" className="cursor-pointer">
                      Tôi xác nhận các thông tin phản ánh trên là đúng sự thật và đồng ý để CityHouse More liên hệ xác minh.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B9887B] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-[#A37367] transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <Send size={14} />
                      <span>{isSubmitting ? 'ĐANG GỬI HỒ SƠ...' : 'XÁC NHẬN GỬI KHIẾU NẠI'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
