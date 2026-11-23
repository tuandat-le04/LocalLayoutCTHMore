import React from 'react';
import Story from '../components/sections/Story.jsx';
import Awards from '../components/sections/Awards.jsx';
import LuxuryIcon from '../components/common/LuxuryIcon.jsx';
import { useNavigation } from '../context/NavigationContext.jsx';

const CORE_VALUES = [
  {
    icon: 'shield',
    title: "Bảo tồn và Gia tăng gia sản",
    desc: "Bảo vệ nguyên vẹn giá trị công trình và nhân bội dòng tiền theo thời gian qua các thế hệ."
  },
  {
    icon: 'target',
    title: "Minh bạch tuyệt đối",
    desc: "Hệ thống PMS số hóa cập nhật thời gian thực, đối soát chi tiết từng đồng vào ngày 5 hàng tháng."
  },
  {
    icon: 'compass',
    title: "Tiêu chuẩn vận hành quốc tế",
    desc: "Quy chuẩn SOP 5 sao từ buồng phòng đến kỹ thuật, duy trì điểm đánh giá 9.0+ từ du khách toàn cầu."
  },
  {
    icon: 'handshake',
    title: "Đồng hành thủy chung",
    desc: "Xem tài sản của Chủ đầu tư như của chính mình, cùng chia sẻ rủi ro và gắn bó bền vững."
  }
];

export default function AboutPage() {
  const { navigate } = useNavigation();

  return (
    <div className="about-page font-sans">
      {/* Hero */}
      <section className="inner-hero section-pad font-sans">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
          VỀ HỆ THỐNG — CITYHOUSE MORE
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.18] font-normal mb-5">
          15 năm kiến tạo<br />
          <span className="text-[#B9887B] font-serif italic">giá trị dòng tiền bền vững</span>
        </h1>
        <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal">
          CityHouse More ra đời từ khát vọng giải quyết bài toán vận hành bất động sản dòng tiền chuyên nghiệp tại Việt Nam, giúp các Chủ đầu tư biến tài sản tĩnh thành những cỗ máy tạo dòng tiền ổn định và trường tồn.
        </p>
      </section>

      {/* Brand Story và Mission */}
      <section className="section-pad bg-[#F9F8F5] text-[#0F1A41]">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <p className="eyebrow eyebrow-accent flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            CÂU CHUYỆN VÀ TẦM NHÌN CHIẾN LƯỢC
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] mb-3">
            Từ kinh nghiệm thực chiến<br />
            đến nền tảng <em>quản lý gia sản</em>
          </h2>
          <p className="text-sm sm:text-base text-[#0F1A41]/80 leading-relaxed font-normal">
            Bắt đầu từ dự án biểu tượng Saigon Pavillon năm 2009, CityHouse More hiện quản lý danh mục hơn 35 tòa nhà với trên 1.000 đơn vị lưu trú, bảo toàn giá trị tài sản hơn 3.800 tỷ đồng tại TP.HCM.
          </p>
        </div>

        {/* Master Balanced Grid: Left = Visual Anchor và Factsheet; Right = Strategic Vision, Commitments và Operational Edge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (5 cols): Headquarters Visual + 3 Heritage Milestones */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {/* Headquarters Photo */}
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#0F1A41]/10 shadow-sm group bg-[#0F1A41]">
              <img
                src="https://cityhousemore.com/uploads/b810c46ef2e5a1410010b30aac5981d6a1.jpeg"
                alt="Không gian làm việc và điều hành CityHouse More"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/90 via-[#0F1A41]/25 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 bg-[#0F1A41]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/10">
                <span className="font-sans text-[10px] text-[#B9887B] uppercase tracking-wider font-bold block mb-0.5">
                  Trụ sở điều hành trung tâm
                </span>
                <div className="text-xs font-semibold">
                  Trung tâm Điều hành và Tiếp đón đối tác CityHouse More (Quận 3)
                </div>
              </div>
            </div>

            {/* 3 Heritage Milestone Cards */}
            <div className="flex flex-col gap-3 flex-grow justify-between">
              <div className="bg-white p-4.5 rounded-2xl border border-[#0F1A41]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-serif text-2xl font-bold text-[#0F1A41]">2009</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#B9887B] font-bold px-2.5 py-0.5 bg-[#B9887B]/10 rounded-full">
                    Khởi nguồn năng lực
                  </span>
                </div>
                <div className="text-xs font-bold text-[#0F1A41] mb-0.5">Saigon Pavillon Coteccons</div>
                <p className="text-[11.5px] text-[#0F1A41]/70 leading-relaxed">
                  Đặt nền móng chuyên sâu về phát triển và quản lý căn hộ dịch vụ cao cấp bậc nhất TP.HCM.
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-[#0F1A41]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-serif text-2xl font-bold text-[#0F1A41]">35+</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#B9887B] font-bold px-2.5 py-0.5 bg-[#B9887B]/10 rounded-full">
                    Quy mô vận hành
                  </span>
                </div>
                <div className="text-xs font-bold text-[#0F1A41] mb-0.5">Hơn 1.000 căn hộ và phòng khách sạn</div>
                <p className="text-[11.5px] text-[#0F1A41]/70 leading-relaxed">
                  Hiện diện tại các quận trung tâm và cộng đồng chuyên gia quốc tế (Quận 1, 3, Bình Thạnh, Thảo Điền).
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-[#0F1A41]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-serif text-2xl font-bold text-[#0F1A41]">3.800+ Tỷ</span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#B9887B] font-bold px-2.5 py-0.5 bg-[#B9887B]/10 rounded-full">
                    Bảo toàn gia sản
                  </span>
                </div>
                <div className="text-xs font-bold text-[#0F1A41] mb-0.5">Tổng giá trị tài sản đang quản lý</div>
                <p className="text-[11.5px] text-[#0F1A41]/70 leading-relaxed">
                  Đảm bảo tỷ suất sinh lời an toàn, dòng tiền ổn định và giữ gìn giá trị tài sản truyền đời.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Strategic Vision, Commitments, 4 Operational Pillars và Signature Pledge */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-9 rounded-2xl border border-[#0F1A41]/10 shadow-sm flex flex-col justify-between gap-5">
            <div className="space-y-4.5">
              {/* Header */}
              <div className="border-b border-[#0F1A41]/10 pb-3.5">
                <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#B9887B] font-bold mb-1">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                  ĐỊNH HƯỚNG PHÁT TRIỂN VÀ CAM KẾT ĐỒNG HÀNH
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1A41]">
                  Tầm nhìn kiến tạo và Sứ mệnh phụng sự
                </h3>
              </div>

              {/* 1. Tầm nhìn và Sứ mệnh (Compact 2-col) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#0F1A41]/8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] shrink-0"></span>
                    <span className="font-sans text-[11px] text-[#0F1A41] uppercase tracking-wider font-bold">
                      TẦM NHÌN 2030
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed font-normal">
                    Trở thành hệ sinh thái quản lý bất động sản dòng tiền được tin cậy hàng đầu cho các gia tộc và nhà đầu tư.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#0F1A41]/8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] shrink-0"></span>
                    <span className="font-sans text-[11px] text-[#0F1A41] uppercase tracking-wider font-bold">
                      SỨ MỆNH ĐỒNG HÀNH
                    </span>
                  </div>
                  <p className="text-xs text-[#0F1A41]/80 leading-relaxed font-normal">
                    Biến mỗi mét vuông bất động sản thành nguồn thu nhập thụ động an toàn, bền bỉ và gia tăng giá trị truyền đời.
                  </p>
                </div>
              </div>

              {/* 2. Ba cam kết bảo tồn gia sản */}
              <div>
                <span className="font-sans text-[11px] text-[#0F1A41]/60 uppercase tracking-wider block font-bold mb-2">
                  3 CAM KẾT VÀNG VỚI CHỦ SỞ HỮU BẤT ĐỘNG SẢN:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                    <div className="font-serif text-xl font-bold text-[#B9887B] mb-0.5">92%+</div>
                    <span className="text-xs font-bold text-[#0F1A41] block mb-0.5">Kín phòng ổn định</span>
                    <p className="text-[11px] text-[#0F1A41]/70 leading-snug">
                      Phân phối 8+ kênh OTA VÀ 120+ đối tác FDI.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                    <div className="font-serif text-xl font-bold text-[#B9887B] mb-0.5">100%</div>
                    <span className="text-xs font-bold text-[#0F1A41] block mb-0.5">Minh bạch tài chính</span>
                    <p className="text-[11px] text-[#0F1A41]/70 leading-snug">
                      PMS theo thời gian thực, đối soát ngày 5.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#0F1A41]/10 shadow-2xs">
                    <div className="font-serif text-xl font-bold text-[#B9887B] mb-0.5">24/7</div>
                    <span className="text-xs font-bold text-[#0F1A41] block mb-0.5">Bảo dưỡng công trình</span>
                    <p className="text-[11px] text-[#0F1A41]/70 leading-snug">
                      Bảo trì phòng ngừa giữ tài sản như mới.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Bốn trụ cột năng lực vận hành thực thi */}
              <div>
                <span className="font-sans text-[11px] text-[#0F1A41]/60 uppercase tracking-wider block font-bold mb-2">
                  4 NĂNG LỰC VẬN HÀNH TẠO DÒNG TIỀN VƯỢT TRỘI:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/8 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-xs text-[#0F1A41] block mb-0.5">Tối ưu công suất và Giá bán linh hoạt</strong>
                      <p className="text-[10.5px] text-[#0F1A41]/70 leading-relaxed">
                        Thuật toán định giá động kết hợp linh hoạt khách ngắn ngày và dài hạn giúp tối đa doanh thu trên từng phòng.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/8 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-xs text-[#0F1A41] block mb-0.5">Tiêu chuẩn dịch vụ SOP 5 sao</strong>
                      <p className="text-[10.5px] text-[#0F1A41]/70 leading-relaxed">
                        Quy trình kiểm soát buồng phòng, vệ sinh và an ninh đa lớp giữ điểm đánh giá 9.0+ từ khách quốc tế.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/8 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-xs text-[#0F1A41] block mb-0.5">Công nghệ PropTech và Quản lý số</strong>
                      <p className="text-[10.5px] text-[#0F1A41]/70 leading-relaxed">
                        Khóa thẻ từ thông minh, tự động check-in, ứng dụng cư dân và kiểm soát chi phí vận hành minh bạch.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#0F1A41]/8 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-xs text-[#0F1A41] block mb-0.5">Bảo toàn và Nâng cấp tài sản trọn đời</strong>
                      <p className="text-[10.5px] text-[#0F1A41]/70 leading-relaxed">
                        Kế hoạch bảo trì dự phòng hệ thống MEP, thang máy và đề xuất cải tạo định kỳ giữ tòa nhà luôn mới.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Pledge Signature Quote */}
            <div className="pt-3 border-t border-[#0F1A41]/10 bg-[#FAF9F6] p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-serif text-xs sm:text-[13px] italic text-[#0F1A41] leading-relaxed">
                  "Xây dựng một tòa nhà đẹp là chưa đủ, biết cách thổi hồn và vận hành nó để tạo ra dòng tiền bền bỉ mới là chìa khóa giữ gìn gia sản."
                </p>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#0F1A41]/60 font-bold block mt-1">
                  — Ban Sáng Lập CityHouse More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Values */}
      <section className="section-pad bg-[#0B1330] text-white">
        <div className="section-heading text-center max-w-2xl mx-auto">
          <p className="eyebrow eyebrow-accent">TRIẾT LÝ HÀNH ĐỘNG</p>
          <h2>4 Giá trị cốt lõi<br /><em>làm nên sự khác biệt</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#B9887B]/40 hover:bg-white/[0.04] transition-all duration-300 rounded-2xl flex flex-col group">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#B9887B] mb-6 group-hover:border-[#B9887B]/60 group-hover:bg-[#B9887B]/10 transition-all">
                <LuxuryIcon name={val.icon} size={20} strokeWidth={1.25} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-[#B9887B] transition-colors">{val.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15 Years Story Component */}
      <Story />

      {/* CityHouse Awards Component */}
      <Awards />
    </div>
  );
}

