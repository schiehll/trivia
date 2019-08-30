import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  description: PropTypes.string.isRequired
}

const Emoji = ({ children, description, ...props }) => {
  return (
    <span role="img" aria-label={description} {...props}>
      {children}
    </span>
  )
}

Emoji.propTypes = propTypes

export default Emoji
