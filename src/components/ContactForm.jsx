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
        <div className="w-14 h-14 rounded-full bg-[#B9887B]/15 text-[#B9887B] flex items-center justify-center mx-auto mb-4">
          <Check size={32} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0F1A41] mb-3 leading-snug">
          ĐÃ TIẾP NHẬN YÊU CẦU THÀNH CÔNG
        </h3>
        <p className="text-xs sm:text-sm text-[#0F1A41]/75 max-w-md mx-auto leading-relaxed mb-6 font-normal">
          Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên gia quản lý tài sản CityHouseMore đã nhận được thông tin và sẽ trực tiếp liên hệ qua số điện thoại <strong>{formData.phone}</strong> trong vòng <strong>24 giờ làm việc</strong> để gửi báo cáo phân tích sơ bộ.
        </p>

        <div className="p-4 bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/10 text-xs text-[#0F1A41]/85 max-w-sm mx-auto mb-6">
          <div className="font-sans text-[11px] font-bold text-[#0F1A41] uppercase mb-1">
            CAM KẾT DỊCH VỤ
          </div>
          Bảo mật thông tin hồ sơ tài sản 100% theo tiêu chuẩn quản lý gia sản.
        </div>

        <button
          className="px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white rounded-full cursor-pointer transition-all shadow hover:shadow-md"
          style={{
            backgroundColor: '#B9887B',
            color: '#FFFFFF',
            border: '1px solid #B9887B',
          }}
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
    <form className="b2b-form flex flex-col gap-5 font-sans text-[#0F1A41]" onSubmit={handleSubmit}>
      {/* Motivating Benefit Box: What the user will receive */}
      <div className="p-4 bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/10 text-xs text-[#0F1A41]/85 shadow-2xs">
        <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#0F1A41] mb-2.5 flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-[#0F1A41]" />
          <span>QUYỀN LỢI KHI ĐĂNG KÝ HÔM NAY:</span>
        </div>
        <ul className="flex flex-col gap-2 text-[11.5px] leading-relaxed">
          <li className="flex items-start gap-2">
            <Check size={13} strokeWidth={2.5} className="text-[#0F1A41]/75 shrink-0 mt-0.5" />
            <span>Khảo sát hiện trạng & Báo cáo đánh giá tiềm năng khai thác <strong>hoàn toàn miễn phí</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={13} strokeWidth={2.5} className="text-[#0F1A41]/75 shrink-0 mt-0.5" />
            <span>Dự phóng doanh thu phòng & phương án tối ưu dòng tiền may đo theo vị trí tài sản.</span>
          </li>
        </ul>
      </div>

      {/* Field 1: Họ và tên (Bắt buộc) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formFullName" className="text-xs font-bold text-[#0F1A41] tracking-wide">
          Họ và tên của bạn <span className="text-red-500">*</span>
        </label>
        <input
          id="formFullName"
          type="text"
          required
          placeholder="Ví dụ: Nguyễn Văn An"
          className="w-full p-3.5 bg-white border border-[#0F1A41]/20 rounded-xl text-xs sm:text-sm text-[#0F1A41] focus:outline-none focus:border-[#B9887B] focus:ring-2 focus:ring-[#B9887B]/20 transition-all"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      {/* Field 2: Số điện thoại (Bắt buộc) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formPhone" className="text-xs font-bold text-[#0F1A41] tracking-wide">
          Số điện thoại liên hệ <span className="text-red-500">*</span>
        </label>
        <input
          id="formPhone"
          type="tel"
          required
          placeholder="Ví dụ: 0912 345 678"
          className="w-full p-3.5 bg-white border border-[#0F1A41]/20 rounded-xl text-xs sm:text-sm text-[#0F1A41] focus:outline-none focus:border-[#B9887B] focus:ring-2 focus:ring-[#B9887B]/20 transition-all"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* Field 3: Loại tài sản (Dropdown) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formPropertyType" className="text-xs font-bold text-[#0F1A41] tracking-wide">
          Loại tài sản của bạn
        </label>
        <select
          id="formPropertyType"
          className="w-full p-3.5 bg-white border border-[#0F1A41]/20 rounded-xl text-xs sm:text-sm text-[#0F1A41] focus:outline-none focus:border-[#B9887B] focus:ring-2 focus:ring-[#B9887B]/20 cursor-pointer transition-all"
          value={formData.propertyType}
          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
        >
          <option value="Căn hộ dịch vụ (Serviced Apartment)">Căn hộ dịch vụ (Serviced Apartment)</option>
          <option value="Tòa nhà đang cho thuê (Cần tái định vị)">Tòa nhà đang cho thuê (Cần cải tạo & tái định vị)</option>
          <option value="Khách sạn boutique trung tâm">Khách sạn boutique trung tâm</option>
          <option value="Đất trống / Dự án chuẩn bị xây dựng">Đất trống / Dự án chuẩn bị đầu tư xây dựng</option>
          <option value="Nhà phố mặt tiền / Hẻm xe hơi lớn">Nhà phố mặt tiền / Hẻm xe hơi lớn</option>
          <option value="Khác">Loại hình bất động sản khác</option>
        </select>
      </div>

      {/* Field 4: Nhu cầu quan tâm chính (Selectable Pills) */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-[#0F1A41] tracking-wide">
          Nhu cầu quan tâm chính
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { id: 'evaluate', label: 'Nhận đánh giá sơ bộ tài sản' },
            { id: 'renovate', label: 'Tư vấn cải tạo & tái định vị' },
            { id: 'operate', label: 'Ủy thác quản lý & vận hành' },
            { id: 'lease', label: 'Hợp tác thuê khoán trọn gói' },
          ].map((item) => (
            <label
              key={item.id}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                formData.interest === item.id
                  ? 'bg-[#B9887B]/15 border-[#B9887B] text-[#0F1A41] font-bold shadow-2xs'
                  : 'bg-white border-[#0F1A41]/15 text-[#0F1A41]/75 hover:bg-black/[0.02]'
              }`}
            >
              <input
                type="radio"
                name="interestOption"
                checked={formData.interest === item.id}
                onChange={() => setFormData({ ...formData, interest: item.id })}
                className="text-[#B9887B] focus:ring-[#B9887B]"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Optional Fields Toggle (Email & Note) */}
      <div>
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="text-xs text-[#B9887B] hover:underline flex items-center gap-1 font-sans cursor-pointer mb-2 font-medium"
        >
          <span>{showOptional ? '- Thu gọn thông tin bổ sung' : '+ Thêm Email hoặc thông tin chi tiết (Tùy chọn)'}</span>
          <ChevronDown size={13} className={`transform transition-transform ${showOptional ? 'rotate-180' : ''}`} />
        </button>

        {showOptional && (
          <div className="mt-3 flex flex-col gap-3.5 p-4 bg-[#FAF9F6] border border-[#0F1A41]/10 rounded-xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              <label htmlFor="formEmail" className="text-[11px] font-medium text-[#0F1A41]/70">
                Email nhận báo cáo (Tùy chọn)
              </label>
              <input
                id="formEmail"
                type="email"
                placeholder="name@gmail.com"
                className="w-full p-3 bg-white border border-[#0F1A41]/20 rounded-xl text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B] transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="formNote" className="text-[11px] font-medium text-[#0F1A41]/70">
                Ghi chú về vị trí hoặc số phòng (Tùy chọn)
              </label>
              <textarea
                id="formNote"
                rows={2}
                placeholder="Ví dụ: Tòa nhà 30 phòng tại Quận 3, hiện đang trống 10 phòng..."
                className="w-full p-3 bg-white border border-[#0F1A41]/20 rounded-xl text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B] transition-all"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
            </div>
          </div>
        )}
      </div>

      {/* 24-Hour Commitment Guarantee Banner */}
      <div className="flex items-center gap-2 text-[11px] text-[#0F1A41]/70 pt-1">
        <Clock size={14} className="text-[#B9887B] shrink-0" />
        <span><strong>Cam kết:</strong> CityHouseMore sẽ phản hồi và gửi báo cáo trong vòng <strong>24 giờ làm việc</strong>.</span>
      </div>

      {/* High-visibility Action CTA Button: Rounded-Full Luxury Button */}
      <button
        type="submit"
        className="form-submit-btn w-full py-3.5 px-6 text-center text-xs md:text-sm font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl mt-2"
        style={{
          backgroundColor: '#B9887B',
          color: '#FFFFFF',
          border: '1px solid #B9887B',
          boxShadow: '0 4px 18px rgba(185, 136, 123, 0.45)',
        }}
      >
        <span>{submitLabel}</span>
        <ArrowUpRight size={17} className="text-white" />
      </button>
    </form>
  );
}
