import React from "react"
import Header from "components/header"
import Card from "components/card"
import Content from "components/content"
import Footer from "components/footer"
import Button from "components/button"
import Emoji from "components/emoji"
import PageWrapper from "components/page-wrapper"
import QUIZ_CONFIG from "utils/quizConfig"
import { PATHS } from "routes"

const Home = ({ navigate }) => {
  const begin = () => {
    navigate(PATHS.QUIZ)
  }

  return (
    <PageWrapper>
      <Card>
        <Header>
          <h1>Welcome to the Trivia Challenge!</h1>
          <h2>
            You will be presented with {QUIZ_CONFIG.AMOUNT}{" "}
            <strong>True</strong> or <strong>False</strong> questions
          </h2>
        </Header>
        <Content>
          Can you score <Emoji description="100-emoji">💯</Emoji> ?
        </Content>
        <Footer>
          <Button data-testid="begin-btn" onClick={begin}>
            <Emoji description="begin-emoji">🤞</Emoji> Begin
          </Button>
        </Footer>
      </Card>
    </PageWrapper>
  )
}

export default Home
