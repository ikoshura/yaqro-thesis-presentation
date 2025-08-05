
import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './components/slides';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);
  const totalSlides = 16; 

  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(current => current + 1);
    }
  }, [currentSlide, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(current => current + 1);
    }
  }, [currentSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (event.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [goToNextSlide, goToPrevSlide, toggleFullscreen]);

  const progress = totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  return (
    <main className="relative w-screen h-screen font-sans select-none overflow-hidden bg-white">
      <div id="slides-wrapper" className="relative w-full h-full overflow-hidden">
        <div 
          id="slides-container" 
          className="flex w-full h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((SlideComponent, index) => (
            <div key={index} className={`slide-wrapper ${index === currentSlide ? 'is-active' : ''}`}>
              <SlideComponent />
            </div>
          ))}
        </div>
      </div>

      {/* UI Controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
        <button 
          id="fullscreen-btn"
          onClick={toggleFullscreen}
          className="p-2 bg-black/5 rounded-full text-gray-600 hover:bg-black/10 transition-colors duration-150"
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M4 12 L12 12 12 4 M20 4 L20 12 28 12 M4 20 L12 20 12 28 M28 20 L20 20 20 28" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28" />
            </svg>
          )}
        </button>

        <button 
          id="prev-btn" 
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="p-2 bg-black/5 rounded-full text-gray-600 hover:bg-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150" 
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        
        <div id="slide-counter" className="text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg bg-black/5">
          {currentSlide + 1} / {totalSlides}
        </div>

        <button 
          id="next-btn" 
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 bg-black/5 rounded-full text-gray-600 hover:bg-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
        <div 
          id="progress-bar" 
          className="h-full bg-brand-red"
          style={{ 
            width: `${progress}%`,
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </div>
    </main>
  );
};

export default App;
