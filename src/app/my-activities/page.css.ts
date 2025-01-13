import { style } from '@vanilla-extract/css';
import { mediaQueries } from '@/styles/media';

export const myPageContainer = style({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '1200px',
  paddingTop: '70px',
  paddingBottom: '200px',
  gap: '24px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
      paddingTop: '24px',
      gap: '16px',
    },
    [mediaQueries.mobile]: {
      width: '375px',
      paddingTop: '24px',
      gap: '0px',
    },
  },
});

export const sideNavigationNone = style({
  '@media': {
    [mediaQueries.mobile]: {
      display: 'none',
    },
  },
});
