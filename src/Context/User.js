import { createContext, useContext } from "react";

export const userContext = createContext({
    quizId : 0,

})

export const UserProvider = userContext.Provider;


export const useUser = ()=>{
    return useContext(userContext);
}