export const CalendarType = [
  {
    category: '개인일정',
    color: '#CE7AF0',
  },
  {
    category: '생일',
    color: '#11CDF2',
  },
  {
    category: '네트워킹',
    color: '#FF70B0',
  },
  {
    category: '친구',
    color: '#FF875C',
  },
] as const;

export const ColorEnum = {
  개인일정: '#CE7AF0',
  생일: '#11CDF2',
  네트워킹: '#FF70B0',
  친구: '#FF875C',
} as const;

export type Category = (typeof CalendarType)[number]['category'];
export type CategoryColor = (typeof CalendarType)[number]['color'];
