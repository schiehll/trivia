import { screenRoutes } from "routes"

const preloadScreen = routePath => {
  const screen = screenRoutes.find(
    screenRoute => screenRoute.path === routePath
  )

  if (screen) screen.component.preload()
}

export default preloadScreen
