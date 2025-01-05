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
  padding: '0px 10px',
});

export const discriptionContainer = style({
  width: '100%',
  height: '346px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  padding: '0px 10px',
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

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
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

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const postSearchButton = style({
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  padding: '10px',
  backgroundColor: '#ccc',
});

export const imageRegister = style({
  width: '180px',
  height: '180px',
  borderRadius: '12px',
  border: `1px dashed ${theme.colors.gray1}`,
  backgroundColor: theme.colors.gray9,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '206px',
      height: '206px',
    },
    [mediaQueries.mobile]: {
      width: '167px',
      height: '167px',
    },
  },
});

export const imagePreviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const bannerContainer = style({
  width: '792px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const introContainer = style({
  width: '792px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexWrap: 'wrap',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
      gap: '17px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
      gap: '8px',
    },
  },
});

export const images = style({
  width: '180px',
  height: '180px',
  borderRadius: '12px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '206px',
      height: '206px',
    },
    [mediaQueries.mobile]: {
      width: '167px',
      height: '167px',
    },
  },
});

export const deleteButton = style({
  position: 'absolute',
  top: '0px',
  right: '0px',
  width: '40px',
  height: '40px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '32px',
      height: '32px',
    },
    [mediaQueries.mobile]: {
      width: '24px',
      height: '24px',
    },
  },
});

