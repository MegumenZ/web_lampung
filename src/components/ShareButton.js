// ShareButton.js
import React from 'react';

function ShareButton({ icon, label, url, bgColor = 'bg-gray-600', hoverColor = 'hover:bg-gray-700' }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${bgColor} text-white px-4 py-2 rounded-lg ${hoverColor} transition`}
    >
      {icon} {label}
    </a>
  );
}

export default ShareButton;
