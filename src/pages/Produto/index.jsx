import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Tipos from './Tipos';

import './styles.css';

export class Produto extends Component {
  constructor(){
    super();
    this.state=({
        db: []
    });
    this.selectValor();
}
selectValor(){
    fetch("http://localhost/controle_vendas/src/api/controller/tipo_produto_controller.php?acao=recuperar")
    .then((response)=>response.json())
    .then((responseJson)=>
    {
        this.setState({
            db: responseJson
        });
    })
}
  render() {
  
    return (
      <>
    
    <div class="w3-row-padding w3-center w3-margin-top">

    <Form method="post" action='http://localhost/controle_vendas/src/api/controller/produto_controller.php?acao=inserir' >


<Form.Group className="mb-3" controlId="formNomeImposto">
    <Form.Label>Nome do produto</Form.Label>
    <Form.Control type="text" placeholder="Coloque o nome do produto" name ='nome'/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

<Form.Group className="mb-3" controlId="formValorImposto">
    <Form.Label>Valor  do produto</Form.Label>
    <Form.Control type="number" placeholder="Coloque o valor do produto" name='valor' />
    <Form.Floating className="number-muted">
    </Form.Floating>
  </Form.Group>

  <Tipos arrayTipos = {this.state.db} />

  <Button variant="primary" type="submit">
    Cadastrar
  </Button>
</Form>
</div>

    </>
    );

  }
}