import React from 'react';
import Form from 'react-bootstrap/Form';



export default class NovoProduto extends React.Component {
    
    render(){
      const produto   = this.props.produto;
      const index     = this.props.index ? this.props.index: 'quantidade:0';
      return (
        <>
        <Form.Group className="mb-3" controlId="formQuantidade">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control type="number" placeholder="Coloque a quantidade" name={index} defaultValue={produto.quantidade}/>
            <Form.Floating className="number-muted">
            </Form.Floating>
        </Form.Group>
        </>

      );
     }
  }