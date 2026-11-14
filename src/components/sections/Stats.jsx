import React from 'react';

export default function Stats() {
  const METRICS = [
    {
      value: "35+",
      label: "BẤT ĐỘNG SẢN VẬN HÀNH",
      desc: "Vị trí đắc địa khắp TP.HCM"
    },
    {
      value: "1.850+",
      label: "PHÒNG & CĂN HỘ CAO CẤP",
      desc: "Chuẩn hóa dịch vụ quốc tế"
    },
    {
      value: "95%+",
      label: "TỶ LỆ KÍN PHÒNG ỔN ĐỊNH",
      desc: "Duy trì quanh năm 365 ngày"
    },
    {
      value: "3.800 TỶ",
      label: "TỔNG GIÁ TRỊ TÀI SẢN",
      desc: "Bảo trợ & tối ưu hóa dòng tiền"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F4EFEA] text-[#0F1A41] border-b border-[#0F1A41]/10" id="value-metrics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#0F1A41]/10">
          {METRICS.map((m, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''}`}>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A41] tracking-tight">
                {m.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#B9887B] font-bold mt-2">
                {m.label}
              </div>
              <p className="text-xs text-[#0F1A41]/65 mt-1 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
