import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useEffect } from "react";

export default function BasicMap() {
  useKakaoLoader()
  const geocoder = new kakao.maps.services.Geocoder();
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.55635, lng: 126.795841
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "500px",
      }}
      level={3} // 지도의 확대 레벨
    ><MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> </MapMarker>
    </Map>
  )
}