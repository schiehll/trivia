import create from "zustand"

const [useStore] = create((set, get) => ({
  answers: [],
  addAnswer: answer => {
    set({ answers: get().answers.concat(answer) })
  },
  getTotalCorrectAnswers: () => {
    return get().answers.reduce((total, answer) => {
      return total + (answer.isCorrect ? 1 : 0)
    }, 0)
  },
  reset: () => {
    set({ answers: [] })
  }
}))

export default useStore
