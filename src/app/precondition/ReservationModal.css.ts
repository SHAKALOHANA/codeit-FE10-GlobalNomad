import { style } from '@vanilla-extract/css';

export const modalContainer = style({
  width: '429px',
  height: '697px',
  borderRadius: '14px',
  border: '1px solid #dddddd', //색수정필요
  backgroundColor: '#ffffff',
  padding: '24px',
});

export const header = style({
  width: '381px',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const menu = style({
  display: 'flex',
});

export const reservationContainer = style({
  width: '381px',
  height: '116px',
  border: '1px solid #79747e',
  margin: '10px auto',
  padding: '0px 10px',
  position: 'relative',
});

export const buttonContainer = style({
  width: '170px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
});

