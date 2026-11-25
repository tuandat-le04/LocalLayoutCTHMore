import React, { useState, useEffect } from 'react';
import { Phone, Calendar, X, MessageSquare } from 'lucide-react';

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
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Discreet Luxury Floating Action Widget ── */}
      <aside
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end gap-3 font-sans pointer-events-auto"
        aria-label="Liên hệ tư vấn quản lý gia sản"
      >
        {/* ── Unfolded Quick Menu: Minimalist & Understated Elegance ── */}
        {isExpanded && (
          <div className="flex flex-col items-end gap-2.5 mb-1.5 animate-slideUp">
            {/* 1. Nút Đặt lịch tư vấn và Đánh giá tài sản */}
            <button
              onClick={handleOpenConsultation}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#B9887B] hover:bg-[#A37367] border border-[#B9887B]/40 active:scale-95"
              title="Đặt lịch tư vấn và Đánh giá sơ bộ tài sản"
            >
              <Calendar size={15} className="text-white shrink-0" />
              <span className="whitespace-nowrap tracking-[0.12em]">ĐẶT LỊCH TƯ VẤN TÀI SẢN</span>
            </button>

            {/* 2. Nút Gọi Hotline 24/7 */}
            <a
              href="tel:0878253545"
              className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-full text-xs font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-[#0F1A41] hover:bg-[#18285c] border border-white/15 hover:border-[#B9887B]/50 active:scale-95"
              title="Gọi Hotline tư vấn 24/7"
            >
              <Phone size={13} className="text-[#B9887B] shrink-0" />
              <span className="whitespace-nowrap text-white/90">
                Hotline 24/7: <strong className="text-[#B9887B] font-semibold">0878 253 545</strong>
              </span>
            </a>
          </div>
        )}

        {/* ── Main Sleek Floating Button (Refined Luxury FAB) ── */}
        <div className="relative group">
          {/* Subtle Hover Tooltip (Only visible on desktop when collapsed) */}
          {!isExpanded && (
            <div className="hidden lg:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-[#0F1A41]/95 text-white text-[11px] font-medium tracking-wide whitespace-nowrap shadow-md border border-[#B9887B]/30 pointer-events-none transition-all">
              <span>Tư vấn quản lý tài sản</span>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(15,26,65,0.3)] hover:shadow-[0_12px_28px_rgba(15,26,65,0.4)] active:scale-95"
            style={{
              backgroundColor: isExpanded ? '#0F1A41' : '#B9887B',
              border: isExpanded ? '1px solid rgba(185, 136, 123, 0.5)' : '1px solid rgba(255, 255, 255, 0.4)',
            }}
            aria-label={isExpanded ? "Đóng menu tư vấn" : "Mở menu tư vấn tài sản"}
          >
            {/* Clean Icon Morph Transition - No flashing neon ping dots */}
            <span
              className={`transition-transform duration-300 flex items-center justify-center ${
                isExpanded ? 'rotate-90' : 'rotate-0'
              }`}
            >
              {isExpanded ? (
                <X size={20} className="text-white" />
              ) : (
                <Calendar size={20} className="text-white" />
              )}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
