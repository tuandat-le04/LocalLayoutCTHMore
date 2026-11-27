import React, { useState } from 'react';
import LuxuryIcon, { LuxuryCheckBadge } from '../components/common/LuxuryIcon.jsx';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  Phone,
  Mail,
  Scale,
  Lock,
  Download,
  Printer,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const SECTIONS = [
  { id: 'sec-1', title: '1. Giới thiệu & Phạm vi áp dụng' },
  { id: 'sec-2', title: '2. Định nghĩa các thuật ngữ' },
  { id: 'sec-3', title: '3. Tiêu chuẩn hợp tác & Quản lý vận hành' },
  { id: 'sec-4', title: '4. Quyền và Nghĩa vụ của Chủ sở hữu' },
  { id: 'sec-5', title: '5. Quyền và Trách nhiệm của CityHouse More' },
  { id: 'sec-6', title: '6. Cơ chế tài chính & Báo cáo dòng tiền' },
  { id: 'sec-7', title: '7. Bảo mật thông tin & Quyền sở hữu trí tuệ' },
  { id: 'sec-8', title: '8. Giới hạn trách nhiệm & Bất khả kháng' },
  { id: 'sec-9', title: '9. Giải quyết khiếu nại & Tranh chấp' },
  { id: 'sec-10', title: '10. Hiệu lực thi hành & Điều khoản sửa đổi' }
];

export default function TermsPage({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [activeSection, setActiveSection] = useState('sec-1');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="terms-page font-sans bg-[#F4EFEA] min-h-screen">
      {/* ── 1. Hero Section ── */}
      <section className="inner-hero section-pad font-sans relative overflow-hidden bg-gradient-to-b from-[#080E24] via-[#0F1A41] to-[#080E24] text-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            VĂN BẢN QUY PHẠM & TIÊU CHUẨN DỊCH VỤ — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.2] font-normal mb-5">
            Điều khoản & Điều kiện<br />
            <span className="text-[#B9887B] font-serif italic">sử dụng dịch vụ</span>
          </h1>
          <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal mb-6">
            Quy định nền tảng xác lập quyền, nghĩa vụ và nguyên tắc hợp tác giữa CityHouse More, Chủ sở hữu bất động sản ủy thác và Quý khách hàng lưu trú trong toàn bộ hệ thống.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#B9887B]" />
              <span>Phiên bản cập nhật: Tháng 01/2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Building size={14} className="text-[#B9887B]" />
              <span>Áp dụng toàn hệ thống CityHouse More</span>
            </div>
          </div>
        </div>

        <div className="inner-orbit">
          <span>LEGAL<br />STANDARDS</span>
        </div>
      </section>

      {/* ── 2. Main Content with Sidebar Table of Contents ── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Sticky Sidebar: Navigation Menu */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#0F1A41]/10 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-[#0F1A41] mb-4 pb-3 border-b border-[#0F1A41]/10 flex items-center justify-between">
                <span>MỤC LỤC ĐIỀU KHOẢN</span>
                <Scale size={16} className="text-[#B9887B]" />
              </h3>

              <nav className="flex flex-col gap-1.5 text-xs">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-3 py-2.5 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-[#0F1A41] text-white font-semibold'
                        : 'text-[#0F1A41]/75 hover:bg-[#F4EFEA] hover:text-[#0F1A41]'
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <ChevronRight size={13} className={`shrink-0 ${activeSection === sec.id ? 'text-[#B9887B]' : 'opacity-40'}`} />
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-[#0F1A41]/10 flex flex-col gap-3">
                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#0F1A41] bg-[#F4EFEA] hover:bg-[#0F1A41]/10 rounded-xl transition-colors cursor-pointer"
                >
                  <Printer size={14} />
                  <span>In bản thảo văn bản</span>
                </button>

                <div className="p-4 rounded-xl bg-[#0F1A41]/5 border border-[#0F1A41]/10 text-xs text-[#0F1A41]/80">
                  <div className="font-bold text-[#0F1A41] mb-1">Cần hỗ trợ pháp lý?</div>
                  <div className="text-[11px] leading-relaxed mb-2">
                    Bộ phận pháp chế và ban chuyên gia luôn sẵn sàng giải đáp chi tiết các nội dung hợp đồng.
                  </div>
                  <a href="tel:0878253545" className="font-bold text-[#B9887B] hover:underline block">
                    Hotline: 0878 253 545
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area: Detailed Clauses */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-[#0F1A41]/10 shadow-sm leading-relaxed text-[#0F1A41]/85">
            
            {/* Quick Badge */}
            <div className="flex items-center gap-3 p-4 bg-[#B9887B]/10 rounded-2xl border border-[#B9887B]/30 mb-8">
              <ShieldCheck size={24} className="text-[#B9887B] shrink-0" />
              <div className="text-xs">
                <strong className="text-[#0F1A41] block font-semibold mb-0.5">Cam kết tính minh bạch và chuẩn mực quản lý gia sản</strong>
                Văn bản này được xây dựng trên cơ sở pháp luật hiện hành của Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam và thông lệ quản trị vận hành khách sạn tiêu chuẩn quốc tế.
              </div>
            </div>

            {/* Section 1 */}
            <div id="sec-1" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                1. Giới thiệu & Phạm vi áp dụng
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Chào mừng Quý đối tác và Quý khách hàng đến với <strong>Công ty TNHH CityHouse More</strong> (sau đây gọi tắt là "CityHouse More" hoặc "Chúng tôi"). CityHouse More là đơn vị chuyên sâu về giải pháp tư vấn đầu tư, cải tạo tái định vị và quản lý vận hành bất động sản dòng tiền (căn hộ dịch vụ, khách sạn, tổ hợp thương mại - lưu trú).
              </p>
              <p className="text-xs sm:text-sm mb-3">
                Bằng việc truy cập trang tin điện tử <em>cityhousemore.com</em>, sử dụng các cổng thông tin dịch vụ, đăng ký tư vấn phát triển dự án hoặc ký kết các hợp đồng hợp tác ủy thác quản lý tài sản, Quý đối tác/Quý khách hàng xác nhận đã đọc, hiểu rõ và đồng ý bị ràng buộc bởi các Điều khoản và Điều kiện này.
              </p>
            </div>

            {/* Section 2 */}
            <div id="sec-2" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                2. Định nghĩa các thuật ngữ
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm pl-2">
                <li>
                  <strong className="text-[#0F1A41]">• "Chủ sở hữu" / "Chủ đầu tư":</strong> Là cá nhân, tổ chức hoặc gia tộc có quyền sở hữu hợp pháp hoặc quyền khai thác hợp pháp đối với bất động sản ủy thác cho CityHouse More.
                </li>
                <li>
                  <strong className="text-[#0F1A41]">• "Tài sản ủy thác":</strong> Bao gồm tòa nhà, phân khu căn hộ, khách sạn, trang thiết bị công trình gắn liền và hạ tầng kỹ thuật được bàn giao để khai thác thương mại.
                </li>
                <li>
                  <strong className="text-[#0F1A41]">• "Khách lưu trú":</strong> Cá nhân, tổ chức trong và ngoài nước đăng ký thuê phòng, lưu trú ngắn hạn hoặc dài hạn trong hệ thống do CityHouse More vận hành.
                </li>
                <li>
                  <strong className="text-[#0F1A41]">• "Hệ thống PMS":</strong> Phần mềm quản trị lưu trú chuyên dụng của CityHouse More phục vụ quản lý buồng phòng, giá bán, công suất và đối soát dòng tiền tập trung.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="sec-3" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                3. Tiêu chuẩn hợp tác & Quản lý vận hành
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                CityHouse More triển khai các hoạt động vận hành dựa trên hệ thống quy chuẩn SOP (Standard Operating Procedures) tiêu chuẩn 5 sao:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/10 text-xs">
                  <div className="font-bold text-[#0F1A41] mb-1">Kiểm soát an toàn & PCCC</div>
                  Duy trì đầy đủ hồ sơ nghiệm thu phòng cháy chữa cháy, an ninh trật tự và bảo trì định kỳ hệ thống cơ điện (MEP).
                </div>
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/10 text-xs">
                  <div className="font-bold text-[#0F1A41] mb-1">Chuẩn mực buồng phòng & Vệ sinh</div>
                  Quy trình dọn phòng, giặt là khử khuẩn chuẩn khách sạn quốc tế, đảm bảo đánh giá trên các nền tảng OTA đạt 9.0+ điểm.
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="sec-4" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                4. Quyền và Nghĩa vụ của Chủ sở hữu
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  <strong>4.1 Quyền của Chủ sở hữu:</strong> Được quyền giám sát hoạt động khai thác tài sản, yêu cầu báo cáo tài chính định kỳ vào ngày 5 hàng tháng, tham quan khảo sát hiện trạng tài sản có thông báo trước, và nhận thanh toán phân chia doanh thu theo đúng thỏa thuận hợp đồng.
                </p>
                <p>
                  <strong>4.2 Nghĩa vụ của Chủ sở hữu:</strong> Bàn giao mặt bằng và tài sản bảo đảm tính pháp lý rõ ràng, không tranh chấp quyền sở hữu, phối hợp với CityHouse More trong công tác đăng ký lưu trú với chính quyền địa phương và thực hiện nghĩa vụ thuế theo quy định nhà nước.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="sec-5" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                5. Quyền và Trách nhiệm của CityHouse More
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  <strong>5.1 Trách nhiệm quản lý bảo toàn gia sản:</strong> CityHouse More cam kết chịu trách nhiệm duy trì, bảo dưỡng và gìn giữ hiện trạng công trình, hạn chế tối đa hao mòn vô lý trong suốt chu kỳ vận hành.
                </p>
                <p>
                  <strong>5.2 Tối ưu hóa hiệu suất lấp đầy:</strong> Triển khai chiến lược giá bán đa kênh (OTA toàn cầu, B2B doanh nghiệp, đối tác lữ hành), phân bổ ngân sách marketing bài bản nhằm đạt công suất phòng mục tiêu từ 85% – 95%.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="sec-6" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                6. Cơ chế tài chính & Báo cáo dòng tiền
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Tính minh bạch tài chính là cốt lõi trong triết lý quản lý gia sản của CityHouse More:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm mb-3">
                <li>Dữ liệu doanh thu buồng phòng, phụ thu dịch vụ được ghi nhận tự động trên hệ thống số hóa.</li>
                <li>Chi phí hoạt động (OPEX) bao gồm điện nước, vật tư tiêu hao, nhân công vận hành được liệt kê kèm hóa đơn chứng từ hợp lệ.</li>
                <li>Bảng tổng kết lợi nhuận ròng được chuyển đến Chủ đầu tư kiểm tra vào ngày 5 và quyết toán thanh toán từ ngày 10 đến 15 hàng tháng.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div id="sec-7" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                7. Bảo mật thông tin & Quyền sở hữu trí tuệ
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Toàn bộ hồ sơ kỹ thuật công trình, danh tính chủ gia tộc, số liệu tài chính doanh thu và hợp đồng đều thuộc diện tài liệu mật tuyệt đối theo tiêu chuẩn Non-Disclosure Agreement (NDA).
              </p>
              <p className="text-xs sm:text-sm">
                Thương hiệu "CityHouse More", logo, bộ nhận diện thương hiệu, hệ thống chuẩn mực vận hành SOP đều là tài sản trí tuệ độc quyền thuộc quyền sở hữu của Công ty TNHH CityHouse More. Mọi hành vi sao chép trái phép đều bị xử lý theo luật sở hữu trí tuệ.
              </p>
            </div>

            {/* Section 8 */}
            <div id="sec-8" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                8. Giới hạn trách nhiệm & Bất khả kháng
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Các bên không phải chịu trách nhiệm bồi thường cho bất kỳ sự chậm trễ hoặc không thực hiện nghĩa vụ nào do các sự kiện bất khả kháng nằm ngoài tầm kiểm soát hợp lý (bao gồm thiên tai, dịch bệnh quy mô quốc gia có lệnh cách ly của chính phủ, chiến tranh, bạo loạn hoặc thay đổi đột xuất của luật pháp).
              </p>
            </div>

            {/* Section 9 */}
            <div id="sec-9" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                9. Giải quyết khiếu nại & Tranh chấp
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Mọi khiếu nại, phản ánh trong quá trình hợp tác được tiếp nhận qua kênh chính thức tại trang <a href="/khieu-nai" onClick={(e) => { e.preventDefault(); navigate('/khieu-nai'); }} className="text-[#B9887B] font-bold hover:underline">Gửi khiếu nại</a> hoặc email <em>info@cityhousemore.com</em>.
              </p>
              <p className="text-xs sm:text-sm">
                Hai bên cam kết ưu tiên thương lượng hòa giải trên tinh thần tôn trọng quyền lợi tương hỗ. Trường hợp không thể thống nhất trong vòng 45 ngày, tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền tại Thành phố Hồ Chí Minh để giải quyết.
              </p>
            </div>

            {/* Section 10 */}
            <div id="sec-10" className="mb-6 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                10. Hiệu lực thi hành & Điều khoản sửa đổi
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                CityHouse More có quyền điều chỉnh, bổ sung các điều khoản này theo yêu cầu quản lý thực tế hoặc khi quy định pháp luật thay đổi. Nội dung sửa đổi sẽ được thông báo công khai trên website trước ít nhất 15 ngày làm việc.
              </p>
              <div className="pt-4 border-t border-[#0F1A41]/10 text-xs text-[#0F1A41]/60">
                Địa chỉ: 485B Nguyễn Đình Chiểu, Phường Bàn Cờ, Quận 3, TP.HCM · MST: 0316749902
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
