import styled, { css } from "styled-components"

export const Content = styled.main`
  ${({ theme: { spacing, font } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${spacing.huge}px;
    min-height: 400px;
    text-align: center;
    font-size: ${font.sizes.big}px;
  `}
`
