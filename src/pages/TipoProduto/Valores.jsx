import React from 'react';
import Form from 'react-bootstrap/Form';

export default class Valores extends React.Component{
    render(){
        return(

            <Form.Group className="mb-3" controlId="formSelectValorProduto" name ="imposto_id">
                <Form.Label>Selecione o valor do imposto associado ao tipo do produto</Form.Label>
                <Form.Select aria-label="Default select" name ="imposto_id">
                <option value="">Selecione </option>
                {this.props.arrayValores.map(
                        row=>
                        <option value={row.ID}>{row.nome} - valor: R$:{row.valor} unidade</option>
                        )}
                </Form.Select>
            </Form.Group>
        );
    }
}