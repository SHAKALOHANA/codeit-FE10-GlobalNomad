'use client';

import React, { useEffect, useRef } from 'react';

interface MapProps {
  address: string;
}

const KakaoMap = ({ address }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1) Kakao 지도 스크립트 로드 (autoload=false 추가)
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9070eccd51c9a7ceee9493b2835e12f7&libraries=services';
    script.async = true;
    document.head.appendChild(script);

    // 2) 스크립트 로드 후 kakao.maps.load() 내에서 지도 초기화
    script.onload = () => {
      const { kakao } = window as any;

      // kakao.maps.load 안에서 지도 생성 및 주소 변환
      kakao.maps.load(() => {
        if (!mapContainer.current) return;

        // 지도 생성
        const map = new kakao.maps.Map(mapContainer.current, {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 서울 좌표
          level: 3,
        });

        // 주소 → 좌표 변환
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 지도 중심 이동
            map.setCenter(coords);

            // 마커 생성
            new kakao.maps.Marker({
              map,
              position: coords,
            });
          } else {
            console.error('주소 변환 실패:', status);
          }
        });
      });
    };

    // 3) 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }, [address]);


  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
      }}
    />
  );
};

export default KakaoMap;