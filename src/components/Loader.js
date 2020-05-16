import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spin = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledLoader = styled.div`
  border: 10px solid ${(props) => props.theme.background};
  border-radius: 50%;
  border-top: 10px solid ${(props) => props.theme.text};
  width: 80px;
  height: 80px;
  animation: ${Spin} 0.8s linear infinite;
`

const Loader = () => {
  return <StyledLoader />
}

export default Loader