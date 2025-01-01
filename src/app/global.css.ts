import { globalStyle } from '@vanilla-extract/css';
import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  colors: {
    white: '#ffffff',
    black: '#1b1b1b',
    nomadBlack: '#112211',
    gray1: '#4b4b4b',
    gray2: '#79747e',
    gray3: '#a1a1a1',
    gray4: '#a4a1aa',
    gray5: '#adaeb8',
    gray6: '#cbc9cf',
    gray7: '#dddddd',
    gray8: '#eeeeee',
    gray9: '#fafafa',
    gray10: '#676767',
    green1: '#0b3b2d',
    green2: '#ced8d5',
    green3: '#00ac07',
    red1: '#ff472e',
    red2: '#ffc2ba',
    red3: '#ffe4e0',
    orange1: '#ff7c1d',
    orange2: '#fff4e8',
    yellow1: '#FFc23d',
    blue1: '#0085ff',
    blue2: '#2eb4ff',
    blue3: '#e5f3ff',
  },
  text: {
    '3xl-bold': { fontSize: '32px', lineHeight: '42px', fontWeight: 'bold' },
    '3xl-semibold': { fontSize: '32px', lineHeight: '42px', fontWeight: '600' },
    '2xl-bold': { fontSize: '24px', lineHeight: '32px', fontWeight: 'bold' },
    '2xl-semibold': { fontSize: '24px', lineHeight: '32px', fontWeight: '600' },
    '2xl-medium': { fontSize: '24px', lineHeight: '32px', fontWeight: '500' },
    '2xl-regular': { fontSize: '24px', lineHeight: '32px', fontWeight: '400' },
    'xl-bold': { fontSize: '20px', lineHeight: '32px', fontWeight: 'bold' },
    'xl-semibold': { fontSize: '20px', lineHeight: '32px', fontWeight: '600' },
    'xl-medium': { fontSize: '20px', lineHeight: '32px', fontWeight: '500' },
    'xl-regular': { fontSize: '20px', lineHeight: '32px', fontWeight: '400' },
    '2lg-bold': { fontSize: '18px', lineHeight: '26px', fontWeight: 'bold' },
    '2lg-semibold': { fontSize: '18px', lineHeight: '26px', fontWeight: '600' },
    '2lg-medium': { fontSize: '18px', lineHeight: '26px', fontWeight: '500' },
    '2lg-regular': { fontSize: '18px', lineHeight: '26px', fontWeight: '400' },
    'lg-bold': { fontSize: '16px', lineHeight: '26px', fontWeight: 'bold' },
    'lg-semibold': { fontSize: '16px', lineHeight: '26px', fontWeight: '600' },
    'lg-medium': { fontSize: '16px', lineHeight: '26px', fontWeight: '500' },
    'lg-regular': { fontSize: '16px', lineHeight: '26px', fontWeight: '400' },
    'md-bold': { fontSize: '14px', lineHeight: '24px', fontWeight: 'bold' },
    'md-semibold': { fontSize: '14px', lineHeight: '24px', fontWeight: '600' },
    'md-medium': { fontSize: '14px', lineHeight: '24px', fontWeight: '500' },
    'md-regular': { fontSize: '14px', lineHeight: '24px', fontWeight: '400' },
    'sm-semibold': { fontSize: '13px', lineHeight: '22px', fontWeight: '600' },
    'sm-medium': { fontSize: '13px', lineHeight: '22px', fontWeight: '500' },
    'xs-semibold': { fontSize: '12px', lineHeight: '18px', fontWeight: '600' },
    'xs-medium': { fontSize: '12px', lineHeight: '18px', fontWeight: '500' },
    'xs-regular': { fontSize: '12px', lineHeight: '18px', fontWeight: '400' },
  },
});

globalStyle('body', {
  fontFamily: 'Pretendard',
  backgroundColor: theme.colors.gray9,
  color: theme.colors.black,
  margin: 0,
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
});

