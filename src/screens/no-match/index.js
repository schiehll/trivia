import React from "react"
import ErrorMessage from "components/error-message"

const NoMatch = ({ navigate }) => (
  <ErrorMessage error="Page not found" navigate={navigate} />
)

export default NoMatch
