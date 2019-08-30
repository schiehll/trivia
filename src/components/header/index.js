import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"

const propTypes = {
  percent: PropTypes.number
}

const Header = ({ percent = 0, children, ...props }) => {
  return (
    <S.Header {...props}>
      {children}
      <S.PercentBar percent={Math.min(percent, 100)} />
    </S.Header>
  )
}

Header.propTypes = propTypes

export default Header
