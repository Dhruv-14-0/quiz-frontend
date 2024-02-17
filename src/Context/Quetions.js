import { createContext, useContext } from "react";


export const questionContext = createContext({
    questions : [],
})

export const QuestionProvider = questionContext.Provider;

export const useQuestion=()=>{
    return useContext(questionContext);
}