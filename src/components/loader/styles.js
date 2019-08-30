import styled from "styled-components"
import rotate from "shared-styles/animations/rotate"
import Emoji from "components/emoji"

export const Spinner = styled(Emoji)`
  display: inline-block;
  font-size: 3.5rem;
  animation: ${rotate} 2s linear infinite;
`
