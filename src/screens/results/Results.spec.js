import React from "react"
import { ThemeProvider } from "styled-components"
import { render, fireEvent } from "@testing-library/react"
import Results from "screens/results"
import { PATHS } from "routes"
import theme from "shared-styles/theme"
import * as store from "stores/answers"

const mockStore = mocks => {
  store.default = jest.fn(() => mocks)
}

describe("Results screen", () => {
  beforeEach(() => {
    mockStore({
      answers: [],
      getTotalCorrectAnswers: jest.fn(() => 0),
      reset: jest.fn()
    })
  })

  it("should have a go home button and error message if there's no answers", () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByTestId("go-home-btn")).toBeInTheDocument()
    expect(getByText("No answers found")).toBeInTheDocument()
  })

  it("should navigate to the home screen after the go home button click", () => {
    const nav = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={nav} />
      </ThemeProvider>
    )

    fireEvent.click(getByTestId("go-home-btn"))
    expect(nav).toHaveBeenCalledWith(PATHS.HOME)
  })

  it("should show the list of answers", () => {
    mockStore({
      answers: [
        { question: "Some question 1", isCorrect: true },
        { question: "Some question 2", isCorrect: false }
      ],
      getTotalCorrectAnswers: jest.fn(() => 10),
      reset: jest.fn()
    })

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByText("Some question 1")).toBeInTheDocument()
    expect(getByText("Some question 2")).toBeInTheDocument()
  })

  it("should show the score with a encouraging message when it's smaller than 6", () => {
    mockStore({
      answers: [
        { question: "Some question 1", isCorrect: true },
        { question: "Some question 2", isCorrect: false }
      ],
      getTotalCorrectAnswers: jest.fn(() => 5),
      reset: jest.fn()
    })

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByText("5/10")).toBeInTheDocument()
    expect(getByText("You can do better!")).toBeInTheDocument()
  })

  it("should show the score with a congrats message when it's bigger than 5", () => {
    mockStore({
      answers: [
        { question: "Some question 1", isCorrect: true },
        { question: "Some question 2", isCorrect: false }
      ],
      getTotalCorrectAnswers: jest.fn(() => 6),
      reset: jest.fn()
    })

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByText("6/10")).toBeInTheDocument()
    expect(getByText("Well done!")).toBeInTheDocument()
  })

  it("should have a play again button", () => {
    mockStore({
      answers: [
        { question: "Some question 1", isCorrect: true },
        { question: "Some question 2", isCorrect: false }
      ],
      getTotalCorrectAnswers: jest.fn(() => 6),
      reset: jest.fn()
    })

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={jest.fn()} />
      </ThemeProvider>
    )

    expect(getByTestId("play-again-btn")).toBeInTheDocument()
  })

  it("should navigate to the home screen after the go home button click", () => {
    const resetMock = jest.fn()

    mockStore({
      answers: [
        { question: "Some question 1", isCorrect: true },
        { question: "Some question 2", isCorrect: false }
      ],
      getTotalCorrectAnswers: jest.fn(() => 6),
      reset: resetMock
    })

    const nav = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Results navigate={nav} />
      </ThemeProvider>
    )

    fireEvent.click(getByTestId("play-again-btn"))
    expect(resetMock).toHaveBeenCalledTimes(1)
    expect(nav).toHaveBeenCalledWith(PATHS.HOME)
  })
})
