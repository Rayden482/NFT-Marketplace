import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';


const Container = styled.div`
      background-color: #0d0d73;
`;

const Title = styled.h1`
  margin: 20px;
  color: white;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;



const ProductList = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>NFT's</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products :</FilterText>
        <Select>
        <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Brown</Option>
            <Option>Pink</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Purple</Option>
        </Select>
        <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Animal</Option>
            <Option>Human</Option>
            <Option>Cyborge</Option>
            <Option>Abstract</Option>
            {/* <Option>XL</Option> */}
          </Select>
        </Filter>
        <Filter><FilterText>Sort Products :</FilterText>
        <Select>
            <Option selected>Price</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList