import React, { useState, useEffect } from 'react';
import { X, Phone, Sparkles, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';

export default function QuickModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    propertyType: 'Căn hộ dịch vụ (Serviced Apartment)',
    interest: 'evaluate',
    email: '',
    note: ''
  });
  const [showOptional, setShowOptional] = useState(false);
  const [sent, setSent] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;
    setSent(true);
  };

  const handleResetAndClose = () => {
    setSent(false);
    setFormData({
      fullName: '',
      phone: '',
      propertyType: 'Căn hộ dịch vụ (Serviced Apartment)',
      interest: 'evaluate',
      email: '',
      note: ''
    });
    onClose();
  };

  return (
    <>
      {/* ── 1. Subtle, Lightweight Backdrop (No heavy blackout, keeps site visible) ── */}
      <div
        className="fixed inset-0 z-[60] bg-black/20 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── 2. Floating Popup Form (Anchored at Bottom-Right on Desktop, Bottom Sheet on Mobile) ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-consultation-title"
        className="fixed z-[70] bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto md:w-[410px] md:max-w-[calc(100vw-32px)] max-h-[92vh] md:max-h-[calc(100vh-48px)] bg-[#FFFEFB] text-[#0F1A41] rounded-t-2xl md:rounded-2xl shadow-[0_20px_60px_-15px_rgba(15,26,65,0.35)] border border-[#0F1A41]/12 flex flex-col overflow-hidden animate-popup font-sans"
      >
        {/* Mobile Pull Handle Indicator */}
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto my-2 md:hidden" />

        {/* ── Popup Header (Deep Navy Luxury Bar) ── */}
        <div className="bg-[#0F1A41] text-white px-5 py-4 flex items-start justify-between relative border-b border-white/10 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#B9887B] font-bold uppercase tracking-wider">
              <Sparkles size={12} className="text-[#B9887B]" />
              <span>KẾT NỐI CHUYÊN GIA CITYHOUSE</span>
            </div>
            <h3
              id="popup-consultation-title"
              className="font-serif text-lg sm:text-xl font-bold text-white mt-1 leading-snug"
            >
              Đặt Lịch Tư Vấn & Đánh Giá
            </h3>
            <p className="text-[11px] text-white/75 mt-0.5 leading-normal">
              Khảo sát hiện trạng & báo cáo dòng tiền trong 24 giờ
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-3 mt-0.5"
            aria-label="Đóng popup"
          >
            <X size={15} />
          </button>
        </div>

        {/* ── Popup Content Body (Scrollable if screen is short) ── */}
        <div className="p-5 overflow-y-auto space-y-3.5 text-xs">
          {sent ? (
            /* Success State */
            <div className="py-6 px-2 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#B9887B]/15 text-[#B9887B] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0F1A41]">
                GỬI YÊU CẦU THÀNH CÔNG!
              </h4>
              <p className="text-xs text-[#0F1A41]/75 leading-relaxed max-w-xs mx-auto">
                Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên gia CityHouse More đã tiếp nhận và sẽ trực tiếp liên hệ qua số <strong>{formData.phone}</strong> trong vòng 24 giờ làm việc.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#0F1A41] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#B9887B] transition-colors cursor-pointer shadow"
                >
                  HOÀN TẤT & ĐÓNG
                </button>
              </div>
            </div>
          ) : (
            /* Main Input Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Compact Benefit Badge */}
              <div className="p-2.5 rounded bg-[#FAF6EF] border border-[#B9887B]/30 flex items-center gap-2 text-[11px] text-[#0F1A41]/85">
                <ShieldCheck size={14} className="text-[#B9887B] shrink-0" />
                <span>Khảo sát hiện trạng & Báo cáo dòng tiền <strong>hoàn toàn miễn phí</strong></span>
              </div>

              {/* Field 1: Họ và tên */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#0F1A41] uppercase tracking-wider">
                  Họ và tên của bạn <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full px-3 py-2 bg-white border border-[#0F1A41]/20 rounded text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B] focus:ring-1 focus:ring-[#B9887B]"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              {/* Field 2: Số điện thoại */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#0F1A41] uppercase tracking-wider">
                  Số điện thoại liên hệ <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0912 345 678"
                  className="w-full px-3 py-2 bg-white border border-[#0F1A41]/20 rounded text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B] focus:ring-1 focus:ring-[#B9887B]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Field 3: Loại tài sản */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#0F1A41] uppercase tracking-wider">
                  Loại tài sản của bạn
                </label>
                <select
                  className="w-full px-3 py-2 bg-white border border-[#0F1A41]/20 rounded text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B] cursor-pointer"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                >
                  <option value="Căn hộ dịch vụ (Serviced Apartment)">Căn hộ dịch vụ (Serviced Apartment)</option>
                  <option value="Tòa nhà đang cho thuê (Cần tái định vị)">Tòa nhà đang cho thuê (Cần tái định vị)</option>
                  <option value="Khách sạn boutique trung tâm">Khách sạn boutique trung tâm</option>
                  <option value="Đất trống / Dự án chuẩn bị xây dựng">Đất trống / Dự án chuẩn bị xây dựng</option>
                  <option value="Nhà phố mặt tiền / Hẻm xe hơi lớn">Nhà phố mặt tiền / Hẻm xe hơi lớn</option>
                  <option value="Khác">Loại hình bất động sản khác</option>
                </select>
              </div>

              {/* Field 4: Nhu cầu quan tâm chính (4 Quick Compact Pills) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#0F1A41] uppercase tracking-wider">
                  Nhu cầu quan tâm chính
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'evaluate', label: 'Đánh giá tài sản' },
                    { id: 'renovate', label: 'Cải tạo & tái định vị' },
                    { id: 'operate', label: 'Ủy thác vận hành' },
                    { id: 'lease', label: 'Thuê khoán trọn gói' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-1.5 p-2 rounded border text-[11px] cursor-pointer transition-all ${
                        formData.interest === item.id
                          ? 'bg-[#B9887B]/15 border-[#B9887B] text-[#0F1A41] font-bold'
                          : 'bg-white border-[#0F1A41]/15 text-[#0F1A41]/75 hover:bg-black/[0.02]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="popupInterest"
                        checked={formData.interest === item.id}
                        onChange={() => setFormData({ ...formData, interest: item.id })}
                        className="text-[#B9887B] focus:ring-[#B9887B] shrink-0"
                      />
                      <span className="truncate">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Field 5: Optional Collapsible (Email & Note) */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowOptional(!showOptional)}
                  className="text-[11px] text-[#B9887B] hover:underline flex items-center gap-1 font-mono cursor-pointer py-1"
                >
                  <span>{showOptional ? '- Thu gọn thông tin thêm' : '+ Thêm Email hoặc ghi chú (Tùy chọn)'}</span>
                  <ChevronDown size={12} className={`transform transition-transform ${showOptional ? 'rotate-180' : ''}`} />
                </button>

                {showOptional && (
                  <div className="mt-2 flex flex-col gap-2 p-2.5 bg-white border border-[#0F1A41]/10 rounded animate-fadeIn">
                    <input
                      type="email"
                      placeholder="Email nhận báo cáo (Tùy chọn)"
                      className="w-full px-2.5 py-1.5 bg-white border border-[#0F1A41]/20 rounded text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <textarea
                      rows={2}
                      placeholder="Ghi chú thêm về quy mô, vị trí tòa nhà..."
                      className="w-full px-2.5 py-1.5 bg-white border border-[#0F1A41]/20 rounded text-xs text-[#0F1A41] focus:outline-none focus:border-[#B9887B] resize-none"
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    />
                  </div>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg text-white mt-1"
                style={{
                  backgroundColor: '#B9887B',
                  color: '#FFFFFF',
                }}
              >
                XÁC NHẬN GỬI YÊU CẦU (MIỄN PHÍ) →
              </button>

              {/* Micro Footer Notice */}
              <div className="pt-1 flex items-center justify-between text-[10.5px] text-[#0F1A41]/60 font-mono">
                <span>Hotline 24/7: <a href="tel:0878253545" className="text-[#B9887B] font-bold hover:underline">0878 253 545</a></span>
                <span>Bảo mật 100%</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
