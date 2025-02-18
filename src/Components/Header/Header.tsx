import styled from "styled-components"

export default function Hearder() {
    return (

        <Provider>
        Diobank
        </Provider>
    )
}

const Provider = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height:50px;

    background-color: #2f4eff;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    box-shadow: 0px 6px 18px 0px #00000029;
    z-index: 2;
    position: fixed;
    
    
`