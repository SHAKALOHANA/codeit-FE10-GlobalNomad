import { style } from '@vanilla-extract/css';
import { theme } from '../../app/global.css';
import { mediaQueries } from '@/styles/media';

export const pendingEvent = style({
  backgroundColor: theme.colors.blue1,
  color: theme.colors.white,
  padding: '5px',
  borderRadius: '4px',
});

export const completedEvent = style({
  backgroundColor: theme.colors.gray7,
  color: theme.colors.gray1,
  padding: '5px',
  borderRadius: '4px',
});

export const confirmedEvent = style({
  backgroundColor: theme.colors.orange2,
  color: theme.colors.orange1,
  padding: '5px',

  borderRadius: '50px',

});

