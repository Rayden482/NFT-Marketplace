import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { sliderItems } from '../data';


const Container = styled.div`
        width: 100%;
        height: 80vh;
        display: flex;
        /* background-color:coral; */
        position:relative;
        overflow: hidden;
        background-color: #000033;

`;
const Arrow = styled.div`
        width: 50px;
        height: 50px;
        background-color: #e6e1f9;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props=> props.direction === "left" && "10px"};
        right: ${props=> props.direction === "right" && "10px"};
        margin:auto;
        cursor:pointer;
        opacity: 0.5;
        z-index: 2;
`;
const Wrapper = styled.div`
      height:100%;
      display: flex;
      transition: all 1.5s ease;
      transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      background-color: #${props=> props.bg};

`;
const ImgContainer = styled.div`
      flex: 1;
      height: 90%;
      /* width: 80%; */

`;

const Image = styled.img`
      height: 83%;
      /* width: 100%; */
`;

const InfoContainer = styled.div`
      flex: 1;
      padding: 50px;
`;

const Title = styled.h1`
      font-size: 60px;
`;
const Desc = styled.p`
        margin: 40px 0px;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 3px;
`;
const Button = styled.button`
        padding: 10px;
        font-size: 15px;
        background-color: white;
        cursor: pointer;
        opacity: 0.8;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) =>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(

          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
          <Image src={item.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider;
