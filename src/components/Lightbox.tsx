import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  categoryTitle?: string;
}

export default function Lightbox({ images, currentIndex, onClose, categoryTitle }: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);
  const [isLoading, setIsLoading] = useState(true);

  const goNext = useCallback(() => {
    setIsLoading(true);
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIsLoading(true);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  // Touch support for mobile swiping
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;

    // Horizontal swipe threshold
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  return (
    <div
      className="lightbox-overlay bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="फोटो गॅलरी"
    >
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 z-110 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-white">
          {categoryTitle && (
            <h3 className="text-sm sm:text-base font-semibold text-gold-light">{categoryTitle}</h3>
          )}
          <p className="text-xs text-white/70">
            फोटो {index + 1} पैकी {images.length}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          aria-label="गॅलरी बंद करा"
        >
          <X size={24} />
        </button>
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-110 text-white/80 hover:text-white p-3 sm:p-4 bg-black/40 hover:bg-black/70 rounded-full transition-all cursor-pointer hover:scale-110"
        aria-label="मागील फोटो"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-110 text-white/80 hover:text-white p-3 sm:p-4 bg-black/40 hover:bg-black/70 rounded-full transition-all cursor-pointer hover:scale-110"
        aria-label="पुढील फोटो"
      >
        <ChevronRight size={28} />
      </button>

      {/* Active Image container */}
      <div
        className="relative max-w-[92vw] max-h-[82vh] flex items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
          </div>
        )}
        <img
          key={images[index]}
          src={images[index]}
          alt={`सजावट फोटो ${index + 1}`}
          className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300"
          style={{ opacity: isLoading ? 0 : 1 }}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          draggable={false}
        />
      </div>

      {/* Bottom Counter & Nav Hint */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs sm:text-sm bg-black/60 px-5 py-2 rounded-full backdrop-blur-xs flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-gold font-medium">{index + 1}</span>
        <span className="text-white/40">/</span>
        <span>{images.length}</span>
        <span className="hidden sm:inline text-white/40 border-l border-white/20 pl-3">
          बदलण्यासाठी बाण की (← / →) किंवा स्वाइप करा
        </span>
      </div>
    </div>
  );
}
