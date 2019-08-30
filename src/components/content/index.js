import React from "react"
import Loader from "components/loader"

import * as S from "./styles"

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

export default Content
