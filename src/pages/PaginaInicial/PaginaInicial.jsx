import './PaginaInicial.css'

import NavbarInicial from '../../components/NavbarInicial/NavbarInicial';
import Footer from '../../components/Footer/Footer';

function PaginaInicial() {
    return (
        <div className="container">
            <NavbarInicial />
            <h1>Pagina Inicial</h1>
            <Footer />
        </div>
    )
}

export default PaginaInicial;