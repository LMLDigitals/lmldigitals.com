'use client'
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(p0?: string, p1?: any, p2?: string) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-DR17LYS00W');
  }, []);

  return (
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DR17LYS00W"></script>
  );
};

export default GoogleAnalytics;
