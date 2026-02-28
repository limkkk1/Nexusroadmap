import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Users } from 'lucide-react';
import logo from './logo.png';

const MotionDiv = motion.div as any;

export const Header: React.FC = () => {
  return (
    <header className="pt-32 pb-40 px-6 max-w-7xl mx-auto text-center md:text-left relative z-10">
      <MotionDiv 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col gap-8"
      >
        <div className="w-28 h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)] mx-auto md:mx-0 overflow-hidden p-4 relative group">
            <img 
              src={logo}
              alt="Nexus Logo" 
              className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-thin text-white leading-[0.9] tracking-tight relative">
          Nexus <br />
          <span className="font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 relative">
            产品路线图
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto md:mx-0 leading-relaxed">
            可验证金融的第一层，
            <span className="text-blue-400">打造高性能金融应用。</span>
        </p>
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          
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
