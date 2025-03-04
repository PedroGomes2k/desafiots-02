import styled from "styled-components"
import dateActual from "./Date"
import formatingBalance from "./FormatBalance"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../Context/Context"
import { useNavigate } from "react-router-dom"

function AcountCard() {

    const { isLogged, userInfo } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {

        if (isLogged === false) navigate('/')

    }, [])


    const balance: number = 460000
    const name: string = "Pedro"
    const email: string = "pedroGoma22@gmial.com"
    const password:string= "84asdas"

    return (
        <Container>

            {userInfo === false ?
                (
                    <>
                        <div className="nameBalance">
                            <p>Olá {name}, seja bem-vindo</p>
                            <p className="balance">{`Saldo ${formatingBalance(balance)}`}</p>
                            <p>{dateActual()}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="nameBalance">
                            <p>Olá {name}, seja bem-vindo</p>
                            <p>{dateActual()}</p>
                        </div>

                        <h1>Seu e-mail atual: {email}</h1>
                        <h1>Sua senha atual: {password}</h1>
                    </>
                )
            }
        </Container>
    )
}

export default AcountCard

const Container = styled.div`
    justify-content: center;    
    align-items: center;
    width: 80%;
    height: 500px;

    box-shadow: 0px 12px 24px 12px #96939575;

    background-color: #faebd74c;
    margin-top: 90px;
    font-family: Arial, Helvetica, sans-serif;
    
    .nameBalance{
        width: 100%;
        display: flex;
        justify-content: space-between;

        p{  
            padding: 15px;
           
        }

        border-radius: 5px;
        border: 1px solid #ffb8ac7f;
        box-shadow: 0px 8px 8px 0px #314f7c14;
    }
    .balance{
       margin-left: 50%;
    }
    h1{
        margin: 15px 0px 0px 15px;
    }
`