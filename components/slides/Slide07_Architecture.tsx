import React from 'react';

export const Slide07_Architecture = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-white">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Arsitektur Sistem</h1>
    <p className="mt-4 text-xl text-gray-600 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>Arsitektur Two-Tier dengan Backend-as-a-Service (BaaS)</p>
    
    <div className="w-full max-w-5xl mt-12 flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-around gap-8">
      
      <div className="text-center p-6 border-4 border-gray-800 rounded-lg reveal-item flex flex-col justify-between md:flex-1" style={{'--delay': '400ms'} as React.CSSProperties}>
        <h2 className="font-display text-3xl">Tier 1: Client</h2>
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-24 w-24 my-4 mx-auto text-[#61DAFB] animate-spin-slow">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        <ul className="text-left list-disc list-inside">
            <li>Single Page Application (SPA)</li>
            <li>Dibangun dengan <strong>React</strong></li>
            <li>Menangani UI/UX & Interaksi</li>
        </ul>
      </div>

      <div className="text-gray-400 reveal-item shrink-0 flex items-center justify-center" style={{'--delay': '600ms'} as React.CSSProperties}>
          {/* Down arrow for mobile */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
          {/* Right arrow for desktop */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
          </svg>
      </div>

      <div className="text-center p-6 border-4 border-green-500 rounded-lg reveal-item flex flex-col justify-between md:flex-1" style={{'--delay': '800ms'} as React.CSSProperties}>
        <h2 className="font-display text-3xl">Tier 2: Backend</h2>
        <svg width="109" height="113" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-24 w-auto my-4 mx-auto">
            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear_s7)"/>
            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear_s7)" fillOpacity="0.2"/>
            <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
            <defs>
            <linearGradient id="paint0_linear_s7" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361"/>
            <stop offset="1" stopColor="#3ECF8E"/>
            </linearGradient>
            <linearGradient id="paint1_linear_s7" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <ul className="text-left list-disc list-inside">
            <li>Backend-as-a-Service (BaaS)</li>
            <li>Menggunakan <strong>Supabase</strong></li>
            <li>Menangani Database & Otentikasi</li>
        </ul>
      </div>
    </div>
  </div>
);