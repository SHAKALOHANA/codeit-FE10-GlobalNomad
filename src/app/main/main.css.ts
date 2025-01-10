import { style } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
//import picHero from '../../../public/images/hero.png'
//import { mediaQueries } from '@/styles/media';

export const container = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '0',
  margin: '0',
  boxSizing: 'border-box',
  alignItems: 'center',
  //justifyContent: 'center',
});

export const sectionWall = style({
  background: 'url("/images/dance.png") center center/cover no-repeat',
  width: '100%',
  height: '550px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.white,
});

export const walltextContainer = style({
  width: '1200px',
});

export const hText = style({
  textAlign: 'left',
  fontSize: '68px',
  margin: 0,
});

export const pText = style({
  textAlign: 'left',
  marginTop: '10px',
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-bold'].fontWeight,
});

export const searchBar = style({
  width: '1200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '32px 24px',
  border: '0',
  borderRadius: '16px',
  backgroundColor: theme.colors.white,
  position: 'relative',
  top: '-60px',
  gap: '32px',
});

export const searchBarText = style({
  fontSize: theme.text['xl-bold'].fontSize,
  lineHeight: theme.text['xl-bold'].lineHeight,
  fontWeight: theme.text['xl-bold'].fontWeight,
});

export const searchBarForm = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  position: 'relative',
  selectors: {
    '&::before': {
      content: '"🛏️"',
      position: 'absolute',
      left: '10px',
      fontSize: theme.text['2xl-medium'].fontSize,
      lineHeight: '45px',
      color: theme.colors.green1,
      pointerEvents: 'none',
    },
  },
});

export const searchBarInput = style({
  padding: '4px 16px 4px 50px',
  width: '100%',
  height: '56px',
  border: `1px solid ${theme.colors.gray1}`,
  borderRadius: '5px',
  color: theme.colors.gray3,
  fontSize: theme.text['lg-regular'].fontSize,
  lineHeight: theme.text['lg-regular'].lineHeight,
  fontWeight: theme.text['lg-regular'].fontWeight,
});

export const content = style({
  width: '1200px',
  marginTop: '34px',
});

export const section = style({
  width: '100%',
  marginBottom: '40px',
});

export const sectionTitle = style({
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const sectionTitleH = style({
  margin: '0',
  fontSize: '36px',
  fontWeight: '700',
});

export const sectionTitlePage = style({
  width: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0',
});

export const PaginationArrow = style({
  margin: '0',
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  fontFamily: 'serif',
  width: '30px',
  textAlign: 'center',
});

export const cardHotContainer = style({
  display: 'flex',
  gap: '24px',
});

export const cardHot = style({
  width: '384px',
  height: '384px',
  border: '0',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  color: theme.colors.white,
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const cardText = style({
  position: 'absolute',
  bottom: '0',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const cardH = style({
  margin: '0',
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
});

export const cardP = style({
  margin: '0',
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  //color: theme.colors.white,
});

export const cardSmall = style({
  fontSize: theme.text['md-regular'].fontSize,
  fontWeight: theme.text['md-regular'].fontWeight,
});

export const tagContainer = style({
  display: 'flex',
  gap: '10px',
  margin: '24px',
});

export const tags = style({
  width: '127px',
  height: '58px',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  textAlign: 'center',
  fontSize: theme.text['2lg-medium'].fontSize,
  fontWeight: theme.text['2lg-medium'].fontWeight,
  lineHeight: theme.text['2lg-medium'].lineHeight,
  padding: '16px',
});

export const cardActivityContainer = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  columnGap: '16px',
  rowGap: '24px',
});

export const cardActivity = style({
  width: '100%',
  height: '100%',
  border: '0',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  /*
  selectors: {
    '&::after': {
      display: 'block',
      content: '',
      paddingBottom: '100%',
    },
  },
  */
});

export const cardActivityImage = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '1/1',
  borderRadius: '20px',
  selectors: {
    '&::after': {
      display: 'block',
      content: '',
      paddingBottom: '100%',
    },
  },
});

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '50px',
});

export const pagBu = style({
  padding: '5px 10px',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  cursor: 'pointer',
  width: '55px',
  height: '55px',
});