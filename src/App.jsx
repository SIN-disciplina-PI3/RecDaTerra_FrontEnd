import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Flex, Box } from "@chakra-ui/react"

/*Importação dos componentes*/
import NavbarVisi from './components/NavbarVisi/NavbarVisi'
import NavbarLogin from './components/NavbarLogin/NavbarLogin'
import Navbar from './components/Navbar/Navbar'
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
import VerCliente from './pages/PerfilCliente/VerCliente';
import PerfilProdutor from './pages/PerfilProdutor/PerfilProdutor';
import VerProdutor from './pages/PerfilProdutor/VerProdutor';
import Produtos from './pages/Produtos/Produtos';
import Sobre from './pages/Sobre/Sobre';
import EsqueciSenha from './pages/EsqueciSenha/EsqueciSenha';
import RedefinirSenha from './pages/RedefinirSenha/RedefinirSenha';
import RecuperaSenha from './pages/RecuperaSenha/RecuperaSenha';
import Contato from './pages/Contato/Contato';
import Pag404 from './pages/PaginaErro/Pag404';

function App() {
  const location = useLocation();

  return (
      <>
        <Flex flexDirection={"column"} minHeight={"100vh"}>
          <Box>
            {location.pathname === '/' ? <NavbarVisi /> :
            location.pathname === '/login' ||
            location.pathname === '/esquecisenha' ||
            location.pathname === '/recuperasenha' ||
            location.pathname === '/redefinirsenha' ||
            location.pathname === '/cadastro' ||
            location.pathname === '/cadastroCliente' ||
            location.pathname === '/cadastroProdutor'||
            location.pathname === '/404' ? <NavbarLogin /> :
            <Navbar />}
          </Box>
          <Box as={"main"} flex={"1"}>
            <Routes>
              <Route path='/' element={<PaginaInicial />} />
              <Route path='/login' element={<Login />} />
              <Route path='/esquecisenha' element={<EsqueciSenha />} />
              <Route path='/recuperasenha' element={<RecuperaSenha />} />
              <Route path='/redefinirsenha' element={<RedefinirSenha />} />
              <Route path='/home' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/cadastrocliente' element={<CadastroCliente />} />
              <Route path='/cadastroprodutor' element={<CadastroProdutor />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/conscientizaterra' element={<ConscientizAterra />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/perfilcliente' element={<PerfilCliente />} />
              <Route path='/visualizacliente' element={<VerCliente />} />
              <Route path='/perfilprodutor' element={<PerfilProdutor />} />
              <Route path='/vizualizaprodutor' element={<VerProdutor />} />
              <Route path='/produtos' element={<Produtos />} />
              <Route path='*' element={<Pag404 />} />
            </Routes>
          </Box>
          <Box as={"footer"}>
            <Footer />
          </Box>
        </Flex>
      </>
  );
}

export default App;