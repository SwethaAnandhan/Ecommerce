import React from 'react'
import styled from 'styled-components'
import {Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutline} from '@material-ui/icons'


const Container = styled.div`
  display: flex;
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;//to make it vertical
  padding: 20px;
`;
 
const Logo = styled.h1``;

const Desc = styled.p`
margin:20px 0px;
`;

const SocialContainer = styled.h1`
display: flex;`;

const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius:50%;

background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title=styled.h3`
    margin-bottom: 30px;
`;

const  List = styled.ul`
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
  flex: 1;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
    
`;

const Payment = styled.img`
width:60%;
margin-right: 10px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> Anandhan.</Logo>
            <Desc>
                Try it Buy it!1
            </Desc>

            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>

                


            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mobile list</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>


        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}}/> 26 Richy Street Chennai 600055</ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}}/> 044 26261707</ContactItem>
            <ContactItem> <MailOutline style={{marginRight:"10px"}}/> contact@anand</ContactItem>
            <Payment src = './pictures/pay.png'/>

        </Right>
        

    </Container>
  )
}

export default Footer