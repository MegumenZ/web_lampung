import React, { createContext, useState, useContext } from 'react';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(1); // 1rem

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 0.1, 2));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 0.1, 0.8));
  const resetFontSize = () => setFontSize(1);

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}>
      <div style={{ fontSize: `${fontSize}rem` }}>{children}</div>
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
