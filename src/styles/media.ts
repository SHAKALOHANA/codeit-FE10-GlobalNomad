export const breakpoints = {
  mobile: '767px',
  tablet: '1199px',
  desktop: '1200px',
};

export const mediaQueries = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (max-width: ${breakpoints.tablet})`,
  desktop: `screen and (min-width: ${breakpoints.desktop})`,
};
