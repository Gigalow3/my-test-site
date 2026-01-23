'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Don't show header on home page
  if (pathname === '/') {
    return null;
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple-700 text-white shadow-lg sticky top-0 z-20">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold">Gigalowe Website</h1>
        
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="bg-white text-purple-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Menu ▼
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <Link
                href="/"
                className="block px-6 py-3 text-purple-700 hover:bg-gray-100 first:rounded-t-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="block px-6 py-3 text-purple-700 hover:bg-gray-100 border-t border-gray-200"
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
      </div>
    </header>
  );
}
