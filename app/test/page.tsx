'use client';

import { useState } from 'react';

export default function TestPage() {
  const [boxText, setBoxText] = useState('This is a test area where you can practice building components.');
  const [inputValue, setInputValue] = useState(boxText);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setBoxText(inputValue);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to your practice page! Feel free to experiment here.
      </p>
      
      <div className="space-y-4">
        <a
          href="https://linkedin.com/in/gigalow3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Click me
        </a>
        
        <div className="bg-gray-100 p-4 rounded-lg w-96">
          <h2 className="text-xl font-semibold mb-2">Test Content</h2>
          <p className="mb-4 text-gray-800">{boxText}</p>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Edit the text and press Enter..."
          />
        </div>
      </div>
    </main>
  );
}
