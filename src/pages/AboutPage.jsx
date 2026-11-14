import React from 'react';
import Story from '../components/sections/Story.jsx';
import Awards from '../components/sections/Awards.jsx';
import { Shield, Target, Compass, Award, Users, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const CORE_VALUES = [
  {
    icon: Shield,
    title: "Bảo tồn & Gia tăng gia sản",
    desc: "Mỗi quyết định tư vấn và vận hành đều hướng tới việc bảo vệ nguyên vẹn giá trị cốt lõi của tài sản và nhân bội giá trị theo thời gian cho các thế hệ mai sau."
  },
  {
    icon: Target,
    title: "Minh bạch tuyệt đối",
    desc: "Hệ thống quản trị tài chính số hóa, báo cáo doanh thu và chi phí định kỳ chi tiết từng hạng mục, đem lại sự an tâm tuyệt đối cho Chủ đầu tư."
  },
  {
    icon: Compass,
    title: "Tiêu chuẩn vận hành quốc tế",
    desc: "Chuẩn hóa quy trình dịch vụ từ lễ tân, buồng phòng đến bảo trì kỹ thuật, duy trì điểm đánh giá 9.0+ từ khách lưu trú toàn cầu."
  },
  {
    icon: Users,
    title: "Đồng hành thủy chung",
    desc: "Xem tài sản của Chủ đầu tư như tài sản của chính mình. Cùng chia sẻ rủi ro, cùng tận hưởng quả ngọt và bền bỉ gắn bó qua mọi chu kỳ thăng trầm của thị trường."
  }
];

export default function AboutPage() {
  const { navigate } = useNavigation();

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="inner-hero section-pad">
        <p className="eyebrow eyebrow-accent">VỀ HỆ THỐNG — CITYHOUSE MORE</p>
        <h1>
          15 năm kiến tạo<br />
          <em>giá trị dòng tiền bền vững</em>
        </h1>
        <p className="lead">
          CityHouse More ra đời từ khát vọng giải quyết bài toán vận hành bất động sản dòng tiền chuyên nghiệp tại Việt Nam, giúp các Chủ đầu tư biến tài sản tĩnh thành những cỗ máy tạo dòng tiền ổn định và trường tồn.
        </p>
      </section>

      {/* Brand Story & Mission */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow eyebrow-accent">CÂU CHUYỆN THÀNH LẬP</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Từ kinh nghiệm thực chiến<br />
              đến nền tảng <em>quản lý gia sản</em>
            </h2>
            <p className="text-sm md:text-base text-[#0F1A41]/80 leading-relaxed mb-4">
              Năm 2009, nhà sáng lập CityHouse bắt đầu bước chân vào lĩnh vực lưu trú cao cấp tại dự án biểu tượng Saigon Pavillon thuộc Coteccons Group. Qua hơn một thập kỷ chứng kiến những thăng trầm của thị trường bất động sản, chúng tôi nhận ra rằng: <em>Xây dựng nên một tòa nhà đẹp là chưa đủ, biết cách thổi hồn và vận hành nó để tạo ra dòng tiền bền bỉ mới là chìa khóa giữ gìn gia sản.</em>
            </p>
            <p className="text-sm md:text-base text-[#0F1A41]/80 leading-relaxed mb-6">
              Hôm nay, CityHouse More đã phát triển mạng lưới hơn 35 bất động sản đang vận hành với trên 1.000 đơn vị lưu trú, quản lý danh mục tài sản trị giá hơn 3.800 tỷ đồng tại các vị trí đắc địa nhất TP. Hồ Chí Minh.
            </p>
            <div className="relative aspect-[16/9] overflow-hidden border border-[#0F1A41]/10 group">
              <img
                src="https://cityhousemore.com/uploads/b810c46ef2e5a1410010b30aac5981d6a1.jpeg"
                alt="Không gian làm việc & điều hành CityHouse More"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-[#0F1A41]/85 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono">
                Trung tâm Điều hành & Tiếp đón đối tác CityHouse More (Quận 3)
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 border border-[#0F1A41]/10">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-[#0F1A41]">Tầm nhìn & Sứ mệnh</h3>

            <div className="mb-6 pb-6 border-b border-[#0F1A41]/10">
              <span className="font-mono text-xs text-[#B9887B] uppercase tracking-wider block mb-2">TẦM NHÌN CHIẾN LƯỢC</span>
              <p className="text-sm text-[#0F1A41]/80 leading-relaxed">
                Trở thành hệ sinh thái quản lý và tối ưu hóa bất động sản dòng tiền được tin cậy hàng đầu Việt Nam, là điểm tựa vững bền cho các gia tộc và nhà đầu tư bảo tồn tài sản qua nhiều thế hệ.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-[#B9887B] uppercase tracking-wider block mb-2">SỨ MỆNH ĐỒNG HÀNH</span>
              <p className="text-sm text-[#0F1A41]/80 leading-relaxed">
                Đồng hành toàn diện từ quy hoạch sản phẩm, kiến trúc cải tạo đến vận hành dịch vụ thực tế, biến mỗi mét vuông bất động sản thành nguồn thu nhập thụ động an toàn và bền bỉ.
              </p>
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
          {CORE_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-8 border border-white/10 bg-white/[0.02] flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#B9887B]/20 flex items-center justify-center text-[#B9887B] mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{val.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 15 Years Story Component */}
      <Story />

      {/* CityHouse Awards Component */}
      <Awards />
    </div>
  );
}

