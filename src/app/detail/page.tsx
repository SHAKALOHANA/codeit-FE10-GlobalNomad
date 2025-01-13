import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import * as styles from "./detail.css";

export default function Detail() {
  return (
    <div>
      <Header />
    <div className={styles.container}>
      {/* 제목 섹션 */}
      <h1 className={styles.title}>함께 배우면 즐거운 스트릿 댄스</h1>

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
        안녕하세요! 저희 스트릿 댄스 체험을 소개합니다. 저희는 신나고 재미있는 스트릿 댄스 스타일을 가르칩니다. 크럼프는 세계적으로 인기 있는 댄스 스타일로, 어디서든 춤출 수 있습니다.
        저희 체험에서는 새로운 스타일을 접할 수 있고, 즐거운 시간을 보낼 수 있습니다.
        저희는 초보자부터 전문가까지 어떤 수준의 춤추는 사람도 가르칠 수 있도록 준비해놓았습니다. 저희와 함께 즐길 수 있는 시간을 기대해주세요!
        </p>
      </section>

      {/* 지도 섹션 */}
      <section className={styles.section}>
      <br /><hr /><br />
      <div className={styles.mapContainer}>
      <img
          src="https://via.placeholder.com/800x500"
          alt="Map"
          className={styles.mapImage}
        />
        
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
          <label>
            날짜
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
    <Footer />
    </div>
  );
}
