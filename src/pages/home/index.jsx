import { Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';

export class Home extends Component {
  

  render() {

    return (
      <>
    



        <div class="w3-row-padding w3-center">
            <div class="w3-third">
              <div class="w3-card w3-container" style={{minHeight:"460px"}}>
                <h3>Produto</h3><br/>
                <FontAwesomeIcon icon="fa-shop" size="lg" />
                <br/>
                <br/>

                <Link to ={window.location.href+"\produto"}> <p>Cadastro de Produto</p> </Link>
                <Link to ={window.location.href+"\produtoTipo"}><p>Cadastro tipo de Produto </p>  </Link>
              </div>
          </div>   

          <div class="w3-third">
            <div class="w3-card w3-container" style={{minHeight:"460px"}}>
                <h3>Valores do Produto</h3><br/>
                <FontAwesomeIcon icon="fa-money-bill" size="lg" />
                <br/>
                <br/>
                <Link to ={window.location.href+ "\produtoValor"}>  <p>Cadastrar Valores do Produto</p> </Link>
            </div>
          </div>

          <div class="w3-third">
            <div class="w3-card w3-container" style={{minHeight:"460px"}}>
                <h3>Controle de Vendas</h3><br/>
                <FontAwesomeIcon icon="fa-bank" size="lg" />
                <br/>
                <br/>
                <Link to ={window.location.href+ "\Vendas"}>  <p>Cadastrar Venda</p>  </Link>
            </div>
          </div>
        </div>
    </>
    );

  }
}