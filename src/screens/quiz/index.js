import React, { useEffect, useState } from "react"
import Header from "components/header"
import Card from "components/card"
import Content from "components/content"
import Footer from "components/footer"
import Button from "components/button"
import Emoji from "components/emoji"
import PageWrapper from "components/page-wrapper"
import ErrorMessage from "components/error-message"
import QUIZ_CONFIG from "utils/quizConfig"
import fetchQuestions from "api/fetchQuestions"
import { PATHS } from "routes"

const Quiz = ({ navigate }) => {
  const [error, setError] = useState(null)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const getQuestions = async () => {
    try {
      const questions = await fetchQuestions()

      if (questions?.results.length) {
        setQuestions(questions.results)
        setCurrentQuestion(1)
      } else {
        throw new Error("Empty result")
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = answer => {
    if (currentQuestion !== QUIZ_CONFIG.AMOUNT) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      navigate(PATHS.HOME)
    }
  }

  const getPercent = () => (currentQuestion * 100) / QUIZ_CONFIG.AMOUNT

  useEffect(() => {
    getQuestions()
  }, [])

  const question = questions[currentQuestion - 1]?.question || ""
  const category = questions[currentQuestion - 1]?.category || "Loading..."

  if (error) {
    return <ErrorMessage error={error.message} navigate={navigate} />
  }

  return (
    <PageWrapper>
      <Card>
        <Header percent={getPercent()}>
          <h1>{category}</h1>
          <h2>
            <strong>{`${currentQuestion}/${QUIZ_CONFIG.AMOUNT}`}</strong>
          </h2>
        </Header>
        <Content loading={loading}>{question}</Content>
        <Footer loading={loading}>
          <Button onClick={() => handleAnswer("True")}>
            <Emoji description="true-emoji">👍</Emoji> True
          </Button>
          <Button onClick={() => handleAnswer("False")}>
            <Emoji description="false-emoji">👎</Emoji> False
          </Button>
        </Footer>
      </Card>
    </PageWrapper>
  )
}

export default Quiz