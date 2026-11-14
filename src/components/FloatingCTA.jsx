import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Sparkles, X } from 'lucide-react';

export default function FloatingCTA({ onOpenModal, isModalOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Close speed dial on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    if (isExpanded) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  // When popup form is active, hide floating buttons to avoid overlapping
  if (isModalOpen) return null;

  const handleOpenConsultation = () => {
    setIsExpanded(false);
    if (onOpenModal) onOpenModal();
  };

  return (
    <>
      {/* Click-outside backdrop to fold back when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-30 bg-black/10 transition-opacity"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Compact Floating Action Widget (Both Desktop & Mobile) ── */}
      <aside
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 font-sans pointer-events-auto"
        aria-label="Thanh hành động liên hệ nhanh"
      >
        {/* ── Unfolded Quick Menu ("Xổ ra" khi ấn icon) ── */}
        {isExpanded && (
          <div className="flex flex-col items-end gap-2.5 mb-1 animate-slideUp">
            {/* 1. Nút Đặt lịch tư vấn & Đánh giá tài sản */}
            <button
              onClick={handleOpenConsultation}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border-2 border-white/60 active:scale-95"
              style={{
                backgroundColor: '#B9887B',
                boxShadow: '0 8px 25px rgba(185, 136, 123, 0.65)',
              }}
              title="Đặt lịch tư vấn & Đánh giá sơ bộ tài sản miễn phí"
            >
              <Calendar size={16} className="text-white shrink-0" />
              <span className="whitespace-nowrap">ĐẶT LỊCH TƯ VẤN & ĐÁNH GIÁ</span>
            </button>

            {/* 2. Nút Gọi Hotline 24/7 */}
            <a
              href="tel:0878253545"
              className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-full text-xs font-bold text-white shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-[#B9887B] active:scale-95"
              style={{
                backgroundColor: '#0F1A41',
                boxShadow: '0 6px 20px rgba(15, 26, 65, 0.55)',
              }}
              title="Gọi Hotline tư vấn 24/7"
            >
              <Phone size={14} className="text-[#B9887B] shrink-0" />
              <span className="whitespace-nowrap">
                Hotline 24/7: <strong className="text-[#B9887B]">0878 253 545</strong>
              </span>
            </a>
          </div>
        )}

        {/* ── Main Compact Floating Icon Button (FAB) ── */}
        <div className="relative group">
          {/* Desktop Hover Tooltip (Only visible when collapsed) */}
          {!isExpanded && (
            <div className="hidden md:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#0F1A41] text-white text-[11px] font-semibold whitespace-nowrap shadow-xl border border-[#B9887B]/40 pointer-events-none animate-fadeIn">
              <span>Tư vấn & Đánh giá tài sản</span>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative"
            style={{
              backgroundColor: isExpanded ? '#0F1A41' : '#B9887B',
              border: isExpanded ? '2px solid #B9887B' : '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: isExpanded
                ? '0 8px 30px rgba(15, 26, 65, 0.6)'
                : '0 8px 30px rgba(185, 136, 123, 0.65)',
            }}
            aria-label={isExpanded ? "Đóng menu tư vấn" : "Mở menu tư vấn & đánh giá tài sản"}
            title={isExpanded ? "Đóng" : "Đặt lịch tư vấn & Hotline"}
          >
            {/* Attention Pulse Dot on Corner (Only when collapsed) */}
            {!isExpanded && (
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E7C96E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E7C96E] border-2 border-[#B9887B]"></span>
              </span>
            )}

            {/* Icon Morph Transition */}
            <span
              className={`transition-transform duration-300 flex items-center justify-center ${
                isExpanded ? 'rotate-90' : 'rotate-0'
              }`}
            >
              {isExpanded ? (
                <X size={22} className="text-white" />
              ) : (
                <Calendar size={22} className="text-white" />
              )}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
