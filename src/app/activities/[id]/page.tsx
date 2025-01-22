'use client'

import { useActivity } from "@/app/api/activity";
import Map from "../../../components/Map";
import BasicMap from "@/components/Kakaomap";
import ReservationBar from "@/components/ReservationBar";
import { use, useState } from "react";
import * as styles from "./activity.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Activity } from '@/types/Activity';

interface Props {
  params: Promise<{id: string}>;
}

export default function Activities({ params }: Props) {
  const { id } = use(params);
  const activityId = parseInt(id, 10);

  const { data: activity, isLoading, error } = useActivity(activityId);

  //const [address, setAddress] = useState("");
  const [selected, setSelected] = useState<Date>();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }
  if (!activity) {
    return <div>활동 정보를 찾을 수 없습니다.</div>;
  }
  return (
    <div>
    <div className={styles.container}>
      {/* 제목 섹션 */}
      <p className={`${styles.extraText} ${styles.colorNomad}`}>{activity?.category}</p>
      <h1 className={styles.title}>{activity?.title}</h1>
      <div className={`${styles.extraText} ${styles.extra}`}>
        <div className={styles.colorBlack}>⭐ {activity.rating}{'('}{activity.reviewCount}{')'}</div>
        <div className={`${styles.colorNomad}`}>📍 {activity.address}</div>
      </div>

      {/* 이미지 섹션 */}
      <div className={styles.imageSection}>
        <div className={styles.mainImageContainer}>
          <img
            src="/images/dance.png"
            alt="Main Dance Image"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.thumbnailContainer}>
          <img
            src="/images/dance.png"
            alt="Thumbnail 1"
            className={styles.thumbnail}
          />
          <img
            src="/images/dance.png"
            alt="Thumbnail 2"
            className={styles.thumbnail}
          />
          <img
            src="/images/dance.png"
            alt="Thumbnail 3"
            className={styles.thumbnail}
          />
        </div>
      </div>
      <br /><br />

      <div className={styles.contentsContatiner}>
        <div className={styles.sections}>
        <hr />
      {/* 체험 설명 */}
      <section className={styles.section}>
        <h2>체험 설명</h2>
        <p className={styles.paragraph}>
          {activity?.description}
        </p>
      </section>

      {/* 지도 섹션 */}
      <section className={styles.section}>
      <br /><hr /><br />
        <div className={styles.mapContainer}>
          {/*}
          <Map address={"서울 송파구 올림픽로 240"} />
          */}
          {/*<BasicMap address={activity.address}/>*/}
          <BasicMap />
        </div>
      </section>
      <br /><br /><hr />

      {/* 후기 섹션 */}
      <section className={styles.section}>
        <h2>후기</h2>
        <div>
          별점
        </div>
        <div className={styles.review}>
          <h3 className={styles.reviewTitle}>후기 1</h3>
          <p className={styles.reviewParagraph}>
            1
          </p>
        </div>
        <div className={styles.review}>
          <h3 className={styles.reviewTitle}>후기 2</h3>
          <p className={styles.reviewParagraph}>
            2
          </p>
        </div>
        <div className={styles.review}>
          <h3 className={styles.reviewTitle}>후기 3</h3>
          <p className={styles.reviewParagraph}>
            3
          </p>
        </div>
        <br />
          <div className={styles.pagination}>
            <button className={styles.pagBu}>&lt;</button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button className={styles.pagBu} key={page}>{page}</button>
            ))}
            <button className={styles.pagBu}>&gt;</button>
          </div>
      </section>
        </div>
      
      <div className={styles.registerContainer}>  
      {/* 예약 섹션 */}
      <section className={styles.section}>
      <ReservationBar
        price={activity.price}
        schedules={activity.schedules}
      />
      </section>
        </div>
      </div>
    </div>
    </div>
  );
}