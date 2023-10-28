import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Container>
    <Wrapper>
       <Logo>OG</Logo>
       <Navagations>
        <Link to="/" >
        <Nav>Home</Nav>
        </Link>
         <Link to="/about">
         <Nav>About</Nav>
         </Link>
        <Link to="/contact">
        <Nav>Contact</Nav>
        </Link>
       </Navagations>
    </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
height: 70px;
/* background-color: cornflowerblue; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid gray;
`
const Wrapper = styled.div`
width: 85%;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
font-size: 20px;
font-weight: 800;
`
const Navagations = styled.div`
display: flex;
`
const Nav = styled.div`
margin: 0px 8px;
font-weight: 600;
cursor: pointer;
`