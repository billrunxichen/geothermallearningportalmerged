import { useEffect, useState } from 'react';
import { SharedNavbar } from './components/site/SharedNavbar';
import { StaticHomePage } from './pages/StaticHomePage';
import { LearningPortalPage } from './pages/LearningPortalPage';

type Route = '/' | '/learn';

function normalizeRoute(pathname: string): Route {
  if (pathname === '/learn') {
    return '/learn';
  }

  return '/';
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => normalizeRoute(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeRoute(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title =
      route === '/'
        ? 'MIT RE Clinic | Geothermal Community Portal'
        : 'Geothermal Networks Education Website';
  }, [route]);

  const navigate = (href: string) => {
    const url = new URL(href, window.location.origin);
    const nextRoute = normalizeRoute(url.pathname);
    const sameDocumentTarget = url.origin === window.location.origin;

    if (!sameDocumentTarget) {
      window.location.assign(href);
      return;
    }

    window.history.pushState({}, '', `${url.pathname}${url.hash}`);
    setRoute(nextRoute);

    if (url.hash && nextRoute === '/learn') {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(url.hash.slice(1));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <>
      <SharedNavbar currentRoute={route} onNavigate={navigate} />
      {route === '/' ? <StaticHomePage onNavigate={navigate} /> : <LearningPortalPage />}
    </>
  );
}
