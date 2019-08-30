import styled, { css } from "styled-components"

export const Header = styled.header`
  ${({ theme: { colors, spacing, font, border } }) => css`
    position: relative;

    h1 {
      padding: 0;
      margin: 0 0 ${spacing.base}px 0;
      font-size: ${font.sizes.default}px;
      font-weight: ${font.weights.bold};
    }

    h2 {
      margin: 0;
      padding: 0;
      font-size: ${font.sizes.small}px;
      font-weight: ${font.weights.normal};
      color: ${colors.gray[6]};
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${spacing.big}px;
    border-bottom: ${border.size}px solid ${colors.border};
  `}
`

export const PercentBar = styled.div`
  ${({ theme: { border, colors }, percent }) => css`
    display: inline-box;
    position: absolute;
    bottom: -${border.size}px;
    left: 0;
    height: ${border.size}px;
    width: ${percent}%;
    background-color: ${colors.gray[9]};
    transition: width 0.5s ease;
  `}
`
