import React from "react"
import * as S from "./styles"

const Footer = ({ children, ...props }) => {
  return <S.Footer {...props}>{children}</S.Footer>
}

export default Footer
