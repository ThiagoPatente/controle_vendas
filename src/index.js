import React from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/home';
import { Produto } from './pages/Produto';
import { TipoProduto } from './pages/TipoProduto';
import { ValorProduto } from './pages/ValorProduto';
import { Vendas } from './pages/Vendas';
import { Header } from './pages/header';
import { Footer } from './pages/footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBank, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
library.add(fab, faShop, faMoneyBill,faBank)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Header/>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produtoTipo" element={<TipoProduto />} />
        <Route path="/produtoValor" element={<ValorProduto />} />
        <Route path="/vendas" element={<Vendas />} />
        </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>

);

reportWebVitals();
