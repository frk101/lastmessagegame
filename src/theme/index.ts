/**
 * Görsel kimlik. Koyu, hafif soğuk; hiçbir gerçek işletim sistemini birebir taklit etmez.
 * docs/05 §5.3
 */
export const colors = {
  bg: '#07090C',
  surface: '#11151B',
  surfaceHigh: '#1A2028',
  border: '#232A33',
  text: '#E8ECF1',
  textDim: '#8B95A3',
  bubbleIn: '#1C222B',
  bubbleOut: '#3A5068',
  accent: '#7FA7C9',
  danger: '#C96B6B',
} as const;

export const fonts = {
  ui: 'Inter_400Regular',
  uiMedium: 'Inter_500Medium',
  uiBold: 'Inter_600SemiBold',
  mono: 'JetBrainsMono_400Regular',
} as const;

export const space = (n: number) => n * 4;
