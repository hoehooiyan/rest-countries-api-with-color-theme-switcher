import styled from 'styled-components'

import typography from '../../styles/Typography'

export const SearchBar = styled.form`
  display: inline-block;
  margin: 2.4rem 1.6rem 4rem;
  height: 4.8rem;
  position: relative;

  .icon {
    color: ${props => props.theme.input};
    font-size: 15.56px;
    position: absolute;
    left: 3.2rem;
    top: 1.6rem;
  }
`

export const Input = styled.input`
  background-color: ${props => props.theme.element};
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.input};
  font-family: ${typography.primaryFont};
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.regular};
  height: 4.8rem;
  outline: none;
  padding: 1.6rem 15.3rem 1.6rem 7.4rem; // !FIXME 
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.input};
  }
`
