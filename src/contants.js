export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };
  //import { device } from "./../../../contants";


  //css
// @media ${device.laptop} {}
// @media ${device.tablet} {}
// @media ${device.mobile} {}
// @media ${device.mobileL} {}
// @media ${device.mobileM} {}
// @media ${device.mobileS} {}