import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 /* @font-face {
   font-family: "Kumbh Sans";
   src: url('/static/KumbhSans-Medium.ttf');
   font-weight: normal;
   font-style: normal;
 } */
html {
    --orange: hsl(26, 100%, 55%);
    --pale-orange: hsl(25, 100%, 94%);

    --dark-blue: hsl(220, 13%, 13%);
    --dark-grayish-blue: hsl(219, 9%, 45%);
    --grayish-blue: hsl(220, 14%, 75%);

    --light-grayish-blue: hsl(223, 64%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    font-family: --apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif; 
}
body {
    margin: 0;
    padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
*, *::before, *::after {
  box-sizing: border-box;
}
`