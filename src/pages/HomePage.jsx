import React from 'react';
import Hero from '../components/sections/Hero.jsx';
import Stats from '../components/sections/Stats.jsx';
import Solutions from '../components/sections/Solutions.jsx';
import Brands from '../components/sections/Brands.jsx';
import Projects from '../components/sections/Projects.jsx';
import Awards from '../components/sections/Awards.jsx';
import Partners from '../components/sections/Partners.jsx';
import Insights from '../components/sections/Insights.jsx';
import Contact from '../components/sections/Contact.jsx';
import { useNavigation } from '../context/NavigationContext.jsx';

export default function HomePage({ onOpenModal }) {
  const { navigate } = useNavigation();

  return (
    <div className="pb-16 md:pb-0">
      {/* 1. Hero: Direct Value Proposition và 2 Active CTAs */}
      <Hero
        onContactClick={onOpenModal || (() => navigate('/contact'))}
        onSolutionsClick={() => {
          const el = document.getElementById('solutions');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else navigate('/tu-van');
        }}
      />

      {/* 2. Stats: Synchronized Source, Timestamp và 4 Core Executive Metrics */}
      <Stats />

      {/* 3. Solutions: 3 Practical Client Situations (Tôi chuẩn bị đầu tư / Tài sản chưa hiệu quả / Cần vận hành) */}
      <Solutions onOpenModal={onOpenModal} />

      {/* 5. Brands: 5 Brands in Responsive Grid with Target Audience, Style, Segment, Type, Differentiator */}
      <Brands onContactClick={onOpenModal || (() => navigate('/contact'))} />

      {/* 6 VÀ 8. Projects và Case Studies: Multi-filters, No '-' placeholders, Detailed Case Study Modals */}
      <Projects onContactClick={onOpenModal || (() => navigate('/contact'))} />

      {/* 9. Awards: Operational B2B Competency Proof + Verified Agoda Reviews */}
      <Awards />

      {/* 10. Partners: 6 Categorized Partner Groups (Chủ đầu tư, Phát triển, Phân phối, Doanh nghiệp, Công nghệ, Tài chính) */}
      <Partners />

      {/* 11. Insights: Categorized Articles, Authors, Sources, and End-of-article CTAs */}
      <Insights onContactClick={onOpenModal || (() => navigate('/contact'))} />

      {/* 12. Contact: Streamlined 4-Field Form with 24h Commitment */}
      <Contact />
    </div>
  );
}
