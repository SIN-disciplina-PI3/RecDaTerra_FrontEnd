import './PaginaInicial.css'

import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import Footer from '../../components/Footer/Footer';

function PaginaInicial() {
    return (
        <div className="container">
            <NavbarLogin />
            <h1>Pagina Inicial</h1>
            <Footer />
        </div>
    )
}

export default PaginaInicial;