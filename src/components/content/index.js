import React from "react"
import PropTypes from "prop-types"
import Loader from "components/loader"

import * as S from "./styles"

const propTypes = {
  loading: PropTypes.bool
}

const Content = ({ children, loading, ...props }) => {
  if (loading) {
    return (
      <S.Content {...props}>
        <Loader />
      </S.Content>
    )
  }

  const onlyStrings = () => {
    let onlyStrings = true
    React.Children.forEach(children, child => {
      if (typeof child !== "string") {
        onlyStrings = false
      }
    })

    return onlyStrings
  }

  if (!onlyStrings()) {
    return <S.Content {...props}>{children}</S.Content>
  }

  return <S.Content {...props} dangerouslySetInnerHTML={{ __html: children }} />
}

Content.propTypes = propTypes

export default Content
