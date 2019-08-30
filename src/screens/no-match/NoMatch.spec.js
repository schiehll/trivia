import React from "react"
import { ThemeProvider } from "styled-components"
import { render, fireEvent } from "@testing-library/react"
import NoMatch from "screens/no-match"
import { PATHS } from "routes"
import theme from "shared-styles/theme"

describe("NoMatch screen", () => {
  it("should have a go home button", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NoMatch navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByTestId("go-home-btn")).toBeInTheDocument()
  })

  test("should navigate to the home screen after clicking in the go home button", () => {
    const nav = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NoMatch navigate={nav} />
      </ThemeProvider>
    )

    fireEvent.click(getByTestId("go-home-btn"))

    expect(nav).toHaveBeenCalledWith(PATHS.HOME)
  })
})
