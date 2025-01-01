import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: '24px',
  borderBottomLeftRadius: '24px',
  width: '204px',
  height: '204px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '156px',
      height: '156px',
    },
    [mediaQueries.mobile]: {
      width: '128px',
      height: '128px',
    },
  },
});

export const activityInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '21px 24px',
  '@media': {
    [mediaQueries.tablet]: {
      padding: '12px 16px 0px 12px',
    },
    [mediaQueries.mobile]: {
      padding: '11px 1px 0px 8px',
    },
  },
});

export const reservationStatus1 = style({
  fontSize: theme.text['lg-bold'].fontSize,
  fontWeight: theme.text['lg-bold'].fontWeight,
  lineHeight: theme.text['lg-bold'].lineHeight,
  marginBottom: '8px',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-bold'].fontSize,
      fontWeight: theme.text['md-bold'].fontWeight,
      lineHeight: '26px',
    },
  },
});

export const reservationStatus2 = styleVariants({
  pending: {
    color: theme.colors.yellow1,
  },

  confirmed: {
    color: theme.colors.orange1,
  },

  declined: {
    color: theme.colors.red1,
  },

  canceled: {
    color: theme.colors.gray2,
  },

  completed: {
    color: theme.colors.blue2,
  },

  completed_experience: {
    color: theme.colors.gray2,
  },
});

export const activityTitle = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  lineHeight: theme.text['xl-bold'].lineHeight,
  marginBottom: '12px',

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['2lg-bold'].fontSize,
      fontWeight: theme.text['2lg-bold'].fontWeight,
      lineHeight: theme.text['2lg-bold'].lineHeight,
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-bold'].fontSize,
      fontWeight: theme.text['md-bold'].fontWeight,
      lineHeight: '26px',
    },
  },
});

export const activityDate = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  lineHeight: theme.text['2lg-regular'].lineHeight,
  marginBottom: '16px',

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['md-regular'].fontSize,
      fontWeight: theme.text['md-regular'].fontWeight,
      lineHeight: theme.text['md-regular'].lineHeight,
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['xs-regular'].fontSize,
      fontWeight: theme.text['xs-regular'].fontWeight,
      lineHeight: '24px',
    },
  },
});

export const activityPrice = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2xl-medium'].fontSize,
  fontWeight: theme.text['2xl-medium'].fontWeight,
  lineHeight: theme.text['2xl-medium'].lineHeight,

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['xl-medium'].fontSize,
      fontWeight: theme.text['xl-medium'].fontWeight,
      lineHeight: theme.text['xl-medium'].lineHeight,
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['lg-medium'].fontSize,
      fontWeight: theme.text['lg-medium'].fontWeight,
      lineHeight: '19px',
    },
  },
});
