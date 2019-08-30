import React from "react"
import { ThemeProvider } from "styled-components"
import { render, fireEvent } from "@testing-library/react"
import Home from "screens/home"
import { PATHS } from "routes"
import theme from "shared-styles/theme"

describe("Home screen", () => {
  it("should have a begin button", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByTestId("begin-btn")).toBeInTheDocument()
  })

  it("should navigate to the quiz screen after clicking in the begin button", () => {
    const nav = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home navigate={nav} />
      </ThemeProvider>
    )

    fireEvent.click(getByTestId("begin-btn"))

    expect(nav).toHaveBeenCalledWith(PATHS.QUIZ)
  })
})
