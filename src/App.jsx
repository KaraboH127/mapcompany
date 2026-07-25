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

// Map of pathname (or hash fragment) to the corresponding section id used for scrolling.
// The keys are plain paths (e.g., "/architectural") but we also treat hash fragments like "#architectural"
// as equivalent by normalizing them in `resolveRoute`.
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

/**
 * Resolve the current location to a known route.
 * Supports both pathname (e.g., "/architectural") and hash fragments (e.g., "#architectural").
 */
function resolveRoute() {
  // Prefer pathname when it maps to a route.
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (ROUTE_MAP[path]) return ROUTE_MAP[path];

  // Fallback to hash fragment (remove leading #) and treat it as a pathname.
  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    const hashPath = `/${hash}`;
    return ROUTE_MAP[hashPath] ?? null;
  }
  return null;
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function App() {
  const [route, setRoute] = useState(() => resolveRoute());

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = resolveRoute();
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

    // Initial sync and listen to both history navigation and hash changes.
    syncRoute();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
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

