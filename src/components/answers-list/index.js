import React from "react"
import PropTypes from "prop-types"
import Emoji from "components/emoji"
import * as S from "./styles"

const propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired
    })
  )
}

const AnswersList = ({ answers = [] }) => {
  return (
    <S.List>
      {answers.map(answer => (
        <S.ListItem key={answer.question}>
          {answer.isCorrect ? (
            <Emoji description="correct-emoji">✔️</Emoji>
          ) : (
            <Emoji description="wrong-emoji">✖️</Emoji>
          )}
          <div dangerouslySetInnerHTML={{ __html: answer.question }} />
        </S.ListItem>
      ))}
    </S.List>
  )
}

AnswersList.propTypes = propTypes

export default AnswersList
