import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

export const reservationsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '70px',

  '@media': {
    [mediaQueries.tablet]: {
      paddingTop: '24px',
    },
  },
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '24px',

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
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  padding: '13.5px 20px',
  gap: '8px',
  width: '160px',
  height: '53px',
  outline: '1px solid theme.colors.green1',
  ...theme.text['2lg-medium'],
  color: theme.colors.green1,
});

export const statusFilterOptions = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '18px 46.5px',
  gap: '8px',
  width: '160px',
  height: '53px',
  ...theme.text['2lg-medium'],
  color: theme.colors.gray1,
});

export const reservationList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
});
