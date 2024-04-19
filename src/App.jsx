import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes} from 'react-router-dom';

/*Importação das Páginas*/
import Home from './pages/Home/Home';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import Cadastro from './pages/Cadastro/Cadastro'
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import CadastroProdutor from './pages/CadastroProdutor/CadastroProdutor';
import Chat from './pages/Chat/Chat';
import ConscientizAterra from './pages/ConscientizATerra/ConscientizATerra';
import Login from './pages/Login/Login';
import PerfilCliente from './pages/PerfilCliente/PerfilCliente';
import PerfilProdutor from './pages/PerfilProdutor/PerfilProdutor';
import Produtos from './pages/Produtos/Produtos';
import Sobre from './pages/Sobre/Sobre';

/* Importação das estilizações globais*/
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastrocliente" element={<CadastroCliente />} />
        <Route path="/cadastroprodutor" element={<CadastroProdutor />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/conscientizaterra" element={<ConscientizAterra />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfilcliente" element={<PerfilCliente />} />
        <Route path="/perfilprodutor" element={<PerfilProdutor />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;