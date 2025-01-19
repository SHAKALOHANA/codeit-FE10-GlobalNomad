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

export const dayGridDay = style({
  height: '154px', // 원하는 높이로 설정
});

// 선택 사항: 날짜 숫자 폰트 크기 조정
export const dayNumberText = style({
  fontSize: '21px', // 날짜 숫자의 폰트 크기
});

