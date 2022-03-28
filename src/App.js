import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Home} from "./views/Home";
import { ListarClientes } from "./views/Clientes/ListarClientes";
import { Menu } from "./Menu";
import { CadastrarCliente } from "./views/Clientes/ListarClientes/CadastrarCliente";
import { PedidosCliente } from "./views/Clientes/PedidosCliente";
import { EditarPedido } from "./views/Clientes/EditarPedido";
import { ListarServico } from "./views/Servico/ListarServico";
import { ListarPedido } from "./views/Pedido/ListarPedido";
import { Item } from "./views/Servico/Item";
import { CadastrarServico } from "./views/Servico/CadastrarServico";
import { CadastrarPedido } from "./views/Pedido/CadastrarPedido";
import { ListarProduto } from "./views/Produto/ListarProduto";
import { Itemp } from "./views/Produto/Itemp";
import { CadastrarProduto } from "./views/Produto/CadastrarProduto";


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}/> 
          <Route path = "/listar-clientes" component={ListarClientes}/>
          <Route path = "/novo-cliente" component={CadastrarCliente}/>
          <Route path = "/pedidos-cliente/:id" component={PedidosCliente}/>
          <Route path = "/editar-pedido/:id" component={EditarPedido}/>
          <Route path = "/listar-pedidos" component={ListarPedido}/>
          <Route path = "/listar-pedido/:id" component={Item}/>
          <Route path = "/cadastrarservico" component={CadastrarServico}/>
          <Route path = "/listar-servicos" component={ListarServico}/>
          <Route path = "/cadastrarpedido" component={CadastrarPedido}/>
          <Route path = "/listar-produtos" component={ListarProduto}/>
          <Route path = "/listar-compra/:id" component={Itemp}/>
          <Route path = "/cadastrarproduto" component={CadastrarProduto}/>
          



        </Switch> 
      </Router>
    </div>
  );
}

export default App;
