import React from 'react';

/**
 * LuxuryIcon — Dedicated Architectural & Bespoke Luxury Icon System for CityHouse More
 * Crafted with ultra-fine 1.25px hairline geometry, sharp architectural proportions,
 * and high-contrast elegance. Replaces generic SaaS/tech bubbly icons.
 */
export default function LuxuryIcon({ name, size = 16, className = '', strokeWidth = 1.25, ...props }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: `shrink-0 ${className}`,
    ...props
  };

  switch (name) {
    // 1. Khảo sát Địa bàn & Cung - Cầu (Architectural Surveyor Compass)
    case 'compass':
    case 'survey':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" />
          <polygon points="12 4.5 14.5 12 12 19.5 9.5 12" fill="currentColor" fillOpacity="0.15" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    // 2. Cơ cấu Diện tích & Tiện ích (Architectural Floor Plan & Modular Space)
    case 'layers':
    case 'zoning':
    case 'layout':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="1" />
          <line x1="3.5" y1="11" x2="20.5" y2="11" />
          <line x1="12" y1="11" x2="12" y2="20.5" />
          <line x1="8" y1="3.5" x2="8" y2="11" />
        </svg>
      );

    // 3. Mô hình Tài chính & Điểm hòa vốn (Yield & Financial Candlestick Matrix)
    case 'finance':
    case 'barchart':
    case 'chart':
      return (
        <svg {...commonProps}>
          <line x1="3.5" y1="20.5" x2="20.5" y2="20.5" />
          <rect x="5.5" y="11" width="3" height="9.5" />
          <rect x="10.5" y="6.5" width="3" height="14" />
          <rect x="15.5" y="3.5" width="3" height="17" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );

    // 4. Pháp lý Lưu trú & Tiêu chuẩn PCCC (Heritage Seal of Compliance & Legal Crest)
    case 'legal':
    case 'shield':
    case 'compliance':
      return (
        <svg {...commonProps}>
          <path d="M12 2.5L4 6V11.5C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11.5V6L12 2.5Z" />
          <path d="M9 12L11 14L15 9.5" />
        </svg>
      );

    // 5. Kết quả bàn giao (Executive Architectural Portfolio / Deliverable)
    case 'deliverable':
    case 'file':
    case 'document':
      return (
        <svg {...commonProps}>
          <path d="M4.5 4C4.5 3.17 5.17 2.5 6 2.5H14L19.5 8V20C19.5 20.83 18.83 21.5 18 21.5H6C5.17 21.5 4.5 20.83 4.5 20V4Z" />
          <polyline points="14 2.5 14 8 19.5 8" />
          <line x1="8.5" y1="13" x2="15.5" y2="13" />
          <line x1="8.5" y1="17" x2="13.5" y2="17" />
        </svg>
      );

    // 6. Thẩm định Hiện trạng & Hệ MEP (Architectural Caliper & Technical Precision)
    case 'wrench':
    case 'mep':
    case 'inspection':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.5V5.5M12 18.5V21.5M2.5 12H5.5M18.5 12H21.5" />
          <path d="M5.3 5.3L7.4 7.4M16.6 16.6L18.7 18.7M5.3 18.7L7.4 16.6M16.6 7.4L18.7 5.3" />
        </svg>
      );

    // 7. Thiết kế Concept Tối ưu Chi phí (Architectural Drafting Pen & Compass)
    case 'palette':
    case 'design':
    case 'concept':
      return (
        <svg {...commonProps}>
          <path d="M3.5 20.5L7.5 19.5L18.5 8.5C19.3 7.7 19.3 6.3 18.5 5.5C17.7 4.7 16.3 4.7 15.5 5.5L4.5 16.5L3.5 20.5Z" />
          <line x1="14" y1="7" x2="17" y2="10" />
        </svg>
      );

    // 8. Tái định vị Phân khúc Mục tiêu (Strategic Ascension / Upward Growth)
    case 'growth':
    case 'trending':
    case 'reposition':
      return (
        <svg {...commonProps}>
          <polyline points="21 6.5 13 14.5 8.5 10 2.5 16" />
          <polyline points="15 6.5 21 6.5 21 12.5" />
        </svg>
      );

    // 9. Ra mắt & Khai trương (Global Prestige Launch / Diamond Star)
    case 'launch':
    case 'sparkles':
    case 'prestige':
      return (
        <svg {...commonProps}>
          <polygon points="12 2.5 14.5 9.5 21.5 12 14.5 14.5 12 21.5 9.5 14.5 2.5 12 9.5 9.5" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );

    // 10. Cao ốc trung tâm / Khách thuê FDI (Corporate Tower / Asset Facade)
    case 'building':
    case 'tower':
    case 'asset':
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="3.5" width="15" height="17.5" rx="0.5" />
          <line x1="8.5" y1="7" x2="9.5" y2="7" />
          <line x1="14.5" y1="7" x2="15.5" y2="7" />
          <line x1="8.5" y1="11" x2="9.5" y2="11" />
          <line x1="14.5" y1="11" x2="15.5" y2="11" />
          <line x1="8.5" y1="15" x2="9.5" y2="15" />
          <line x1="14.5" y1="15" x2="15.5" y2="15" />
          <line x1="11" y1="21" x2="13" y2="21" />
        </svg>
      );

    // 11. Concierge Key (Chìa khóa Quản gia Khách sạn Cao cấp)
    case 'key':
    case 'concierge':
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="8" r="4.5" />
          <path d="M11.5 11.5L20 20M16 16L18 14M18.5 18.5L20.5 16.5" />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        </svg>
      );

    // 12. Checkmark Hairline Bespoke
    case 'check':
      return (
        <svg {...commonProps}>
          <polyline points="4 12 9.5 17.5 20 6.5" strokeWidth={Math.max(strokeWidth, 1.75)} />
        </svg>
      );

    // 13. Mũi tên định hướng 45 độ (Architectural Navigation Arrow)
    case 'arrowUpRight':
    case 'arrow':
      return (
        <svg {...commonProps}>
          <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />
          <polyline points="9 6.5 17.5 6.5 17.5 15" />
        </svg>
      );

    // 14. Bản đồ & Tọa độ bất động sản (Map Pin / Coordinates)
    case 'mapPin':
    case 'location':
      return (
        <svg {...commonProps}>
          <path d="M12 21C16 16.5 18.5 13 18.5 9.5C18.5 5.9 15.6 3 12 3C8.4 3 5.5 5.9 5.5 9.5C5.5 13 8 16.5 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );

    // 15. Đồng hồ thời gian thực (Watch Dial / Operational Clock)
    case 'clock':
    case 'time':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 6.5 12 12 15.5 14" />
        </svg>
      );

    // 16. Lịch công tác / Niên giám (Executive Calendar)
    case 'calendar':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="4.5" width="17" height="16" rx="1" />
          <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
          <line x1="8" y1="2.5" x2="8" y2="5.5" />
          <line x1="16" y1="2.5" x2="16" y2="5.5" />
        </svg>
      );

    // 17. Điện thoại bảo mật / Hotline
    case 'phone':
      return (
        <svg {...commonProps}>
          <path d="M5.5 4H9.5L11 8L8.5 10C9.8 12.6 11.4 14.2 14 15.5L16 13L20 14.5V18.5C20 19.3 19.3 20 18.5 20C10.5 20 4 13.5 4 5.5C4 4.7 4.7 4 5.5 4Z" />
        </svg>
      );

    // 18. Thư tín ngoại giao / Email
    case 'mail':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5" width="17" height="14" rx="1" />
          <polyline points="4 6.5 12 12.5 20 6.5" />
        </svg>
      );

    // 19. Toàn cầu & Phân phối (Global Distribution Network)
    case 'globe':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" />
          <ellipse cx="12" cy="12" rx="4.5" ry="9.5" />
          <line x1="2.5" y1="12" x2="21.5" y2="12" />
        </svg>
      );

    // 20. Hợp tác chiến lược (Strategic Partnership Handshake)
    case 'handshake':
      return (
        <svg {...commonProps}>
          <path d="M11 15L8 18L3 13L6 10L11 15Z" />
          <path d="M13 15L16 18L21 13L18 10L13 15Z" />
          <path d="M8 8L12 4L16 8" />
          <path d="M10 13L12 11L14 13" />
        </svg>
      );

    // 21. Ngôi sao bảo chứng / Thẩm định (Architectural Rating Star)
    case 'star':
      return (
        <svg {...commonProps}>
          <polygon points="12 2.5 14.8 8.6 21.5 9.4 16.5 14.1 17.8 20.7 12 17.4 6.2 20.7 7.5 14.1 2.5 9.4 9.2 8.6" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );

    // 22. Mục tiêu chiến lược / Minh bạch (Precision Reticle & Target)
    case 'target':
    case 'focus':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="2.5" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21.5" />
          <line x1="2.5" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="21.5" y2="12" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    // 23. Danh hiệu & Giải thưởng (Prestige Medallion / Award Crest)
    case 'award':
    case 'trophy':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8.5" r="5.5" />
          <polyline points="8 12.5 7 21.5 12 18.5 17 21.5 16 12.5" />
          <circle cx="12" cy="8.5" r="2" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );

    // 24. Hồ sơ lưu trú / Khách hàng thượng lưu (Executive Profile / Guest)
    case 'user':
    case 'users':
    case 'profile':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="7" r="4" />
          <path d="M4.5 20.5C4.5 16.5 7.8 14 12 14C16.2 14 19.5 16.5 19.5 20.5" />
        </svg>
      );

    // 25. Định chế tài chính / Ký quỹ ngân hàng (Classical Heritage Portico / Landmark)
    case 'landmark':
    case 'bank':
      return (
        <svg {...commonProps}>
          <line x1="3" y1="21" x2="21" y2="21" />
          <line x1="4" y1="18" x2="20" y2="18" />
          <polygon points="12 3 3 8 21 8" fill="currentColor" fillOpacity="0.15" />
          <line x1="6" y1="8" x2="6" y2="18" />
          <line x1="10" y1="8" x2="10" y2="18" />
          <line x1="14" y1="8" x2="14" y2="18" />
          <line x1="18" y1="8" x2="18" y2="18" />
        </svg>
      );

    // 26. Hệ thống Công nghệ / Cloud PMS (Smart Digital Workstation)
    case 'laptop':
    case 'pms':
    case 'tech':
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="4.5" width="15" height="11" rx="1" />
          <line x1="2.5" y1="18.5" x2="21.5" y2="18.5" />
          <line x1="10" y1="15.5" x2="14" y2="15.5" />
        </svg>
      );

    // 27. Nghiên cứu & Báo cáo chuyên sâu (Editorial Journal / Book)
    case 'book':
    case 'journal':
      return (
        <svg {...commonProps}>
          <path d="M4 19.5C6 18.5 9 18.5 12 20C15 18.5 18 18.5 20 19.5V5C18 4 15 4 12 5.5C9 4 6 4 4 5V19.5Z" />
          <line x1="12" y1="5.5" x2="12" y2="20" />
        </svg>
      );

    // 28. Bộ lọc tinh tế (Precision Calibrated Slider)
    case 'slider':
    case 'sliders':
    case 'filter':
      return (
        <svg {...commonProps}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
          <circle cx="9" cy="6" r="2" fill="currentColor" />
          <circle cx="15" cy="12" r="2" fill="currentColor" />
          <circle cx="8" cy="18" r="2" fill="currentColor" />
        </svg>
      );

    // Default: Architectural Diamond Glyphs
    default:
      return (
        <svg {...commonProps}>
          <polygon points="12 3 20 12 12 21 4 12" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );
  }
}
