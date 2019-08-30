import styled, { css } from "styled-components"

export const Button = styled.button`
  ${({ theme: { spacing, font, border, colors } }) => css`
    border: none;
    margin: 0;
    padding: ${spacing.big}px;
    width: 100%;

    color: inherit;
    font: inherit;

    line-height: normal;
    text-transform: uppercase;
    font-weight: ${font.weights.bold};
    cursor: pointer;

    &:first-child {
      border-radius: 0 0 0 ${border.radius}px;
    }

    &:last-child {
      border-radius: 0 0 ${border.radius}px 0;
    }

    &:only-child {
      border-radius: 0 0 ${border.radius}px ${border.radius}px;
    }

    background: ${colors.gray[3]};

    &:hover {
      background: ${colors.gray[9]};
      color: ${colors.white};
    }

    &:disabled {
      background: ${colors.gray[2]};
      color: ${colors.gray[5]};
      cursor: progress;
    }

    transition: all 0.3s ease;
  `}
`
