import { style } from '@vanilla-extract/css';
import { theme } from '../../app/global.css';
import { mediaQueries } from '@/styles/media';

export const mainContainer = style({
  width: '1200px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '30px auto',
  backgroundColor: theme.colors.gray9,

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const sideContainer = style({
  width: '792px',
  height: '100%',
  backgroundColor: theme.colors.gray9,

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const contentContainer = style({
  width: '100%',
  height: '56px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
});

export const discriptionContainer = style({
  width: '100%',
  height: '346px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
});

export const dateContainer = style({
  width: '379px',
  height: '56px',
  padding: '8px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  '@media': {
    [mediaQueries.tablet]: {
      width: '149px',
    },
    [mediaQueries.mobile]: {
      width: '130px',
      height: '44px',
    },
  },
});

export const reservationContainer = style({
  width: '792px',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const addedDateWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
});

export const addedDateContainer = style({
  width: '379px',
  height: '56px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [mediaQueries.tablet]: {
      width: '149px',
    },
    [mediaQueries.mobile]: {
      width: '130px',
      height: '44px',
    },
  },
});

export const calendarWrapper = style({
  border: `1px solid ${theme.colors.black}`,
  padding: '10px',
  position: 'absolute',
  top: '56px',
  backgroundColor: theme.colors.white,
});

export const line = style({
  marginTop: '15px',
  width: '792px',
  border: `1px solid ${theme.colors.gray7}`,
});

export const imageButton = style({
  width: '180px',
  height: '180px',
  borderRadius: '12px',
  border: `1px dashed ${theme.colors.gray1}`,
  backgroundColor: theme.colors.gray9,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '24px',
});

export const xButtonWrapper = style({
  position: 'absolute',
  top: '0',
  right: '0',
  backgroundColor: theme.colors.white,
  borderRadius: '50%',
  cursor: 'pointer',
});

export const introImageWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
});

