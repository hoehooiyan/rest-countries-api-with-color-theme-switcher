import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    /* TYPOGRAPHY */
    --font: 'Nunito Sans', sans-serif;
    --smallFont: 1.4rem;
    --regularFont: 1.6rem;
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
    font-size: var(--regular-font);
    margin: 0 auto;
    max-width: var(--xl);
  }
`
