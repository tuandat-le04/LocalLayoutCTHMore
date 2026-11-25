import React, { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck, Clock, ChevronDown } from 'lucide-react';

export default function ContactForm({
  title = "ĐĂNG KÝ NHẬN ĐÁNH GIÁ TÀI SẢN",
  subtitle = "Điền thông tin cơ bản để Chuyên gia CityHouseMore gửi báo cáo phân tích tiềm năng và đề xuất giải pháp.",
  submitLabel = "NHẬN ĐÁNH GIÁ SƠ BỘ TÀI SẢN"
}) {
  const [sent, setSent] = useState(false);
  const [showOptional, setShowOptional] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    propertyType: 'Căn hộ dịch vụ (Serviced Apartment)',
    interest: 'evaluate', // evaluate | renovate | operate | lease
    email: '',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert("Vui lòng điền đầy đủ Họ tên và Số điện thoại!");
      return;
    }
    // Simulate instant secure form submission
    setSent(true);
  };

  if (sent) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-[#0F1A41]/10 shadow-lg font-sans">
        <div className="w-14 h-14 rounded-full bg-[#101C42] text-[#C79A3B] flex items-center justify-center mx-auto mb-4 border border-[#C79A3B]/30 shadow-md">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#101C42] mb-3 leading-snug">
          ĐÃ TIẾP NHẬN YÊU CẦU THÀNH CÔNG
        </h3>
        <p className="text-xs sm:text-sm text-[#101C42]/75 max-w-md mx-auto leading-relaxed mb-6 font-normal">
          Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên gia quản lý tài sản CityHouseMore đã nhận được thông tin và sẽ trực tiếp liên hệ qua số điện thoại <strong>{formData.phone}</strong> trong vòng <strong>24 giờ làm việc</strong> để gửi báo cáo phân tích sơ bộ.
        </p>

        <div className="p-4 bg-[#FAF6EF] rounded-xl border border-[#B9887B]/25 text-xs text-[#101C42]/85 max-w-sm mx-auto mb-6">
          <div className="font-sans text-[11px] font-bold text-[#101C42] uppercase tracking-[0.14em] mb-1">
            CAM KẾT DỊCH VỤ
          </div>
          Bảo mật thông tin hồ sơ tài sản 100% theo tiêu chuẩn quản lý gia sản.
        </div>

        <button
          className="px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white bg-[#101C42] hover:bg-[#1A2C6B] rounded-full cursor-pointer transition-all shadow hover:shadow-md"
          onClick={() => {
            setSent(false);
            setFormData({
              fullName: '',
              phone: '',
              propertyType: 'Căn hộ dịch vụ (Serviced Apartment)',
              interest: 'evaluate',
              email: '',
              note: ''
            });
          }}
        >
          GỬI THÊM YÊU CẦU CHO TÀI SẢN KHÁC
        </button>
      </div>
    );
  }

  return (
    <form className="b2b-form flex flex-col gap-5 font-sans text-[#101C42]" onSubmit={handleSubmit}>
      {/* Motivating Benefit Box: What the user will receive */}
      <div className="p-4 bg-[#FAF6EF]/75 rounded-xl border border-[#B9887B]/25 border-l-2 border-l-[#B9887B] text-xs text-[#101C42]/85 shadow-2xs">
        <div className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#101C42] mb-2 flex items-center gap-2">
          <ShieldCheck size={14} className="text-[#B9887B]" />
          <span>QUYỀN LỢI ĐẶC QUYỀN CỦA CHỦ TÀI SẢN:</span>
        </div>
        <ul className="flex flex-col gap-2 text-[11.5px] leading-relaxed text-[#101C42]/80">
          <li className="flex items-start gap-2">
            <Check size={13} strokeWidth={2.5} className="text-[#B9887B] shrink-0 mt-0.5" />
            <span>Khảo sát hiện trạng và Báo cáo đánh giá tiềm năng khai thác <strong>hoàn toàn miễn phí</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={13} strokeWidth={2.5} className="text-[#B9887B] shrink-0 mt-0.5" />
            <span>Dự phóng doanh thu phòng và phương án tối ưu dòng tiền may đo theo vị trí tài sản.</span>
          </li>
        </ul>
      </div>

      {/* Field 1: Họ và tên (Bắt buộc) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="formFullName" className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#101C42]">
          Họ và tên của bạn <span className="text-[#B9887B]">*</span>
        </label>
        <input
          id="formFullName"
          type="text"
          required
          placeholder="Ví dụ: Nguyễn Văn An"
          className="w-full px-4 py-3 bg-[#FCFBF9] border border-[#101C42]/15 rounded-xl text-xs sm:text-sm text-[#101C42] placeholder:text-[#101C42]/35 focus:outline-none focus:bg-white focus:border-[#101C42] focus:ring-1 focus:ring-[#101C42] transition-all duration-200"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      {/* Field 2: Số điện thoại (Bắt buộc) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="formPhone" className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#101C42]">
          Số điện thoại liên hệ <span className="text-[#B9887B]">*</span>
        </label>
        <input
          id="formPhone"
          type="tel"
          required
          placeholder="Ví dụ: 0912 345 678"
          className="w-full px-4 py-3 bg-[#FCFBF9] border border-[#101C42]/15 rounded-xl text-xs sm:text-sm text-[#101C42] placeholder:text-[#101C42]/35 focus:outline-none focus:bg-white focus:border-[#101C42] focus:ring-1 focus:ring-[#101C42] transition-all duration-200"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* Field 3: Loại tài sản (Dropdown) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="formPropertyType" className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#101C42]">
          Loại tài sản của bạn
        </label>
        <div className="relative">
          <select
            id="formPropertyType"
            className="w-full px-4 py-3 bg-[#FCFBF9] border border-[#101C42]/15 rounded-xl text-xs sm:text-sm text-[#101C42] focus:outline-none focus:bg-white focus:border-[#101C42] focus:ring-1 focus:ring-[#101C42] cursor-pointer transition-all duration-200 appearance-none pr-10"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          >
            <option value="Căn hộ dịch vụ (Serviced Apartment)">Căn hộ dịch vụ (Serviced Apartment)</option>
            <option value="Tòa nhà đang cho thuê (Cần tái định vị)">Tòa nhà đang cho thuê (Cần cải tạo và tái định vị)</option>
            <option value="Khách sạn boutique trung tâm">Khách sạn boutique trung tâm</option>
            <option value="Đất trống / Dự án chuẩn bị xây dựng">Đất trống / Dự án chuẩn bị đầu tư xây dựng</option>
            <option value="Nhà phố mặt tiền / Hẻm xe hơi lớn">Nhà phố mặt tiền / Hẻm xe hơi lớn</option>
            <option value="Khác">Loại hình bất động sản khác</option>
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#101C42]/50 pointer-events-none" />
        </div>
      </div>

      {/* Field 4: Nhu cầu quan tâm chính (Selectable Luxury Tiles) */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#101C42]">
          Nhu cầu quan tâm chính
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { id: 'evaluate', label: 'Nhận đánh giá sơ bộ tài sản' },
            { id: 'renovate', label: 'Tư vấn cải tạo và tái định vị' },
            { id: 'operate', label: 'Ủy thác quản lý và vận hành' },
            { id: 'lease', label: 'Hợp tác thuê khoán trọn gói' },
          ].map((item) => {
            const isSelected = formData.interest === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setFormData({ ...formData, interest: item.id })}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs text-left cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#101C42] border-[#101C42] text-white shadow-sm font-semibold'
                    : 'bg-[#FAF6EF]/50 border-[#101C42]/12 text-[#101C42]/80 hover:bg-white hover:border-[#101C42]/30 font-medium'
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isSelected
                      ? 'border-[#C79A3B] bg-[#C79A3B]'
                      : 'border-[#101C42]/25 bg-transparent'
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                </span>
                <span className="leading-snug">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional Fields Toggle (Email và Note) */}
      <div>
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold text-[#101C42]/70 hover:text-[#B9887B] transition-colors cursor-pointer py-1"
        >
          <span>{showOptional ? '− Thu gọn thông tin bổ sung' : '+ Thêm Email hoặc thông tin chi tiết (Tùy chọn)'}</span>
          <ChevronDown size={13} className={`transform transition-transform ${showOptional ? 'rotate-180' : ''}`} />
        </button>

        {showOptional && (
          <div className="mt-2.5 flex flex-col gap-3 p-4 bg-[#FAF6EF]/50 border border-[#101C42]/10 rounded-xl animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="formEmail" className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#101C42]/70">
                Email nhận báo cáo (Tùy chọn)
              </label>
              <input
                id="formEmail"
                type="email"
                placeholder="name@gmail.com"
                className="w-full px-3.5 py-2.5 bg-white border border-[#101C42]/15 rounded-xl text-xs text-[#101C42] placeholder:text-[#101C42]/35 focus:outline-none focus:border-[#101C42] focus:ring-1 focus:ring-[#101C42] transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="formNote" className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#101C42]/70">
                Ghi chú về vị trí hoặc quy mô tài sản (Tùy chọn)
              </label>
              <textarea
                id="formNote"
                rows={2}
                placeholder="Ví dụ: Tòa nhà 30 phòng tại Quận 3, hiện đang trống 10 phòng..."
                className="w-full px-3.5 py-2.5 bg-white border border-[#101C42]/15 rounded-xl text-xs text-[#101C42] placeholder:text-[#101C42]/35 focus:outline-none focus:border-[#101C42] focus:ring-1 focus:ring-[#101C42] resize-none transition-all"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
            </div>
          </div>
        )}
      </div>

      {/* Security & Response Guarantee */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#101C42]/70 pt-1 font-sans">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-[#B9887B] shrink-0" />
          <span>Bảo mật dữ liệu tài sản 100%</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={13} className="text-[#C79A3B] shrink-0" />
          <span>Phản hồi chuyên gia trong <strong>24 giờ</strong></span>
        </span>
      </div>

      {/* High-visibility Action CTA Button: Deep Midnight Navy with Gold Jewel Accent */}
      <button
        type="submit"
        className="w-full py-4 px-6 text-center text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-[#101C42] hover:bg-[#1A2C6B] text-white shadow-[0_8px_25px_rgba(16,28,66,0.22)] hover:shadow-[0_12px_30px_rgba(16,28,66,0.32)] hover:-translate-y-0.5 mt-2 font-sans group"
      >
        <span>{submitLabel}</span>
        <ArrowUpRight size={16} className="text-[#C79A3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </form>
  );
}
