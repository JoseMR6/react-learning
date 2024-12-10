import { useQuestionsStore } from "../store/questions"

export const useQuestionsData=()=>{
    const questions = useQuestionsStore(state=>state.questions)
    let correct = 0
    let incorrect = 0
    let unaswered = 0

    questions.forEach(question=>{
        const {userSelectedAnswer, correctAnswer} = question
        
        if(userSelectedAnswer==null) unaswered++
        else if(userSelectedAnswer===correctAnswer) correct++
        else if(userSelectedAnswer!==correctAnswer) incorrect++
    })

    return {correct, incorrect, unaswered}
}