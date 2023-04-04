import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css';


export class Header extends Component {

  render() {

    return (
      <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Controle de compras</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Vendas">Vendas</Nav.Link>
            <NavDropdown title="Produto" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/produto">Cadastro de Produto</NavDropdown.Item>
              <NavDropdown.Item href="/produtoTipo">
                Cadastro de Tipo de Produto
              </NavDropdown.Item>
              <NavDropdown.Item href="/produtoValor">Cadastrar valor do Produto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<header class="w3-container w3-theme w3-padding" id="myHeader">
  <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme"></i> 
  <div class="w3-center">
  <h4>Controle de Venda NFF</h4>
  <h1 class="w3-xxxlarge w3-animate-bottom">Cuidaremos da suas Vendas</h1>
    <div class="w3-padding-32">
      <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style={{fontWeight:"900;"}}>Consulta</button>
    </div>
  </div>
</header>

  
    </>
    );

  }
}