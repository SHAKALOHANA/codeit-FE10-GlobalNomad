import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

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

export const variantsMenu = styleVariants({
  price: {
    width: '127px',
    height: '53px',
    selectors: {
    },
    '@media': {
      [mediaQueries.tablet]: {
      },
      [mediaQueries.mobile]: {
      },
    },
  },
  threedot: {
    width: '10px',
    height: '48px',
    selectors: {
    },
    '@media': {
      [mediaQueries.tablet]: {
      },
      [mediaQueries.mobile]: {
      },
    },
  },
  filter: {
    width: '160px',
    height: '53px',
    '@media': {
      [mediaQueries.tablet]: {
      },
      [mediaQueries.mobile]: {
      },
    },
  },
  category: {
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {
      },
      [mediaQueries.mobile]: {
      },
    },
  },
  time: {
    width: '140px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
      },
      [mediaQueries.mobile]: {
      },
    },
  },
  activity: {
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {
      },
      [mediaQueries.mobile]: {
      },
    },
  },
});
