import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';






export class ValorProduto extends Component {
  

  render() {
  
    return (
      <>
    <div class="w3-row-padding w3-center w3-margin-top">

<Form method="post" action='http://localhost/controle_vendas/src/api/controller/valor_produto_controller.php?acao=inserir' >


<Form.Group className="mb-3" controlId="formNomeImposto">
    <Form.Label>Nome do imposto</Form.Label>
    <Form.Control type="text" placeholder="Coloque o nome do Imposto" name ='nome'/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

<Form.Group className="mb-3" controlId="formValorImposto">
    <Form.Label>Valor  do imposto</Form.Label>
    <Form.Control type="number" placeholder="Coloque o valor do Imposto" name='valor' />
    <Form.Floating className="number-muted">
    </Form.Floating>
  </Form.Group>
  <Button variant="primary" type="submit" style={{marginBottom:'97px'}}>
    Cadastrar
  </Button>
</Form>
</div>

    </>
    );

  }
}