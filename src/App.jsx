import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/react";

/*Importação doscomponentes*/
import NavbarVisi from './components/NavbarVisi/NavbarVisi'
import NavbarLogin from './components/NavbarLogin/NavbarLogin'
import Navbar from './components/Navbar/Navbar'
import Noti from './components/ModalNotificacao/ModalNotificacao'
import Footer from './components/Footer/Footer'

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
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha';
import RedefinirSenha from './pages/RedefinirSenha/RedefinirSenha';
import RecuperaSenha from './pages/RecuperaSenha/RecuperaSenha';
import Contato from './pages/Contato/Contato'

function App() {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <>
        {location.pathname === '/' ? <NavbarVisi /> :
          location.pathname === '/login' ||
          location.pathname === '/esquecisenha' ||
          location.pathname === '/recuperasenha' ||
          location.pathname === '/redefinirsenha' ||
          location.pathname === '/cadastro' ||
          location.pathname === '/cadastroCliente' ||
          location.pathname === '/cadastroProdutor' ? <NavbarLogin /> :
          <Navbar openNotification={onOpen} />}
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='/login' element={<Login />} />
          <Route path='/esquecisenha' element={<EsqueciSenha />} />
          <Route path='/recuperasenha' element={<RecuperaSenha />} />
          <Route path='/redefinirsenha' element={<RedefinirSenha />} />
          <Route path='/home' element={<Home />} />
          <Route path='/noti' element={<Noti isOpen={isOpen} onClose={onClose} />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/cadastrocliente' element={<CadastroCliente />} />
          <Route path='/cadastroprodutor' element={<CadastroProdutor />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/conscientizaterra' element={<ConscientizAterra />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/perfilcliente' element={<PerfilCliente />} />
          <Route path='/perfilprodutor' element={<PerfilProdutor />} />
          <Route path='/produtos' element={<Produtos />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;