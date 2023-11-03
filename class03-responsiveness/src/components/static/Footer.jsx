import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <h3>03 November, 2023 (Friday)</h3>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: #123456;
    color: #fff;
    font-size: 16px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div `
    
`