import React from 'react';

export const Slide03_Background = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-gray-50">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Rumusan Masalah & Tujuan</h1>
    <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="flex flex-col items-center text-center p-6 border-2 border-dashed border-gray-400 rounded-lg reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>
        <h2 className="font-display text-3xl text-gray-800">Rumusan Masalah</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 my-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className="text-lg font-medium text-gray-700">
          Bagaimana merancang dan membangun sebuah platform pembelajaran Al-Qur'an berbasis web yang interaktif dan menerapkan gamifikasi untuk meningkatkan motivasi belajar, khususnya bagi generasi digital?
        </p>
      </div>

      <div className="flex flex-col items-center text-center p-6 border-2 border-dashed border-gray-400 rounded-lg reveal-item" style={{'--delay': '400ms'} as React.CSSProperties}>
        <h2 className="font-display text-3xl text-gray-800">Tujuan Penelitian</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 my-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        <p className="text-lg font-medium text-gray-700">
          Membangun aplikasi "Yaqro", sebuah platform fungsional yang mengintegrasikan kurikulum terstruktur dengan mekanika gamifikasi untuk menciptakan pengalaman belajar Al-Qur'an yang efektif, modern, dan menyenangkan.
        </p>
      </div>
    </div>
  </div>
);