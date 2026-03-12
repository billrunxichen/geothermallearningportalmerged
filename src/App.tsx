import { useEffect, useState } from 'react';
import { SharedNavbar } from './components/site/SharedNavbar';
import { StaticHomePage } from './pages/StaticHomePage';
import { StaticBasicsPage } from './pages/StaticBasicsPage';
import { LearningPortalPage } from './pages/LearningPortalPage';
import { StaticProcessPage } from './pages/StaticProcessPage';
import { StaticPhysicalPage } from './pages/StaticPhysicalPage';
import { StaticCasesPage } from './pages/StaticCasesPage';
import { StaticResourcesPage } from './pages/StaticResourcesPage';

type Route = '/' | '/basics' | '/learn' | '/process' | '/physical' | '/cases' | '/resources';

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

function stripBasePath(pathname: string): string {
  if (!BASE_PATH || BASE_PATH === '') {
    return pathname;
  }

  if (pathname === BASE_PATH) {
    return '/';
  }

  if (pathname.startsWith(`${BASE_PATH}/`)) {
    return pathname.slice(BASE_PATH.length) || '/';
  }

  return pathname;
}

function buildAppPath(route: string, hash = ''): string {
  const normalizedRoute = route === '/' ? '' : route;
  const base = BASE_PATH || '';
  return `${base}${normalizedRoute}${hash}`;
}

function normalizeRoute(pathname: string): Route {
  const appPath = stripBasePath(pathname);

  if (appPath === '/resources') {
    return '/resources';
  }

  if (appPath === '/cases') {
    return '/cases';
  }

  if (appPath === '/basics') {
    return '/basics';
  }

  if (appPath === '/physical') {
    return '/physical';
  }

  if (appPath === '/process') {
    return '/process';
  }

  if (appPath === '/learn') {
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
    if (route === '/') {
      document.title = 'MIT RE Clinic | Geothermal Community Portal';
      return;
    }

    if (route === '/process') {
      document.title = 'Process | MIT RE Clinic';
      return;
    }

    if (route === '/basics') {
      document.title = 'Basics | MIT RE Clinic';
      return;
    }

    if (route === '/cases') {
      document.title = 'Cases | MIT RE Clinic';
      return;
    }

    if (route === '/resources') {
      document.title = 'Resources | MIT RE Clinic';
      return;
    }

    if (route === '/physical') {
      document.title = 'Physical | MIT RE Clinic';
      return;
    }

    document.title = 'Geothermal Networks Education Website';
  }, [route]);

  const navigate = (href: string) => {
    const url = new URL(href, window.location.origin);
    const nextRoute = normalizeRoute(url.pathname);
    const sameDocumentTarget = url.origin === window.location.origin;

    if (!sameDocumentTarget) {
      window.location.assign(href);
      return;
    }

    const nextHash = url.hash || '';
    window.history.pushState({}, '', buildAppPath(nextRoute, nextHash));
    setRoute(nextRoute);

    if (
      nextHash &&
      (nextRoute === '/learn' ||
        nextRoute === '/basics' ||
        nextRoute === '/cases' ||
        nextRoute === '/resources' ||
        nextRoute === '/process' ||
        nextRoute === '/physical')
    ) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(nextHash.slice(1));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <>
      <SharedNavbar currentRoute={route} onNavigate={navigate} />
      {route === '/' && <StaticHomePage onNavigate={navigate} />}
      {route === '/basics' && <StaticBasicsPage onNavigate={navigate} />}
      {route === '/cases' && <StaticCasesPage onNavigate={navigate} />}
      {route === '/resources' && <StaticResourcesPage />}
      {route === '/process' && <StaticProcessPage onNavigate={navigate} />}
      {route === '/physical' && <StaticPhysicalPage onNavigate={navigate} />}
      {route === '/learn' && <LearningPortalPage />}
    </>
  );
}
