import toDeepCamelCase from "camelcase-object-deep"
import QUIZ_CONFIG from "utils/quizConfig"

const fetchQuestions = async () => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${QUIZ_CONFIG.AMOUNT}&difficulty=${QUIZ_CONFIG.DIFFICULTY}&type=boolean`
  )

  const questions = await response.json()

  return toDeepCamelCase(questions)
}

export default fetchQuestions
