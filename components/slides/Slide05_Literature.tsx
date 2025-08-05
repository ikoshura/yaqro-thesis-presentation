import React from 'react';

export const Slide05_Literature = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-white">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Batasan Masalah</h1>
    <p className="mt-4 text-xl text-gray-600 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>Menjaga penelitian tetap fokus dan terarah.</p>
    <div className="mt-10 w-full max-w-3xl bg-gray-50 border-2 border-gray-200 rounded-lg p-8 reveal-item" style={{'--delay': '400ms'} as React.CSSProperties}>
      <ul className="space-y-4 text-lg list-none">
        <li className="flex items-start">
          <span className="text-brand-red font-bold mr-3">■</span>
          <div><span className="font-semibold">Platform:</span> Aplikasi dikembangkan berbasis web menggunakan Vite, React, TypeScript, dan Tailwind CSS.</div>
        </li>
        <li className="flex items-start">
          <span className="text-brand-red font-bold mr-3">■</span>
          <div><span className="font-semibold">Materi:</span> Konten pembelajaran berfokus pada tingkat dasar (setara Iqro), mencakup pengenalan huruf Hijaiyah, harakat, dan bacaan dasar.</div>
        </li>
        <li className="flex items-start">
          <span className="text-brand-red font-bold mr-3">■</span>
          <div><span className="font-semibold">Gamifikasi:</span> Fitur yang diimplementasikan terbatas pada sistem poin (XP), progresi level, dan pencapaian (achievements).</div>
        </li>
        <li className="flex items-start">
          <span className="text-brand-red font-bold mr-3">■</span>
          <div><span className="font-semibold">Validasi Vokal:</span> Tidak mencakup pengembangan sistem pengenalan suara (voice recognition) untuk validasi makhraj otomatis.</div>
        </li>
        <li className="flex items-start">
          <span className="text-brand-red font-bold mr-3">■</span>
          <div><span className="font-semibold">Pengujian:</span> Difokuskan pada pengujian black-box untuk fungsionalitas dan pengujian pengguna (SUS) untuk usabilitas.</div>
        </li>
      </ul>
    </div>
  </div>
);