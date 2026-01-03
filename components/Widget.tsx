
import React from 'react';
import { getNepaliDate, toNepaliNumerals } from '../utils/nepaliCalendar';

export type WidgetTheme = 'glass' | 'frost' | 'midnight' | 'minimal';
export type WidgetFont = 'Mukta' | 'Noto Sans Devanagari' | 'Hind' | 'Martel';

interface WidgetProps {
  theme: WidgetTheme;
  font: WidgetFont;
  size: 'small' | 'large';
}

const Widget: React.FC<WidgetProps> = ({ theme, font, size }) => {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const nepaliDate = getNepaliDate(now);
  const isDark = theme !== 'frost';
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const secondaryTextColor = isDark ? 'text-white/60' : 'text-slate-600';
  
  const themeClasses = {
    glass: 'theme-glass',
    frost: 'theme-frost',
    midnight: 'theme-midnight',
    minimal: 'theme-minimal'
  }[theme];

  // Simulated Weather Data
  const weather = {
    temp: 22,
    condition: 'सफा आकाश', // Sunny/Clear Sky
    city: 'काठमाडौं'
  };

  if (size === 'large') {
    return (
      <div 
        className={`w-72 h-72 p-8 rounded-[3rem] flex flex-col justify-between items-center transition-all duration-500 shadow-2xl relative overflow-hidden ${themeClasses}`}
        style={{ fontFamily: `'${font}', sans-serif` }}
      >
        <div className="z-10 w-full flex justify-between items-start">
          <div className="flex flex-col">
            <span className={`${secondaryTextColor} text-lg font-semibold tracking-wide uppercase`}>
              {nepaliDate.dayName}
            </span>
            <span className={`${secondaryTextColor} text-xs font-medium`}>
              {weather.city}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className={`${textColor} text-2xl font-bold`}>{toNepaliNumerals(weather.temp)}°</span>
            <span className={`${secondaryTextColor} text-[10px]`}>{weather.condition}</span>
          </div>
        </div>

        <div className="z-10 flex flex-col items-center">
          <h2 className={`${textColor} text-9xl font-black leading-none drop-shadow-md`}>
            {toNepaliNumerals(nepaliDate.day)}
          </h2>
          <div className={`${textColor} text-5xl font-extrabold mt-1 tracking-tight drop-shadow-sm`}>
            {nepaliDate.monthName}
          </div>
        </div>

        <div className="z-10 mt-auto opacity-70 border-t border-current/10 pt-4 w-full text-center">
          <div className={`${textColor} text-base font-medium`}>
            वि.सं. {toNepaliNumerals(nepaliDate.year)}
          </div>
        </div>
      </div>
    );
  }

  // Small Version
  return (
    <div 
      className={`w-56 h-56 p-6 rounded-[2.5rem] flex flex-col justify-between items-center overflow-hidden relative transition-all duration-500 hover:scale-105 shadow-xl ${themeClasses}`}
      style={{ fontFamily: `'${font}', sans-serif` }}
    >
      <div className="z-10 w-full text-center">
        <span className={`${secondaryTextColor} text-lg font-bold tracking-wide`}>
          {nepaliDate.dayName}
        </span>
      </div>

      <div className="z-10 flex flex-col items-center -mt-2">
        <h2 className={`${textColor} text-8xl font-black leading-none`}>
          {toNepaliNumerals(nepaliDate.day)}
        </h2>
        <div className={`${textColor} text-4xl font-extrabold mt-1`}>
          {nepaliDate.monthName}
        </div>
      </div>

      <div className="z-10 mt-2 opacity-50">
        <div className={`${textColor} text-sm font-medium`}>
          वि.सं. {toNepaliNumerals(nepaliDate.year)}
        </div>
      </div>
    </div>
  );
};

export default Widget;
