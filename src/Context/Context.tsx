import { createContext, useState } from "react";
import { IContext } from "../Services/Interfaces";


export const AuthContext = createContext({} as IContext)

export default function ContextProvider({ children }:any) {

    const [isLogged, setIsLogged] = useState(false)
    const [userInfo, setUserInfo] = useState(false)

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged,userInfo,setUserInfo }}>
            {children}
        </AuthContext.Provider>
    )
}
