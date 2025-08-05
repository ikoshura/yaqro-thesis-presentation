import React from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }: { icon: React.ReactNode, title: string, description: string, delay?: number }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
    <div className="text-brand-red text-5xl mb-4 flex justify-center">{icon}</div>
    <h3 className="font-display text-2xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Slide04_Problem = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-brand-beige">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Solusi: YAQRO</h1>
    <h2 className="font-sans text-2xl text-gray-700 mt-2 mb-10 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>Platform Pembelajaran Al-Qur'an Interaktif</h2>
    
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard 
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
        title="Struktur Terarah"
        description="Kurikulum setara metode Iqro disajikan dalam alur belajar yang jelas dan bertahap untuk memastikan pemahaman fundamental."
        delay={400}
      />
      <FeatureCard 
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.11c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
        title="Gamifikasi"
        description="Integrasi poin (XP), daily streaks, dan lencana pencapaian untuk mengubah proses belajar menjadi adiktif dan memuaskan."
        delay={600}
      />
      <FeatureCard 
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18" /></svg>}
        title="Aksesibilitas"
        description="Aplikasi berbasis web yang dapat diakses dari perangkat apa saja dengan browser, tanpa perlu instalasi."
        delay={800}
      />
    </div>
  </div>
);