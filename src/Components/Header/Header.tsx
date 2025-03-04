import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../../Context/Context"
import { useNavigate } from "react-router-dom"
import home from "../../assets/home.png"
import logout from "../../assets/logout.png"
import person from "../../assets/person.png"


export default function Hearder() {

    const { isLogged, setIsLogged, setUserInfo } = useContext(AuthContext)
    const navigate = useNavigate()

    function logOutPage() {
        setIsLogged(false)
        navigate('/')
    }
    function userInfos() {
        setUserInfo(true)
    }
    function backHome() {
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
                            <button onClick={() => backHome()}><img src={home} /></button>
                            <button onClick={() => userInfos()}><img src={person} /> </button>
                            <button onClick={() => logOutPage()}> <img src={logout} /></button>
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

        img{
        color: white;
        margin-right: 30px;
        width: 25px;
        height: 25px;
        cursor:pointer

        }
        

        .title{
        padding-left: 80px;
        }

        button{
            background-color: #2f4eff;
            border: hidden;
        }

    }

    p{
        color: #FFFFFF;
    }
    
    



`