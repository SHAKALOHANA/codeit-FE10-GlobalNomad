import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "9070eccd51c9a7ceee9493b2835e12f7",
    libraries: ["clusterer", "drawing", "services"],
  })
}