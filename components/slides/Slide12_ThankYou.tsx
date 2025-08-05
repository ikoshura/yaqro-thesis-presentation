import React from 'react';

const FeedbackQuote = ({ text, delay, isPositive = true }: { text: string, delay: number, isPositive?: boolean }) => (
    <div className="relative pl-8 reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`absolute left-0 top-1 h-6 w-6 ${isPositive ? 'text-green-500' : 'text-yellow-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <p className="italic text-gray-700 text-base">"{text}"</p>
    </div>
);


export const Slide12_SusFeedback = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-12 bg-brand-beige">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item text-center">Hasil Akhir Kebergunaan (SUS)</h1>
    <p className="mt-2 text-xl text-gray-600 reveal-item text-center" style={{'--delay': '200ms'} as React.CSSProperties}>Skor akhir dan umpan balik kualitatif.</p>
    
    <div className="mt-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Column: SUS Score and Scale */}
      <div className="text-center reveal-item" style={{'--delay': '400ms'} as React.CSSProperties}>
        <p className="font-sans text-2xl text-gray-700">Skor Rata-rata SUS</p>
        <h1 className="font-display text-[8rem] sm:text-[10rem] leading-none tracking-tighter text-brand-red my-1">
          81.7
        </h1>
        <div className="inline-block bg-green-500 text-white font-bold text-3xl sm:text-4xl px-8 py-3 rounded-lg shadow-lg">
          EXCELLENT
        </div>
        
        {/* Adjective Rating Scale Visual */}
        <div className="w-full max-w-sm mt-10 mx-auto">
            <p className="font-semibold text-gray-700 mb-2">Skala Peringkat Adjektif</p>
            <div className="relative pt-4">
                <div className="flex h-3 mb-2 overflow-hidden rounded-full text-xs bg-gray-200 border border-gray-300">
                    <div style={{ width: '51%' }} className="bg-red-400" title="Poor"></div>
                    <div style={{ width: '17%' }} className="bg-yellow-400" title="OK"></div>
                    <div style={{ width: '12%' }} className="bg-lime-500" title="Good"></div>
                    <div style={{ width: '20%' }} className="bg-green-500" title="Excellent"></div>
                </div>
                <div className="flex text-xs text-gray-500 justify-between">
                    <span>Poor</span>
                    <span>OK</span>
                    <span>Good</span>
                    <span>Excellent</span>
                </div>
                <div className="absolute text-center" style={{ left: '81.7%', top: '0', transform: 'translateX(-50%)' }}>
<div className="-mt-2 flex flex-col items-center">
  <p className="text-xs font-bold text-brand-red">Yaqro</p>
  <div className="w-1 h-5 bg-brand-red mt-1 rounded" />
</div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Right Column: Feedback Cards */}
      <div className="flex flex-col gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 reveal-item" style={{'--delay': '600ms'} as React.CSSProperties}>
            <h3 className="font-display text-2xl mb-4 text-green-700">👍 Hal yang Disukai</h3>
            <div className="space-y-4">
                <FeedbackQuote
                    text="Fitur yang saya senangi adalah seperti quiz apabila benar mendapat nilai, sehingga jadi penasaran ingin mencapai level tinggi."
                    delay={700}
                    isPositive={true}
                />
                <FeedbackQuote
                    text="Bacaan dan cara penggunaan sangat jelas, sehingga memudahkan pengguna nya."
                    delay={800}
                    isPositive={true}
                />
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 reveal-item" style={{'--delay': '700ms'} as React.CSSProperties}>
            <h3 className="font-display text-2xl mb-4 text-yellow-700">💡 Saran Perbaikan</h3>
            <div className="space-y-4">
                <FeedbackQuote
                    text="Terdapat beberapa huruf yang tidak terbaca di HP."
                    delay={800}
                    isPositive={false}
                />
                 <FeedbackQuote
                    text="Karena aplikasi ini ditargetkan untuk anak yang sedang belajar iqra, diharapkan agar interface lebih menarik dan berwarna."
                    delay={900}
                    isPositive={false}
                />
            </div>
        </div>
      </div>
    </div>
  </div>
);