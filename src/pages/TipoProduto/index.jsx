import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';

import Valores from './Valores';

export class TipoProduto extends Component {
  

  constructor(){
    super();
    this.state=({
        db: []
    });
    this.selectValor();
}
selectValor(){
    fetch("http://localhost/controle_vendas/src/api/controller/valor_produto_controller.php?acao=recuperar")
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

       <Form method="post" action='http://localhost/controle_vendas/src/api/controller/tipo_produto_controller.php?acao=inserir' >


<Form.Group className="mb-3" controlId="formNomeTipoProduto">
    <Form.Label>Nome do tipo do produto</Form.Label>
    <Form.Control type="text" placeholder="Coloque o nome do tipo do produto" name ='nome'/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

    <Valores arrayValores = {this.state.db} />

  <Button variant="primary" type="submit" style={{marginBottom:'97px'}}>
    Cadastrar
  </Button>
</Form>
</div>

    </>
    );

  }
}