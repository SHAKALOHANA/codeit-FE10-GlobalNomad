import { style } from '@vanilla-extract/css';
import { theme } from '../app/global.css';
import { mediaQueries } from '@/styles/media';
import { relative } from 'path';

export const containerBox = style({
  backgroundColor: theme.colors.white,
  width: '384px',
  height: '432px',
  padding: '24px',
  gap: '40px',
  borderRadius: '12px',
  border: `1px solid ${theme.colors.gray7}`,

  '@media': {
    [mediaQueries.tablet]: {
      width: '251px',
    },
    [mediaQueries.mobile]: {
      width: '344px',
    },
  },
});

export const profileImage = style({
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  backgroundColor: '#e3e5e8',
  margin: '0 auto',
  position: 'relative',
});

export const editButton = style({
  position: 'absolute',
  right: '12.5px',
  bottom: '0px',
});

export const navigationBoxes = style({
  width: '336px',
  height: '200px',
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@media': {
    [mediaQueries.tablet]: {
      width: '203px',
    },
    [mediaQueries.mobile]: {
      width: '296px',
    },
  },
});

export const navigationBox = style({
  width: '336px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  transition: 'background-color 0.3s, border-radius 0.3s',

  '@media': {
    [mediaQueries.tablet]: {
      width: '203px',
    },
    [mediaQueries.mobile]: {
      width: '296px',
    },
  },
});

export const navigationBoxImage = style({
  margin: '10px 16px',
});

export const activeNavigationBox = style({
  backgroundColor: '#ced8d5',
  borderRadius: '12px',
});

export const activeText = style({
  color: '#112211',
});

export const inactiveText = style({
  color: '#a1a1a1',
});

// 이미지 색상이 바뀌는 것은 아직 구현하지 못함
export const activeImage = style({
  fill: '#112211',
});

export const inactiveImage = style({
  fill: '#a1a1a1',
});

