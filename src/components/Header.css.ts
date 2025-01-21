import { style } from "@vanilla-extract/css";
import { theme } from "../app/global.css";

export const headerStyle = style({
	display: "flex",
	justifyContent: "space-between",
	borderBottom: `1px solid ${theme.colors.gray7}`,
	padding: "0px 360px",
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
	...theme.text["xs-medium"],
});
