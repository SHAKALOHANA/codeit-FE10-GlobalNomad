import { style } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

export const dropdown = style({
  position: 'relative',
  display: 'inline-block',
});

export const dropdownButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '127px',
  height: '53px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['sm-medium'].fontSize,
  lineHeight: theme.text['2lg-medium'].lineHeight,
  fontWeight: theme.text['2lg-medium'].fontWeight,
  padding: '16px 12px',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.green2,
    },
  },
});

export const dropdownMenu = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['2lg-medium'].fontSize,
  lineHeight: theme.text['2lg-medium'].lineHeight,
  fontWeight: theme.text['2lg-medium'].fontWeight,
  border: `1px solid ${theme.colors.gray1}`,
  borderRadius: '6px',
  boxShadow: '0 4px 16px rgba(17, 34, 17, 0.05)',
  zIndex: 1000,
  marginTop: '5px',
  listStyle: 'none',
  padding: 0,
  minWidth: '150px',
  display: 'none',
  cursor: 'pointer',
});

export const dropdownMenuVisible = style({
  display: 'block',
});

export const dropdownItem = style({
  width: '127px',
  height: '53px',
  padding: '10px 15px',
  fontSize: theme.text['sm-medium'].fontSize,
  lineHeight: '22px',
  color: theme.colors.gray1,
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: '#f8f9fa',
      color: '#007bff',
    },
    '&:active': {
      backgroundColor: '#e9ecef',
      color: '#0056b3',
    },
  },
});
