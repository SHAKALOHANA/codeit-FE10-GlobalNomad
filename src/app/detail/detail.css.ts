import { style } from "@vanilla-extract/css";
import { theme } from '@/app/global.css';


export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "left",
});

export const imageSection = style({
  display: "flex",
  gap: "10px",
  width: '100%',
});

export const mainImageContainer = style({
  width: '50%',
  height: '500px',
});

export const mainImage = style({
  width: "100%",
  height: '100%',
  objectFit: 'cover',
  borderRadius: "8px",
});

export const thumbnailContainer = style({
  display: "grid",
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: "5px",
  width: '50%',
});

export const thumbnail = style({
  width: "100%",
  height: '100%',
  objectFit: 'cover',
  borderRadius: "8px",
});

export const contentsContatiner = style({
  width: '1200px',
  display: 'flex',
  gap: '20px',
});

export const sections = style({
  width: '70%',
});

export const registerContainer = style({
  width: '30%',
});

export const section = style({
  marginTop: "30px",
});

export const paragraph = style({
  lineHeight: "1.6",
});

export const mapContainer = style({
  width: '100%',
  height: '500px',
  backgroundColor: theme.colors.gray7,
  borderRadius: "10px",
});

export const mapImage = style({
  width: "100%",
});

export const bookingForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "300px",
});

export const input = style({
  padding: "8px",
  fontSize: "1rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
});

export const button = style({
  padding: "10px",
  fontSize: "1rem",
  backgroundColor: theme.colors.nomadBlack,
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.green1,
    },
  },
});

export const review = style({
  borderBottom: "1px solid #ddd",
  padding: "10px 0",
});

export const reviewTitle = style({
  fontSize: "1.2rem",
  marginBottom: "5px",
});

export const reviewParagraph = style({
  margin: "0",
  lineHeight: "1.5",
});

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '50px',
});

export const pagBu = style({
  padding: '5px 10px',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  cursor: 'pointer',
  width: '55px',
  height: '55px',
});