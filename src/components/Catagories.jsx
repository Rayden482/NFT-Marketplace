import React from 'react'
import styled  from 'styled-components';
// import {Catagories}
// import CatagoryItem from './Catagories';
import CatagoryItem from './CatagoryItem';
import { categories } from '../data';

const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        background-color: #000033;
`;


const Catagories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CatagoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Catagories