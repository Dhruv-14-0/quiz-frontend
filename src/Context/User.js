import { createContext, useContext } from "react";

export const userContext = createContext({
    quizId : 0,
    addQuizId : async ()=>{}
})

export const UserProvider = userContext.Provider;


export const useUser = ()=>{
    return useContext(userContext);
}