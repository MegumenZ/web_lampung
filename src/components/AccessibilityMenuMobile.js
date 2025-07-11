import React, { useEffect, useRef } from 'react';
import {
  FaVolumeUp,
  FaTextHeight,
  FaUnderline,
  FaRedo,
  FaTimes,
  FaImage,
  FaAdjust,
} from 'react-icons/fa';
import { MdTextIncrease, MdTextDecrease } from 'react-icons/md';

const AccessibilityMenuMobile = ({ onClose = () => {} }) => {
  const menuRef = useRef();

  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    document.documentElement.style.fontSize = savedFontSize || '16px';
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const safeClose = () => {
    if (typeof onClose === 'function') onClose();
  };

  const speakText = () => {
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    speechSynthesis.speak(utterance);
  };

  const increaseFontSize = () => {
    const html = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(html).fontSize);
    const newSize = currentSize + 2;
    html.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', `${newSize}px`);
  };

  const decreaseFontSize = () => {
    const html = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(html).fontSize);
    const newSize = currentSize - 2;
    html.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', `${newSize}px`);
  };

  const toggleReadableFont = () => {
    const isReadable = document.body.classList.toggle('readable-font');
    document.body.style.fontFamily = isReadable ? "'Arial', sans-serif" : '';
  };

  const underlineLinks = () => {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.style.textDecoration = 'underline';
    });
  };

  const toggleHighContrast = () => {
    const wrapper = document.getElementById('root-wrapper');
    if (wrapper) {
      const isHighContrast = wrapper.classList.toggle('high-contrast');
      localStorage.setItem('contrast', isHighContrast ? 'on' : 'off');
    }
  };

  const hideImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.style.display = 'none';
    });
  };

  const resetAccessibility = () => {
    speechSynthesis.cancel();
    document.documentElement.style.fontSize = '16px';
    localStorage.removeItem('fontSize');

    document.body.style.fontFamily = '';
    document.body.classList.remove('readable-font');

    const wrapper = document.getElementById('root-wrapper');
    wrapper?.classList.remove('high-contrast');
    localStorage.removeItem('contrast');

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.style.textDecoration = 'none';
    });

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.style.display = '';
    });
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 w-4/5 max-w-xs h-screen bg-white shadow-2xl z-[9999] overflow-y-auto border-r border-gray-200 px-5 py-6 text-gray-800 transition-transform duration-300 transform translate-x-0"
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-blue-800 font-bold text-lg">Menu Aksesibilitas</h2>
        <button onClick={safeClose} className="text-gray-500 hover:text-red-500 text-lg">
          <FaTimes />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <button onClick={speakText} className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 transition p-3 rounded-md shadow">
          <FaVolumeUp className="text-lg" />
          <span>Moda Suara</span>
        </button>

        <button onClick={increaseFontSize} className="flex items-center gap-3 bg-green-100 hover:bg-green-200 transition p-3 rounded-md shadow">
          <MdTextIncrease className="text-lg" />
          <span>Perbesar Teks</span>
        </button>

        <button onClick={decreaseFontSize} className="flex items-center gap-3 bg-yellow-100 hover:bg-yellow-200 transition p-3 rounded-md shadow">
          <MdTextDecrease className="text-lg" />
          <span>Perkecil Teks</span>
        </button>

        <button onClick={toggleReadableFont} className="flex items-center gap-3 bg-purple-100 hover:bg-purple-200 transition p-3 rounded-md shadow">
          <FaTextHeight className="text-lg" />
          <span>Tulisan Dapat Dibaca</span>
        </button>

        <button onClick={underlineLinks} className="flex items-center gap-3 bg-indigo-100 hover:bg-indigo-200 transition p-3 rounded-md shadow">
          <FaUnderline className="text-lg" />
          <span>Garis Bawahi Tautan</span>
        </button>

        <button onClick={toggleHighContrast} className="flex items-center gap-3 bg-black text-white hover:bg-gray-800 transition p-3 rounded-md shadow">
          <FaAdjust className="text-lg" />
          <span>Kontras Tinggi</span>
        </button>

        <button onClick={hideImages} className="flex items-center gap-3 bg-gray-300 hover:bg-gray-400 transition p-3 rounded-md shadow">
          <FaImage className="text-lg" />
          <span>Sembunyikan Gambar</span>
        </button>

        <button onClick={resetAccessibility} className="flex items-center gap-3 bg-red-100 hover:bg-red-200 text-red-700 transition p-3 rounded-md shadow">
          <FaRedo className="text-lg" />
          <span>Atur Ulang</span>
        </button>
      </div>
    </div>
  );
};

export default AccessibilityMenuMobile;
