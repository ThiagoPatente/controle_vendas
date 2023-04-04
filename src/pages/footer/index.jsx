import { Component } from 'react';


import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";

import './styles.css';
  


export class Footer extends Component {

  render() {

    return (
      <>
    

    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Sobre nós</Heading>
            <FooterLink href="#">Objetivo</FooterLink>
            <FooterLink href="#">Visão</FooterLink>
          </Column>
          <Column>
            <Heading>Serviços</Heading>
            <FooterLink href="#">Vendas</FooterLink>
            <FooterLink href="#">Gestão</FooterLink>
          </Column>
          <Column>
            <Heading>Contato</Heading>
            <FooterLink href="#">Email:teste@teste.com</FooterLink>
            <FooterLink href="#">Telefone: 99-99999-999</FooterLink>
          </Column>
          <Column>
            <Heading>Redes Sociais</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>


  
    </>
    );

  }
}