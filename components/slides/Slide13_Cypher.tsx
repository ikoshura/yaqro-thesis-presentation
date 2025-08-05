import React from 'react';

const ConclusionPoint = ({ text, delay }: { text: string, delay: number }) => (
    <div className="flex items-start text-left p-6 bg-white rounded-lg shadow-md border border-gray-200 reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mr-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <p className="text-xl text-gray-700">{text}</p>
    </div>
);

export const Slide13_Conclusion = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-gray-50">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mb-12 text-center reveal-item">Kesimpulan</h1>
    <div className="w-full max-w-4xl space-y-6">
      <ConclusionPoint
        text="Penelitian ini telah berhasil memenuhi tujuannya dengan mengembangkan 'Yaqro', sebuah platform pembelajaran Al-Qur'an berbasis web yang beroperasi secara fungsional."
        delay={200}
      />
      <ConclusionPoint
        text="Pendekatan gamifikasi yang diterapkan terbukti diterima dengan baik dan mengindikasikan peningkatan motivasi, divalidasi oleh masukan kualitatif yang positif dari responden."
        delay={400}
      />
      <ConclusionPoint
        text="Aplikasi mencapai tingkat kebergunaan 'Excellent' dengan skor rata-rata SUS sebesar 81.7, membuktikan bahwa Yaqro menyediakan pengalaman belajar yang efektif dan mudah digunakan."
        delay={600}
      />
    </div>
  </div>
);