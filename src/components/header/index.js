import React from "react"
import * as S from "./styles"

const Header = ({ percent = 0, children, ...props }) => {
  return (
    <S.Header {...props}>
      {children}
      <S.PercentBar percent={Math.min(percent, 100)} />
    </S.Header>
  )
}

export default Header
