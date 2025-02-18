import styled from 'styled-components';
import { login } from '../Services/login';


function Body() {
  return (
    <Provider>
      <Box >
        <Box className='boxInput'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <input
            placeholder="email"
            type='email'
          />
          <input
            placeholder="password"
            type='passaword'
          />
          <Center>
            <Button onClick={() => login()}>
              Entrar
            </Button>
          </Center>
        </Box>
      </Box>
    </Provider>
  );
}

export default Body;

const Provider = styled.div`
  background-color: #c9c2bb5c  ;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-top: 20px;

`
const Center = styled.div`
  pointer-events: auto;
`
const Box = styled.div`
 
  width: 100%;
  height: 100px;
  
  
  border-Radius:25px;
  box-shadow: 0px 24px 48px 0px #e79cca75;

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

`
const Button = styled.div`
  
  width:100%;
  height: 20px;
  margin-Top:5px;

  border-radius: 5px;

  color: #FFFFFF;
  background-color: #3dcc05;
  box-shadow: 0px 24px 48px 0px #314f7c14;

  display: flex;
  justify-content: center;

  cursor: pointer;

`
