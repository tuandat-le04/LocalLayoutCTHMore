import React, { useState } from 'react';
import LuxuryIcon, { LuxuryCheckBadge } from '../components/common/LuxuryIcon.jsx';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  Server,
  FileCheck2,
  Calendar,
  Building,
  Mail,
  Phone,
  ChevronRight,
  Printer,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';

const PRIVACY_SECTIONS = [
  { id: 'priv-1', title: '1. Cam kết bảo mật gia sản' },
  { id: 'priv-2', title: '2. Các loại dữ liệu được thu thập' },
  { id: 'priv-3', title: '3. Phương thức thu thập thông tin' },
  { id: 'priv-4', title: '4. Mục đích sử dụng dữ liệu' },
  { id: 'priv-5', title: '5. Bảo mật dữ liệu tài chính & Doanh thu' },
  { id: 'priv-6', title: '6. Nguyên tắc chia sẻ với bên thứ ba' },
  { id: 'priv-7', title: '7. Thời hạn lưu trữ & Biện pháp an ninh' },
  { id: 'priv-8', title: '8. Quyền của Chủ thể dữ liệu' },
  { id: 'priv-9', title: '9. Sử dụng Cookies & Công nghệ theo dõi' },
  { id: 'priv-10', title: '10. Cán bộ bảo vệ dữ liệu (DPO)' }
];

export default function PrivacyPage({ onOpenModal }) {
  const { navigate } = useNavigation();
  const [activeSection, setActiveSection] = useState('priv-1');

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
    <div className="privacy-page font-sans bg-[#F4EFEA] min-h-screen">
      {/* ── 1. Hero Section ── */}
      <section className="inner-hero section-pad font-sans relative overflow-hidden bg-gradient-to-b from-[#080E24] via-[#0F1A41] to-[#080E24] text-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-16">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
            TIÊU CHUẨN AN NINH THÔNG TIN — CITYHOUSE MORE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.2] font-normal mb-5">
            Chính sách bảo mật<br />
            <span className="text-[#B9887B] font-serif italic">& quyền riêng tư dữ liệu</span>
          </h1>
          <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal mb-6">
            CityHouse More coi sự riêng tư của gia tộc Chủ sở hữu và thông tin cá nhân của Quý khách hàng là ưu tiên hàng đầu, tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#B9887B]" />
              <span>Hiệu lực thi hành: Từ 01/2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-[#B9887B]" />
              <span>Tiêu chuẩn mã hóa cấp doanh nghiệp SSL/TLS 256-bit</span>
            </div>
          </div>
        </div>

        <div className="inner-orbit">
          <span>PRIVACY<br />SHIELD</span>
        </div>
      </section>

      {/* ── 2. Main Content Layout ── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Sticky Sidebar: Navigation Menu */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#0F1A41]/10 shadow-sm">
              <h3 className="font-serif text-base font-semibold text-[#0F1A41] mb-4 pb-3 border-b border-[#0F1A41]/10 flex items-center justify-between">
                <span>NỘI DUNG CHÍNH SÁCH</span>
                <Lock size={16} className="text-[#B9887B]" />
              </h3>

              <nav className="flex flex-col gap-1.5 text-xs">
                {PRIVACY_SECTIONS.map((sec) => (
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
                  <span>In bản cam kết bảo mật</span>
                </button>

                <div className="p-4 rounded-xl bg-[#0F1A41]/5 border border-[#0F1A41]/10 text-xs text-[#0F1A41]/80">
                  <div className="font-bold text-[#0F1A41] mb-1">Cán bộ phụ trách bảo mật (DPO)</div>
                  <div className="text-[11px] leading-relaxed mb-2">
                    Mọi yêu cầu truy xuất, chỉnh sửa hoặc xóa dữ liệu cá nhân xin vui lòng gửi về:
                  </div>
                  <a href="mailto:privacy@cityhousemore.com" className="font-bold text-[#B9887B] hover:underline block truncate">
                    privacy@cityhousemore.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area: Detailed Policy */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-[#0F1A41]/10 shadow-sm leading-relaxed text-[#0F1A41]/85">
            
            {/* Top Privacy Promise Box */}
            <div className="bg-[#0F1A41] text-white p-6 rounded-2xl mb-8 border border-[#B9887B]/40">
              <div className="flex items-start gap-4">
                <ShieldCheck size={28} className="text-[#B9887B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white mb-1">
                    Bảo Vệ Toàn Diện Bí Mật Gia Sản & Dòng Tiền
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Tại CityHouse More, dữ liệu tài chính dự án, hồ sơ kỹ thuật kết cấu công trình và danh tính thực tế của Chủ sở hữu được lưu trữ độc lập trên cụm máy chủ nội bộ với phân quyền bảo mật cấp cao nhất (Multi-Factor Authentication & Role-Based Access Control).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div id="priv-1" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                1. Cam kết bảo mật gia sản
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Chính sách này công bố phương thức <strong>Công ty TNHH CityHouse More</strong> thu thập, lưu trữ, sử dụng và bảo vệ thông tin nhận dạng cá nhân cũng như các dữ liệu kinh doanh của Chủ tài sản và Khách lưu trú.
              </p>
              <p className="text-xs sm:text-sm">
                Chúng tôi cam kết tuyệt đối không thương mại hóa, chia sẻ, cho thuê hoặc chuyển giao dữ liệu cá nhân hay dữ liệu tài sản cho bất kỳ bên thứ ba nào vì mục đích quảng cáo hoặc tiếp thị khi chưa có sự đồng ý bằng văn bản của Quý vị.
              </p>
            </div>

            {/* Section 2 */}
            <div id="priv-2" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                2. Các loại dữ liệu được thu thập
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/10">
                  <strong className="text-[#0F1A41] block mb-1">A. Đối với Chủ sở hữu bất động sản:</strong>
                  Họ tên, số định danh cá nhân (CCCD/Hộ chiếu), số điện thoại, email, thông tin tài khoản ngân hàng thụ hưởng dòng tiền, địa chỉ tài sản, bản vẽ hiện trạng, hồ sơ pháp lý công trình và dữ liệu tài chính liên quan đến dự án.
                </div>
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#0F1A41]/10">
                  <strong className="text-[#0F1A41] block mb-1">B. Đối với Khách lưu trú & Cư dân:</strong>
                  Họ tên, quốc tịch, số hộ chiếu/thị thực lưu trú (để thực hiện khai báo tạm trú theo quy định công an xuất nhập cảnh), lịch sử đặt phòng, sở thích buồng phòng và thông tin thanh toán.
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="priv-3" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                3. Phương thức thu thập thông tin
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Thu thập trực tiếp khi Chủ sở hữu gửi yêu cầu tư vấn trên website hoặc ký kết hợp đồng ủy thác quản lý.</li>
                <li>Thu thập qua biểu mẫu đăng ký nhận phòng (Check-in card) tại quầy lễ tân hoặc hệ thống self check-in trực tuyến.</li>
                <li>Ghi nhận tự động thông qua dữ liệu kỹ thuật kết nối hệ thống PMS và lịch sử trao đổi qua email/hotline chính thức.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="priv-4" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                4. Mục đích sử dụng dữ liệu
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Chúng tôi chỉ sử dụng thông tin của Quý vị cho các mục đích thiết thực và hợp pháp sau:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2 p-3 rounded-lg border border-[#0F1A41]/10 bg-white">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span>Lập báo cáo tài chính, đối soát doanh thu và thanh toán tiền khai thác hàng tháng.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg border border-[#0F1A41]/10 bg-white">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span>Khai báo lưu trú cho khách thuê theo đúng quy định của Công an quản lý xuất nhập cảnh.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg border border-[#0F1A41]/10 bg-white">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span>Thực hiện các dịch vụ bảo trì kỹ thuật, dọn dẹp và chăm sóc cá nhân hóa cho cư dân.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg border border-[#0F1A41]/10 bg-white">
                  <CheckCircle2 size={16} className="text-[#B9887B] shrink-0 mt-0.5" />
                  <span>Gửi thông báo định kỳ về kế hoạch bảo dưỡng công trình, an ninh và phòng cháy chữa cháy.</span>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="priv-5" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                5. Bảo mật dữ liệu tài chính & Doanh thu
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Mọi số liệu về dòng tiền cho thuê, doanh thu buồng phòng thực tế, tỷ suất hoàn vốn (ROI) và danh sách chi phí vận hành đều được xếp vào loại <strong>TÀI LIỆU TUYỆT MẬT</strong>.
              </p>
              <p className="text-xs sm:text-sm">
                Nhân sự trực tiếp phụ trách dự án phải ký cam kết bảo mật thông tin (NDA) và chịu trách nhiệm pháp lý cá nhân nếu làm rò rỉ thông tin kinh doanh của Chủ đầu tư ra bên ngoài.
              </p>
            </div>

            {/* Section 6 */}
            <div id="priv-6" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                6. Nguyên tắc chia sẻ với bên thứ ba
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Dữ liệu cá nhân chỉ có thể được chia sẻ trong các trường hợp giới hạn sau:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Cung cấp cho cơ quan nhà nước có thẩm quyền (Công an, Tòa án, Cơ quan Thuế) khi có văn bản yêu cầu chính thức theo đúng trình tự pháp luật.</li>
                <li>Cung cấp cho các ngân hàng, cổng thanh toán đối tác để thực hiện lệnh chuyển tiền quyết toán hoặc thanh toán thẻ bảo mật.</li>
                <li>Các nhà thầu bảo trì cơ điện/PCCC được ủy quyền (chỉ nhận thông tin liên quan đến vị trí kỹ thuật cần sửa chữa, không bao gồm thông tin cá nhân).</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div id="priv-7" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                7. Thời hạn lưu trữ & Biện pháp an ninh
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Thông tin được lưu trữ trong suốt thời gian hợp đồng ủy thác có hiệu lực và tiếp tục lưu trữ tối thiểu 05 (năm) năm sau khi kết thúc hợp đồng để phục vụ công tác thanh kiểm tra thuế và kiểm toán theo quy định của pháp luật Việt Nam.
              </p>
              <p className="text-xs sm:text-sm">
                Hệ thống lưu trữ sử dụng công nghệ tường lửa đa tầng, mã hóa dữ liệu cơ sở dữ liệu (AES-256) và kiểm tra lỗ hổng bảo mật định kỳ 6 tháng/lần.
              </p>
            </div>

            {/* Section 8 */}
            <div id="priv-8" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                8. Quyền của Chủ thể dữ liệu
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Căn cứ theo Nghị định 13/2023/NĐ-CP, Quý vị có đầy đủ các quyền:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-center my-4">
                <div className="p-3 bg-[#F4EFEA] rounded-xl border border-[#0F1A41]/10">
                  <div className="font-bold text-[#0F1A41] mb-1">Quyền được biết & Truy cập</div>
                  <span>Yêu cầu cung cấp bản sao dữ liệu cá nhân đang được xử lý.</span>
                </div>
                <div className="p-3 bg-[#F4EFEA] rounded-xl border border-[#0F1A41]/10">
                  <div className="font-bold text-[#0F1A41] mb-1">Quyền đính chính</div>
                  <span>Yêu cầu cập nhật, sửa đổi khi dữ liệu không chính xác.</span>
                </div>
                <div className="p-3 bg-[#F4EFEA] rounded-xl border border-[#0F1A41]/10">
                  <div className="font-bold text-[#0F1A41] mb-1">Quyền xóa dữ liệu</div>
                  <span>Yêu cầu xóa dữ liệu khi không còn cần thiết cho mục đích ban đầu.</span>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div id="priv-9" className="mb-12 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                9. Sử dụng Cookies & Công nghệ theo dõi
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Website <em>cityhousemore.com</em> sử dụng cookies chức năng nhằm ghi nhớ tùy chọn ngôn ngữ (VI/EN), tối ưu tốc độ tải trang và phân tích lưu lượng truy cập ẩn danh (Google Analytics). Quý vị có thể cấu hình từ chối lưu cookies trong phần cài đặt trình duyệt web mà không ảnh hưởng đến nội dung cốt lõi của website.
              </p>
            </div>

            {/* Section 10 */}
            <div id="priv-10" className="mb-6 scroll-mt-32">
              <h2 className="font-serif text-2xl font-bold text-[#0F1A41] mb-4 pb-2 border-b border-[#0F1A41]/10">
                10. Cán bộ bảo vệ dữ liệu (DPO) & Thông tin liên hệ
              </h2>
              <p className="text-xs sm:text-sm mb-3">
                Nếu Quý đối tác/Quý khách hàng có bất kỳ câu hỏi nào về chính sách bảo mật này hoặc mong muốn thực hiện các quyền bảo vệ dữ liệu cá nhân của mình, vui lòng liên hệ:
              </p>
              <div className="p-5 rounded-2xl bg-[#0F1A41]/5 border border-[#0F1A41]/10 text-xs text-[#0F1A41]">
                <div className="font-bold text-sm mb-2">BỘ PHẬN BẢO VỆ DỮ LIỆU & PHÁP CHẾ — CÔNG TY TNHH CITYHOUSE MORE</div>
                <div className="space-y-1 text-xs text-[#0F1A41]/80">
                  <div>• Địa chỉ: 485B Nguyễn Đình Chiểu, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh</div>
                  <div>• Đường dây nóng tiếp nhận: <a href="tel:0878253545" className="font-bold text-[#B9887B] hover:underline">0878 253 545</a></div>
                  <div>• Hộp thư chuyên trách: <a href="mailto:privacy@cityhousemore.com" className="font-bold text-[#B9887B] hover:underline">privacy@cityhousemore.com</a> hoặc <a href="mailto:info@cityhousemore.com" className="hover:underline">info@cityhousemore.com</a></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
