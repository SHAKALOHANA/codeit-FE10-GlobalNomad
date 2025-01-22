export const initializeMap = (address: string) => {
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9070eccd51c9a7ceee9493b2835e12f7&autoload=false`;
  script.onload = () => {
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      // 주소 -> 좌표 변환
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new kakao.maps.Marker({ map, position: coords });
          map.setCenter(coords);
        }
      });
    });
  };
  document.head.appendChild(script);
};