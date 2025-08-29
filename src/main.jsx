
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App';
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const Support = lazy(() => import('@/pages/Support'));
const Contact = lazy(() => import('@/pages/Contact'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
import '@/index.css';
import { ThemeProvider } from '@/lib/utils.jsx';
import { LanguageProvider } from '@/contexts/LanguageContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />
  },
  {
    path: "/support",
    element: <Support />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/blog/:id",
    element: <BlogPost />
  }
]);

// GA4 SPA page_view tracking without blocking initial load
const GA_MEASUREMENT_ID = 'G-763ZXG30KL';
function ensureGtagStub() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () { window.dataLayer.push(arguments); };
  }
}

function loadGA() {
  if (typeof window === 'undefined') return;
  ensureGtagStub();
  if (document.getElementById('ga-gtag')) return;
  const s = document.createElement('script');
  s.id = 'ga-gtag';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  s.onload = () => {
    window.gtag('js', new Date());
    // Disable automatic page_view to avoid double-counting; we send manually
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
    // Ensure initial page_view after GA is ready
    sendPageView(window.location.pathname + window.location.search);
  };
  document.head.appendChild(s);
}

function sendPageView(path) {
  if (typeof window === 'undefined') return;
  ensureGtagStub();
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
}

// Initial page_view (queued if GA not yet loaded)
sendPageView(window.location.pathname + window.location.search);

// Load GA when browser is idle (does not block LCP)
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => loadGA(), { timeout: 2000 });
  } else {
    setTimeout(loadGA, 2000);
  }
}

// Track subsequent route changes
router.subscribe(() => {
  const { location } = router.state;
  if (location) {
    // Ensure GA is loaded soon after first navigation as well
    loadGA();
    sendPageView(location.pathname + location.search);
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <Suspense fallback={<div />}> 
          <RouterProvider router={router} />
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

