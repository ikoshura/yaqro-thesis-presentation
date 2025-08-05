import React from 'react';

const TestResultRow = ({ id, scenario, result, status, delay }: { id: string, scenario: string, result: string, status: 'LULUS' | 'GAGAL', delay: number }) => (
    <tr className="border-b border-gray-200 reveal-item" style={{'--delay': `${delay}ms`} as React.CSSProperties}>
        <td className="py-3 px-4 font-mono">{id}</td>
        <td className="py-3 px-4">{scenario}</td>
        <td className="py-3 px-4 text-gray-600">{result}</td>
        <td className="py-3 px-4">
            <span className={`px-3 py-1 text-sm font-bold rounded-full ${status === 'LULUS' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status}
            </span>
        </td>
    </tr>
)

export const Slide09_Evaluation = () => (
  <div className="w-full h-full flex flex-col justify-center items-center text-black p-8 sm:p-16 bg-gray-50">
    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl reveal-item">Pengujian Fungsional (Black-Box)</h1>
    <p className="mt-4 text-xl text-gray-600 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>Memastikan setiap fungsi inti berjalan sesuai rancangan.</p>

    <div className="mt-8 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <table className="w-full text-left text-lg">
            <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                    <th className="py-3 px-4 font-semibold">ID</th>
                    <th className="py-3 px-4 font-semibold">Skenario Pengujian</th>
                    <th className="py-3 px-4 font-semibold">Hasil Aktual</th>
                    <th className="py-3 px-4 font-semibold">Status</th>
                </tr>
            </thead>
            <tbody>
                <TestResultRow id="T-01" scenario="Registrasi Akun Pengguna Baru" result="Sesuai harapan" status="LULUS" delay={400}/>
                <TestResultRow id="T-02" scenario="Login Pengguna Terdaftar" result="Sesuai harapan" status="LULUS" delay={500}/>
                <TestResultRow id="T-03" scenario="Persistensi Sesi Setelah Menutup Browser" result="Sesuai harapan" status="LULUS" delay={600}/>
                <TestResultRow id="T-04" scenario="Penyelesaian Pelajaran & Update Progres" result="Sesuai harapan" status="LULUS" delay={700}/>
            </tbody>
        </table>
    </div>
    <p className="mt-8 text-xl font-semibold text-center text-green-700 reveal-item" style={{'--delay': '800ms'} as React.CSSProperties}>
        Kesimpulan: Sistem stabil dan fungsionalitas inti dapat diandalkan.
    </p>
  </div>
);