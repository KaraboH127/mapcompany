import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles smooth-scrolling to an in-page section when the URL contains a
 * hash (e.g. navigating from /trade-test-centre to /#contact). On a plain
 * route change with no hash, scrolls to the top of the new page.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a tick for the target route's content to mount.
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return () => clearTimeout(timeout);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}
