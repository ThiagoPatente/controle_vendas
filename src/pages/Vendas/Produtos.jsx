import React from 'react';
import Form from 'react-bootstrap/Form';

export default class Produtos extends React.Component{
    
    render(){
        const index     = this.props.index ? this.props.index : 'tipo_produto_id:0';

        return(

            <Form.Group className="mb-3" controlId="formSelectValorProduto" name ={index}style={{marginBottom:'15px'}}>
                <Form.Label>Selecione o tipo do produto</Form.Label>
                <Form.Select aria-label="Default select" name ={index}>
                <option value="">Selecione </option>
                {this.props.arrayTipos.map(
                        row=>
                        <option value={row.id}>{row.nome}</option>
                        )}
                </Form.Select>
            </Form.Group>
        );
    }
}