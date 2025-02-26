import {  createContext, useState } from "react";

const Context = createContext({})


export default function ContextProvider({children}:any) {

    const [token, setToken] = useState<any>("")

    return(
        <Context.Provider value={{token, setToken}}>
            {children}
        </Context.Provider>
    )
}
