import React from "react"
import * as S from "./styles"

const Content = ({ children, ...props }) => {
  return <S.Content {...props}>{children}</S.Content>
}

export default Content
