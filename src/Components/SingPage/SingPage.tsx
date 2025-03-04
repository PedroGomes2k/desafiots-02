import styled from 'styled-components';
import SingIn from './SingIn/SingIn';
import Hearder from '../Header/Header';
import { Footer } from '../Footer/Footer';


function SingPage() {


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

export default SingPage;

const ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Provider = styled.div`
  background-color:  #faebd72f  ;
  height: 100vh;

  padding: 60px;
  margin-top: 20px;

`
