'use client'

import React, { useEffect, useRef } from "react";

interface MapProps {
  address: string;
}

const Map = ({ address }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kakao Maps API 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9070eccd51c9a7ceee9493b2835e12f7&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (!mapContainer.current) return;

      // Kakao Maps API 객체 초기화
      const kakao = (window as any).kakao;

      const map = new kakao.maps.Map(mapContainer.current, {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 서울 좌표
        level: 3, // 기본 확대/축소 수준
      });

      const geocoder = new kakao.maps.services.Geocoder();

      // 주소를 좌표로 변환
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
          console.error("주소 변환 실패:", status);
        }
      });
    };

    return () => {
      // 스크립트 정리
      document.head.removeChild(script);
    };
  }, [address]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "800px",
        height: "500px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        lineHeight: "500px",
      }}
    >
    </div>
  );
};

export default Map;