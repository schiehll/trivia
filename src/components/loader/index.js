// S.Spinner is already a span, no need to be mad at us, eslint
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import * as S from "./styles"

const Loader = () => {
  return (
    <S.Spinner role="img" aria-label="spinner">
      🌀
    </S.Spinner>
  )
}

export default Loader
