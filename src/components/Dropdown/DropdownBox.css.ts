import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';


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

export const defaultDropdown = style({
  display: 'flex',
  alignItems: 'center',
  //justifyContent: 'center',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['lg-bold'].fontSize,
  lineHeight: theme.text['lg-bold'].lineHeight,
  fontWeight: theme.text['lg-bold'].fontWeight,
  cursor: 'pointer',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  paddingLeft: '20px',
});

export const variantsDropdown = styleVariants({
  price: {
    width: '127px',
    height: '48px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '48px',
      },
    },
  },
  threedot: {
    width: '640px',
    height: '48px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '48px',
      },
    },
  },
  filter: {
    width: '136px',
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {
        width: '96px',
        height: '56px',
      },
    },
  },
  category: {
    width: '120px',
    height: '48px',
    borderRadius: '4px',
  },
  time: {
    width: '144px',
    height: '43px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '112px',
        height: '40px',
      },
      [mediaQueries.mobile]: {
        fontSize: theme.text['md-bold'].fontSize,
        lineHeight: theme.text['md-bold'].lineHeight,
        fontWeight: theme.text['md-bold'].fontWeight,
        width: '80px',
        height: '32px',
      },
    },
  },
  activity: {
    width: '432px',
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '54px',
      },
    },
  },
});
