import styled, { css } from "styled-components"

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  ${({ theme: { font, spacing } }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    font-size: ${font.sizes.small}px;

    &:not(:first-child) {
      margin-top: ${spacing.big}px;
    }

    > span {
      margin-right: ${spacing.medium}px;
    }
  `}
`
