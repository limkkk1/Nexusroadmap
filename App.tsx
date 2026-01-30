import React from 'react';
import { Header } from './components/Header';
import { RoadmapItem } from './components/RoadmapItem';
import { INITIAL_ROADMAP_DATA } from './constants';

const App: React.FC = () => {
  // Since we removed the upload feature, we can use the constant data directly.
  const items = INITIAL_ROADMAP_DATA;

  return (
    <div className="min-h-screen bg-[#02040a] relative overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      
      {/* Background Ambient Glows - Enhanced */}
      <div className="fixed top-[-10%] left-[20%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[150px] -z-0 pointer-events-none animate-pulse duration-[10s]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[130px] -z-0 pointer-events-none" />

      {/* Central Beam Line - Hidden on Mobile, Visible on Desktop */}
      <div className="hidden md:block fixed top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent -z-0" />
      <div className="hidden md:block fixed top-0 bottom-0 left-1/2 w-[2px] bg-blue-400/20 blur-[2px] -z-0" />

      <main className="relative z-10 pb-48">
        <Header />

        <div className="max-w-[90rem] mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <RoadmapItem 
                key={item.id} 
                data={item} 
                index={index} 
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="text-center py-12 text-slate-500 text-sm relative z-10 border-t border-white/5">
         <p>© 2026 Nexus Protocol. 中文大使Ccool.</p>
      </footer>
    </div>
  );
};

export default App;
