import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
// import { mobile } from "../responsive";


const Container = styled.div`
        background-color: #5a5ad6;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  color: #f4f4f4;
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #b5fae4;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  color: wheat;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 3px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 3px solid darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 3px solid darkblue;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
        <ImgContainer>
          <Image src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31" />
        </ImgContainer>
        <InfoContainer>
          <Title>NFT Monkey (Chill)</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>0.5 Bitcoin</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>BG Color : </FilterTitle>
              <FilterColor color="Lightgreen" />
              <FilterColor color="lightblue" />
              <FilterColor color="white" />
            </Filter>
            <Filter>
              <FilterTitle>TYPE : </FilterTitle>
              <FilterSize>
                <FilterSizeOption>PNG</FilterSizeOption>
                <FilterSizeOption>JPEG</FilterSizeOption>
                <FilterSizeOption>GIF</FilterSizeOption>
                <FilterSizeOption>BMP</FilterSizeOption>
                <FilterSizeOption>PDF</FilterSizeOption>
              </FilterSize> 
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product