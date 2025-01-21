'use client'

import { useActivity } from "@/app/api/activity";
import Map from "../../../components/Map";
import BasicMap from "@/components/Kakaomap";
import { useState } from "react";
import * as styles from "./activity.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Activity } from '@/types/Activity';

interface Props {
  params: {
    id: string;
  };
}

export default function Activities({ params }: Props) {
  const id = parseInt(params.id, 10);
  const { data: activity, isLoading, error } = useActivity(id);

  //const [address, setAddress] = useState("");
  const [selected, setSelected] = useState<Date>();

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
      <h1 className={styles.title}>{activity?.title}</h1>

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
      <br /><br /><hr />

      <div className={styles.contentsContatiner}>
        <div className={styles.sections}>
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
        <h2>&#8361; 1,000 <small> / 인</small></h2>
        <form className={styles.bookingForm}>
          <label className={styles.labels}>
            날짜
            <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : ""
      }
    />
          </label>
          <label>
            시간
          </label>
          <label>
            참여 인원 수
          </label>
          <button type="submit" className={styles.button}>
            예약하기
          </button>
        </form>
      </section>
        </div>
      </div>
    </div>
    </div>
  );
}