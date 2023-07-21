import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  h1, h2 , h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  p , button , a , li , h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  li , button {
    font-weight: 700;
  }
`
export default GlobalStyles