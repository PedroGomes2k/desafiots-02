import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../../Context/Context"
import { useNavigate } from "react-router-dom"


export default function Hearder() {

    const { isLogged, setIsLogged, setUserInfo, userInfo } = useContext(AuthContext)
    const navigate = useNavigate()

    function logOut() {
        setIsLogged(false)
        navigate('/')
    }
    function userInfos() {
     setUserInfo(true) 
    }
    function backHome(){
        setUserInfo(false)
    }


    return (
        <Provider>
            {isLogged === undefined || isLogged === null || isLogged === false ?
                (< p > Diobank</p>)
                :
                (
                    <div className="logIn">
                        <p className="title">Diobank</p>
                        <div >  
                            <button onClick={() => backHome()}><ion-icon name="home" /></button>
                            <button onClick={() => userInfos()}><ion-icon name="person" /></button>
                            <button onClick={() => logOut()}><ion-icon name="log-out" /></button>
                        </div>
                    </div>
                )
            }
        </Provider >
    )
}

const Provider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height:50px;

    background-color: #2f4eff;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 1000;
    box-shadow: 0px 6px 18px 0px #00000029;
    z-index: 2;
    position: fixed;


    .logIn{

        width: 100%;
       
        display: flex;
        justify-content: space-between;

        ion-icon{
        color: white;
        margin-right: 30px;
        width: 20px;
        height: 20px;
        cursor:pointer
        }

        .title{
        padding-left: 80px;
        }

        button{
            background-color: #2f4eff;
            border: hidden;
        }

        .user{
            
        }
    }

    p{
        color: #FFFFFF;
    }
    
    



`