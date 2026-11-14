import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

const NAV_LINKS = [
  { href: '/tu-van', label: 'GIẢI PHÁP' },
  { href: '/danh-muc-tai-san', label: 'DANH MỤC TÀI SẢN' },
  { href: '/ve-he-thong', label: 'VỀ HỆ THỐNG' },
  { href: '/goc-nhin', label: 'GÓC NHÌN' },
];

export default function InnerPage({ data }) {
  const [pageTitle, headline, description, cards] = data;
  const headlineParts = headline.split('\n');

  return (
    <div className="inner-page">
      <header className="header inner-header">
        <a className="wordmark" href="/">
          <span>CITY</span>HOUSE<small>MORE</small>
        </a>
        <nav className="nav">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <span>VI <i>/</i> EN</span>
          <a className="outline-btn" href="#contact">
            LIÊN HỆ NGAY <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="inner-hero section-pad">
        <p className="eyebrow">{pageTitle} <span>—</span> CITYHOUSE MORE</p>
        <h1>
          {headlineParts.map((t, i) => (
            <React.Fragment key={t}>
              {i > 0 && <br />}
              {i === headlineParts.length - 1 ? <em>{t}</em> : t}
            </React.Fragment>
          ))}
        </h1>
        <p className="lead">{description}</p>
        <a className="solid-btn" href="#contact">
          KHÁM PHÁ GIẢI PHÁP <ArrowUpRight size={17} />
        </a>
        <div className="inner-orbit"><span>MORE<br />VALUE</span></div>
      </section>

      <section className="inner-content section-pad">
        <p className="eyebrow">KHÁM PHÁ CHI TIẾT</p>
        <h2>Giải pháp tạo nên<br /><em>hiệu quả dài hạn</em></h2>
        <div className="inner-cards">
          {cards.map((title, i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>Phân tích chuyên sâu, triển khai thực tế và tối ưu theo từng giai đoạn của tài sản.</p>
              <a href="#contact">XEM CHI TIẾT <ArrowUpRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-copy">
          <p className="eyebrow">TRỞ THÀNH ĐỐI TÁC</p>
          <h2>Xây dựng<br /><em>giá trị bền vững</em></h2>
          <p>Để lại thông tin, CityHouse sẽ liên hệ để đề xuất giải pháp phù hợp.</p>
          <strong>0878 253 545</strong><br />
          <strong>info@cityhousemore.com</strong>
        </div>
        <ContactForm showTextarea={false} submitLabel="GỬI YÊU CẦU" />
      </section>

      <Footer minimal={true} />
    </div>
  );
}
