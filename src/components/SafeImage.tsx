import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbacks?: string[];
  alt: string;
  aspectRatio?: string;
  minHeight?: string | number;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbacks = [],
  alt,
  className = '',
  style,
  aspectRatio,
  minHeight,
  containerClassName = '',
  loading = 'lazy',
  ...rest
}) => {
  // Combine primary src with fallbacks without duplicates
  const candidateList = React.useMemo(() => {
    const list = [src, ...fallbacks].filter(Boolean);
    return Array.from(new Set(list));
  }, [src, fallbacks]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state if primary src changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const currentSrc = candidateList[currentIndex] || src;

  const handleError = () => {
    if (currentIndex < candidateList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(minHeight ? { minHeight } : {}),
  };

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${containerClassName}`} style={containerStyle}>
      {/* Subtle loading placeholder skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={handleError}
        onLoad={handleLoad}
        style={{
          ...style,
          transition: 'opacity 0.4s ease-in-out',
          opacity: isLoaded ? 1 : 0,
        }}
        className={`w-full h-full object-cover ${className}`}
        {...rest}
      />
    </div>
  );
};
