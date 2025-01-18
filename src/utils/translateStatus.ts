import { ReservationStatus } from '@/types/ReservationList';

export const translateStatus = (status: ReservationStatus) => {
  switch (status) {
    case ReservationStatus.pending:
      return '예약 신청';
    case ReservationStatus.confirmed:
      return '예약 승인';
    case ReservationStatus.declined:
      return '예약 거절';
    case ReservationStatus.canceled:
      return '예약 취소';
    case ReservationStatus.completed:
      return '예약 완료';
    case ReservationStatus.completed_experience:
      return '체험 완료';
    default:
      return '';
  }
};

export const FIXED_OPTIONS = [
  { label: '전체', value: '' },
  { label: '예약 신청', value: 'pending' },
  { label: '예약 승인', value: 'confirmed' },
  { label: '예약 거절', value: 'declined' },
  { label: '예약 취소', value: 'canceled' },
  { label: '예약 완료', value: 'completed' },
  { label: '체험 완료', value: 'completed_experience' },
];

