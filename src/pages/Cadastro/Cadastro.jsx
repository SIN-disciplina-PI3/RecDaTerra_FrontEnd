import {Link} from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {
    return (
        <div className='container'>
            <div className="cadastro-cliente">
            <Link to="/cadastrocliente">Cliente</Link>
            </div>
            <div className="cadastro-produtor">
                <Link to="/cadastroprodutor">Produtor</Link>
            </div>
        </div>
    )
}

export default Cadastro;