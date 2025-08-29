
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Support from '@/pages/Support';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
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

// GA4 SPA page_view tracking (requires gtag snippet in index.html)
const GA_MEASUREMENT_ID = 'G-763ZXG30KL';
function sendPageView(path) {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag; // defined by gtag.js in index.html
  if (typeof gtag === 'function') {
    gtag('config', GA_MEASUREMENT_ID, { page_path: path });
  }
}

// Initial page_view
sendPageView(window.location.pathname + window.location.search);

// Track subsequent route changes
router.subscribe(() => {
  const { location } = router.state;
  if (location) {
    sendPageView(location.pathname + location.search);
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

