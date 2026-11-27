import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import { ArrowUpRight, Building2, MapPin, Star, SlidersHorizontal, Check, Eye, RotateCcw } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';

const DISTRICT_FILTERS = [
  { id: 'all', label: 'Tất cả khu vực' },
  { id: 'Quận 1', label: 'Quận 1' },
  { id: 'Quận 3', label: 'Quận 3' },
  { id: 'Bình Thạnh', label: 'Bình Thạnh' },
  { id: 'Phú Nhuận', label: 'Phú Nhuận' },
  { id: 'Thảo Điền', label: 'Thảo Điền' },
];

const BRAND_FILTERS = [
  { id: 'all', label: 'Tất cả thương hiệu' },
  { id: 'MARK', label: 'MARK', tag: 'Siêu sang', color: '#D4AF37', desc: 'Biệt thự và căn hộ siêu sang phục vụ giới tinh hoa và phái đoàn ngoại giao' },
  { id: 'SOUL', label: 'SOUL', tag: 'Boutique', color: '#6E987D', desc: 'Khách sạn boutique đậm đà trải nghiệm di sản và kiến trúc độc bản' },
  { id: 'VIBE', label: 'VIBE', tag: 'Sáng tạo', color: '#C87D6D', desc: 'Không gian sống nhiệt đới đương đại và du lịch đô thị năng động' },
  { id: 'TERA', label: 'TERA', tag: 'Dài hạn', color: '#8A5A3D', desc: 'Căn hộ dịch vụ chuẩn mực cho expat và hợp đồng thuê năm ổn định' },
  { id: 'NEST', label: 'NEST', tag: 'Studio', color: '#A37367', desc: 'Studio thông minh, tinh gọn tối ưu công suất tại các trục kết nối trung tâm' },
];

export default function ProjectsPage({ onOpenModal }) {
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { navigate } = useNavigation();

  const isFiltered = selectedDistrict !== 'all' || selectedBrand !== 'all';

  const handleReset = () => {
    setSelectedDistrict('all');
    setSelectedBrand('all');
  };

  const getDistrictCount = (districtId) => {
    if (districtId === 'all') return projects.length;
    return projects.filter(p => p.district.includes(districtId)).length;
  };

  const getBrandCount = (brandId) => {
    if (brandId === 'all') return projects.length;
    return projects.filter(p => p.brand === brandId).length;
  };

  const activeBrandObj = BRAND_FILTERS.find(b => b.id === selectedBrand);

  const filteredProjects = projects.filter(p => {
    const matchDistrict = selectedDistrict === 'all' || p.district.includes(selectedDistrict);
    const matchBrand = selectedBrand === 'all' || p.brand === selectedBrand;
    return matchDistrict && matchBrand;
  });

  return (
    <div className="projects-page font-sans">
      {/* Page Hero */}
      <section className="inner-hero section-pad font-sans">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#B9887B] uppercase mb-4 flex items-center gap-2 font-sans">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
          DANH MỤC TÀI SẢN — CITYHOUSE MORE
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.18] font-normal mb-5">
          Hệ thống tài sản<br />
          <span className="text-[#B9887B] font-serif italic">đang vận hành hiệu quả</span>
        </h1>
        <p className="lead text-sm sm:text-base md:text-lg text-[#F4EFEA]/80 max-w-2xl leading-relaxed font-normal font-sans">
          Thông tin chi tiết, chuẩn hóa và minh bạch về hơn 40 bất động sản lưu trú đang được CityHouse bảo trợ và quản lý dòng tiền tại các vị trí đắc địa nhất TP.HCM.
        </p>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-2xl border-t border-white/10 pt-6 font-sans">
          <div>
            <div className="font-serif text-3xl font-bold text-[#B9887B]">40+</div>
            <div className="font-sans text-[11px] font-bold text-white/70 mt-1 uppercase tracking-wider">Tòa nhà đang vận hành</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#B9887B]">1.000+</div>
            <div className="font-sans text-[11px] font-bold text-white/70 mt-1 uppercase tracking-wider">Đơn vị lưu trú cao cấp</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#B9887B]">95%+</div>
            <div className="font-sans text-[11px] font-bold text-white/70 mt-1 uppercase tracking-wider">Công suất phòng ổn định</div>
          </div>
        </div>
      </section>

      {/* Multi-Filter Section */}
      <section className="section-pad bg-[#F4EFEA] text-[#0F1A41]">
        <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 border border-[#101C42]/10 mb-12 shadow-sm rounded-2xl font-sans">
          {/* Filter Header with Editorial Luxury Typography */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#101C42]/8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B]"></span>
                <span className="text-[10.5px] font-bold text-[#B9887B] uppercase tracking-[0.2em] font-sans">
                  TUYỂN TẬP DANH MỤC LƯU TRÚ
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-[28px] font-normal text-[#101C42] tracking-tight">
                Tuyển chọn danh mục tài sản
              </h2>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="text-xs font-sans text-[#101C42] bg-[#FAF7F2] border border-[#101C42]/10 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9887B]"></span>
                <span className="font-medium text-[#101C42]/70">Hiển thị</span>
                <strong className="font-bold text-[#101C42]">{filteredProjects.length}</strong>
                <span className="text-[#101C42]/30">/</span>
                <span className="text-[#101C42]/70">{projects.length} tài sản</span>
              </div>

              {isFiltered && (
                <button
                  onClick={handleReset}
                  className="font-sans text-xs text-[#B9887B] hover:text-[#101C42] font-semibold flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#B9887B]/30 hover:border-[#101C42]/30 hover:bg-[#FAF7F2] transition-all cursor-pointer shadow-2xs"
                  title="Đặt lại toàn bộ tiêu chí lọc"
                >
                  <RotateCcw size={11} />
                  <span>Đặt lại</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Rows - Clean Architectural Layout */}
          <div className="space-y-5">
            {/* Filter by District */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
              <div className="font-sans text-[11px] text-[#101C42]/80 uppercase font-bold tracking-[0.15em] lg:w-44 shrink-0 flex items-center gap-2">
                <MapPin size={13} className="text-[#B9887B]" />
                <span>TỌA ĐỘ VỊ TRÍ:</span>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-center">
                {DISTRICT_FILTERS.map((d) => {
                  const isSelected = selectedDistrict === d.id;
                  const count = getDistrictCount(d.id);
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDistrict(d.id)}
                      className={`font-sans text-xs px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-[#101C42] text-white border-[#101C42] shadow-xs font-semibold'
                          : 'bg-white text-[#101C42]/75 border-[#101C42]/12 hover:border-[#B9887B]/50 hover:bg-[#FAF7F2] hover:text-[#101C42]'
                      }`}
                    >
                      <span>{d.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-[#101C42]/5 text-[#101C42]/50'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter by Brand */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 pt-5 border-t border-[#101C42]/8">
              <div className="font-sans text-[11px] text-[#101C42]/80 uppercase font-bold tracking-[0.15em] lg:w-44 shrink-0 flex items-center gap-2">
                <Building2 size={13} className="text-[#B9887B]" />
                <span>DÒNG THƯƠNG HIỆU:</span>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-center">
                {BRAND_FILTERS.map((b) => {
                  const isSelected = selectedBrand === b.id;
                  const count = getBrandCount(b.id);
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(b.id)}
                      className={`font-sans text-xs px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-[#101C42] text-white border-[#101C42] shadow-xs font-semibold'
                          : 'bg-white text-[#101C42]/75 border-[#101C42]/12 hover:border-[#B9887B]/50 hover:bg-[#FAF7F2] hover:text-[#101C42]'
                      }`}
                    >
                      {b.color && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: isSelected ? '#FFFFFF' : b.color }}
                        ></span>
                      )}
                      <span>{b.label}</span>
                      {b.tag && (
                        <span className={`text-[10.5px] ${isSelected ? 'text-white/80' : 'text-[#101C42]/50'}`}>
                          · {b.tag}
                        </span>
                      )}
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-[#101C42]/5 text-[#101C42]/50'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Curated Brand Insight Strip */}
          {selectedBrand !== 'all' && activeBrandObj && activeBrandObj.desc && (
            <div className="mt-5 pt-4 border-t border-[#101C42]/8 flex items-center gap-2.5 text-xs text-[#101C42]/80 font-sans bg-[#FAF7F2] px-4 py-2.5 rounded-xl border border-[#101C42]/6">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: activeBrandObj.color }}
              ></span>
              <span className="font-semibold text-[#101C42]">Định vị {activeBrandObj.label}:</span>
              <span className="italic text-[#101C42]/75">{activeBrandObj.desc}</span>
            </div>
          )}
        </div>

        {/* Empty State when no project matches */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-[#0F1A41]/10 p-12 text-center my-6 shadow-sm rounded-2xl">
            <Building2 size={40} className="mx-auto text-[#B9887B]/60 mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#0F1A41] mb-2">
              Không tìm thấy dự án phù hợp
            </h3>
            <p className="text-xs text-[#0F1A41]/70 max-w-md mx-auto mb-6 font-sans leading-relaxed">
              Không có bất động sản nào đáp ứng đồng thời cả khu vực và dòng thương hiệu đã chọn. Quý khách vui lòng điều chỉnh tiêu chí tìm kiếm.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F1A41] hover:bg-[#B9887B] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full"
            >
              <RotateCcw size={13} />
              <span>Xem tất cả {projects.length} tài sản</span>
            </button>
          </div>
        ) : (
          /* Consistent Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <article key={p.id} className="bg-white border border-[#0F1A41]/10 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition-all group">
              {/* Card Image with Click to Open Detail Page */}
              <div
                onClick={() => navigate(`/dang-hoat-dong/${p.slug}`)}
                className="relative aspect-[16/10] overflow-hidden bg-[#0F1A41] cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#B9887B] text-white text-[9px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {p.tag}
                </div>

                {p.agodaScore && p.agodaUrl && (
                  <div className="absolute bottom-3 right-3 bg-[#0F1A41]/90 backdrop-blur-md text-white text-[11px] font-sans px-3 py-1 flex items-center gap-1 border border-white/20 rounded-full">
                    <Star size={12} className="fill-[#C79A3B] text-[#C79A3B]" />
                    <span>{p.agodaScore}</span>
                  </div>
                )}

                {/* Subtle overlay hint on hover */}
                <div className="absolute inset-0 bg-[#0F1A41]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-[#0F1A41] text-xs font-sans font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Eye size={13} className="text-[#B9887B]" />
                    Xem trang chi tiết
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sans text-xs text-[#B9887B] font-bold">{p.brand} COLLECTION</span>
                  <span className="font-sans text-[10px] text-green-700 bg-green-50 px-2.5 py-0.5 border border-green-200 rounded-full">
                    Kín phòng {p.occupancy}
                  </span>
                </div>

                <h3
                  onClick={() => navigate(`/dang-hoat-dong/${p.slug}`)}
                  className="font-serif text-xl font-semibold mb-3 group-hover:text-[#B9887B] transition-colors cursor-pointer"
                >
                  {p.name}
                </h3>

                {/* Standardized Information Table */}
                <div className="space-y-2 text-xs text-[#0F1A41]/85 font-sans mb-4 bg-[#FAF9F6] p-3.5 rounded-lg border border-[#0F1A41]/8">
                  <div className="flex items-start gap-2">
                    <MapPin size={12} className="text-[#0F1A41]/60 shrink-0 mt-0.5" />
                    <span className="truncate">{p.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 size={12} className="text-[#0F1A41]/60 shrink-0" />
                    <span>Quy mô: <strong>{p.rooms}</strong> ({p.scale})</span>
                  </div>
                  <div className="text-[11px] text-[#0F1A41]/60 pt-1.5 border-t border-[#0F1A41]/6">
                    Gói giải pháp: <span className="text-[#0F1A41] font-bold">{p.solutionLabel || p.service || 'Quản lý Toàn diện'}</span>
                  </div>
                </div>

                <p className="text-xs text-[#0F1A41]/70 leading-relaxed mb-5 line-clamp-2">{p.description}</p>

                {/* Card Actions Footer */}
                <div className="border-t border-[#0F1A41]/10 pt-4 mt-auto space-y-3">
                  <div className="flex justify-between items-center text-xs font-sans">
                    <span className="text-[#0F1A41]/60 font-semibold">{p.accompanied}</span>

                    {p.agodaUrl ? (
                      <a
                        href={p.agodaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold flex items-center gap-1 text-[#0F1A41] hover:text-[#B9887B] transition-colors"
                        title="Xem đánh giá trên Agoda"
                      >
                        <span>ĐÁNH GIÁ AGODA</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate('/contact')}
                        className="font-bold flex items-center gap-1 text-[#0F1A41] hover:text-[#B9887B]"
                      >
                        TƯ VẤN DỰ ÁN <ArrowUpRight size={13} />
                      </button>
                    )}
                  </div>

                  {/* Prominent View Detail Button */}
                  <button
                    type="button"
                    onClick={() => navigate(`/dang-hoat-dong/${p.slug}`)}
                    className="w-full py-2.5 px-4 bg-[#0F1A41] hover:bg-[#B9887B] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-full cursor-pointer group/btn shadow-xs"
                  >
                    <span>XEM CHI TIẾT DỰ ÁN</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      </section>

      {/* Property Owner Consultation CTA */}
      <section className="section-pad bg-[#0F1A41] text-white">
        <div className="contact-layout">
          <div className="contact-info-col">
            <p className="eyebrow eyebrow-accent">BẠN ĐANG SỞ HỮU BẤT ĐỘNG SẢN?</p>
            <h2>
              ĐƯA TÀI SẢN CỦA BẠN<br />
              <span>VÀO HỆ THỐNG CITYHOUSE</span>
            </h2>
            <p>
              Gia nhập mạng lưới hơn 35 tòa nhà vận hành chuyên nghiệp để tận hưởng nguồn khách quốc tế ổn định, hệ thống quản trị dòng tiền minh bạch và gia tăng giá trị tài sản bền vững.
            </p>
            <div className="contact-detail-list">
              <div>
                <span>HOTLINE TIẾP NHẬN DỰ ÁN</span>
                <strong>0878 253 545</strong>
              </div>
              <div>
                <span>EMAIL BỘ PHẬN PHÁT TRIỂN</span>
                <strong>info@cityhousemore.com</strong>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="mb-6 pb-4 border-b border-[#0F1A41]/10">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B9887B] block mb-1">
                KẾT NỐI ĐỘI NGŨ PHÁT TRIỂN
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1A41] leading-tight">
                Đăng Ký Khảo Sát Bất Động Sản
              </h3>
              <p className="text-xs sm:text-sm text-[#0F1A41]/70 mt-1 leading-relaxed">
                Đội ngũ chuyên gia tiếp nhận hồ sơ và trực tiếp liên hệ trao đổi phương án khai thác.
              </p>
            </div>
            <ContactForm submitLabel="GỬI THÔNG TIN BẤT ĐỘNG SẢN" />
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsult={() => {
          if (onOpenModal) {
            onOpenModal();
          } else {
            navigate('/contact');
          }
        }}
      />
    </div>
  );
}
