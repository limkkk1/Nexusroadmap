import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Users, Hexagon } from 'lucide-react';

// Cast motion.div to any to avoid TypeScript errors with specific prop combinations
const MotionDiv = motion.div as any;

export const Header: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="pt-32 pb-40 px-6 max-w-7xl mx-auto text-center md:text-left relative z-10">
      <MotionDiv 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col gap-8"
      >
        {/* Logo Container - Tries to load /logo.png, falls back to Hexagon icon on error */}
        <div className="w-28 h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)] mx-auto md:mx-0 overflow-hidden p-4 relative group">
            {!logoError ? (
              <img 
                src="/logo.png"
                alt="Nexus Logo" 
                onError={() => setLogoError(true)}
                className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                 <Hexagon strokeWidth={1.5} className="w-16 h-16 text-blue-400 opacity-90 group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full" />
              </div>
            )}
        </div>
        
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-thin text-white leading-[0.9] tracking-tight relative">
          Nexus <br />
          <span className="font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 relative">
            产品路线图
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto md:mx-0 leading-relaxed">
            构建下一代可验证金融基础设施，
            <span className="text-blue-400">重新定义未来的信任基石。</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          
          {/* Button 1: Nexus.xyz */}
          <a 
            href="https://nexus.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-[#0a1020]/80 border border-blue-500/30 flex items-center gap-3 overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Globe className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors relative z-10" />
            <span className="text-blue-100 font-light tracking-wide group-hover:text-white transition-colors relative z-10">关于 Nexus</span>
          </a>

          {/* Button 2: Discord */}
          <a 
            href="https://discord.com/invite/nexus-xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-[#0a1020]/80 border border-blue-500/30 flex items-center gap-3 overflow-hidden transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            <div className="absolute inset-0 bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <MessageCircle className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors relative z-10" />
            <span className="text-blue-100 font-light tracking-wide group-hover:text-white transition-colors relative z-10">加入 Discord</span>
          </a>

          {/* Button 3: Chinese Community */}
          <a 
            href="https://www.nexushelp.xyz/about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-[#0a1020]/80 border border-blue-500/30 flex items-center gap-3 overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Users className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors relative z-10" />
            <span className="text-blue-100 font-light tracking-wide group-hover:text-white transition-colors relative z-10">访问中文社区</span>
          </a>

        </div>

      </MotionDiv>
    </header>
  );
};