import React from 'react'
import styled  from 'styled-components';





const Container = styled.div`
        flex: 1;
        margin: 3px;
        height: 70vh;
        position: relative;

`;
const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
`;
const Info = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        /* bottom: 0; */
        width: 100%;
        height: 150%;
        /* background-color: yellow; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

`;
const Title = styled.h1`
        color: white;
        font-weight: bold;
        text-shadow: 5px 5px 5px black;
        margin-bottom: 20px;


`;
const Button = styled.button`
        border: none;
        padding: 10px;
        background-color: white;
        color: black;
        font-weight: bold;
        cursor: pointer;
        /* opacity: 0.5; */
`;

const CatagoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CatagoryItem
