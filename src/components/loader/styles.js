import styled from "styled-components"
import rotate from "shared-styles/animations/rotate"

export const Spinner = styled.span`
  display: inline-block;
  font-size: 3.5rem;
  animation: ${rotate} 2s linear infinite;
`
