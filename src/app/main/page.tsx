import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as style from './main.css';
import Dropdown from "@/components/Dropdown";
import CustomButton from "@/components/CustomButton";


export default function Main() {
  return (
    <div>
      <Header />
    <div className={style.container}>
      <section className={style.sectionWall}>
        <div className={style.walltextContainer}>
          <h1  className={style.hText}>함께 배우면 즐거운</h1>
          <h1 className={style.hText}> 스트릿 댄스</h1>
          <p className={style.pText}>1월의 인기 체험 BEST🔥</p>
        </div>
      </section>
      <div className={style.searchBar}>
        <div className={style.searchBarText}>무엇을 체험하고 싶으신가요?</div>
        <form className={style.searchBarForm}>
          <input className={style.searchBarInput} type="text" placeholder="내가 원하는 체험은" />
          <CustomButton mode="search" />
        </form>
      </div>
      <div className={style.content}>
        <section className={style.section}>
          <div className={style.sectionTitle}>
            <h2 className={style.sectionTitleH}>🔥인기 체험</h2>
            <div className={style.sectionTitlePage}>
              <p className={style.PaginationArrow}>&lt;</p>
              <p className={style.PaginationArrow}>&gt;</p>
            </div>
          </div>
          <div className={style.cardHotContainer}>
            <div className={style.cardHot}>
              <img className={style.cardImage} src="/images/dance.png" alt="스트릿 댄스" />
              <div className={style.cardText}>
                <p className={style.cardH}>
                  함께 배우면 즐거운<br />
                  스트릿 댄스
                </p>
                <p className={style.cardP}>₩38,000 <small className={style.cardSmall}>/ 인</small></p>
              </div>
            </div>
            <div className={style.cardHot}>
              <img className={style.cardImage} src="/images/bridge.png" alt="다리 건너기" />
              <div className={style.cardText}>
                <p className={style.cardH}>
                  연인과 사랑의 징검<br />
                  다리 건너기
                </p>
                <p className={style.cardP}>₩5,600 <small className={style.cardSmall}>/ 인</small></p>
              </div>
            </div>
            <div className={style.cardHot}>
              <img className={style.cardImage} src="/images/vr.png" alt="VR 게임" />
              <div className={style.cardText}>
                <p className={style.cardH}>
                  VR 게임 마스터<br />
                  하는 법
                </p>
                <p className={style.cardP}>₩38,000 <small className={style.cardSmall}>/ 인</small></p>
              </div>
            </div>
          </div>
        </section>
        <div className={style.tagContainer}>
          <div className={style.tags}>문화 · 예술</div>
        </div>
        <section className={style.section}>
          <div className={style.sectionTitle}>
          <h2 className={style.sectionTitleH}>🧳 모든 체험</h2>
          </div>
          <div className={style.cardActivityContainer}>
            <div className={style.cardActivity}>
              <img className={style.cardActivityImage} src="/images/fiord.png" alt="피오르 체험" />
              <p> 3.9(108)</p>
              <h3 className={style.cardH}>피오르 체험</h3>
              <p className={style.cardP}>₩42,800 <small className={style.cardSmall}>/ 인</small></p>
            </div>
          </div>
        </section>
        <div className={style.pagination}>
          <button className={style.pagBu}>&lt;</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button className={style.pagBu} key={page}>{page}</button>
          ))}
          <button className={style.pagBu}>&gt;</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};