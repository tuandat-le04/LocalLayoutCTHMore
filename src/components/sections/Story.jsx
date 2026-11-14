import React from 'react';
import { timelineData } from '../../data/timeline.js';

export default function Story() {
  return (
    <section id="about" className="story section-pad">
      <div className="section-heading">
        <p className="eyebrow eyebrow-accent">DẤU ẤN CITYHOUSE</p>
        <h2>
          15 năm phát triển<br />
          <em>và đồng hành cùng Chủ đầu tư</em>
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div className="timeline-item" key={item.year}>
            <div className="timeline-year">{item.year}</div>

            <div className="timeline-dot">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="timeline-content">
              <span className="timeline-tag-mobile hidden sm:hidden">{item.year} · </span>
              <div className="timeline-tag">{item.tag} — {item.highlight}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.image && (
                <div className="mt-4 overflow-hidden border border-[#0F1A41]/10 max-h-52 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
