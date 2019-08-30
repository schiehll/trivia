import React from "react"
import Emoji from "components/emoji"
import * as S from "./styles"

const AnswersList = ({ answers = [] }) => {
  return (
    <S.List>
      {answers.map(answer => (
        <S.ListItem key={answer.question}>
          {answer.isCorrect ? <Emoji>✔️</Emoji> : <Emoji>✖️</Emoji>}
          <div dangerouslySetInnerHTML={{ __html: answer.question }} />
        </S.ListItem>
      ))}
    </S.List>
  )
}

export default AnswersList
