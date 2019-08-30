import React, { Fragment } from "react"
import Header from "components/header"
import Card from "components/card"
import Content from "components/content"
import Footer from "components/footer"
import Button from "components/button"
import Emoji from "components/emoji"
import ErrorMessage from "components/error-message"
import PageWrapper from "components/page-wrapper"
import AnswersList from "components/answers-list"
import QUIZ_CONFIG from "utils/quizConfig"
import { PATHS } from "routes"
import useAnswersStore from "stores/answers"

const Results = ({ navigate }) => {
  const { answers, getTotalCorrectAnswers, reset } = useAnswersStore(state => ({
    answers: state.answers,
    getTotalCorrectAnswers: state.getTotalCorrectAnswers,
    reset: state.reset
  }))

  if (answers.length === 0) {
    return <ErrorMessage error="No answers found" navigate={navigate} />
  }

  const totalCorrectAnswers = getTotalCorrectAnswers()

  const getPercent = () => {
    return (totalCorrectAnswers * 100) / QUIZ_CONFIG.AMOUNT
  }

  const goHome = () => {
    reset()
    navigate(PATHS.HOME)
  }

  return (
    <PageWrapper>
      <Card>
        <Header percent={getPercent()}>
          <h1>
            {totalCorrectAnswers >= 6 ? (
              <Fragment>
                <Emoji description="good-result-emoji">🎉</Emoji> Well done!
              </Fragment>
            ) : (
              <Fragment>
                <Emoji description="bad-result-emoji">🙈</Emoji> You can do
                better!
              </Fragment>
            )}
          </h1>
          <h2>
            You scored{" "}
            <strong>
              {totalCorrectAnswers}/{QUIZ_CONFIG.AMOUNT}
            </strong>
          </h2>
        </Header>
        <Content>
          <AnswersList answers={answers} />
        </Content>
        <Footer>
          <Button onClick={goHome}>
            <Emoji description="back-emoji">👈</Emoji> Play Again
          </Button>
        </Footer>
      </Card>
    </PageWrapper>
  )
}

export default Results
