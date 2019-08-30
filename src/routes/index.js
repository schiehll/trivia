import React, { Suspense } from "react"
import { Router } from "@reach/router"
import lazyWithPreload from "utils/lazyWithPreload"
import PageLoader from "components/page-loader"

export const PATHS = {
  HOME: "/",
  QUIZ: "/quiz",
  RESULTS: "/results",
  NO_MATCH: "*"
}

// preval is handled by babel-plugin-preval
// eslint-disable-next-line no-undef
const screens = preval`
  const fs = require('fs')
  const path = require('path')
  module.exports = fs.readdirSync(path.resolve(__dirname, '../screens'))
`

export const screenRoutes = screens.reduce((screenRoutes, screen) => {
  const Screen = lazyWithPreload(() =>
    import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`)
  )

  const path = PATHS[screen.replace(/-/, "_").toUpperCase()]

  if (!path) return screenRoutes

  return screenRoutes.concat({
    screen,
    path,
    component: Screen
  })
}, [])

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Router>
      {screenRoutes.map(({ screen, path, component: Screen }) => {
        return <Screen key={screen} path={path} default={path === "*"} />
      })}
    </Router>
  </Suspense>
)

export default Routes
