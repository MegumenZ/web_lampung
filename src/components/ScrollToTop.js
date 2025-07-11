// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // bisa juga pakai behavior: 'auto' kalau tak mau animasi
  }, [pathname]);

  return null;
}

export default ScrollToTop;
