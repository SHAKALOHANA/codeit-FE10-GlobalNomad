import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

export const baseButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.nomadBlack,
  color: theme.colors.white,
  cursor: 'pointer',
  border: 'none',
  borderRadius: '6px',
  transition: 'background-color 0.3s',
});

export const buttonVariants = styleVariants({
  login: {
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.desktop]: {
        backgroundColor: theme.colors.green1,
      },

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },
  signup: {
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },
  search: {
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },
  save: {},
  writeReview: {
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },
  write: {
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },
  reserve: {
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },
  confirm: {},
  reservationCancel: {
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },

  experienceRegistration: {
    '@media': {
      [mediaQueries.desktop]: {},

      [mediaQueries.mobile]: {},

      [mediaQueries.tablet]: {},
    },
  },

  edit: {},
  reservationFinalize: {},
  reservationReject: {},
  reservationConfirmed: {},
  reservationDenied: {},
  check: {},
});
