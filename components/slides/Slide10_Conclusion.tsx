import React from 'react';

const susData = [
    { id: 'R-01', scores: [5, 1, 5, 1, 5, 1, 5, 1, 5, 1] },
    { id: 'R-02', scores: [5, 5, 5, 1, 5, 1, 5, 1, 4, 3] },
    { id: 'R-03', scores: [5, 2, 5, 1, 5, 1, 4, 1, 5, 1] },
    { id: 'R-04', scores: [5, 1, 5, 1, 5, 1, 5, 1, 5, 1] },
    { id: 'R-05', scores: [5, 1, 5, 1, 5, 1, 5, 1, 5, 1] },
    { id: 'R-06', scores: [4, 2, 4, 1, 4, 3, 4, 2, 4, 2] },
    { id: 'R-07', scores: [5, 2, 5, 1, 5, 1, 4, 1, 5, 1] },
    { id: 'R-08', scores: [5, 2, 5, 1, 5, 1, 5, 1, 5, 1] },
    { id: 'R-09', scores: [4, 1, 4, 1, 4, 1, 4, 1, 4, 1] },
    { id: 'R-10', scores: [4, 2, 4, 2, 4, 2, 4, 2, 4, 3] },
    { id: 'R-11', scores: [5, 1, 5, 1, 5, 2, 5, 1, 5, 2] },
    { id: 'R-12', scores: [3, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
    { id: 'R-13', scores: [5, 1, 5, 3, 5, 1, 5, 1, 5, 4] },
    { id: 'R-14', scores: [5, 1, 5, 1, 5, 1, 5, 1, 5, 5] },
    { id: 'R-15', scores: [5, 5, 5, 2, 5, 1, 5, 1, 1, 1] },
    { id: 'R-16', scores: [4, 2, 4, 1, 4, 2, 4, 1, 4, 2] },
    { id: 'R-17', scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
    { id: 'R-18', scores: [2, 2, 3, 3, 3, 2, 4, 2, 3, 2] },
];

export const Slide10_SusDataTable = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-4 sm:p-8 bg-white">
    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl reveal-item text-center">Data Mentah Kuesioner SUS</h1>
    <p className="mt-2 text-lg text-gray-600 reveal-item text-center" style={{'--delay': '200ms'} as React.CSSProperties}>Jawaban Skala Likert (1-5) dari 18 Responden</p>

    <div className="mt-4 w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 reveal-item" style={{'--delay': '400ms'} as React.CSSProperties}>
      <div className="h-[calc(100vh-22rem)] overflow-y-auto minimal-scrollbar">
        <table className="w-full text-center text-sm md:text-base min-w-[600px]">
            <thead className="bg-gray-100 border-b-2 border-gray-300 sticky top-0 z-10">
                <tr>
                    <th className="py-2 px-3 font-semibold whitespace-nowrap">Responden</th>
                    {[...Array(10)].map((_, i) => (
                        <th key={i} className={`py-2 px-3 font-semibold ${((i + 1) % 2 === 0) ? 'bg-red-50' : 'bg-green-50'}`}>Q{i + 1}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {susData.map((respondent, respIndex) => (
                    <tr key={respIndex} className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-semibold">{respondent.id}</td>
                        {respondent.scores.map((score, scoreIndex) => (
                            <td key={scoreIndex} className="py-2 px-3 font-mono">{score}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  </div>
);