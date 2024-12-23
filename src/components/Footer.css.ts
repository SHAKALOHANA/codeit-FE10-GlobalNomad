import { style } from "@vanilla-extract/css";
import { theme } from "../app/global.css";

export const FooterContainer = style({
  ...theme.text["xs-semibold"],
  backgroundColor: theme.colors.nomadBlack,
  color: theme.colors.gray3,
  padding: "32px 360px 108px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "60px",
});



export const FooterMenu =style({
  display: "flex",
  gap: "30px",
});

export const FooterLink=style({
  color: theme.colors.gray3,
  textDecoration: 'none',
})

export const SocialMedia = style({
  display: "flex",
  gap: "12px",
})