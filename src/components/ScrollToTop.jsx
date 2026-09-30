import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window to the top whenever the route changes.
// React Router doesn't do this automatically since navigation
// is client-side, not a real page load.
//
// behavior: 'instant' explicitly overrides the site's global
// `scroll-behavior: smooth` CSS rule, which otherwise animates
// this scroll and can get cut short by the new page rendering.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
