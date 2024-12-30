import { style } from '@vanilla-extract/css';
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

export const ratingStar = style({
  width: '19px',
  height: '19px',

  '@media': {
    [mediaQueries.mobile]: {
      width: '16px',
      height: '16px',
    },
  },
});

export const rating = style({
  color: theme.colors.black,
  fontSize: theme.text['lg-regular'].fontSize,
  fontWeight: theme.text['lg-regular'].fontWeight,
  lineHeight: theme.text['lg-regular'].lineHeight,
  marginBottom: '6px',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['xs-regular'].fontSize,
      fontWeight: theme.text['xs-regular'].fontWeight,
      lineHeight: '24px',
      marginBottom: '0px',
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

export const activityPriceContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '12px',
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

export const activityPriceUnit = style({
  color: theme.colors.gray1,
  fontSize: theme.text['lg-medium'].fontSize,
  fontWeight: theme.text['lg-medium'].fontWeight,
  lineHeight: theme.text['lg-medium'].lineHeight,
});

export const dropdown = style({
  width: '40px',
  height: '40px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.mobile]: {
      width: '32px',
      height: '32px',
    },
  },
});
