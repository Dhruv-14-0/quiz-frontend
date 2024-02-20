import { createContext, useContext } from "react";

export const userContext = createContext({
    user : {
        emailId : "",
        quizId : 0
    },
    addUser : async ()=>{}
})

export const UserProvider = userContext.Provider;


export const useUser = ()=>{
    return useContext(userContext);
}