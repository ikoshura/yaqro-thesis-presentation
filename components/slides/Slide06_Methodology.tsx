import React from 'react';

const Stage = ({ name, delay }: { name: string, delay: number }) => (
    <div className="bg-brand-blue text-white font-semibold text-xl md:text-2xl py-4 px-8 md:py-5 md:px-10 rounded-xl shadow-lg reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
        {name}
    </div>
);

const Arrow = ({ delay }: { delay: number }) => (
    <div className="flex items-center justify-center reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
        <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </div>
);

export const Slide06_Methodology = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-gray-50">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Metode Pengembangan</h1>
    <p className="mt-4 text-xl text-gray-600 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>Menggunakan Model SDLC Waterfall</p>
    
    <div className="mt-16 w-full flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <Stage name="Analisis" delay={400} />
        <Arrow delay={500} />
        <Stage name="Perancangan" delay={600} />
        <Arrow delay={700} />
        <Stage name="Implementasi" delay={800} />
        <Arrow delay={900} />
        <Stage name="Pengujian" delay={1000} />
    </div>

    <p className="mt-16 text-center text-xl max-w-4xl text-gray-700 reveal-item" style={{'--delay': '1100ms'} as React.CSSProperties}>
        Model Waterfall dipilih karena sifatnya yang <strong>sekuensial dan terstruktur</strong>, cocok untuk proyek dengan kebutuhan yang telah terdefinisi dengan jelas di awal, memastikan proses berjalan sistematis dan terdokumentasi dengan baik.
    </p>
  </div>
);