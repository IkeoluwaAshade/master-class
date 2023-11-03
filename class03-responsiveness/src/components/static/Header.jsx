import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Social>Social Media Dashboard</Social>
                <small>Total Followers 23,004</small>
            </Logo>

            <Toggle>
                <span>dark mode</span><Icon>Toggle Icon</Icon>
            </Toggle>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
/* background-color: aqua; */
width: 100%;
height: 120px;

display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
/* background-color: gray; */
width: 85%;

display: flex;
justify-content: space-between;
align-items: center;  
`

const Logo = styled.div`
small {
    font-size: 14px;
    font-weight: 600;
}
`

const Social = styled.div`
font-size: 24px;
font-weight: 800;
`

const Toggle = styled.div`
display: flex;
`

const Icon = styled.div`

`