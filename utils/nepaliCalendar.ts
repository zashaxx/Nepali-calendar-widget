
/**
 * Simple Nepali Date Conversion Logic for demonstration.
 * In a production app, one would use a comprehensive library like 'nepali-date-converter'.
 * This implementation handles basic BS 2080 - 2081 mapping.
 */

export const nepaliMonths = [
  "बैशाख", "जेठ", "असार", "साउन", "भदौ", "असोज", "कात्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत"
];

export const nepaliDays = [
  "आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"
];

export const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

export const toNepaliNumerals = (num: number | string): string => {
  return num.toString().split('').map(digit => {
    const d = parseInt(digit);
    return isNaN(d) ? digit : nepaliNumerals[d];
  }).join('');
};

export interface NepaliDateObj {
  year: number;
  month: number; // 0-indexed
  day: number;
  dayName: string;
  monthName: string;
}

// Very basic converter for 2024-2025 mapping
export const getNepaliDate = (date: Date): NepaliDateObj => {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  // Reference: Jan 1 2024 is Poush 16 2080
  // Reference: April 13 2024 is Chaitra 31 2080
  // Reference: April 14 2024 is Baisakh 01 2081
  
  let bsYear = 2081;
  let bsMonth = 0;
  let bsDay = 1;

  // Approximate BS logic for 2024-2025
  const msInDay = 24 * 60 * 60 * 1000;
  const refDate = new Date(2024, 3, 14); // April 14, 2024
  const diffDays = Math.floor((date.getTime() - refDate.getTime()) / msInDay);

  // Simplified: 30 days per month for this demo
  if (diffDays >= 0) {
    bsYear = 2081;
    bsMonth = Math.floor(diffDays / 30.5) % 12;
    bsDay = Math.floor(diffDays % 30.5) + 1;
  } else {
    // Before New Year 2081
    bsYear = 2080;
    const pastDiff = Math.abs(diffDays);
    bsMonth = 11 - Math.floor(pastDiff / 30.5); // Counting backwards from Chaitra
    bsDay = 31 - (pastDiff % 31);
  }

  return {
    year: bsYear,
    month: bsMonth,
    day: bsDay,
    dayName: nepaliDays[dayOfWeek],
    monthName: nepaliMonths[bsMonth]
  };
};
