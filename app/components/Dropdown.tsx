'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
      >
        Menu ▼
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <Link
            href="/portfolio"
            className="block px-6 py-3 text-purple-700 hover:bg-gray-100 first:rounded-t-lg"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/autobiography"
            className="block px-6 py-3 text-purple-700 hover:bg-gray-100 border-t border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Read My Story
          </Link>
          <Link
            href="/test"
            className="block px-6 py-3 text-purple-700 hover:bg-gray-100 last:rounded-b-lg border-t border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Test Page
          </Link>
        </div>
      )}
    </div>
  );
}
