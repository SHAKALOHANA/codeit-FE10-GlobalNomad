import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const reservationsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  width: '792px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '344px',
    },
  },
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
  width: '100%',
  height: '48px',

  '@media': {
    [mediaQueries.mobile]: {
      marginBottom: '12px',
    },
  },
});

export const headerTitle = style({
  display: 'inline-block',
  color: theme.colors.nomadBlack,
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: '38px',
});

export const statusFilter = style({
  display: 'none',
});

export const statusFilterOptions = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '13.5px 20px',
  gap: '8px',
  width: '160px',
  height: '53px',
  borderRadius: '15px',
  color: theme.colors.green1,
  outline: `1px solid theme.colors.green1`,
  ...theme.text['2lg-medium'],
});

export const arrowDown = style({
  display: 'inline-block',
  color: theme.colors.green1,
  width: '22px',
  height: '22px',
});

export const reservationList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
});

export const emptyListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

export const emptyList = style({
  display: 'block',
  alignItems: 'center',
  width: '240px',
  height: '240px',
  marginTop: '86px',
  marginBottom: '20px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '200px',
      height: '200px',
      marginTop: '56px',
      marginBottom: '12px',
    },
  },
});

export const emptyMessage = style({
  display: 'inline-block',
  color: theme.colors.gray2,
  fontSize: theme.text['2xl-medium'].fontSize,
  fontWeight: theme.text['2xl-medium'].fontWeight,
  lineHeight: theme.text['2xl-medium'].lineHeight,
});
