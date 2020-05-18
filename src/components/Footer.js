import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
`

const StyledText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: var(--xsFont);
  font-weight: var(--extra);
  margin: 8rem auto 2rem;
  text-align: center;
  text-transform: lowercase;

  a {
    color: ${(props) => props.theme.text};

    &:hover {
      text-decoration: none;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        Made with ❤ by <a href='https://twitter.com/hooiyancodes'>Hooi Yan</a>
      </StyledText>
    </StyledFooter>
  )
}

export default Footer
