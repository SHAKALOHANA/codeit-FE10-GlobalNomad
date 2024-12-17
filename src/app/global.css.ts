import { globalStyle } from "@vanilla-extract/css";
import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  colors: {
    white: "#ffffff",
    black: "#1b1b1b",
    nomadBlack: "#112211",
    gray1: "#4b4b4b",
    gray2: "#79747e",
    gray3: "#a1a1a1",
    gray4: "#a4a1aa",
    gray5: "#adaeb8",
    gray6: "cbc9cf",
    gray7: "#dddddd",
    gray8: "#eeeeee",
    gray9: "#fafafa",
    green1: "#0b3b2d",
    green2: "#ced8d5",
    green3: "#00ac07",
    red1: "#ff472e",
    red2: "#ffc2ba",
    red3: "#ffe4e0",
    orange1: "#ff7c1d",
    orange2: "#fff4e8",
    yellow1: "#FFc23d",
    blue1: "#0085ff",
    blue2: "#2eb4ff",
    blue3: "#e5f3ff",
  },
});

globalStyle("body", {
  fontFamily: "Pretendard",
  backgroundColor: theme.colors.white,
  color: theme.colors.black,
  margin: 0,
  padding: 0,
});

globalStyle("*", {
  boxSizing: "border-box",
});
