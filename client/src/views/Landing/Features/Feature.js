import React from "react"
import styled from "styled-components"
import FontAwesome from "react-fontawesome"

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 5px;
`

const Description = styled.p`
  color: gray;
  margin: 0;
`

const Feature = props => (
  <Wrapper>
    <FontAwesome name={props.icon} size="4x"/>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
  </Wrapper>
)

export default Feature
