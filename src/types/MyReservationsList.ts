export enum ReservationStatus {
  pending = 'pending',
  confirmed = 'confirmed',
  declined = 'declined',
  canceled = 'canceled',
  completed = 'completed',
  completed_experience = 'completed_experience',
}

export const STATUS_LIST: ReservationStatus[] = [
  ReservationStatus.pending,
  ReservationStatus.confirmed,
  ReservationStatus.declined,
  ReservationStatus.canceled,
  ReservationStatus.completed,
  ReservationStatus.completed_experience,
];

export interface ReservationsType {
  id: number;
  teamId: string;
  userId: number;
  activity: {
    bannerImageUrl: string;
    title: string;
    id: number;
  };
  scheduleId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyReservationsType {
  cursorId: number;
  reservations: ReservationsType[];
  totalCount: number;
}

export type ButtonMode = 'none' | 'reservationCancel' | 'writeReview';

export const statusToButtonMode: Record<ReservationStatus, ButtonMode> = {
  [ReservationStatus.pending]: 'reservationCancel',
  [ReservationStatus.confirmed]: 'reservationCancel',
  [ReservationStatus.declined]: 'none',
  [ReservationStatus.canceled]: 'none',
  [ReservationStatus.completed]: 'reservationCancel',
  [ReservationStatus.completed_experience]: 'writeReview',
};
