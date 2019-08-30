import React from "react"
import * as S from "./styles"

const Card = ({ children, ...props }) => {
  return <S.Card {...props}>{children}</S.Card>
}

export default Card
