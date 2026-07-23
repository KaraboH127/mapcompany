import { useEffect, useState } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import Architectural from './components/Architectural';
import Engineering from './components/Engineering';
import ProjectManagement from './components/ProjectManagement';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

const ROUTE_MAP = {
  '/': 'home',
  '/home': 'home',
  '/company': 'company-profile',
  '/company-profile': 'company-profile',
  '/architectural': 'architectural',
  '/engineering': 'engineering',
  '/project-management': 'project-management',
  '/why-us': 'why-choose-us',
  '/why-choose-us': 'why-choose-us',
  '/contact': 'contact',
};

function resolveRoute(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return ROUTE_MAP[normalized] ?? null;
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function App() {
  const [route, setRoute] = useState(() => resolveRoute(window.location.pathname));

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = resolveRoute(window.location.pathname);
      setRoute(nextRoute);

      if (nextRoute) {
        const targetId = nextRoute === 'home' ? 'home' : nextRoute;
        requestAnimationFrame(() => {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  if (!route) {
    return <NotFoundPage onGoHome={() => navigateTo('/')} onGoBack={() => window.history.back()} />;
  }

  return (
    <>
      <header aria-label="Site header">
        <Topbar />
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <CompanyProfile />
        <Architectural />
        <Engineering />
        <ProjectManagement />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
