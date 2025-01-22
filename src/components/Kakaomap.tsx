import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState, useEffect } from "react";

interface MapProps {
  address: string;
}

export default function BasicMap() {
  useKakaoLoader();
  const [center, setCenter] =useState({
    center: { lat: 33.55635, lng: 126.795841 },
  });
/*
  const [searchAddress, SetSearchAddress] = useState(address);
  useEffect(() =>  {
    const kakao = window.kakao;

    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0]
        setCenter({
          center: { lat: newSearch.y, lng: newSearch.x }
        })
      }
    };
      geocoder.addressSearch(`${searchAddress}`, callback);
  }, []);
*/
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={center.center}
      style={{
        // 지도의 크기
        width: "100%",
        height: "500px",
      }}
      level={3} // 지도의 확대 레벨
    ><MapMarker position={center.center}> </MapMarker>
    </Map>
  );
}