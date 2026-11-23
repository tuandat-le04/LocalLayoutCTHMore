import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import { ArrowUpRight, Building2, MapPin, Star, SlidersHorizontal, Check, Eye, RotateCcw } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';

const DISTRICT_FILTERS = [
  { id: 'all', label: 'TẤT CẢ KHU VỰC' },
  { id: 'Quận 1', label: 'QUẬN 1' },
  { id: 'Quận 3', label: 'QUẬN 3' },
  { id: 'Bình Thạnh', label: 'BÌNH THẠNH' },
  { id: 'Phú Nhuận', label: 'PHÚ NHUẬN' },
  { id: 'Thảo Điền', label: 'THẢO ĐIỀN' },
];

const BRAND_FILTERS = [
  { id: 'all', label: 'TẤT CẢ BRAND' },
  { id: 'MARK', label: 'MARK', sub: 'THƯỢNG LƯU' },
  { id: 'VIBE', label: 'VIBE', sub: 'NGHỆ THUẬT' },
  { id: 'TERA', label: 'TERA', sub: 'DÀI HẠN' },
  { id: 'NEST', label: 'NEST', sub: 'STUDIO' },
  { id: 'SOUL', label: 'SOUL', sub: 'BOUTIQUE' },
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
          Thông tin chi tiết, chuẩn hóa và minh bạch về hơn 35 bất động sản lưu trú đang được CityHouse bảo trợ và quản lý dòng tiền tại các vị trí đắc địa nhất TP.HCM.
        </p>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-2xl border-t border-white/10 pt-6 font-sans">
          <div>
            <div className="font-serif text-3xl font-bold text-[#B9887B]">35+</div>
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
        <div className="bg-white p-6 md:p-8 border border-[#0F1A41]/10 mb-12 shadow-sm rounded-2xl">
          {/* Filter Header with Stats and Reset */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-[#0F1A41]/10 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B9887B]/10 flex items-center justify-center text-[#B9887B] shrink-0">
                <SlidersHorizontal size={15} />
              </div>
              <div>
                <span className="text-[#0F1A41] font-sans text-xs font-bold uppercase tracking-wider block">
                  Bộ lọc danh mục tài sản thông minh
                </span>
                <span className="text-[11px] text-[#0F1A41]/60 font-sans">
                  Phân loại theo khu vực chiến lược và phân khúc thương hiệu CityHouse
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="font-sans text-xs text-[#0F1A41]/75 bg-[#F4EFEA] px-4 py-1.5 border border-[#0F1A41]/10 rounded-full">
                Hiển thị: <strong className="text-[#0F1A41] font-bold">{filteredProjects.length}</strong> / {projects.length} tài sản
              </span>

              {isFiltered && (
                <button
                  onClick={handleReset}
                  className="font-sans text-xs text-[#B9887B] hover:text-[#0F1A41] font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  title="Đặt lại toàn bộ bộ lọc"
                >
                  <RotateCcw size={12} />
                  <span>Đặt lại</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Rows - Full Width Stacked */}
          <div className="space-y-4">
            {/* Filter by District */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
              <div className="font-sans text-[11px] text-[#0F1A41]/75 uppercase font-bold tracking-wider md:w-36 shrink-0 flex items-center gap-1.5">
                <MapPin size={13} className="text-[#B9887B]" />
                <span>Khu vực / Quận:</span>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-center">
                {DISTRICT_FILTERS.map((d) => {
                  const isSelected = selectedDistrict === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDistrict(d.id)}
                      className={`font-sans text-xs px-4 py-2 border rounded-full transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F1A41] text-white border-[#0F1A41] shadow-xs font-bold'
                          : 'bg-[#F4EFEA]/80 text-[#0F1A41]/75 border-[#0F1A41]/15 hover:border-[#0F1A41] hover:bg-white'
                      }`}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter by Brand */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 pt-4 border-t border-[#0F1A41]/8">
              <div className="font-sans text-[11px] text-[#0F1A41]/75 uppercase font-bold tracking-wider md:w-36 shrink-0 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#B9887B] shrink-0"></span>
                <span>Dòng thương hiệu:</span>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-center">
                {BRAND_FILTERS.map((b) => {
                  const isSelected = selectedBrand === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(b.id)}
                      className={`font-sans text-xs px-4 py-2 border rounded-full transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#B9887B] text-white border-[#B9887B] shadow-xs font-bold'
                          : 'bg-[#F4EFEA]/80 text-[#0F1A41]/75 border-[#0F1A41]/15 hover:border-[#B9887B] hover:bg-white'
                      }`}
                    >
                      <span className="font-semibold">{b.label}</span>
                      {b.sub && (
                        <span className={`ml-1 text-[10px] tracking-normal ${isSelected ? 'text-white/85' : 'text-[#0F1A41]/60 font-normal'}`}>
                          ({b.sub})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
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
