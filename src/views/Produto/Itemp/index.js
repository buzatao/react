import axios from "axios";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Table } from "reactstrap";
import { api } from "../../../config";

export const Itemp = (props) => {
    // console.log(props.match.params.id)
    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id)


    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getItensp = async () => {
        await axios.get(api + "/produtos/"+id+"/compras")
            .then((response) => {
                console.log(response.data.itemp)
                setData(response.data.itemp)
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Error: Conexão com a api falhou.'
                })
                // console.log("Error: Conexão com a api falhou.")
            })
    }

    useEffect(() => {
        getItensp();
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar Compra de Produtos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/listar-produtos" className="btn btn-outline-success btn-sm">Produtos</Link>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID da Compra</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Ações(visualizar pedido)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.CompraId}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.valor}</td>
                                    <td className="text-center">
                                        <Link to={"/listar-compraxxxxxxxx/"}
                                            className="btn btn-outline-primary btn-sm">
                                            Consultar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            </Container>
        </div>

    )
}