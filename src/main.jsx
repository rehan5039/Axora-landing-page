
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
