
import React, { useState } from 'react';
import Widget, { WidgetTheme, WidgetFont } from './components/Widget';

const App: React.FC = () => {
  const [theme, setTheme] = useState<WidgetTheme>('glass');
  const [font, setFont] = useState<WidgetFont>('Mukta');
  const [size, setSize] = useState<'small' | 'large'>('small');
  const [wallpaper, setWallpaper] = useState('https://images.unsplash.com/photo-1544735030-32918d08e722?q=80&w=2070&auto=format&fit=crop');

  const themes: { id: WidgetTheme; name: string; color: string }[] = [
    { id: 'glass', name: 'Liquid Glass', color: 'bg-white/10' },
    { id: 'frost', name: 'Frost White', color: 'bg-white' },
    { id: 'midnight', name: 'Midnight', color: 'bg-slate-900' },
    { id: 'minimal', name: 'Outline Only', color: 'bg-transparent border border-white/50' }
  ];

  const fonts: WidgetFont[] = ['Mukta', 'Noto Sans Devanagari', 'Hind', 'Martel'];

  const changeWallpaper = () => {
    const ids = [1015, 1016, 1018, 1019, 1021, 1022, 1025, 1031, 1032, 1035];
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    setWallpaper(`https://picsum.photos/id/${randomId}/1920/1080`);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#020617] text-slate-100 selection:bg-white/20">
      {/* Sidebar */}
      <aside className="w-full lg:w-96 p-8 lg:h-screen overflow-y-auto border-r border-white/5 bg-black/40 backdrop-blur-3xl z-20 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-black tracking-tighter text-white mb-1 uppercase">
            Hamro Widget <span className="text-indigo-500">PRO</span>
          </h1>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Nepali Minimal Calendar Builder</p>
        </div>
        
        <div className="space-y-10 flex-1">
          {/* Size Selector */}
          <section>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Widget Size</label>
            <div className="grid grid-cols-2 gap-3">
              {(['small', 'large'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border ${
                    size === s 
                      ? 'bg-white text-black border-white shadow-lg' 
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </section>

          {/* Theme Selector */}
          <section>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Choose Theme</label>
            <div className="grid grid-cols-1 gap-3">
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border ${
                    theme === t.id 
                      ? 'bg-white text-black border-white shadow-xl scale-[1.02]' 
                      : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border border-black/10 shadow-sm ${t.color}`} />
                  <span className="text-sm font-bold uppercase tracking-wide">{t.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Font Selector */}
          <section>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Minimal Fonts</label>
            <div className="flex flex-wrap gap-2">
              {fonts.map(f => (
                <button
                  key={f}
                  onClick={() => setFont(f)}
                  className={`px-4 py-2.5 rounded-xl text-sm transition-all border ${
                    font === f 
                      ? 'bg-indigo-600 text-white border-indigo-400' 
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                  }`}
                  style={{ fontFamily: `'${f}', sans-serif` }}
                >
                  {f}
                </button>
              ))}
            </div>
          </section>

          <section>
            <button
              onClick={changeWallpaper}
              className="w-full py-5 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <span className="text-lg">🖼️</span> Change Environment
            </button>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[10px] leading-relaxed text-slate-600 font-medium">
            Personalize your Android 15 home screen experience with high-contrast, beautiful Nepali typography and glass aesthetics.
          </p>
        </div>
      </aside>

      {/* Main Preview */}
      <main className="flex-1 relative flex items-center justify-center p-8 bg-slate-950 min-h-[600px]">
        {/* Dynamic Wallpaper with Overlays */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 brightness-[0.45] saturate-[0.8]"
          style={{ backgroundImage: `url(${wallpaper})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Device Simulation */}
        <div className="relative z-10 w-[340px] h-[680px] bg-black/10 border-[12px] border-[#0f172a] rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-[1px]">
          {/* Status Bar */}
          <div className="h-12 flex justify-between items-center px-10 text-white/80 text-[11px] mt-2 font-bold tracking-widest">
            <span>9:41</span>
            <div className="flex gap-2 items-center">
              <div className="w-5 h-2.5 border border-white/40 rounded-sm" />
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L1 10.5C2.5 9 4.5 8 7 8s4.5 1 6 2.5L12 21z"/></svg>
            </div>
          </div>

          {/* Widget Area - Visual Center */}
          <div className="mt-20 flex justify-center px-4">
             <Widget theme={theme} font={font} size={size} />
          </div>

          {/* Home Screen Decoration (Bottom) */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-around px-10 opacity-30">
            <div className="w-14 h-14 bg-white/20 rounded-3xl shadow-lg border border-white/10" />
            <div className="w-14 h-14 bg-white/20 rounded-3xl shadow-lg border border-white/10" />
            <div className="w-14 h-14 bg-white/20 rounded-3xl shadow-lg border border-white/10" />
            <div className="w-14 h-14 bg-white/20 rounded-3xl shadow-lg border border-white/10" />
          </div>
          
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full" />
        </div>

        {/* Floating Tooltip */}
        <div className="absolute top-8 right-8 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full hidden xl:flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Live Preview</span>
        </div>
      </main>
    </div>
  );
};

export default App;
