import React from "react"

const Emoji = ({ children, description, ...props }) => {
  return (
    <span role="img" aria-label={description} {...props}>
      {children}
    </span>
  )
}

export default Emoji
