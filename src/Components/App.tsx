import styled from 'styled-components';
import Body from './Body/Body';
import { Footer } from './Footer/Footer';
import Hearder from './Header/Header';



function App() {
  return (
    <Container>

      <Hearder />
      <Body />
      <Footer />

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export default App;

