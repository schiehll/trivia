import React from "react"
import * as S from "./styles"

const PageWrapper = ({ children, ...props }) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default PageWrapper
