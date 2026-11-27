import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';
import QuickModal from './components/QuickModal.jsx';
import HomePage from './pages/HomePage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';
import ConsultationPage from './pages/ConsultationPage.jsx';
import ConsultingInvestmentPage from './pages/ConsultingInvestmentPage.jsx';
import ConsultingRenovationPage from './pages/ConsultingRenovationPage.jsx';
import ConsultingModelPage from './pages/ConsultingModelPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import BrandsPage from './pages/BrandsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { NavigationProvider, useNavigation } from './context/NavigationContext.jsx';

function MainRouter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentPath } = useNavigation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Route resolver
  const renderCurrentPage = () => {
    // Dynamic project detail route (e.g. /dang-hoat-dong/cityhouse-soul-kabana or /danh-muc-tai-san/:slug)
    if (currentPath.startsWith('/dang-hoat-dong/') || currentPath.startsWith('/danh-muc-tai-san/')) {
      const parts = currentPath.split('/');
      const slug = parts[2];
      return <ProjectDetailPage slug={slug} onOpenModal={openModal} />;
    }

    switch (currentPath) {
      case '/giai-phap':
        return <SolutionsPage onOpenModal={openModal} />;

      case '/tu-van':
        return <ConsultationPage onOpenModal={openModal} />;

      case '/tu-van/dau-tu':
      case '/giai-phap/dau-tu-phat-trien-du-an':
        return <ConsultingInvestmentPage onOpenModal={openModal} />;

      case '/tu-van/cai-tao':
      case '/giai-phap/cai-tao-tai-dinh-vi':
        return <ConsultingRenovationPage onOpenModal={openModal} />;

      case '/tu-van/mo-hinh':
      case '/giai-phap/khai-thac-van-hanh':
        return <ConsultingModelPage onOpenModal={openModal} />;

      case '/danh-muc-tai-san':
      case '/dang-hoat-dong':
        return <ProjectsPage onOpenModal={openModal} />;

      case '/thuong-hieu':
        return <BrandsPage onOpenModal={openModal} />;

      case '/ve-he-thong':
      case '/about':
        return <AboutPage onOpenModal={openModal} />;

      case '/goc-nhin':
        return <InsightsPage onOpenModal={openModal} />;

      case '/careers':
      case '/tuyen-dung':
        return <CareersPage onOpenModal={openModal} />;

      case '/contact':
      case '/lien-he':
        return <ContactPage />;

      case '/':
      default:
        return <HomePage onOpenModal={openModal} />;
    }
  };

  return (
    <div className="site-shell relative">
      {/* 1. Global Header with Active và Functional Action Button */}
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onOpenModal={openModal}
      />

      {/* 2. Main Router Content */}
      <main id="top">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Enterprise Footer */}
      <Footer onOpenModal={openModal} />

      {/* 4. Global Fixed Floating CTA Bar (Hotline và Consultation) */}
      <FloatingCTA onOpenModal={openModal} isModalOpen={isModalOpen || menuOpen} />

      {/* 5. Quick Consultation Popup Form */}
      <QuickModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainRouter />
    </NavigationProvider>
  );
}
