import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

type KakaoMapProps = {
  address: string;
};

const KakaoMap: React.FC<KakaoMapProps> = ({ address }) => {
  const [position, setPosition] = React.useState<{ lat: number; lng: number } | null>(null);

  React.useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 주소를 좌표로 변환
    geocoder.addressSearch(address, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = {
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        };
        setPosition(coords); // 변환된 좌표를 상태에 저장
      } else {
        console.error('주소를 찾을 수 없습니다.');
      }
    });
  }, [address]);

  if (!position) {
    return <div>지도를 불러오는 중...</div>;
  }

  return (
    <Map
      center={position} // 지도의 중심 좌표 설정
      style={{ width: '100%', height: '100%' }} // 지도의 크기 설정
      level={3} // 확대 레벨
    >
      <MapMarker position={position} />
    </Map>
  );
};

export default KakaoMap;
