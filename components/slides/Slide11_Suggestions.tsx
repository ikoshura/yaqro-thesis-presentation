import React from 'react';

const CalculationStep = ({ number, title, formula, description, delay }) => (
    <div className="reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
        <div className="flex items-center">
            <div className="flex-shrink-0 bg-brand-blue text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">{number}</div>
            <h3 className="ml-4 font-display text-2xl">{title}</h3>
        </div>
        <div className="ml-12 mt-2 pl-1 border-l-2 border-gray-300">
            <p className="font-mono text-lg bg-gray-100 inline-block px-2 py-1 rounded">{formula}</p>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);


export const Slide11_SusCalculation = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-white">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Proses Perhitungan Skor SUS</h1>
    <p className="mt-4 text-xl text-gray-600 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}></p>
    
    <div className="mt-10 w-full max-w-6xl">
        <div className="space-y-6">
            <CalculationStep
                number="1"
                title="Skor Pertanyaan Positif"
                formula="Skor Kontribusi = Skor Pilihan - 1"
                description="Untuk pertanyaan ganjil (1, 3, 5, 7, 9)."
                delay={400}
            />
            <CalculationStep
                number="2"
                title="Skor Pertanyaan Negatif"
                formula="Skor Kontribusi = 5 - Skor Pilihan"
                description="Untuk pertanyaan genap (2, 4, 6, 8, 10)."
                delay={600}
            />
            <CalculationStep
                number="3"
                title="Jumlahkan Skor Kontribusi"
                formula="Total Skor = Σ (Skor Kontribusi 1-10)"
                description="Setiap responden akan memiliki total skor antara 0 dan 40."
                delay={800}
            />
            <CalculationStep
                number="4"
                title="Konversi ke Skala 100"
                formula="Skor Akhir SUS = Total Skor × 2.5"
                description="Mengalikan total skor dengan 2.5 untuk mendapatkan skor akhir."
                delay={1000}
            />
        </div>
        <div className="mt-8 text-center p-4 bg-gray-100 rounded-lg border-2 border-gray-200 reveal-item" style={{'--delay': '1200ms'} as React.CSSProperties}>
          <p className="font-semibold text-xl">Skor akhir dari 18 responden dirata-ratakan untuk mendapatkan skor kebergunaan akhir aplikasi.</p>
        </div>
    </div>
  </div>
);