import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Container } from "reactstrap"

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="p-2">
                        <Link to="/listar-compras" className="m-auto btn
                        btn-outline-primary btn-sm">Compras</Link>
                    </div>
                     <div className="p-2">
                        <Link to="/listar-produtos" className="m-auto btn
                        btn-outline-primary btn-sm">Produtos</Link>
                    </div>
                    <div className="m-auto p-2">
                        <h1>Pagina inicial</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-clientes" className="m-auto btn
                        btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-pedidos" className="m-auto btn
                        btn-outline-primary btn-sm">Pedidos</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-servicos" className="m-auto btn
                        btn-outline-primary btn-sm">Serviços</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}