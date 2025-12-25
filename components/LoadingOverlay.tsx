import React, { useEffect, useState } from 'react';
import { Loader2, Film, Sparkles, Cpu } from 'lucide-react';

const MESSAGES = [
  "Initializing neural rendering engine...",
  "Analyzing image structure and depth...",
  "Injecting cybernetic aesthetic...",
  "Rendering 3D light paths...",
  "Compositing neon overlays...",
  "Optimizing temporal coherence...",
  "Polishing final pixels...",
  "Almost there, staying cool..."
];

interface LoadingOverlayProps {
  isVisible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative flex flex-col items-center max-w-md w-full p-8 text-center">
        
        {/* Animated Icon Cluster */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-brand-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 border-4 border-brand-400/50 rounded-full animate-spin-slow border-t-transparent reverse-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-brand-400">
            <Film className="w-8 h-8 animate-pulse" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-neon-purple animate-bounce" />
          <Cpu className="absolute -bottom-2 -left-2 w-6 h-6 text-neon-blue animate-pulse" />
        </div>

        <h3 className="text-2xl font-mono font-bold text-white mb-2 tracking-wider">
          GENERATING VEO
        </h3>
        
        <p className="text-brand-200 font-sans text-lg h-8 transition-all duration-500 ease-in-out">
          {MESSAGES[messageIndex]}
        </p>

        <div className="w-full h-1 bg-gray-800 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-600 via-neon-blue to-brand-600 w-1/2 animate-[shimmer_2s_infinite_linear] relative">
             <div className="absolute inset-0 bg-white/20 w-full h-full skew-x-12"></div>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500 max-w-xs">
          This process typically takes 1-2 minutes. Please do not close this tab.
        </p>
      </div>
    </div>
  );
};