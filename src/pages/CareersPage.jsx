import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Compass,
  Award,
  HeartHandshake,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  School,
  Send,
  Phone,
  Mail,
  Building,
  FileText,
  UserCheck,
  Check,
  Layers,
  TrendingUp,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

const ECOSYSTEM_ROLES = [
  { step: "01", title: "Trải nghiệm khách hàng", desc: "Đón tiếp chu đáo, tạo dấu ấn lưu trú ấm áp cho từng du khách." },
  { step: "02", title: "Vận hành buồng phòng", desc: "Quy chuẩn sạch sẽ 5 sao, đảm bảo công năng và an ninh tòa nhà 24/7." },
  { step: "03", title: "Kinh doanh lưu trú", desc: "Mở rộng mạng lưới khách hàng doanh nghiệp, chuyên gia và du khách." },
  { step: "04", title: "Quản trị doanh thu", desc: "Ứng dụng thuật toán tối ưu giá bán đa kênh OTA và công suất buồng phòng." },
  { step: "05", title: "Phát triển thương hiệu", desc: "Định vị phong cách sống và lan tỏa giá trị CityHouse Collection." },
  { step: "06", title: "Hiệu quả tài sản", desc: "Tối đa hóa dòng tiền và bảo toàn giá trị bất động sản cho Chủ sở hữu." },
];

const CAREER_ROADMAP = [
  { step: "01", title: "Học hỏi", desc: "Nắm vững công việc, quy trình tiêu chuẩn dịch vụ và văn hóa đồng đội." },
  { step: "02", title: "Thực hành", desc: "Trực tiếp xử lý tình huống thực tế, chịu trách nhiệm về chất lượng đầu ra." },
  { step: "03", title: "Cải thiện", desc: "Lắng nghe phản hồi từ khách và quản lý để liên tục nâng cao kỹ năng." },
  { step: "04", title: "Làm chủ", desc: "Tự tin quản lý độc lập một phân khu, ca trực hoặc nhóm nhiệm vụ trọng yếu." },
  { step: "05", title: "Dẫn dắt", desc: "Chủ trì dự án mở mới, đào tạo thế hệ kế thừa hoặc quản lý cụm cơ sở." },
];

const CULTURE_VALUES = [
  {
    step: "01",
    title: "Chủ động",
    desc: "Không thụ động chờ chỉ dẫn. Tự giác nhận diện vấn đề và đề xuất giải pháp tốt hơn mỗi ngày.",
  },
  {
    step: "02",
    title: "Rõ ràng",
    desc: "Nói thẳng thắn, giao tiếp minh bạch và giữ đúng cam kết với khách hàng lẫn đồng nghiệp.",
  },
  {
    step: "03",
    title: "Tôn trọng chi tiết",
    desc: "Sự sang trọng và chuyên nghiệp trong ngành hospitality nằm ở những chi tiết nhỏ nhất.",
  },
  {
    step: "04",
    title: "Học qua việc làm",
    desc: "Thực hành thực chiến trên tài sản thực tế là con đường ngắn nhất để trưởng thành nghề nghiệp.",
  },
];

const JOB_OPENINGS_DATA = [
  {
    id: "marketing",
    code: "01",
    title: "Nhân Viên Marketing",
    category: "commercial",
    categoryLabel: "Kinh Doanh & Marketing",
    experienceLevel: "exp",
    experienceLabel: "Có kinh nghiệm",
    location: "485B Nguyễn Đình Chiểu, P. Bàn Cờ, Quận 3, TP.HCM",
    type: "Toàn thời gian (Thứ 2–Thứ 6, Thứ 7 xen kẽ)",
    salary: "8 – 10 triệu VND/tháng + Thưởng KPI",
    quantity: "02 nhân sự",
    summary: "Trực tiếp sáng tạo nội dung và triển khai các hoạt động truyền thông đa kênh, góp phần xây dựng và lan tỏa hình ảnh thương hiệu CityHouse.",
    duties: [
      "Lên ý tưởng, biên tập và sản xuất nội dung: bài viết, hình ảnh, video, social post và bài PR.",
      "Triển khai và tối ưu các chiến dịch Digital Marketing như Facebook Ads, Google Ads theo kế hoạch.",
      "Theo dõi hiệu quả hoạt động marketing, tổng hợp kết quả và đề xuất phương án cải tiến.",
      "Cập nhật xu hướng thị trường, hành vi khách hàng và nội dung trên các nền tảng mạng xã hội.",
      "Phối hợp cùng các bộ phận vận hành để đảm bảo mục tiêu truyền thông và kinh doanh buồng phòng."
    ],
    requirements: [
      "Tốt nghiệp chuyên ngành Marketing, Truyền thông hoặc lĩnh vực liên quan.",
      "Kinh nghiệm chạy Facebook Ads / Google Ads hoặc từng làm trong BĐS, khách sạn là lợi thế.",
      "Có khả năng viết nội dung sáng tạo, hiểu Digital Marketing cơ bản và quản lý ngân sách.",
      "Tiếng Anh đọc – viết cơ bản; năng động, nhạy với xu hướng và có tinh thần đồng đội cao."
    ],
    benefits: [
      "Thu nhập 8–10 triệu VND/tháng theo năng lực, kèm thưởng tháng 13 và thưởng Lễ/Tết.",
      "Được tham gia BHXH, BHYT, BHTN đầy đủ theo quy định của Nhà nước.",
      "Được thực chiến đa kênh Content + Ads + Branding trong môi trường hospitality cao cấp.",
      "Có lộ trình phát triển và đánh giá tăng lương định kỳ theo hiệu quả công việc."
    ]
  },
  {
    id: "ota",
    code: "02",
    title: "Nhân Viên Quản Trị OTA",
    category: "commercial",
    categoryLabel: "Kinh Doanh & Doanh Thu",
    experienceLevel: "exp",
    experienceLabel: "Có kinh nghiệm",
    location: "485B Nguyễn Đình Chiểu, P. Bàn Cờ, Quận 3, TP.HCM",
    type: "Toàn thời gian (Thứ 2–Thứ 7, 8:30–17:30)",
    salary: "Thỏa thuận theo năng lực + Thưởng doanh thu",
    quantity: "01 nhân sự",
    summary: "Quản lý và tối ưu doanh thu trên các kênh bán phòng trực tuyến, theo dõi công suất phòng và hỗ trợ đảm bảo hiệu quả kinh doanh của toàn bộ hệ sinh thái.",
    duties: [
      "Theo dõi giá đối thủ hằng ngày và đề xuất điều chỉnh giá bán trên Agoda, Booking.com, Traveloka và Airbnb.",
      "Theo dõi công suất buồng phòng thời gian thực, đóng/mở phòng kịp thời và kiểm soát rủi ro overbooking.",
      "Lập báo cáo doanh thu ngày/tuần từ các nguồn OTA để theo dõi hiệu quả kinh doanh.",
      "Phối hợp cùng Quản lý vận hành triển khai các chương trình flash-sale, kích cầu mùa thấp điểm."
    ],
    requirements: [
      "Có từ 6 tháng – 1 năm kinh nghiệm quản trị OTA trong lĩnh vực lưu trú, căn hộ dịch vụ hoặc khách sạn.",
      "Sử dụng thành thạo hệ thống Extranet của Booking.com, Agoda, Traveloka.",
      "Kỹ năng Excel tốt, cẩn thận và nhanh nhẹn trong xử lý dữ liệu buồng phòng.",
      "Ưu tiên ứng viên có tư duy phân tích nhạy bén với biến động giá thị trường."
    ],
    benefits: [
      "Thu nhập thỏa thuận cạnh tranh theo kinh nghiệm + Thưởng KPI doanh thu phòng.",
      "Ký HĐLĐ chính thức sau thử việc; tham gia đầy đủ BHXH, BHYT, BHTN.",
      "12 ngày phép năm và nghỉ lễ theo quy định; xét tăng lương định kỳ.",
      "Làm việc trực tiếp cùng chuyên gia quản lý doanh thu lưu trú hàng đầu."
    ]
  },
  {
    id: "bellman",
    code: "03",
    title: "Nhân Viên Hỗ Trợ Sảnh (Bellman)",
    category: "operations",
    categoryLabel: "Khối Khách Sạn & Vận Hành",
    experienceLevel: "entry",
    experienceLabel: "Không cần kinh nghiệm",
    location: "Các cơ sở Quận 1 & Quận 3, TP.HCM",
    type: "Làm theo ca 12 tiếng (Linh hoạt cuối tuần/lễ)",
    salary: "7,5 – 9 triệu VND/tháng + Phụ cấp + Thưởng",
    quantity: "05+ nhân sự",
    summary: "Hỗ trợ khách từ lúc đến sảnh đến khi lên phòng, đảm bảo trải nghiệm đón tiếp thuận tiện, an toàn, nồng hậu và chuyên nghiệp.",
    duties: [
      "Chào đón khách, mở cửa và hỗ trợ vận chuyển hành lý khi khách check-in và check-out.",
      "Hướng dẫn khách từ khu vực sảnh lễ tân lên phòng và giới thiệu các tiện ích cơ bản trong căn hộ.",
      "Hỗ trợ khách gọi taxi, che dù khi trời mưa và xử lý nhanh các yêu cầu phát sinh tại sảnh.",
      "Kiểm tra giữ gìn khu vực sảnh ngăn nắp, phối hợp chặt chẽ cùng bộ phận lễ tân và an ninh."
    ],
    requirements: [
      "Nam, 18–35 tuổi; sức khỏe tốt, nhanh nhẹn, trung thực và chịu khó.",
      "Không yêu cầu kinh nghiệm; được đào tạo bài bản từ đầu theo tiêu chuẩn khách sạn.",
      "Tiếng Anh giao tiếp chào hỏi cơ bản là một lợi thế.",
      "Tác phong chỉn chu, thân thiện và có tinh thần phục vụ khách hàng tận tâm."
    ],
    benefits: [
      "Thu nhập 7,5 – 9 triệu VND/tháng theo năng lực + Tiền tip + Thưởng tháng 13.",
      "Tham gia BHXH, BHYT, BHTN đầy đủ; nghỉ lễ và phép năm theo luật.",
      "Được đào tạo quy trình dịch vụ hiếu khách (hospitality) và kỹ năng giao tiếp chuẩn mực.",
      "Cơ hội thăng tiến lên Trưởng ca sảnh hoặc Lễ tân sau 6 tháng gắn bó."
    ]
  },
  {
    id: "receptionist",
    code: "04",
    title: "Nhân Viên Lễ Tân Khách Sạn & Căn Hộ",
    category: "operations",
    categoryLabel: "Khối Khách Sạn & Vận Hành",
    experienceLevel: "entry",
    experienceLabel: "Mới tốt nghiệp / Ít kinh nghiệm",
    location: "Quận 1, Quận 3, Bình Thạnh, Thảo Điền",
    type: "Làm theo ca 8–9 tiếng/ca (Xoay ca linh hoạt)",
    salary: "7 – 9 triệu VND/tháng + Phụ cấp + Thưởng",
    quantity: "10+ nhân sự",
    summary: "Đón tiếp, hỗ trợ và chăm sóc khách trong suốt quá trình lưu trú, phối hợp vận hành để đem lại trải nghiệm chuyên nghiệp, ấm áp như ở nhà.",
    duties: [
      "Thực hiện thủ tục check-in / check-out nhanh chóng, chính xác trên phần mềm quản lý PMS.",
      "Hướng dẫn, chăm sóc và giải đáp mọi thắc mắc của khách du lịch và chuyên gia quốc tế.",
      "Giới thiệu các tiện ích, dịch vụ giặt ủi, ẩm thực và điểm tham quan tại TP.HCM.",
      "Kiểm tra tình trạng phòng sẵn sàng trước khi đón khách, phối hợp cùng bộ phận buồng phòng.",
      "Tiếp nhận và xử lý nhanh chóng các tình huống phát sinh hoặc phản hồi của khách hàng."
    ],
    requirements: [
      "Nam/Nữ, 20–26 tuổi; tốt nghiệp Trung cấp/Cao đẳng trở lên (ưu tiên Du lịch – Khách sạn).",
      "Tiếng Anh giao tiếp tự tin (tiếp xúc thường xuyên với khách quốc tế Âu, Mỹ, Nhật, Hàn).",
      "Ngoại hình sáng, nụ cười thân thiện, giao tiếp lịch sự và khéo léo trong xử lý tình huống.",
      "Có tinh thần trách nhiệm, đúng giờ và chịu được áp lực trong mùa cao điểm."
    ],
    benefits: [
      "Thu nhập 7 – 9 triệu VND/tháng + Phụ cấp ca đêm + Thưởng KPI doanh số + Lương tháng 13.",
      "Ký HĐLĐ chính thức sau thử việc; tham gia bảo hiểm xã hội đầy đủ.",
      "12 ngày phép năm và nghỉ lễ theo quy định.",
      "Môi trường rèn luyện tiếng Anh hàng ngày, cơ hội thăng tiến lên Trưởng ca sau 6–12 tháng."
    ]
  },
  {
    id: "duty-manager",
    code: "05",
    title: "Trưởng Ca Lễ Tân (Duty Supervisor)",
    category: "operations",
    categoryLabel: "Khối Khách Sạn & Vận Hành",
    experienceLevel: "exp",
    experienceLabel: "Có kinh nghiệm",
    location: "Quận 1 & Quận 3, TP.HCM",
    type: "Toàn thời gian (Ca 8–9 tiếng hoặc hành chính)",
    salary: "8 – 10 triệu VND/tháng + Phụ cấp + Thưởng",
    quantity: "05+ nhân sự",
    summary: "Quản lý và điều phối hoạt động đón tiếp trong ca, bảo đảm tiêu chuẩn dịch vụ đồng bộ, xử lý khiếu nại và duy trì chất lượng trải nghiệm khách hàng.",
    duties: [
      "Giám sát và kiểm soát chất lượng quy trình check-in / check-out của nhân viên trong ca.",
      "Trực tiếp đón tiếp các khách hàng VIP, khách thuê dài hạn và xử lý các phản ánh phức tạp.",
      "Đào tạo, hướng dẫn nghiệp vụ và đánh giá hiệu quả công việc của nhân viên lễ tân mới.",
      "Kiểm tra tình trạng phòng trên hệ thống PMS và phối hợp bộ phận kỹ thuật khắc phục sự cố.",
      "Lập báo cáo bàn giao ca chi tiết cho Quản lý vận hành tòa nhà."
    ],
    requirements: [
      "Nam/Nữ, 22–30 tuổi; tốt nghiệp Cao đẳng/Đại học chuyên ngành Du lịch, Khách sạn, Ngoại ngữ.",
      "Có từ 6 tháng – 2 năm kinh nghiệm ở vị trí Lễ tân khách sạn; ưu tiên từng làm Trưởng ca.",
      "Tiếng Anh giao tiếp tốt (bắt buộc).",
      "Khả năng lãnh đạo, điều phối nhân sự và xử lý tình huống bình tĩnh, quyết đoán."
    ],
    benefits: [
      "Thu nhập 8 – 10 triệu VND/tháng + Phụ cấp trách nhiệm + Thưởng KPI.",
      "Ký HĐLĐ đầy đủ chế độ BHXH, BHYT, BHTN và 12 ngày phép năm.",
      "Lộ trình thăng tiến rõ ràng lên vị trí Quản lý Tòa nhà (Property / Hotel Manager)."
    ]
  },
  {
    id: "housekeeping",
    code: "06",
    title: "Nhân Viên Buồng Phòng (Housekeeping)",
    category: "operations",
    categoryLabel: "Khối Khách Sạn & Vận Hành",
    experienceLevel: "entry",
    experienceLabel: "Không cần kinh nghiệm",
    location: "Các tòa nhà tại Quận 1, Quận 3, Bình Thạnh",
    type: "Theo ca 8 tiếng (Luân phiên sáng – chiều)",
    salary: "6,5 – 7,5 triệu VND/tháng + Thưởng năng suất",
    quantity: "05+ nhân sự",
    summary: "Đảm bảo phòng khách, căn hộ dịch vụ và các khu vực chung luôn sạch sẽ, thơm tho, đầy đủ tiện nghi theo tiêu chuẩn vận hành 5 sao.",
    duties: [
      "Dọn dẹp, vệ sinh phòng khách lưu trú và căn hộ dài hạn theo quy trình tiêu chuẩn của CityHouse.",
      "Thay ga trải giường, vỏ gối, khăn tắm và bổ sung đầy đủ đồ amenities cho khách.",
      "Kiểm tra trang thiết bị trong phòng, chủ động báo cáo kỹ thuật nếu phát hiện hư hỏng.",
      "Vệ sinh hành lang, sảnh thang máy và các khu vực công cộng trong tòa nhà.",
      "Tuân thủ nghiêm ngặt quy định an toàn lao động và bảo quản tài sản của khách."
    ],
    requirements: [
      "Nam/Nữ, 20–50 tuổi; sức khỏe tốt, chăm chỉ, thật thà và tỉ mỉ.",
      "Không yêu cầu kinh nghiệm; được đào tạo bài bản từ đầu.",
      "Ưu tiên ứng viên từng làm buồng phòng tại khách sạn, căn hộ dịch vụ hoặc bệnh viện.",
      "Có tinh thần trách nhiệm và biết giúp đỡ đồng đội trong ca trực."
    ],
    benefits: [
      "Thu nhập 6,5 – 7,5 triệu VND/tháng + Thưởng năng suất buồng phòng + Thưởng tháng 13.",
      "Tham gia BHXH, BHYT đầy đủ; cấp phát đồng phục và trang thiết bị làm việc miễn phí.",
      "Môi trường làm việc an toàn, văn minh và tôn trọng người lao động."
    ]
  },
  {
    id: "cskh",
    code: "07",
    title: "Nhân Viên Chăm Sóc Khách Hàng (CSKH)",
    category: "commercial",
    categoryLabel: "Kinh Doanh & Dịch Vụ",
    experienceLevel: "entry",
    experienceLabel: "Có từ 6 tháng kinh nghiệm",
    location: "485B Nguyễn Đình Chiểu, P. Bàn Cờ, Quận 3, TP.HCM",
    type: "Toàn thời gian (Thứ 2–Thứ 7, 8:30–17:30)",
    salary: "8 – 10 triệu VND/tháng + Thưởng KPI",
    quantity: "01 nhân sự",
    summary: "Tiếp nhận, tư vấn và hỗ trợ khách hàng trong suốt quá trình sử dụng dịch vụ lưu trú, giải quyết phản hồi để duy trì điểm số hài lòng vượt trội 9.0+.",
    duties: [
      "Tiếp nhận và hỗ trợ khách hàng qua điện thoại, hotline, email và các kênh chat chính thức.",
      "Tư vấn chính sách giá, tiện ích căn hộ và giải đáp các vấn đề phát sinh trong kỳ lưu trú.",
      "Phối hợp với Ban quản lý từng tòa nhà xử lý nhanh khiếu nại, theo dõi đến khi khách hoàn toàn hài lòng.",
      "Ghi nhận lịch sử tương tác của khách hàng trên hệ thống CRM nội bộ.",
      "Thu thập đánh giá của khách sau lưu trú và đề xuất các giải pháp nâng cấp trải nghiệm dịch vụ."
    ],
    requirements: [
      "Tốt nghiệp THPT trở lên; có từ 6 tháng kinh nghiệm CSKH, tư vấn hoặc dịch vụ khách hàng.",
      "Giọng nói truyền cảm, rõ ràng, không nói ngọng; kỹ năng lắng nghe và đồng cảm tốt.",
      "Thái độ điềm tĩnh, nhẫn nại, luôn hướng tới việc giải quyết vấn đề cho khách.",
      "Thành thạo tin học văn phòng cơ bản (Word, Excel, Email, CRM)."
    ],
    benefits: [
      "Thu nhập 8 – 10 triệu VND/tháng + Thưởng KPI chất lượng dịch vụ hàng quý.",
      "Được đào tạo chuyên sâu về tâm lý khách hàng cao cấp và quy chuẩn dịch vụ quốc tế.",
      "Đầy đủ chế độ bảo hiểm, phép năm và phúc lợi theo chính sách công ty."
    ]
  },
  {
    id: "hr",
    code: "08",
    title: "Nhân Viên Hành Chính – Nhân Sự (C&B)",
    category: "admin",
    categoryLabel: "Khối Quản Trị & Nhân Sự",
    experienceLevel: "exp",
    experienceLabel: "Có kinh nghiệm từ 1 năm",
    location: "485B Nguyễn Đình Chiểu, P. Bàn Cờ, Quận 3, TP.HCM",
    type: "Toàn thời gian (Thứ 2–Thứ 7, 8:30–17:30)",
    salary: "8 – 10 triệu VND/tháng",
    quantity: "01 nhân sự",
    summary: "Phụ trách công tác chấm công, tính lương (C&B), quản lý hồ sơ nhân sự và các nghiệp vụ hành chính văn phòng, đảm bảo tính chính xác và bảo mật cao.",
    duties: [
      "Tiếp nhận, đối soát dữ liệu chấm công từ hệ thống máy chấm công các tòa nhà làm cơ sở tính lương.",
      "Tính toán bảng lương, phụ cấp ca, hoa hồng, trích nộp BHXH theo đúng quy định pháp luật.",
      "Giải đáp các thắc mắc của người lao động về ngày công, tiền lương, phép năm và chế độ thai sản/ốm đau.",
      "Quản lý văn thư lưu trữ hồ sơ nhân viên, hợp đồng lao động, theo dõi hạn hợp đồng.",
      "Theo dõi cấp phát trang thiết bị, đồng phục và hỗ trợ tổ chức các sự kiện gắn kết nội bộ."
    ],
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Quản trị nhân sự, Luật, Kinh tế hoặc liên quan.",
      "Có từ 1 năm kinh nghiệm làm nhân sự tổng hợp hoặc C&B.",
      "Nắm vững Luật Lao động, chế độ BHXH và quy định thuế TNCN cơ bản.",
      "Thành thạo Excel (vlookup, sumifs, pivot table); cẩn thận, bảo mật số liệu tuyệt đối."
    ],
    benefits: [
      "Mức thu nhập 8 – 10 triệu VND/tháng + Thưởng tháng 13 và các dịp Lễ Tết.",
      "Đầy đủ chế độ bảo hiểm xã hội, y tế theo quy định Nhà nước.",
      "Môi trường làm việc thân thiện, hòa đồng, khuyến khích sự chủ động và phát triển cá nhân."
    ]
  },
  {
    id: "internal-accountant",
    code: "09",
    title: "Kế Toán Tổng Hợp Nội Bộ",
    category: "admin",
    categoryLabel: "Khối Tài Chính & Kế Toán",
    experienceLevel: "exp",
    experienceLabel: "Từ 2 năm kinh nghiệm",
    location: "485B Nguyễn Đình Chiểu, P. Bàn Cờ, Quận 3, TP.HCM",
    type: "Toàn thời gian (Thứ 2–Thứ 7, 8:30–17:30)",
    salary: "12 – 16 triệu VND/tháng theo năng lực",
    quantity: "01 nhân sự",
    summary: "Tổng hợp doanh thu – chi phí theo từng tòa nhà, phân bổ chi phí dùng chung, khóa sổ và lập báo cáo P&L định kỳ gửi Chủ sở hữu bất động sản.",
    duties: [
      "Tiếp nhận và rà soát dữ liệu doanh thu phòng, chi phí vận hành sau khi đối soát từ các cơ sở.",
      "Phân bổ chi phí dùng chung của toàn hệ thống về từng tòa nhà theo tỷ lệ phòng hoặc doanh thu hợp lý.",
      "Trích trước các khoản chi phí phát sinh trong tháng để phản ánh chính xác kết quả kinh doanh trong kỳ.",
      "Chủ trì khóa sổ kế toán nội bộ hàng tháng, lập Báo cáo kết quả hoạt động kinh doanh (P&L) cho từng tòa nhà.",
      "Theo dõi danh mục tài sản, trang thiết bị tại từng cơ sở; tính khấu hao hàng tháng vào đúng mã tài sản."
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Kế toán, Tài chính hoặc Kiểm toán.",
      "Tối thiểu 2 năm kinh nghiệm làm Kế toán tổng hợp nội bộ hoặc Kế toán quản trị (ưu tiên ngành Khách sạn, BĐS, F&B).",
      "Thành thạo các hàm xử lý dữ liệu lớn như SUMIFS, Pivot Table, Dashboard trên Excel.",
      "Sử dụng tốt phần mềm kế toán MISA hoặc phần mềm tương đương; tư duy số liệu sắc sảo, trung thực."
    ],
    benefits: [
      "Thu nhập hấp dẫn 12 – 16 triệu VND/tháng theo năng lực + Thưởng kết quả kinh doanh.",
      "Lộ trình thăng tiến rõ ràng lên vị trí Kế toán trưởng hoặc Giám đốc tài chính.",
      "Đầy đủ chế độ bảo hiểm, khám sức khỏe định kỳ và các phúc lợi cao cấp."
    ]
  },
  {
    id: "tax-accountant",
    code: "10",
    title: "Kế Toán Thuế Chuyên Nghiệp",
    category: "admin",
    categoryLabel: "Khối Tài Chính & Kế Toán",
    experienceLevel: "exp",
    experienceLabel: "Từ 3–5 năm kinh nghiệm",
    location: "485B Nguyễn Đình Chiểu, P. Bàn Cờ, Quận 3, TP.HCM",
    type: "Toàn thời gian (Thứ 2–Thứ 7, 8:30–17:30)",
    salary: "Thỏa thuận theo năng lực & kinh nghiệm",
    quantity: "01 nhân sự",
    summary: "Phụ trách nghiệp vụ kế toán thuế, kê khai và kiểm soát tính hợp lệ của hóa đơn chứng từ, đảm bảo tuân thủ pháp luật và phục vụ quyết toán thuế.",
    duties: [
      "Kiểm tra và hạch toán các nghiệp vụ kinh tế phát sinh; kiểm soát tính đầy đủ, hợp lệ của hóa đơn GTGT đầu vào – đầu ra.",
      "Lập và nộp các tờ khai thuế định kỳ gồm GTGT, TNCN, TNDN và các báo cáo tài chính năm theo quy định.",
      "Đối chiếu số liệu hóa đơn điện tử với sổ sách kế toán, rà soát rủi ro thuế phát sinh trong hoạt động lưu trú.",
      "Làm việc trực tiếp với cơ quan thuế và đơn vị kiểm toán độc lập khi có đợt thanh kiểm tra, quyết toán thuế.",
      "Sắp xếp, lưu trữ hồ sơ chứng từ kế toán thuế khoa học, an toàn."
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Kế toán, Kiểm toán, Tài chính.",
      "Có từ 3–5 năm kinh nghiệm làm Kế toán thuế (ưu tiên từng phụ trách thuế cho doanh nghiệp dịch vụ, lưu trú).",
      "Nắm vững các thông tư, nghị định mới nhất về thuế, hóa đơn điện tử và chuẩn mực kế toán Việt Nam.",
      "Sử dụng thành thạo phần mềm kế toán MISA và công cụ Excel nâng cao.",
      "Cẩn trọng, nguyên tắc, có tinh thần trách nhiệm cao và khả năng làm việc độc lập tốt."
    ],
    benefits: [
      "Mức lương thỏa thuận xứng đáng theo năng lực và bề dày kinh nghiệm thực tế.",
      "Chế độ bảo hiểm, lương thưởng tháng 13 và phúc lợi đầy đủ theo quy chế công ty.",
      "Môi trường làm việc ổn định, gắn bó lâu dài cùng sự phát triển của hệ sinh thái CityHouse More."
    ]
  }
];

export default function CareersPage({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedJobId, setExpandedJobId] = useState('marketing');
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  // Candidate Application State
  const [candidateForm, setCandidateForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Nhân Viên Marketing',
    cvLink: '',
    message: '',
  });
  const [applySuccess, setApplySuccess] = useState(false);

  // University Partnership Form State
  const [uniForm, setUniForm] = useState({
    schoolName: '',
    department: '',
    contactPerson: '',
    phone: '',
    email: '',
    coopType: ['Thực tập', 'Tuyển dụng'],
    notes: '',
  });
  const [uniSuccess, setUniSuccess] = useState(false);

  // Filter Jobs
  const filteredJobs = JOB_OPENINGS_DATA.filter((job) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'operations') return job.category === 'operations';
    if (activeTab === 'commercial') return job.category === 'commercial';
    if (activeTab === 'admin') return job.category === 'admin';
    if (activeTab === 'entry') return job.experienceLevel === 'entry';
    if (activeTab === 'exp') return job.experienceLevel === 'exp';
    return true;
  });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setSelectedJobForModal(null);
    }, 2500);
  };

  const handleUniSubmit = (e) => {
    e.preventDefault();
    setUniSuccess(true);
  };

  return (
    <div className="careers-page text-[#0F1A41] bg-[#FAF6EF] font-sans">
      {/* ── 1. Page Hero Banner ── */}
      <section className="inner-hero section-pad relative overflow-hidden bg-[#0F1A41] text-white font-sans">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            CƠ HỘI NGHỀ NGHIỆP — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] max-w-4xl tracking-tight mb-5">
            Bắt đầu ở đây.<br />
            <span className="text-[#B9887B] font-serif italic">Phát triển xa hơn.</span>
          </h1>
          <p className="lead text-base md:text-lg text-[#F4EFEA]/85 max-w-2xl leading-relaxed mt-4 font-normal font-sans">
            Cơ hội dành cho những ai muốn học nghề thực chiến, phát triển chuyên môn sâu rộng và đồng hành dài hạn cùng hệ sinh thái quản lý gia sản lưu trú CityHouse More.
          </p>

          {/* 3 Candidate Audience Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
            <div className="p-4 rounded bg-white/[0.04] border border-white/10 hover:border-[#B9887B]/50 transition-colors">
              <span className="text-[11px] font-sans font-bold text-[#B9887B] uppercase tracking-wider block mb-1">
                01 · Thực Tập Sinh
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Bắt đầu bằng trải nghiệm thực tế trên hệ thống 35+ tòa nhà đang vận hành.
              </p>
            </div>

            <div className="p-4 rounded bg-white/[0.04] border border-white/10 hover:border-[#B9887B]/50 transition-colors">
              <span className="text-[11px] font-sans font-bold text-[#B9887B] uppercase tracking-wider block mb-1">
                02 · Mới Tốt Nghiệp
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Xây dựng nền tảng nghề nghiệp vững chắc trong ngành hospitality và quản lý gia sản.
              </p>
            </div>

            <div className="p-4 rounded bg-white/[0.04] border border-white/10 hover:border-[#B9887B]/50 transition-colors">
              <span className="text-[11px] font-sans font-bold text-[#B9887B] uppercase tracking-wider block mb-1">
                03 · Có Kinh Nghiệm
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Mở rộng chuyên môn, tự chủ quản trị và dẫn dắt các dự án quy mô lớn.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
            <a
              href="#openings"
              className="solid-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-xl cursor-pointer"
              style={{
                backgroundColor: '#B9887B',
                color: '#FFFFFF',
                border: '1px solid #B9887B',
                boxShadow: '0 6px 24px rgba(185, 136, 123, 0.45)',
              }}
            >
              <span>XEM VỊ TRÍ ĐANG TUYỂN (10)</span>
              <ChevronDown size={15} />
            </a>

            <a
              href="#university-partnership"
              className="outline-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider border border-white/30 text-white hover:border-[#B9887B] hover:text-[#B9887B] transition-all rounded"
            >
              <School size={15} />
              <span>HỢP TÁC CÙNG NHÀ TRƯỜNG</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Ecosystem Work: 6 Connecting Roles ── */}
      <section className="py-16 md:py-24 bg-white text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              HỆ SINH THÁI KHÉP KÍN
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1A41] leading-snug tracking-tight mb-3">
              Làm việc trong một hệ sinh thái
            </h2>
            <p className="text-sm sm:text-base text-[#0F1A41]/75 leading-relaxed">
              Mỗi vai trò đều kết nối trực tiếp với trải nghiệm khách hàng, vận hành, kinh doanh buồng phòng và hiệu quả gia sản lâu dài.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_ROLES.map((role) => (
              <div
                key={role.step}
                className="p-6 rounded-lg bg-[#FAF6EF]/60 border border-[#0F1A41]/10 hover:border-[#B9887B]/50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <span className="text-xs font-sans font-bold text-[#B9887B] tracking-wider block mb-2">
                  {role.step} // VAI TRÒ
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-2">
                  {role.title}
                </h3>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Career Roadmap: 5 Progression Steps ── */}
      <section className="py-16 md:py-24 bg-[#FAF6EF] text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                LỘ TRÌNH PHÁT TRIỂN NGHỀ NGHIỆP
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1A41] leading-snug tracking-tight mb-2">
                Phát triển từng bước qua thực chiến
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#0F1A41]/75 max-w-md leading-relaxed self-start md:self-auto">
              Không đánh giá qua lý thuyết suông; CityHouse tạo điều kiện để bạn thử thách, học hỏi từ phản hồi thực tế và tự chủ công việc.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CAREER_ROADMAP.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-lg bg-white border border-[#0F1A41]/10 shadow-xs hover:border-[#B9887B]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-sans font-bold text-[#B9887B] tracking-wider mb-3">
                    BƯỚC {step.step}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#0F1A41] mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Culture & Working Style ── */}
      <section className="py-16 md:py-24 bg-white text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              VĂN HÓA LÀM VIỆC TẠI CITYHOUSE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1A41] leading-snug tracking-tight mb-3">
              Cách chúng tôi làm việc
            </h2>
            <p className="text-sm sm:text-base text-[#0F1A41]/75 leading-relaxed">
              Chủ động, có trách nhiệm với cam kết và luôn tìm cách làm tốt hơn mỗi ngày.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_VALUES.map((val) => (
              <div
                key={val.step}
                className="p-6 rounded-lg bg-[#FAF6EF]/60 border border-[#0F1A41]/10 hover:bg-white hover:border-[#B9887B]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs font-sans font-bold text-[#B9887B] tracking-wider mb-3">
                  0{val.step} // NGUYÊN TẮC
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0F1A41] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-[#0F1A41]/70 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Main Open Positions Section ── */}
      <section id="openings" className="py-20 md:py-28 bg-[#FAF6EF] text-[#0F1A41]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
                CÁC VAI TRÒ ĐANG MỞ TẠI CITYHOUSE
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1A41] leading-snug tracking-tight mb-2.5">
                Vị trí đang tuyển dụng
              </h2>
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 max-w-xl leading-relaxed">
                Chọn vị trí phù hợp bên dưới để xem mô tả chi tiết, quyền lợi đãi ngộ và nộp hồ sơ ứng tuyển trực tiếp đến Phòng Nhân sự.
              </p>
            </div>

            <div className="text-xs font-sans font-semibold text-[#0F1A41]/75 bg-white border border-[#0F1A41]/10 px-4 py-2.5 rounded shadow-xs flex items-center gap-2 self-start md:self-auto">
              <Check size={14} strokeWidth={2.5} className="text-[#0F1A41]/75" />
              <span>Đang mở <strong>10</strong> vị trí tại TP. Hồ Chí Minh</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 border-b border-[#0F1A41]/10 no-scrollbar touch-pan-x">
            {[
              { id: 'all', label: 'TẤT CẢ VỊ TRÍ (10)' },
              { id: 'operations', label: 'VẬN HÀNH & KHÁCH SẠN (4)' },
              { id: 'commercial', label: 'KINH DOANH & MARKETING (3)' },
              { id: 'admin', label: 'KẾ TOÁN & NHÂN SỰ (3)' },
              { id: 'entry', label: 'KHÔNG YÊU CẦU KINH NGHIỆM' },
              { id: 'exp', label: 'CÓ KINH NGHIỆM' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-sans px-4 py-2.5 whitespace-nowrap rounded font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0F1A41] text-white shadow-sm'
                    : 'bg-white text-[#0F1A41]/70 hover:bg-[#B9887B]/15 hover:text-[#0F1A41] border border-[#0F1A41]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Job Openings Accordion / Card List */}
          <div className="flex flex-col gap-6">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  key={job.id}
                  className="bg-white rounded-lg border border-[#0F1A41]/10 overflow-hidden shadow-xs hover:border-[#B9887B]/50 transition-all duration-300"
                >
                  {/* Job Card Header */}
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-gray-50/50 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                        <span className="font-sans font-bold text-[#B9887B] tracking-wider">
                          {job.code} //
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-[#0F1A41]/5 text-[#0F1A41] font-sans font-medium text-[11px]">
                          {job.categoryLabel}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-[#B9887B]/15 text-[#B9887B] font-sans font-semibold text-[11px]">
                          {job.experienceLabel}
                        </span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500 font-sans text-[11px]">SL: {job.quantity}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] mb-2">
                        {job.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed max-w-3xl">
                        {job.summary}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-sans text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#B9887B]" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#B9887B]" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#0F1A41] font-semibold">
                          <DollarSign size={13} className="text-[#B9887B]" /> {job.salary}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJobForModal(job);
                          setCandidateForm((prev) => ({ ...prev, position: job.title }));
                        }}
                        className="solid-btn px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-sm hover:shadow"
                        style={{
                          backgroundColor: '#B9887B',
                          color: '#FFFFFF',
                          border: '1px solid #B9887B',
                        }}
                      >
                        <span>ỨNG TUYỂN</span>
                        <ArrowUpRight size={14} className="text-white" />
                      </button>

                      <button
                        className="p-2.5 rounded-full border border-gray-200 text-gray-500 hover:border-[#B9887B] hover:text-[#B9887B] transition-colors"
                        aria-label="Xem chi tiết"
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detailed Sections: Duties, Requirements, Benefits */}
                  {isExpanded && (
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-gray-100 bg-[#FAF6EF]/30 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                      {/* Duties */}
                      <div className="p-5 rounded bg-white border border-gray-100">
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#0F1A41] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                          <span>Nhiệm vụ chính</span>
                        </h4>
                        <ul className="flex flex-col gap-2.5 text-xs text-[#0F1A41]/75 leading-relaxed">
                          {job.duties.map((d, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#B9887B] shrink-0 font-bold">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="p-5 rounded bg-white border border-gray-100">
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#0F1A41] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                          <span>Yêu cầu ứng viên</span>
                        </h4>
                        <ul className="flex flex-col gap-2.5 text-xs text-[#0F1A41]/75 leading-relaxed">
                          {job.requirements.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#B9887B] shrink-0 font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="p-5 rounded bg-white border border-gray-100 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#0F1A41] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                            <span>Quyền lợi & Đãi ngộ</span>
                          </h4>
                          <ul className="flex flex-col gap-2.5 text-xs text-[#0F1A41]/75 leading-relaxed mb-6">
                            {job.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check size={13} className="text-[#B9887B] shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedJobForModal(job);
                            setCandidateForm((prev) => ({ ...prev, position: job.title }));
                          }}
                          className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-sm text-white"
                          style={{
                            backgroundColor: '#0F1A41',
                          }}
                        >
                          NỘP HỒ SƠ VỊ TRÍ NÀY
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. University Partnership Section ── */}
      <section id="university-partnership" className="py-20 md:py-28 bg-[#0F1A41] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Partnership Info */}
            <div className="lg:col-span-6">
              <p className="eyebrow eyebrow-accent flex items-center gap-1.5 mb-3.5">
                <School size={16} className="text-[#B9887B]" />
                KẾT NỐI CÙNG NHÀ TRƯỜNG & HỌC VIỆN
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-[1.3] mb-6 tracking-tight">
                Hợp tác thực tập, tuyển dụng<br />
                và <em className="text-[#B9887B] italic inline-block mt-1">định hướng nghề nghiệp</em>
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                CityHouse More chủ động kết nối cùng các trường Đại học, Cao đẳng đào tạo ngành Quản trị Khách sạn, Du lịch, Quản trị Kinh doanh và Bất động sản để tạo môi trường trải nghiệm thực chiến cho sinh viên.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="p-4 rounded bg-white/[0.04] border border-white/10">
                  <span className="text-xs font-sans font-bold text-[#B9887B] block mb-2">
                    01 · KẾT NỐI THỰC TẬP DOANH NGHIỆP
                  </span>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Trao đổi chương trình thực tập theo kỳ, bố trí thực tập sinh vào các bộ phận Lễ tân, Buồng phòng, OTA và CSKH với phụ cấp hỗ trợ.
                  </p>
                </div>

                <div className="p-4 rounded bg-white/[0.04] border border-white/10">
                  <span className="text-xs font-sans font-bold text-[#B9887B] block mb-2">
                    02 · GIỚI THIỆU VIỆC LÀM CHO SINH VIÊN
                  </span>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Ưu tiên tuyển dụng sinh viên sắp tốt nghiệp và cựu sinh viên vào các vị trí chính thức của chuỗi tòa nhà.
                  </p>
                </div>

                <div className="p-4 rounded bg-white/[0.04] border border-white/10">
                  <span className="text-xs font-sans font-bold text-[#B9887B] block mb-2">
                    03 · ĐỒNG HÀNH CÙNG NHÀ TRƯỜNG
                  </span>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Tham gia Ngày hội việc làm (Job Fair), workshop định hướng nghề nghiệp và tổ chức các chuyến Hotel Tour tham quan thực tế.
                  </p>
                </div>
              </div>

              {/* Direct HR Contact */}
              <div className="p-4 rounded bg-[#B9887B]/15 border border-[#B9887B]/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
                <div>
                  <span className="text-white/60 block text-[10px] uppercase font-sans">ĐẦU MỐI PHỤ TRÁCH NHÂN SỰ</span>
                  <strong className="text-sm text-white font-sans font-bold">Phòng Nhân Sự CityHouse More</strong>
                </div>
                <div className="flex items-center gap-4">
                  <a href="mailto:hr@cityhousemore.com" className="flex items-center gap-1.5 text-[#B9887B] hover:underline font-sans">
                    <Mail size={13} /> hr@cityhousemore.com
                  </a>
                  <a href="tel:0966891218" className="flex items-center gap-1.5 text-white font-bold hover:underline font-sans">
                    <Phone size={13} className="text-[#B9887B]" /> 0966 891 218
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: University Cooperation Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-lg text-[#0F1A41] shadow-2xl">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] mb-3 leading-snug">
                ĐĂNG KÝ KẾT NỐI HỢP TÁC
              </h3>
              <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed mb-6">
                Quý trường vui lòng để lại thông tin đầu mối và nhu cầu kết nối. Bộ phận Nhân sự CityHouse sẽ phản hồi trong vòng 24–48 giờ làm việc.
              </p>

              {uniSuccess ? (
                <div className="p-8 text-center bg-[#FAF9F6] border border-[#0F1A41]/10 rounded-xl shadow-xs">
                  <div className="w-14 h-14 rounded-full bg-[#0F1A41]/10 text-[#0F1A41] flex items-center justify-center mx-auto mb-3 border border-[#0F1A41]/15">
                    <Check size={28} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0F1A41] mb-2">
                    GỬI ĐỀ NGHỊ HỢP TÁC THÀNH CÔNG
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed">
                    Cảm ơn Quý trường đã liên hệ. Bộ phận Nhân sự CityHouse More sẽ chủ động kết nối với đầu mối phụ trách trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleUniSubmit} className="flex flex-col gap-4.5 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Tên trường Đại học / Cao đẳng *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Đại học Kinh tế TP.HCM (UEH)..."
                      className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                      value={uniForm.schoolName}
                      onChange={(e) => setUniForm({ ...uniForm, schoolName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Khoa / Đơn vị phụ trách
                      </label>
                      <input
                        type="text"
                        placeholder="Khoa Du lịch - Khách sạn..."
                        className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                        value={uniForm.department}
                        onChange={(e) => setUniForm({ ...uniForm, department: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Người liên hệ *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Thầy/Cô phụ trách..."
                        className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                        value={uniForm.contactPerson}
                        onChange={(e) => setUniForm({ ...uniForm, contactPerson: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09xx xxx xxx"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                        value={uniForm.phone}
                        onChange={(e) => setUniForm({ ...uniForm, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Email liên hệ *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@ueh.edu.vn"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                        value={uniForm.email}
                        onChange={(e) => setUniForm({ ...uniForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Nội dung trao đổi hoặc đề xuất hợp tác
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Chia sẻ số lượng sinh viên thực tập dự kiến, thời gian hoặc chương trình Ngày hội việc làm..."
                      className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none resize-none"
                      value={uniForm.notes}
                      onChange={(e) => setUniForm({ ...uniForm, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="solid-btn w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-md text-white mt-2"
                    style={{
                      backgroundColor: '#B9887B',
                    }}
                  >
                    GỬI ĐỀ NGHỊ HỢP TÁC NHÀ TRƯỜNG
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Recruitment Process: 6 Clear Steps ── */}
      <section className="py-16 md:py-24 bg-white text-[#0F1A41] border-b border-[#0F1A41]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow eyebrow-accent flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9887B]"></span>
              QUY TRÌNH ỨNG TUYỂN RÕ RÀNG
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1A41] leading-snug tracking-tight mb-3">
              6 bước gia nhập CityHouse More
            </h2>
            <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed">
              Quy trình tuyển dụng ngắn gọn, minh bạch và phản hồi nhanh chóng trong vòng 3 ngày làm việc.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "Ứng tuyển", desc: "Nộp CV trực tuyến qua website hoặc email." },
              { step: "02", title: "Đánh giá", desc: "Sàng lọc hồ sơ và đối chiếu năng lực." },
              { step: "03", title: "Trao đổi", desc: "Phỏng vấn sơ bộ về kinh nghiệm & định hướng." },
              { step: "04", title: "Chuyên môn", desc: "Kiểm tra kỹ năng nghiệp vụ thực tế (nếu cần)." },
              { step: "05", title: "Gặp đội ngũ", desc: "Gặp Quản lý bộ phận và tham quan cơ sở." },
              { step: "06", title: "Thư mời (Offer)", desc: "Thống nhất chế độ đãi ngộ và bắt đầu." },
            ].map((p) => (
              <div
                key={p.step}
                className="p-4 rounded-lg bg-[#FAF6EF]/60 border border-[#0F1A41]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans font-bold text-sm text-[#B9887B] block mb-2">
                    {p.step}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F1A41] mb-1.5">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[11px] text-[#0F1A41]/75 leading-relaxed mt-1">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Bottom Talent Pool / General Application ── */}
      <section className="py-16 md:py-20 bg-[#FAF6EF] text-[#0F1A41]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-sans font-bold text-[#B9887B] uppercase tracking-wider block mb-3">
            MẠNG LƯỚI TÀI NĂNG LƯU TRÚ
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] mb-3.5 leading-snug">
            Chưa tìm thấy vị trí phù hợp với bạn?
          </h2>
          <p className="text-xs sm:text-sm text-[#0F1A41]/75 max-w-xl mx-auto leading-relaxed mb-8">
            Hãy gửi CV và thông tin liên hệ về hòm thư của chúng tôi. Phòng Nhân sự CityHouse More sẽ liên hệ ngay khi có cơ hội tương thích với năng lực của bạn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans font-semibold">
            <a
              href="mailto:hr@cityhousemore.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0F1A41] text-white hover:bg-[#B9887B] transition-colors"
            >
              <Mail size={14} />
              <span>GỬI CV VỀ: hr@cityhousemore.com</span>
            </a>

            <a
              href="tel:0878253545"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white border border-[#0F1A41]/15 text-[#0F1A41] hover:border-[#B9887B] transition-colors"
            >
              <Phone size={14} className="text-[#B9887B]" />
              <span>HOTLINE NHÂN SỰ: 0878 253 545</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Modal: Candidate Application Form ── */}
      {selectedJobForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1A41]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white text-[#0F1A41] rounded-lg shadow-2xl border border-gray-200 p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJobForModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-sans font-bold text-[#B9887B] uppercase tracking-wider block mb-2">
                ỨNG TUYỂN VỊ TRÍ
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1A41] mb-2 leading-snug">
                {selectedJobForModal.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-gray-500">
                {selectedJobForModal.location} · {selectedJobForModal.salary}
              </p>
            </div>

            {applySuccess ? (
              <div className="p-6 text-center bg-[#FAF9F6] border border-[#0F1A41]/10 rounded-xl shadow-xs">
                <div className="w-14 h-14 rounded-full bg-[#0F1A41]/10 text-[#0F1A41] flex items-center justify-center mx-auto mb-3 border border-[#0F1A41]/15">
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0F1A41] mb-2">
                  NỘP HỒ SƠ THÀNH CÔNG!
                </h4>
                <p className="text-xs sm:text-sm text-[#0F1A41]/75 leading-relaxed">
                  Cảm ơn bạn đã ứng tuyển vào CityHouse More. Phòng Nhân sự sẽ phản hồi qua email hoặc số điện thoại trong vòng 3 ngày làm việc nếu hồ sơ phù hợp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="flex flex-col gap-4 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                    value={candidateForm.name}
                    onChange={(e) => setCandidateForm({ ...candidateForm, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Email liên hệ *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="09xx xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                      value={candidateForm.phone}
                      onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Link CV / Hồ sơ năng lực (Google Drive, LinkedIn, Portfolio...) *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/... hoặc link CV online"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none"
                    value={candidateForm.cvLink}
                    onChange={(e) => setCandidateForm({ ...candidateForm, cvLink: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Lời nhắn gửi Phòng Nhân sự
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Giới thiệu ngắn về kinh nghiệm hoặc thời điểm có thể bắt đầu làm việc..."
                    className="w-full px-3.5 py-2.5 rounded border border-gray-200 focus:border-[#B9887B] focus:outline-none resize-none"
                    value={candidateForm.message}
                    onChange={(e) => setCandidateForm({ ...candidateForm, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="solid-btn w-full py-3 text-center text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-md text-white mt-2"
                  style={{
                    backgroundColor: '#B9887B',
                  }}
                >
                  XÁC NHẬN NỘP HỒ SƠ ỨNG TUYỂN
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
