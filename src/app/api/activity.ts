'use client'

import { useQuery } from '@tanstack/react-query';
import { Activity } from '@/types/Activity';
import axios from 'axios';

interface postReservationProps {
  activityId: number;
  reservation: {
    scheduleId: number;
    headCount: number;
  }
}

const BASE_URL = "https://sp-globalnomad-api.vercel.app/10-1";

const instance = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json" },
});

const fetchActivityById = async (id: number): Promise<Activity> => {
  const response = await instance.get(`/activities/${id}`);
  return response.data;
};

// React Query 훅
export const useActivity = (id: number) => {
  const data = useQuery<Activity, Error>({
    queryKey: ['activity', id],
    queryFn: async () => fetchActivityById(id),
    staleTime: 1000*10,
  });

  return data;
};

export const postActivityReservation = async (ReservationProps: postReservationProps): Promise<postReservationProps> => {
  const response = await instance.post(`/activities/${ReservationProps.activityId}/reservations`, ReservationProps.reservation); // Swagger의 POST endpoint URL
  return response.data;
};