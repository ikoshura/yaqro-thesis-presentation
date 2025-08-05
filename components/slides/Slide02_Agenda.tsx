import React from 'react';

export const Slide02_Agenda = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-white">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Latar Belakang</h1>
    <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center">
      
      <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-200 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>
        <h2 className="font-display text-3xl text-brand-red">Pembelajaran Konvensional</h2>
        <ul className="mt-4 space-y-2 text-lg text-left list-disc list-inside">
          <li>Cenderung monoton dan statis.</li>
          <li>Kurang interaktif dan menarik.</li>
          <li>Menyebabkan penurunan motivasi belajar.</li>
          <li>Tidak sesuai dengan kebiasaan generasi baru.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-200 reveal-item" style={{'--delay': '400ms'} as React.CSSProperties}>
        <h2 className="font-display text-3xl text-brand-blue">Kebutuhan Generasi Digital</h2>
        <ul className="mt-4 space-y-2 text-lg text-left list-disc list-inside">
          <li>Terbiasa dengan interaksi digital.</li>
          <li>Mengharapkan umpan balik instan.</li>
          <li>Mencari pengalaman belajar yang dinamis.</li>
          <li>Membutuhkan solusi yang modern dan mudah diakses.</li>
        </ul>
      </div>
    </div>
    <p className="mt-12 text-xl font-semibold text-gray-700 max-w-4xl text-center reveal-item" style={{'--delay': '600ms'} as React.CSSProperties}>
      Terdapat kesenjangan antara metode tradisional dan ekspektasi pembelajar modern, sehingga dibutuhkan solusi inovatif.
    </p>
  </div>
);