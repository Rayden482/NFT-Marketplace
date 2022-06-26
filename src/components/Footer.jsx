import { Facebook, Instagram, Mail,  Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
        display: flex;
        background-color:#8596f9;
        `;
const Left = styled.div`
        flex:1;
        display: flex;
        flex-direction: column;
        padding: 20px;
`;


const Logo = styled.h1`

    
`;
const Desc = styled.p`
        margin: 20px 0px;


    
`;
const SocialContainer = styled.div`
        display: flex;
    
`;
const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #${props=>props.color};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    
`;


const Center = styled.div`
        flex:1;
        padding: 20px;

        `;


const Title = styled.h3`
        margin-bottom: 30px;

`;

const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
`;

const ListItem = styled.li`
        width: 50%;
        margin-bottom: 10px;

`;


const Right = styled.div`
        flex:1;
        padding: 20px;padding: 20px;
        `;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <logo>NFT BAZZAR</logo>
            <Desc>
            The India's largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </Desc>
            <SocialContainer>
                <SocialIcon color="4267B2">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="3f729b">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="00acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Latest NFT's</ListItem>
            <ListItem>Popular NFT's</ListItem>
            <ListItem>Carrier</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Ghaziabad , Uttar Pradesh</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 8920990292</ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}}/>paragkapoor20@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer