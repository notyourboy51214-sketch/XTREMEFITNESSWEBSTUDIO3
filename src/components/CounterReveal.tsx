import React, { useEffect, useRef, useState } from 'react';

interface CounterRevealProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CounterReveal: React.FC<CounterRevealProps> = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease-out expo curve for athletic precision feel
              const easeOut = 1 - Math.pow(2, -10 * progress);
              const current = easeOut * value;
              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};
