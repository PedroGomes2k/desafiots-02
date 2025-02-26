import styled from 'styled-components';
import SingIn from './SingIn';
import Hearder from '../Header/Header';
import { Footer } from '../Footer/Footer';


function Body() {

  return (
    <ContainerBody>
      <Hearder />
      <Provider>
        <SingIn />
      </Provider>
      <Footer />
    </ContainerBody>


  );
}

export default Body;

const ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Provider = styled.div`
  background-color: #c9c2bb5c  ;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-top: 20px;

`
