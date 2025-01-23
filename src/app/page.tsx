'use client';

import React, {
  useRef,
  useState,
  useCallback,
  FormEvent,
  useEffect,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as style from './main.css';
import CustomButton from '@/components/CustomButton';
import { usePopularActivities } from '@/hooks/usePopularActivities';
import { useAllActivities } from '@/hooks/useAllActivities';
import { useResponsivePageSize } from '@/hooks/useResponsivePageSize';
import { ActivitiesProps } from '@/app/api/activitiesList';
import DropdownMenu from '@/components/Dropdown/DropdownMenu';
import DropdownBox from '@/components/Dropdown/DropdownBox';
import * as styles from '../components/Dropdown.css';

const categories = [
  '문화 · 예술',
  '식음료',
  '스포츠',
  '투어',
  '관광',
  '웰빙',
] as const;

interface DropdownItem {
  label: string;
  value: string;
}

const items: DropdownItem[] = [
  { label: '가격이 낮은 순', value: 'price_asc' },
  { label: '가격이 높은 순', value: 'price_desc' },
];

// const sortOptions = ['price_asc', 'price_desc'] as const;

// 1) 중복 제거 함수

function removeDuplicateActivities(arr: ActivitiesProps[]): ActivitiesProps[] {
  const seen = new Set<number>();
  return arr.filter((item) => {
    if (seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
}

export default function Main() {
  /**
   * [인기 체험] 섹션: 무한스크롤
   */
  const {
    data: popularData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePopularActivities();

  // 모든 페이지 데이터를 합쳐 단일 배열로
  const rawPopularActivities =
    popularData?.pages.flatMap((p) => p.activities) || [];

  // 2) 중복 ID 제거
  const popularActivities = removeDuplicateActivities(rawPopularActivities);

  // 스크롤 컨테이너 (인기 체험 카드 리스트) 참조
  const cardHotContainerRef = useRef<HTMLDivElement>(null);

  // < 버튼 → 왼쪽 스크롤
  const handleScrollLeft = useCallback(() => {
    if (!cardHotContainerRef.current) return;
    cardHotContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  }, []);

  // > 버튼 → 오른쪽 스크롤 + 다음 페이지 fetch
  const handleScrollRight = useCallback(() => {
    if (!cardHotContainerRef.current) return;
    // 가로로 400px 이동
    cardHotContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });

    // 아직 다음 페이지가 있고, 현재 fetch 중이 아니라면 다음 페이지 요청
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const firstPopular = popularActivities[0]; // 첫 번째 인기 체험

  /**
   * --------------------------------------------------------------------------------
   * 2) [모든 체험] 섹션: 페이지네이션 + 카테고리 + 정렬 + 반응형 pageSize
   * --------------------------------------------------------------------------------
   */
  // 브라우저 너비에 따라 8 or 9 or 4
  const responsiveSize = useResponsivePageSize();

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedSort, setSelectedSort] = useState<
    'price_asc' | 'price_desc'
  >();
  const [keywordSearch, setKeywordSearch] = useState('');

  // 한 페이지에 responsiveSize 개씩
  const { data: allActivitiesData, isLoading } = useAllActivities({
    page,
    size: responsiveSize, // 반응형 크기
    sort: selectedSort,
    category: selectedCategory,
    keyword: keywordSearch.trim() ? keywordSearch : undefined,
  });

  // 페이지네이션을 위해 totalCount 사용
  const totalCount = allActivitiesData?.totalCount || 0;
  // totalPage = totalCount / responsiveSize
  const totalPage = Math.ceil(totalCount / responsiveSize);

  // 페이지 이동
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setPage((prev) => Math.min(prev + 1, totalPage));
  const handlePageClick = (pageNumber: number) => setPage(pageNumber);

  // 카테고리 변경
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1); // 필터 바뀌면 1페이지로
  };

  // 가격 정렬 변경
  const handleSortChange = (sort: 'price_asc' | 'price_desc') => {
    setSelectedSort(sort);
    setPage(1);
  };

  // 검색 폼 제출 시
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
  };

  // 실제 '모든 체험' 목록 데이터
  const allActivities = allActivitiesData?.activities || [];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleItemSelect = (value: 'price_asc' | 'price_desc') => {
    setSelectedValue(value);
    handleSortChange(value);
    setIsMenuOpen(false);
  };

  const handleDropdownSelect = (value: string) => {
    // 안전하게 조건 검사
    if (value === 'price_asc' || value === 'price_desc') {
      handleItemSelect(value);
    } else {
      // 혹은 무시하거나 에러 처리
      console.warn('Unexpected sort value:', value);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedLabel =
    items.find((item) => item.value === selectedValue)?.label || '가격';

  return (
    <div>
      <div className={style.container}>
        {/* ----------------------------------------------------------------
            섹션 1) 메인 배너
         ----------------------------------------------------------------*/}
        <section className={style.sectionWall}>
          <div className={style.bannerTextWrapper}>
            <h1 className={style.hText}>
              {firstPopular ? '함께 배우면 즐거운' : ''}
            </h1>
            <h1 className={style.hText}>
              {firstPopular ? firstPopular.title : '로딩중...'}
            </h1>
            <p className={style.pText}>
              {firstPopular ? `1월의 인기 체험 BEST🔥` : ''}
            </p>
            <Image
              className={style.bannerImage}
              src={
                firstPopular?.bannerImageUrl ??
                '/images/default_activity_image.jpg'
              }
              alt={firstPopular?.title ?? '기본 이미지'}
              fill
            />
          </div>
        </section>

        {/* ---------------------------
          검색 바 (keyword 입력)
        --------------------------- */}
        <div className={style.searchBar}>
          <div className={style.searchBarText}>무엇을 체험하고 싶으신가요?</div>
          <form className={style.searchBarForm} onSubmit={handleSearchSubmit}>
            <input
              className={style.searchBarInput}
              type="text"
              placeholder="내가 원하는 체험은"
              value={keywordSearch}
              onChange={(e) => setKeywordSearch(e.target.value)}
            />
            <CustomButton mode="search" type="submit" />
          </form>
        </div>

        <div className={style.content}>
          {/** ----------------------------------------------------------------
               [인기 체험] 섹션 (무한 스크롤 + 가로 스크롤)
           ----------------------------------------------------------------*/}
          <section className={style.section}>
            <div className={style.sectionTitle}>
              <h2 className={style.sectionTitleH}>🔥인기 체험</h2>
              <div className={style.sectionTitlePage}>
                {/* 왼쪽 화살표 */}
                <p className={style.PaginationArrow} onClick={handleScrollLeft}>
                  &lt;
                </p>
                {/* 오른쪽 화살표 */}
                <p
                  className={style.PaginationArrow}
                  onClick={handleScrollRight}
                >
                  &gt;
                </p>
              </div>
            </div>

            <div className={style.cardHotContainer} ref={cardHotContainerRef}>
              {popularActivities.map((activity) => (
                <div className={style.cardHot} key={activity.id}>
                  <Link
                    href={`/activities/${activity.id}`}
                    className={style.linkLine}
                  >
                    <Image
                      className={style.cardImage}
                      src={activity.bannerImageUrl}
                      alt={activity.title}
                      fill
                    />
                  </Link>
                  <div className={style.cardText}>
                    <p className={style.cardH}>{activity.title}</p>
                    <p className={style.cardP}>
                      ₩{activity.price.toLocaleString()}{' '}
                      <small className={style.cardSmall}>/ 인</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ----------------------------------------------------------------
              카테고리 / 정렬 선택 영역
             ----------------------------------------------------------------*/}
          <div className={style.TagAndDropdown}>
            <div className={style.tagContainer}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={style.tags}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={style.tagContainer}>
              <div className={styles.dropdown} ref={dropdownRef}>
                <DropdownBox
                  onClick={handleButtonClick}
                  label={selectedLabel}
                />
                <div className={style.dropdownContainer}>
                  <DropdownMenu
                    items={items}
                    onSelect={handleDropdownSelect}
                    isVisible={isMenuOpen}
                  />
                </div>
              </div>
            </div>
          </div>

          {/** ----------------------------------------------------------------
               [모든 체험] 섹션: useAllActivities (페이지네이션)
           ----------------------------------------------------------------*/}
          <section className={style.section}>
            <div className={style.sectionTitle}>
              <h2 className={style.sectionTitleH}>🧳 모든 체험</h2>
            </div>

            {isLoading && <p>로딩 중...</p>}
            {!isLoading && (
              <div className={style.cardActivityContainer}>
                {allActivities.map((activity) => (
                  <div className={style.cardActivity} key={activity.id}>
                    <Link
                      href={`/activities/${activity.id}`}
                      className={style.linkLine}
                    >
                      <Image
                        className={style.cardActivityImage}
                        src={activity.bannerImageUrl}
                        alt={activity.title}
                        width={200}
                        height={120}
                      />
                      <div className={style.cardTextAll}>
                        <p className={style.ratingText}>
                          ⭐ {activity.rating}({activity.reviewCount})
                        </p>

                        <h3 className={style.cardAllTitle}>{activity.title}</h3>

                        <p className={style.cardP}>
                          ₩{activity.price.toLocaleString()}{' '}
                          <small className={style.cardSmall}>/ 인</small>
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 페이지네이션 버튼 */}
          <div className={style.pagination}>
            <button
              className={style.pagBu}
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              &lt;
            </button>

            {Array.from({ length: totalPage }).map((_, idx) => {
              const pageNumber = idx + 1;
              return (
                <button
                  key={pageNumber}
                  className={style.pagBu}
                  onClick={() => handlePageClick(pageNumber)}
                  disabled={pageNumber === page}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              className={style.pagBu}
              onClick={handleNextPage}
              disabled={page === totalPage}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
