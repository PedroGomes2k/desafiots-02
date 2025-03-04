
export interface Form {
    email: string,
    password: string
}

export interface Token{
    token:String
}

export interface IContext{
    isLogged:boolean,
    setIsLogged: (isLogged:boolean) => void,
    userInfo:boolean,
    setUserInfo: (isLogged:boolean) => void
}