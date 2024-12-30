import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  paddingTop: '70px',

  '@media': {
    [mediaQueries.tablet]: {
      paddingTop: '24px',
    },
  },
});

export const myInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '792px',
  height: '580px',
  gap: '24px',
  padding: '16px 20px',
  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '800px',
  height: '48px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const headerTitle = style({
  display: 'inline-block',
  color: theme.colors.nomadBlack,
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: '38px',

  '@media': {
    [mediaQueries.tablet]: {
      lineHeight: '42px',
    },
    [mediaQueries.mobile]: {
      lineHeight: '42px',
    },
  },
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const labelStyle = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-bold'].fontWeight,
  lineHeight: theme.text['2xl-bold'].lineHeight,
});
