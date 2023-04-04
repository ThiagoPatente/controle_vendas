import React from 'react';
import Form from 'react-bootstrap/Form';

export default class Tipos extends React.Component{
    render(){
        return(

            <Form.Group className="mb-3" controlId="formSelectValorProduto" name ="tipo_produto_id">
                <Form.Label>Selecione o tipo do produto</Form.Label>
                <Form.Select aria-label="Default select" name ="tipo_produto_id">
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