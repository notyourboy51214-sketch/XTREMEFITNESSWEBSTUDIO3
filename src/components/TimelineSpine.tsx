import React from 'react';

interface TimelineNodeProps {
  time?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  isLast?: boolean;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  time,
  title,
  subtitle,
  children,
  align = 'left',
  isLast = false,
}) => {
  return (
    <div className="relative pl-8 md:pl-12 pb-12 group">
      {/* Vertical Spine Line */}
      {!isLast && (
        <div
          className="absolute left-[11px] md:left-[15px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#064E3B] via-[#94A3B8] to-[#E2E8F0] transition-colors"
          aria-hidden="true"
        />
      )}

      {/* Node Pip */}
      <div
        className="absolute left-0 md:left-1 top-1.5 w-6 h-6 rounded-full bg-[#FAF6F0] border-2 border-[#064E3B] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-[#064E3B]" />
      </div>

      {/* Content Block */}
      <div className="space-y-2">
        {time && (
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#064E3B] font-semibold">
            <span>{time}</span>
            <span className="text-[#94A3B8]">·</span>
            <span className="text-[#475569]">24-Hour Rhythm</span>
          </div>
        )}
        <h3 className="font-editorial text-2xl md:text-3xl text-[#2A211D] tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-[#594D46] font-medium">{subtitle}</p>
        )}
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};
