import { style } from '@vanilla-extract/css';
import { theme } from '../global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const card = style({
  width: '640px',
  backgroundColor: theme.colors.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const logoBlock = style({
  marginBottom: '56px',
});

export const inputContainer = style({
  position: 'relative',
  marginBottom: '32px',
});

export const label = style({
  fontWeight: '500',
  fontSize: theme.text['lg-regular'].fontSize,
  color: theme.colors.black,
  display: 'block',
  marginBottom: '10px',
});

export const inputField = style({
  width: '640px',
  height: '48px',
  fontSize: theme.text['xs-regular'].fontSize,
  border: `1px solid ${theme.colors.gray2}`,
  borderRadius: '6px',
});

export const errorMessage = style({
  color: theme.colors.red1,
  position: 'absolute',
  top: '100%',
  marginTop: '5px',
  visibility: 'hidden',
});

export const errorVisible = style({
  visibility: 'visible',
});

export const signupBtn = style({
  width: '640px',
  height: '50px',
  borderRadius: '6px',
  color: theme.colors.white,
  backgroundColor: theme.colors.nomadBlack,
  marginBottom: '40px',
});

export const loginArea = style({
  display: 'flex',
  gap: '10px',
});

export const text = style({
  fontSize: theme.text['lg-regular'].fontSize,
  color: '#333236',
  margin: "auto",
});

export const linkButton = style({
  fontSize: theme.text['lg-regular'].fontSize,
  color: theme.colors.green1,
});
