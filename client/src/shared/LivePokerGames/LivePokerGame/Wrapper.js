import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
   border: 1px solid rgba(0, 0, 0, 0.1);
   margin-bottom: 1em;
   color: ${props => props.theme.text_color};
`

export default props => <Wrapper>{props.children}</Wrapper>;
