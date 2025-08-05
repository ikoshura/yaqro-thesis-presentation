import React from 'react';

export const Slide09_LiveDemo = () => (
  // This div is the main container for the browser mockup.
  // It will take up the full width and height available within the parent slide-wrapper.
  // The 'reveal-item' class handles the transition animation.
  <div className="w-full h-full bg-white shadow-2xl flex flex-col overflow-hidden border-2 border-gray-300 rounded-xl reveal-item">
    {/* Browser Header */}
    <div className="flex-shrink-0 bg-gray-100 border-b-2 border-gray-300 px-4 py-2 flex items-center gap-2">
      {/* Window Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-red-600/50"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-yellow-600/50"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-green-500 border border-green-600/50"></div>
      </div>
      {/* URL Bar */}
      <div className="flex-grow bg-white text-gray-800 text-sm rounded-md px-3 sm:px-4 py-1.5 text-center mx-4 border border-gray-300">
        <a href="https://yaqro.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono select-all hover:underline" aria-label="Open Yaqro in a new tab">
          https://yaqro.vercel.app
        </a>
      </div>
      {/* Action Icons */}
      <div className="flex items-center gap-3 text-gray-500">
        <button
          onClick={() => {
            const iframe = document.querySelector('iframe[title="Yaqro Live Demo"]');
            if (iframe) (iframe as HTMLIFrameElement).src += '';
          }}
          className="p-1 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
          aria-label="Refresh demo"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M939.456 256.224c-16.672-5.984-34.976 2.72-40.896 19.36l-24.768 69.344c-28.992-65.312-74.784-122.72-133.088-165.92-185.376-137.28-449.408-99.776-588.384 83.648-67.264 88.768-95.616 198.176-79.84 308.032 15.84 110.304 74.208 207.776 164.352 274.496 75.424 55.808 163.808 82.752 251.456 82.752 128.032 0 254.56-57.44 336.992-166.272 36.48-48.128 61.472-102.08 74.208-160.416 3.776-17.248-7.136-34.304-24.416-38.08-17.216-3.712-34.304 7.104-38.08 24.416-10.784 49.184-31.872 94.752-62.72 135.456-117.888 155.52-341.92 187.232-499.392 70.72-76.288-56.48-125.664-138.912-139.072-232.16-13.344-92.8 10.656-185.248 67.488-260.288 117.856-155.584 341.792-187.424 499.328-70.848 57.024 42.24 99.84 100.608 122.976 166.624l-109.984-42.944c-16.416-6.368-35.008 1.696-41.44 18.176-6.432 16.48 1.728 35.008 18.176 41.44l161.856 63.2c3.808 1.472 7.744 2.208 11.616 2.208 0.544 0 1.024-0.192 1.568-0.224 1.216 0.128 2.432 0.64 3.648 0.64 13.12 0 25.472-8.16 30.112-21.248l57.632-161.184c5.984-16.672-2.688-35.008-19.328-40.928z" />
          </svg>
        </button>
        <a 
          href="https://yaqro.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Open in new tab" 
          className="p-1 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
          aria-label="Open in new tab"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
           </svg>
        </a>
      </div>
    </div>

    {/* Iframe content */}
    <div className="flex-grow w-full h-full bg-white">
      <iframe
        src="https://yaqro.vercel.app/"
        className="w-full h-full border-0"
        title="Yaqro Live Demo"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  </div>
);