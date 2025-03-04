import styled from "styled-components"

export const Footer  = () => {
    return(
      <ContainerFooter>
        Diobank
      </ContainerFooter>
    )
  }
  
  const ContainerFooter = styled.div`
    width: 100%;
    height:40px;
    background-color: #2f4eff;


    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 1000;
    color: #FFFFFF;
    box-shadow: 18px 6px 18px 6px #0000003d;

    position: fixed;
    bottom: 0;
    z-index: 1;
  `