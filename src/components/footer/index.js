import React from "react"
import PropTypes from "prop-types"
import Button from "components/button"
import * as S from "./styles"

const propTypes = {
  loading: PropTypes.bool
}

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

Footer.propTypes = propTypes

export default Footer
