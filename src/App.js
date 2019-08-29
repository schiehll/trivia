import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import theme from "shared-styles/theme"
import GlobalStyles from "shared-styles/global"
import Routes from "routes"

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  </ThemeProvider>
)

export default App
