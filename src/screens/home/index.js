import React, { useState } from "react"
import Header from "components/header"
import Card from "components/card"
import Content from "components/content"
import Footer from "components/footer"
import Button from "components/button"
import * as S from "./styles"

const Home = () => {
  const [percent, setPercent] = useState(30)

  return (
    <S.Wrapper>
      <Card>
        <Header percent={percent}>
          <h1>Title</h1>
          <h2>Subtitle</h2>
        </Header>
        <Content>Question</Content>
        <Footer>
          <Button
            onClick={() => {
              setPercent(percent + 10)
            }}
          >
            True
          </Button>
          <Button>False</Button>
        </Footer>
      </Card>
    </S.Wrapper>
  )
}

export default Home
