import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const reviewModalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '23px 24px 41px 24px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      padding: '24px 16px 33px 16px',
    },
  },
});

export const reviewModalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-bold'].fontWeight,
  lineHeight: theme.text['2xl-bold'].lineHeight,
  alignItems: 'center',
  width: '100%',
  marginBottom: '41px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      marginBottom: '8px',
      fontSize: '28px',
      fontWeight: theme.text['2lg-bold'].fontWeight,
      lineHeight: theme.text['2lg-bold'].lineHeight,
    },
  },
});

export const modalCloseBtn = style({
  cursor: 'pointer',
  width: '40px',
  height: '40px',
});

export const activityInfoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '137px',
  marginBottom: '24px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      marginBottom: '12px',
    },
  },
});

export const activityImage = style({
  width: '126px',
  height: '126px',
  marginRight: '24px',
  borderRadius: '12px',

  '@media': {
    [mediaQueries.mobile]: {
      width: '100px',
      height: '100px',
      marginRight: '8px',
    },
  },
});

export const activityInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '100%',

  '@media': {
    [mediaQueries.mobile]: {
      height: '95px',
    },
  },
});

export const activityTitle = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  lineHeight: theme.text['xl-bold'].lineHeight,
  marginBottom: '12px',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['lg-bold'].fontSize,
      fontWeight: theme.text['lg-bold'].fontWeight,
      lineHeight: theme.text['lg-bold'].lineHeight,
      marginBottom: '6px',
    },
  },
});

export const activityDate = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  lineHeight: theme.text['2lg-regular'].lineHeight,
  marginBottom: '25px',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-regular'].fontSize,
      fontWeight: theme.text['md-regular'].fontWeight,
      lineHeight: theme.text['md-regular'].lineHeight,
      marginBottom: '13px',
    },
  },
});

export const activityPrice = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: theme.text['3xl-bold'].lineHeight,

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['xl-bold'].fontSize,
      fontWeight: theme.text['xl-bold'].fontWeight,
      lineHeight: '24px',
      marginBottom: '13px',
    },
  },
});

export const starRatingContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  gap: '8px',
  cursor: 'pointer',
  marginBottom: '24px',

  '@media': {
    [mediaQueries.mobile]: {
      marginBottom: '12px',
    },
  },
});

export const reviewTextarea = style({
  width: '100%',
  height: '240px',
  borderRadius: '4px',
  outline: `1px solid ${theme.colors.gray2}`,
  padding: '8px 16px',
  marginBottom: '24px',
  resize: 'none',

  '@media': {
    [mediaQueries.mobile]: {
      height: '346px',
    },
  },
});
