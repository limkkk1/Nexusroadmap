import React, { useEffect, useState } from 'react';
import { VeoStudio } from './components/VeoStudio';
import { ExternalLink, Key } from 'lucide-react';

export default function App() {
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    if (window.aistudio && window.aistudio.hasSelectedApiKey) {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      setHasApiKey(hasKey);
    }
  };

  const handleConnect = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
      // Re-check after dialog interaction
      // There is a race condition mentioned in instructions, so we optimistically assume success if no error thrown immediately,
      // but a real check is better if the API allowed an event listener. 
      // We'll retry the check after a short delay.
      setTimeout(checkApiKey, 500); 
      setTimeout(checkApiKey, 2000); 
    } else {
      alert("AI Studio environment not detected.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-500/30">
      
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.3)]">
              <span className="font-bold text-black text-lg">N</span>
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">Nexus<span className="text-brand-400">Animator</span></span>
          </div>
          
          <div className="flex items-center space-x-4">
             {!hasApiKey && (
               <button 
                 onClick={handleConnect}
                 className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-300 border border-brand-900/50 bg-brand-900/10 rounded-full hover:bg-brand-900/30 transition-colors"
               >
                 <Key size={14} />
                 Connect API Key
               </button>
             )}
             <a 
               href="https://ai.google.dev/gemini-api/docs/billing" 
               target="_blank" 
               rel="noreferrer"
               className="text-gray-500 hover:text-gray-300 transition-colors"
               title="Billing Info"
             >
               <ExternalLink size={18} />
             </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Background Ambient Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-900/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>
        
        <div className="relative z-10 py-12">
          <VeoStudio isConnected={hasApiKey} onConnect={handleConnect} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-gray-600 text-sm font-mono">
             Powered by Google Gemini Veo 3.1 • Optimized for Nexus Roadmaps
           </p>
        </div>
      </footer>

    </div>
  );
}