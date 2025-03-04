import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Form } from "../../../Services/Interfaces"
import { AuthContext } from "../../../Context/Context"

function SingIn() {

  const { setIsLogged, setUserInfo } = useContext(AuthContext)
  const [form, setForm] = useState<Form>({ email: "", password: "" })
  const navigate = useNavigate()

  useEffect(() => {
    setIsLogged(false)
    setUserInfo(false)
  }, [])

  function loginForms(e: any) {

    e.preventDefault()
    setIsLogged(true)

    navigate('/conta/1')

  }

  return (
    <Box >
      <Box className='boxInput'>
        <Center>
          <h1>Faça o login </h1>

        </Center>
        <form onSubmit={loginForms}>
          <input
            placeholder="E-mail"
            type='email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Senha"
            type='password'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            autoComplete="new-password"
            required
          />

          <button type="submit"> Entrar </button>

        </form>

      </Box>
    </Box>
  )
}

export default SingIn

const Center = styled.div`
  pointer-events: auto;
`
const Box = styled.div`
 
  width: 100%;
  height: 100px;
  
  
  border-Radius:25px;
  box-shadow: 0px 24px 48px 0px #cab8c375;

  .boxInput{
    background-Color:#FFFFFF;
    padding:15px;
   
  }
  
  input{
    width: 99%;

    border:1px solid #9b9a9a;
    border-radius: 5px;

    margin-top: 4px;

    box-shadow: 0px 10px 20px 0px #0000001a;
   
    padding-left: 10px;
  }

  button{
    width:100%;
    height: 20px;
    margin-Top:5px;

    border-radius: 5px ;
    border: 1px solid;

    color: #FFFFFF;
    background-color: #3dcc05;
    box-shadow: 0px 24px 48px 0px #314f7c14;

    display: flex;
    justify-content: center;

    cursor: pointer;
  }

`
