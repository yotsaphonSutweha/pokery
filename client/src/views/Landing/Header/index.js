import React from 'react'
import styled from 'styled-components'
import Button from '../../../shared/Button'
import Navbar from '../Navbar'
import Container from '../Container'
import Section from '../Section'

const Wrapper = styled.div`
  background-color: #2e2e2e;
  color: white;
  ${'' /* padding: 4em 0; */}

  @media screen and (min-width: 700px) {
    ${'' /* padding: 6em 0; */}
  }
`

const Title = styled.h1`
  margin: 0;
`

const Tagline = styled.p`
  margin-top: 0;
  color: white;
`


const Header = props => (
  <Wrapper>
    <Navbar />
    <Container>
      <div className="grid">
       <div className="grid__col grid__col--2-of-4">
         <Section>
           <Title>Pokery</Title>
           <Tagline> Sign up to Pokery to find a poker game near you and to enhance your poker playing skills. </Tagline>
           <Button>Sign Up</Button>
         </Section>
       </div>
       <div className="grid__col grid__col--2-of-4">
          {/* <img src="/img/phone.png" alt="phone"/> */}
       </div>
     </div>
    </Container>
  </Wrapper>
)

export default Header
