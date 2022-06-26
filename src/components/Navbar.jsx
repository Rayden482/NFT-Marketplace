import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
// import MailIcon from '@mui/icons-material/Mail';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const Container = styled.div`
        height: 60px;
        background-color: #000033;
        /* background-color: black; */
`;

const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;


`;
const Left = styled.div`
        flex: 1;
        display:flex;
        align-items: center;
`;
const Center = styled.div`
        flex: 1;
        text-align: center;
`;

const Logo = styled.h1`
        font-weight: bold;
        color: white;
`;


const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: white;
`;

const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
`;

const Language = styled.span`
        font-size: 14px;
        cursor: pointer;
        color: white;
`;

const SearchContainer = styled.div`
        border: 0.5px solid lightblue;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
        /* background-color: lightblue; */
`;
const Input = styled.input`
        border: none;   


`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style = {{color:"grey", fontsize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>NFT BAZZAR.COM</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
