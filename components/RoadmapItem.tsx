import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RoadmapItemData } from '../types';

// Cast motion.div to any to avoid TypeScript errors with specific prop combinations
const MotionDiv = motion.div as any;

interface Props {
  data: RoadmapItemData;
  index: number;
  isLast: boolean;
}

export const RoadmapItem: React.FC<Props> = ({ data, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row justify-between items-center w-full mb-24 md:mb-32 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Connector Line (Desktop Only) - Connecting dots */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] bg-transparent" />

      {/* Content Side */}
      <MotionDiv 
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`w-full md:w-5/12 z-10 pl-16 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'} text-left mb-12 md:mb-0`}
      >
        <div className="flex flex-col gap-3 items-start">
          {/* Date */}
          <span className="font-mono text-blue-400 tracking-wider uppercase text-lg md:text-xl font-medium self-start">
            {data.date}
          </span>

          {/* Title */}
          <h3 className="text-4xl md:text-6xl font-thin text-white mb-6 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-light border-l-2 border-blue-500/30 pl-4">
            {data.description}
          </p>
          
          {/* Points */}
          <ul className="space-y-4 flex flex-col items-start">
            {data.points.map((point, i) => (
              <li key={i} className="flex gap-4 text-slate-400 text-base md:text-lg font-light items-start flex-row">
                <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionDiv>

      {/* Center Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 top-0 md:top-2">
         <MotionDiv
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
         >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            {/* Core Node */}
            <div className="w-6 h-6 bg-[#02040a] border-2 border-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] z-20 relative flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
            </div>
            {/* Ping Animation */}
            <div className="absolute inset-0 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-40 duration-[3s]"></div>
         </MotionDiv>
      </div>

      {/* Empty Spacer for Flex Balance */}
      <div className="w-full md:w-5/12" />
      
    </div>
  );
};