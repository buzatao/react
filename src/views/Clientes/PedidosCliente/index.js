import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Container, Table } from "reactstrap"
import { api } from "../../../config"

export const PedidosCliente = (props) => {

    const [data, setData] = useState([])

    const [id] = useState(props.match.params.id)

    useEffect(() => {
        const getPedidos = async () => {
            await axios.get(api + "/cliente/" + id + "/pedidos")
                .then((response) => {
                    console.log(response.data.pedidos)
                    setData(response.data.pedidos)
                })
                .catch(() => {
                    console.log('Erro: sem conexao com a API.')
                })
        }
        getPedidos();
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Pedidos do Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-clientes" className="m-auto btn
                        btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                </div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Id do Cliente</th>
                            <th>Data do Pedido</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(pedidos => (
                            <tr key={pedidos.id}>
                                <th scope="row">{pedidos.id}</th>
                                <td>{pedidos.ClienteId}</td>
                                <td>{pedidos.data}</td>
                                <td>
                                    <Link to={"/editar-pedido/" + pedidos.id}
                                    className="btn btn-outline-primary btn-sm">Editar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}