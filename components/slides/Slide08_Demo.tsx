import React from 'react';

export const Slide08_Demo = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-white p-8 relative bg-black overflow-hidden">
    <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://i.ibb.co/6P6z70K/Yaqro-Dashboard.png')" }} // Placeholder image from page 32
    ></div>
    <div className="relative z-10 text-center reveal-item">
      <h1 className="font-display text-7xl md:text-9xl tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
        DEMO APLIKASI
      </h1>
      <p className="font-sans text-2xl md:text-3xl mt-4 font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
        Demonstrasi Penggunaan Aplikasi Yaqro
      </p>
    </div>
  </div>
);