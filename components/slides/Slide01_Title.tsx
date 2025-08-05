import React from 'react';

const TelkomLogo = ({ className = "h-32 w-auto" }: { className?: string }) => (
    <svg
        viewBox="0 0 93.828346 136.69798"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <style type="text/css">
                {`
                    .fil0 {fill:none}
                    .fil1 {fill:#5E5F60}
                    .fil2 {fill:#838587}
                    .fil3 {fill:#B12D30}
                    .fil4 {fill:#EC3237}
                `}
            </style>
        </defs>
        <g transform="translate(-319.3903,-58.736666)">
            <g
                transform="matrix(0.0254,0,0,0.0254,-95.033426,-1.4997)"
                clipRule="evenodd"
                fillRule="evenodd"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
            >
                <g>
                    <rect className="fil0" width="15748" height="11811" x="0" y="0" />
                    <g>
                        <g transform="translate(16511.921,6437.4671)">
                            <path
                                className="fil2"
                                d="m 2288.4883,-476.9567 2,1673 c 23,-2 161,-69 189,-84 185,-94 335,-204 476,-344 282,-282 485,-671 530,-1110 18,-171 10,-362 10,-538 0,-182 0,-365 0,-547 0,-91 1,-182 1,-273 0,-89 4,-188 -1,-274 -107,-6 -230,-1 -339,-1 -113,0 -226,0 -339,0 -110,0 -211,-8 -306,33 -280,121 -225,504 -225,793 0,78 -5,646 2,672 z"
                            />
                            <path
                                className="fil2"
                                d="m 1010.4883,1196.0433 3,-1657 c 6,-20 1,-919 1,-1023 0,-109 -10,-200 -52,-288 -102,-214 -291,-203 -479,-203 -113,0 -226,0 -338,0 -107,0 -235,-6 -339,1 -5,86 -1,186 -1,274 v 820 c 0,381 -11,644 114,981 142,383 410,708 729,912 57,36 311,180 362,183 z"
                            />
                            <path
                                className="fil3"
                                d="m 1645.4883,-3724.9567 c 8,31 3,505 3,579 0,195 0,390 0,584 -9,7 4,5 -9,0 l 8,16 c 14,-5 54,-62 67,-75 26,-28 49,-48 73,-73 22,-22 52,-46 79,-65 412,-297 892,-174 1376,-219 36,-3 244,-34 252,-33 l 2,-1055 c -37,3 -82,13 -120,18 -348,42 -583,24 -918,41 -612,30 -757,275 -813,282 z"
                            />
                            <path
                                className="fil4"
                                d="m 1639.4883,-2561.9567 c 13,5 0,7 9,0 0,-194 0,-389 0,-584 0,-74 5,-548 -3,-579 -15,-20 -125,-94 -156,-113 -350,-215 -777,-164 -1181,-181 -86,-3 -173,-8 -257,-16 -41,-3 -82,-8 -122,-13 -40,-5 -86,-15 -124,-17 v 1054 c 10,-1 214,30 250,33 443,42 874,-61 1275,153 187,99 293,254 309,263 z"
                            />
                            <path
                                className="fil1"
                                d="m 1013.4883,-460.9567 -3,1657 c 11,10 17,9 35,16 308,107 628,133 951,70 53,-10 105,-23 155,-37 l 108,-34 c 18,-7 22,-5 31,-15 l -2,-1673 c -1,1 -1,3 -1,3 -6,18 -13,78 -27,126 -11,39 -26,75 -43,108 -211,408 -773,474 -1070,100 -21,-27 -41,-57 -59,-92 -28,-51 -49,-109 -61,-168 -3,-18 -2,-50 -14,-61 z"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);


export const Slide01_Title = () => (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-12 lg:p-16 bg-white text-black gap-8">
        
        {/* Left Column: Textual Information */}
        <div className="md:w-3/5 lg:w-7/12 flex flex-col justify-between text-left h-full w-full">
            
            {/* Main Title Block */}
            <div className="reveal-item" style={{'--delay': '0ms'} as React.CSSProperties}>
                <div className="border-l-4 border-brand-red pl-4">
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
                        PENGEMBANGAN APLIKASI BERBASIS WEB UNTUK<br />
                        PEMBELAJARAN AL-QUR'AN SECARA INTERAKTIF<br />
                        DENGAN INTEGRASI GAMIFIKASI
                    </h1>
                    <h2 className="font-sans text-lg sm:text-xl lg:text-2xl font-medium text-gray-500 mt-4 italic leading-snug">
                        DEVELOPMENT OF A WEB-BASED APPLICATION<br />
                        FOR INTERACTIVE QURAN LEARNING<br />
                        WITH GAMIFICATION INTEGRATION
                    </h2>
                </div>
            </div>

            {/* Author Info */}
            <div className="my-8 md:my-0 reveal-item" style={{'--delay': '200ms'} as React.CSSProperties}>
                <p className="font-sans text-lg text-gray-600">Disusun oleh,</p>
                <h3 className="font-sans text-3xl md:text-4xl font-bold text-black mt-1">ABRAR ZHARIFAN SYAH</h3>
                <p className="font-sans text-2xl md:text-3xl font-semibold text-brand-red">7708213023</p>
            </div>

            {/* University Info */}
            <div className="text-left text-sm font-semibold text-gray-500 reveal-item" style={{'--delay': '400ms'} as React.CSSProperties}>
                <p>PROGRAM STUDI D4 TEKNOLOGI REKAYASA MULTIMEDIA</p>
                <p>FAKULTAS ILMU TERAPAN - UNIVERSITAS TELKOM</p>
                <p>2025</p>
            </div>
        </div>

        {/* Right Column: Logo */}
        <div className="md:w-2/5 lg:w-5/12 flex items-center justify-center h-full w-full reveal-item" style={{'--delay': '100ms'} as React.CSSProperties}>
            <TelkomLogo className="h-48 md:h-64 lg:h-80 w-auto text-gray-800"/>
        </div>
    </div>
);