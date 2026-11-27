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
import SupportPage from './pages/SupportPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ComplaintsPage from './pages/ComplaintsPage.jsx';
import { NavigationProvider, useNavigation } from './context/NavigationContext.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CityHouse Router Error Boundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#0F1A41] text-white font-sans">
          <div className="w-16 h-16 rounded-full bg-[#B9887B]/20 text-[#B9887B] flex items-center justify-center mb-4 border border-[#B9887B]/40">
            <span className="text-2xl font-serif">!</span>
          </div>
          <h2 className="font-serif text-2xl font-bold mb-2">ĐÃ CÓ SỰ CỐ TẢI TRANG</h2>
          <p className="text-xs text-white/70 max-w-md mb-6 leading-relaxed">
            Hệ thống đang được làm mới dữ liệu. Quý khách vui lòng tải lại trang hoặc quay về trang chủ.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.href = '/';
            }}
            className="px-6 py-2.5 bg-[#B9887B] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#A37367] transition-all cursor-pointer"
          >
            Về Trang Chủ
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

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

      case '/ho-tro':
      case '/support':
      case '/faq':
      case '/tro-giup':
        return <SupportPage onOpenModal={openModal} />;

      case '/dieu-khoan-dieu-kien':
      case '/dieu-khoan-su-dung':
      case '/terms':
        return <TermsPage onOpenModal={openModal} />;

      case '/chinh-sach-bao-mat':
      case '/quyen-rieng-tu':
      case '/privacy':
        return <PrivacyPage onOpenModal={openModal} />;

      case '/khieu-nai':
      case '/gui-khieu-nai':
      case '/complaints':
        return <ComplaintsPage onOpenModal={openModal} />;

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

      {/* 2. Main Router Content with Error Protection */}
      <main id="top">
        <ErrorBoundary>
          {renderCurrentPage()}
        </ErrorBoundary>
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
