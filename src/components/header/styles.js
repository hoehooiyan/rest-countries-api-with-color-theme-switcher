import styled from 'styled-components'

// import colors from '../../styles/Colors'
import typography from '../../styles/Typography'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.element};
  height: 8rem;
  padding: 0 1.7rem 0 1.6rem;
`

export const SiteTitle = styled.h1`
  color: ${props => props.theme.text};
  font-size: ${typography.fontSize.homepageItem};
  font-weight: ${typography.fontWeight.extraBold};
`

export const DarkModeToggler = styled.div`
  display: flex;
  color: ${props => props.theme.text};
  cursor: pointer;

  .icon {
    margin-right: 0.8rem;
  }
`

export const DarkModeText = styled.p`
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.semiBold};
`
