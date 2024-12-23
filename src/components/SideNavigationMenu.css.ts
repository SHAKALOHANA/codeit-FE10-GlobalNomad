// SideNavigationMenu.css

import { style } from '@vanilla-extract/css';
import { theme } from '../app/global.css';

export const containerBox = style({
  backgroundColor: theme.colors.white,
  width: '384px',
  height: '432px',
  padding: '24px',
  gap: '40px',
  borderRadius: '12px',
  border: `1px solid ${theme.colors.gray7}`,
});

export const profileImage = style({
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  backgroundColor: '#e3e5e8',
  margin: '0 auto',
});

export const navigationBoxes = style({
  width: '336px',
  height: '200px',
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
});

export const navigationBox = style({
  width: '336px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  transition: 'background-color 0.3s, border-radius 0.3s',
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

