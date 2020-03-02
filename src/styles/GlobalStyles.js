import { createGlobalStyle } from 'styled-components'

import breakpoints from './Breakpoints'
import typography from './Typography'

export default createGlobalStyle`
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
    background-color: ${props => props.theme.background};
    font-family: ${typography.primaryFont};
    font-size: ${typography.fontSize.homepageItem};
    max-width: ${breakpoints.largeDesktop};
  }
`
