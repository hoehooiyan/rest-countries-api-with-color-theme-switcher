import styled from 'styled-components'

import typography from '../../styles/Typography'

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.regular};
  position: relative;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.element};
  border-radius: 5px;
  /* box-shadow: 0 2px 9px rgba(0, 0, 0, 0.5); */
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: ${typography.fontWeight.regular};
  height: 4.8rem;
  margin: 0 15.9rem 0.4rem 1.6rem;
  padding: 1.6rem 1.9rem 1.6rem 2.4rem;
  width: 20rem;

  .icon {
    font-size: 10px;
  }
`

export const Text = styled.p`
  font-weight: ${typography.fontWeight.regular};
`

export const Dropdown = styled.div`
  background-color: ${props => props.theme.element};
  border-radius: 5px;
  margin: 0 15.9rem 0 1.6rem;
  padding: 1.6rem 2.4rem;
  height: 14.4rem;
  width: 20rem;
  position: absolute;
  top: 5.3rem;
  z-index: 10;
`

export const Region = styled.li`
  color: ${props => props.theme.text};
  cursor: pointer;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`
