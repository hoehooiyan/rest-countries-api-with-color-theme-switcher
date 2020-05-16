import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    /* TYPOGRAPHY */
    --font: 'Nunito Sans', sans-serif;
    --xsFont: 1.2rem;
    --smFont: 1.4rem;
    --mdFont: 1.6rem;
    --lgFont: 1.8rem;
    --xlFont: 2.4rem;
    --light: 300;
    --normal: 400;
    --semi: 600;
    --extra: 800;

    /* BREAKPOINT */
    --xs: 375px;
    --sm: 480px;
    --md: 768px;
    --lg: 992px;
    --xl: 1440px;

    /* OTHER */
    --shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    --radius: 5px;
  }

  /* CSS RESET */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme.background};
    font-family: var(--font);
    font-size: var(--smFont);
    margin: 0 auto;
  }
`
