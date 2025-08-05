import React from 'react';

const SuggestionCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-brand-blue text-center reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
    <div className="text-brand-blue text-5xl mb-4 flex justify-center">{icon}</div>
    <h3 className="font-display text-2xl mb-2">{title}</h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
);

export const Slide14_Suggestions = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-white">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mb-12 text-center reveal-item">Saran Pengembangan Selanjutnya</h1>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      <SuggestionCard 
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 14h6m-3-4v8m-7 4h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
        title="Fitur Interaktif"
        description="Menambahkan fitur sosial seperti papan peringkat (leaderboard) untuk meningkatkan kompetisi sehat dan keterlibatan jangka panjang."
        delay={200}
      />
      <SuggestionCard 
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
        title="Tindak Lanjut Umpan Balik"
        description="Menindaklanjuti umpan balik teknis dari pengguna, seperti optimasi font dan penambahan kontrol kecepatan audio."
        delay={400}
      />
      <SuggestionCard 
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        title="Content Management System"
        description="Membangun CMS terpisah untuk memberi kemandirian bagi pengelola dalam memperbarui dan menambah materi pembelajaran."
        delay={600}
      />
    </div>
  </div>
);