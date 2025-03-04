import styled from "styled-components"
import Hearder from "../Header/Header"
import { Footer } from "../Footer/Footer"
import AcountCard from "./AcountCard"


function CountPage() {
    return(
        <Container>
            <Hearder/>
            <AcountCard/>
            <Footer/>

        </Container>
    )
}

export default CountPage


const Container = styled.div`
    display: flex;
    justify-content: center;
    
`