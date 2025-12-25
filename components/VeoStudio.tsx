import React, { useState, useRef, useCallback } from 'react';
import { Upload, Play, AlertCircle, Video, Settings2, Download, RefreshCw, ExternalLink } from 'lucide-react';
import { generateVeoVideo } from '../services/gemini';
import { VideoGenerationState, AspectRatio } from '../types';
import { LoadingOverlay } from './LoadingOverlay';

interface VeoStudioProps {
  isConnected: boolean;
  onConnect: () => void;
}

export const VeoStudio: React.FC<VeoStudioProps> = ({ isConnected, onConnect }) => {
  const [state, setState] = useState<VideoGenerationState>({ status: 'idle' });
  const [preview, setPreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMime, setImageMime] = useState<string>('image/jpeg');
  
  // Pre-configured specific prompt for the Roadmap request
  const [prompt, setPrompt] = useState<string>(
    "A cinematic high-tech 3D visualization of this project roadmap. Glowing neon data lines connecting milestones, holographic text elements floating, cybernetic interface overlays, deep depth of field, slow camera pan, cyberpunk aesthetic, 8k resolution, highly detailed."
  );
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("File too large. Please upload an image under 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setPreview(result);
      // Extract base64 data only
      const base64Data = result.split(',')[1];
      setImageBase64(base64Data);
      setImageMime(file.type);
      setState({ status: 'idle' });
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!isConnected) {
      onConnect();
      return;
    }
    if (!imageBase64) return;

    setState({ status: 'generating' });

    try {
      const videoUrl = await generateVeoVideo(imageBase64, prompt, aspectRatio, imageMime);
      setState({ status: 'completed', videoUrl });
    } catch (error: any) {
      console.error(error);
      setState({ 
        status: 'error', 
        error: error.message || "Failed to generate video. Please try again." 
      });
    }
  };

  const handleReset = () => {
    setPreview(null);
    setImageBase64(null);
    setState({ status: 'idle' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <LoadingOverlay isVisible={state.status === 'generating'} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT PANEL: Inputs */}
        <div className="space-y-6 animate-in slide-in-from-left duration-500">
          
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-neon-blue uppercase">
              Nexus Roadmap Animator
            </h1>
            <p className="text-gray-400">
              Upload a screenshot of the <a href="https://roadmap.nexushelp.xyz/" target="_blank" className="text-brand-300 hover:underline">Nexus Roadmap</a> to generate a cinematic tech video.
            </p>
          </div>

          {/* Upload Zone */}
          <div className="glass-panel rounded-2xl p-6 border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-20 group-hover:opacity-50 transition-opacity"></div>
            
            {!preview ? (
              <div className="flex flex-col h-64 gap-4">
                 <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 border-2 border-dashed border-gray-700 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-brand-500 hover:bg-brand-900/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                    <Upload className="text-gray-400 group-hover:text-brand-300 transition-colors" size={20} />
                  </div>
                  <span className="text-gray-300 font-medium">Upload Roadmap Screenshot</span>
                  <span className="text-gray-500 text-xs mt-1">JPG/PNG (Max 10MB)</span>
                </div>
                <a 
                  href="https://roadmap.nexushelp.xyz/" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-brand-300 transition-all text-sm"
                >
                  <ExternalLink size={14} />
                  Open roadmap.nexushelp.xyz to take screenshot
                </a>
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden h-64 border border-gray-700 bg-black/50">
                <img src={preview} alt="Source" className="w-full h-full object-contain" />
                <button 
                  onClick={handleReset}
                  className="absolute top-2 right-2 p-2 bg-black/70 hover:bg-red-900/80 text-white rounded-full backdrop-blur-sm transition-colors border border-white/10"
                  title="Remove image"
                >
                  <RefreshCw size={16} />
                </button>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/png, image/jpeg, image/webp" 
              onChange={handleFileChange}
            />
          </div>

          {/* Controls */}
          <div className="glass-panel rounded-2xl p-6 border border-gray-800 space-y-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2 text-brand-300">
                <Settings2 size={20} />
                <span className="font-mono uppercase tracking-wider text-sm">Style Settings</span>
              </div>
              <span className="text-xs text-brand-500/70 font-mono">PRE-CONFIGURED FOR TECH STYLE</span>
            </div>

            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wide mb-2">Animation Prompt</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-black/40 border border-gray-700/50 rounded-lg p-3 text-brand-100/90 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm h-24 resize-none font-mono"
                placeholder="Describe the motion and style..."
              />
            </div>

            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wide mb-3">Format</label>
              <div className="flex gap-4">
                {(['16:9', '9:16'] as AspectRatio[]).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      aspectRatio === ratio 
                        ? 'border-brand-500 bg-brand-500/10 text-brand-300 shadow-[0_0_15px_rgba(20,184,166,0.15)]' 
                        : 'border-gray-700 bg-gray-900/50 text-gray-500 hover:border-gray-600'
                    }`}
                  >
                    {ratio === '16:9' ? 'Landscape (Desktop)' : 'Portrait (Mobile)'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!imageBase64 || state.status === 'generating'}
              className={`w-full py-4 rounded-lg font-bold text-lg tracking-wide shadow-lg transition-all transform active:scale-[0.99] ${
                !imageBase64 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-brand-900/20 hover:shadow-brand-500/20'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Video size={20} />
                <span>{isConnected ? 'ANIMATE ROADMAP' : 'CONNECT & ANIMATE'}</span>
              </div>
            </button>
            
            {!isConnected && imageBase64 && (
              <p className="text-xs text-center text-yellow-500/80 mt-2">
                * Requires Google Account authentication for Veo access
              </p>
            )}
          </div>

          {/* Error Message */}
          {state.status === 'error' && (
            <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg flex items-start space-x-3 text-red-200 animate-pulse">
              <AlertCircle className="flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm">{state.error}</p>
            </div>
          )}
        </div>

        {/* RIGHT PANEL: Output */}
        <div className="glass-panel rounded-2xl border border-gray-800 p-1 flex flex-col h-full min-h-[400px] animate-in slide-in-from-right duration-500 delay-100">
           <div className="flex-1 bg-black/60 rounded-xl overflow-hidden relative flex items-center justify-center group">
             {state.videoUrl ? (
               <div className="relative w-full h-full flex items-center justify-center bg-black">
                 <video 
                   src={state.videoUrl} 
                   controls 
                   autoPlay 
                   loop 
                   className="max-h-full max-w-full shadow-2xl"
                 />
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <a 
                     href={state.videoUrl} 
                     download="roadmap-animation.mp4"
                     className="p-3 bg-black/70 text-white rounded-full hover:bg-brand-600 transition-colors backdrop-blur-md flex items-center gap-2 pr-4"
                   >
                     <Download size={18} />
                     <span className="text-xs font-bold">DOWNLOAD VIDEO</span>
                   </a>
                 </div>
               </div>
             ) : (
               <div className="text-center p-8 opacity-30">
                 <div className="w-24 h-24 rounded-full border-4 border-gray-700 flex items-center justify-center mx-auto mb-4">
                   <Play className="text-gray-700 ml-2" size={40} fill="currentColor" />
                 </div>
                 <h3 className="text-xl font-mono font-bold text-gray-500">PREVIEW AREA</h3>
                 <p className="text-gray-600 mt-2 max-w-xs mx-auto">
                   Your high-tech roadmap animation will appear here.
                 </p>
               </div>
             )}
           </div>
        </div>

      </div>
    </div>
  );
};