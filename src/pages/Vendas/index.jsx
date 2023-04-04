import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NovoProduto from './NovoProduto';

import Produtos from'./Produtos'

import './styles.css';


export class Vendas extends Component {
  
  constructor(props){
    super(props);
    this.state = {produtos: [],
      db: [],
      valorTotal:0,
    };
    this.handleAdicionarProduto = this.handleAdicionarproduto.bind(this);
    this.selectValor();
  }
  handleAdicionarproduto() {
    var produtos = this.state.produtos;
    produtos.push({quantidade: 0});

    this.setState({
      produtos: produtos
    });
  }

  selectValor(){
    fetch("http://localhost/controle_vendas/src/api/controller/produto_controller.php?acao=recuperar")
    .then((response)=>response.json())
    .then((responseJson)=>
    {
        this.setState({
            db: responseJson
        });
    })
}


  render() {
    const produtos = this.state.produtos.map((p,i) =>  <  > 
    <Row>
        <Col>
                <NovoProduto   index = {"quantidade:"+ (i+1)}produto={p} /> 
        </Col>
        <Col> 
          <Produtos index = {"tipo_produto_id:"+ (i+1)} arrayTipos = {this.state.db}  />   
        </Col>
    </Row>
    </>
    );

    return (
      <>
    <div class="w3-row-padding w3-center w3-margin-top">

        <Form method="post" action='http://localhost/controle_vendas/src/api/controller/venda_controller.php?acao=venda' >
            <Row>
                  <Col>
                        <NovoProduto produto={0} /> 
                  </Col>
                  <Col>
                        <Produtos arrayTipos = {this.state.db} />
                  </Col>
            </Row>

            {produtos}
                      <Button onClick={this.handleAdicionarProduto} className="addnew" variant="secondary" style={{marginRight:'15px',marginTop:'-97px'}}> 
                        adicionar outro produto
                      </Button>   

                      <Button onClick={this.handleAdicionarProduto} className="addnew" variant="info" style={{marginRight:'15px',marginTop:'-97px'}}> 
                        Calcular o preço
                      </Button> 

                      <Button variant="primary" type="submit" style={{marginBottom:'97px'}}>
                Cadastrar
              </Button>
        </Form>
      </div>

    </>
    );

  }
}