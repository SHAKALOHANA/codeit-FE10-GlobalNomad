import { style } from "@vanilla-extract/css";
import { theme } from "../app/global.css";

export const headerStyle = style({
	display: "flex",
	justifyContent: "space-between",
	borderBottom: `1px solid ${theme.colors.gray7}`,
	margin: "0 10px",
});

export const linkStyle = style({
	display: "flex",
	alignItems: "center",
	gap: "25px",
	color: "#0070f3",
});

export const linkAtrribute = style({
	textDecoration: "none",
	color: theme.colors.black,
	fontSize: "14px",
	fontWeight: "500px",
});
