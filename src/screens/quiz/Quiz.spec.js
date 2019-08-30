import React from "react"
import { ThemeProvider } from "styled-components"
import { render, wait, fireEvent } from "@testing-library/react"
import Quiz from "screens/quiz"
import { PATHS } from "routes"
import theme from "shared-styles/theme"
import * as api from "api/fetchQuestions"

const mockApi = mocks => {
  api.default = jest.fn(() => mocks)
}

describe("Quiz screen", () => {
  beforeEach(() => {
    mockApi(
      Array(10)
        .fill(0)
        .map((_, i) => {
          return {
            question: `Question ${i + 1}`,
            category: `Category ${i + 1}`,
            correctAnswer: `True`
          }
        })
    )
  })

  it("should call the api on mount", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={jest.fn()} />
      </ThemeProvider>
    )

    await wait(() => {
      expect(api.default).toHaveBeenCalled()
    })
  })

  it("should show an error if the api return no results", async () => {
    mockApi([])

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={jest.fn()} />
      </ThemeProvider>
    )

    await wait(() => {
      expect(getByText("Empty results")).toBeInTheDocument()
    })
  })

  it("should show a true and a false button", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={jest.fn()} />
      </ThemeProvider>
    )

    await wait(() => {
      expect(getByTestId("true-btn")).toBeInTheDocument()
      expect(getByTestId("false-btn")).toBeInTheDocument()
    })
  })

  it("should show the category of the current question", async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={jest.fn()} />
      </ThemeProvider>
    )

    await wait(() => {
      expect(getByText("Category 1")).toBeInTheDocument()
      fireEvent.click(getByTestId("true-btn"))
      expect(getByText("Category 2")).toBeInTheDocument()
    })
  })

  it("should show the current question", async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={jest.fn()} />
      </ThemeProvider>
    )

    await wait(() => {
      expect(getByText("Question 1")).toBeInTheDocument()
      fireEvent.click(getByTestId("false-btn"))
      expect(getByText("Question 2")).toBeInTheDocument()
    })
  })

  it("should show the current progress", async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={jest.fn()} />
      </ThemeProvider>
    )

    await wait(() => {
      expect(getByText("1/10")).toBeInTheDocument()
      fireEvent.click(getByTestId("false-btn"))
      expect(getByText("2/10")).toBeInTheDocument()
    })
  })

  it("should navigate to the results screen after the last one", async () => {
    const nav = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Quiz navigate={nav} />
      </ThemeProvider>
    )

    await wait(() => {
      Array(10)
        .fill(0)
        .forEach(() => {
          fireEvent.click(getByTestId("false-btn"))
        })
      expect(nav).toHaveBeenCalledWith(PATHS.RESULTS)
    })
  })
})
