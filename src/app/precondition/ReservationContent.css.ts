import { style } from '@vanilla-extract/css';

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
