export const insightsCategories = [
  { id: "all", label: "Tất cả bài viết" },
  { id: "invest", label: "Đầu tư & Phát triển" },
  { id: "renovate", label: "Cải tạo & Tái định vị" },
  { id: "operate", label: "Quản lý & Vận hành" },
  { id: "market", label: "Thị trường" },
  { id: "casestudy", label: "Case Study thực chiến" }
];

export const insightsArticles = [
  {
    id: 1,
    category: "market",
    categoryLabel: "THỊ TRƯỜNG",
    targetReader: "Dành cho Chủ đầu tư & Gia tộc",
    date: "10.02.2026",
    readTime: "6 phút đọc",
    author: "Ban Nghiên cứu Thị trường CityHouse More",
    dataSource: "Dữ liệu vận hành 1.850+ phòng CityHouse & Báo cáo Savills TP.HCM 2025",
    title: "Dòng tiền bền vững trong bất động sản lưu trú đô thị: Xu hướng dịch chuyển 2026",
    excerpt: "Phân tích cơ cấu doanh thu từ khách công tác dài hạn kết hợp du lịch ngắn ngày, mô hình Hybrid Living giúp tối ưu công suất phòng trên 92% quanh năm.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854670-640977.webp",
    keyTakeaways: [
      "Khách công tác dài hạn chiếm 65% tỷ trọng giúp dòng tiền ổn định bất kể mùa thấp điểm.",
      "Du khách quốc tế ngắn hạn giúp tăng giá bán phòng trung bình (ADR) lên 25-35%.",
      "Mô hình quản lý đa kênh trực tuyến giúp cắt giảm phụ thuộc vào môi giới truyền thống."
    ],
    ctaText: "Bạn đang sở hữu bất động sản trung tâm TP.HCM? Trao đổi cùng Chuyên gia CityHouseMore."
  },
  {
    id: 2,
    category: "casestudy",
    categoryLabel: "CASE STUDY",
    targetReader: "Dành cho Chủ sở hữu tòa nhà cũ",
    date: "28.01.2026",
    readTime: "7 phút đọc",
    author: "Khối Phát triển Dự án & Tái định vị",
    dataSource: "Dự án thực tế VIBE Abora (220/12 Nguyễn Đình Chiểu, Quận 3)",
    title: "Chiến lược cải tạo và tái định vị tòa nhà cũ: Bài toán nhân đôi giá trị khai thác",
    excerpt: "Nghiên cứu trường hợp thực tế tại dự án Abora Quận 3: Cải tạo kiến trúc nội thất kết hợp định vị lại phân khúc khách hàng giúp tăng giá trị tài sản 105%.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195171956-882833.webp",
    keyTakeaways: [
      "Chi phí cải tạo được tối ưu bằng cách giữ nguyên 100% kết cấu chịu lực và hệ thống trục hộp gen.",
      "Định vị lại tệp khách hàng từ phòng cho thuê bình dân sang khách sạn boutique quốc tế.",
      "Giá phòng trung bình tăng từ 650.000đ lên 1.350.000đ/đêm ngay sau tháng đầu mở bán lại."
    ],
    ctaText: "Tòa nhà của bạn đang giảm sút doanh thu? Nhận phân tích phương án cải tạo miễn phí."
  },
  {
    id: 3,
    category: "operate",
    categoryLabel: "QUẢN LÝ & VẬN HÀNH",
    targetReader: "Dành cho Chủ nhà mệt mỏi vì tự vận hành",
    date: "15.01.2026",
    readTime: "5 phút đọc",
    author: "Khối Quản trị Vận hành & Doanh thu",
    dataSource: "Kinh nghiệm 15 năm thực chiến và hệ sinh thái 35+ tòa nhà CityHouse",
    title: "Tiêu chuẩn hóa quy trình dịch vụ lưu trú để duy trì điểm Agoda 9.0+ và giải phóng 100% thời gian",
    excerpt: "Làm thế nào để một tòa nhà căn hộ dịch vụ vận hành trơn tru suốt 365 ngày mà Chủ đầu tư không phải nhận cuộc gọi phàn nàn nào từ khách thuê?",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782195854527-583048.webp",
    keyTakeaways: [
      "Quy trình bảo trì dự phòng định kỳ (MEP, thang máy, PCCC) hạn chế 95% sự cố đột xuất.",
      "Đào tạo đội ngũ buồng phòng và lễ tân theo tiêu chuẩn quản gia khách sạn 4 sao.",
      "Báo cáo tài chính chi tiết từng khoản thu - chi minh bạch gửi Chủ nhà đúng ngày 5 hàng tháng."
    ],
    ctaText: "Muốn ủy thác vận hành an nhàn nhận dòng tiền thụ động? Đặt lịch trao đổi với chuyên gia."
  },
  {
    id: 4,
    category: "invest",
    categoryLabel: "ĐẦU TƯ & PHÁT TRIỂN",
    targetReader: "Dành cho Nhà đầu tư chuẩn bị xây dựng",
    date: "05.01.2026",
    readTime: "8 phút đọc",
    author: "Hội đồng Cố vấn Đầu tư CityHouse More",
    dataSource: "Số liệu khảo sát 5 quận trung tâm TP.HCM từ Coteccons & CityHouse",
    title: "Bẫy thiết kế thường gặp khi xây dựng tòa nhà căn hộ cho thuê và cách tối ưu ROI",
    excerpt: "Chia sẻ 5 sai lầm phổ biến khiến nhiều chủ nhà tiêu tốn hàng tỷ đồng nhưng hiệu suất sinh lời trên mỗi mét vuông sàn lại thấp hơn kỳ vọng 30%.",
    image: "https://cityhousemore.com/uploads/gallery/gallery-1782197864346-660114.webp",
    keyTakeaways: [
      "Hành lang quá rộng và phòng quá lớn làm giảm số lượng phòng khai thác trên tổng diện tích sàn.",
      "Thiếu tính toán luồng vận hành của nhân viên buồng phòng và kho giặt ủi làm đội chi phí nhân sự.",
      "Đầu tư sai vật liệu nội thất dẫn đến nhanh xuống cấp sau 2 năm đầu khai thác."
    ],
    ctaText: "Bạn đang chuẩn bị xin phép xây dựng hoặc thiết kế? Tham khảo tư vấn từ CityHouse More."
  }
];
