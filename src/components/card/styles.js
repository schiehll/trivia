import styled, { css } from "styled-components"

export const Card = styled.div`
  ${({ theme: { colors, spacing, border, elevation } }) => css`
    width: 700px;
    height: auto;
    background-color: ${colors.white};
    margin: ${spacing.huge}px;
    border-radius: ${border.radius}px;

    ${elevation(3)}
  `}
`
