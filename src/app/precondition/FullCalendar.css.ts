/** FullCalendar.css 파일에서 바닐라 익스트렉트 스타일 정의 **/

import { style } from '@vanilla-extract/css';

// 캘린더 래퍼 스타일

// 요일 영역 높이
export const headerToolbar = style({
  height: '43px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffe4e0', // 배경색 추가 (필요시)
});

// 날짜 셀 영역

// 날짜 숫자 중앙 정렬
export const dayCellContent = style({
  height: '154px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '21px', // 숫자 크기 조정
  fontWeight: 'bold', // 숫자 두껍게
});

