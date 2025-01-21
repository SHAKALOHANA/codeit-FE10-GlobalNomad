type subImageArr = {
  imageUrl: string;
  id: number;
}

type scheduleTime = {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

export type Activity = {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImages: subImageArr[];
  schedules: scheduleTime[];
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
};