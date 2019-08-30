import React from "react"
import Button from "components/button"
import * as S from "./styles"

const Footer = ({ children, loading, ...props }) => {
  if (loading) {
    return (
      <S.Footer {...props}>
        <Button disabled>Loading...</Button>
      </S.Footer>
    )
  }

  return <S.Footer {...props}>{children}</S.Footer>
}

export default Footer
