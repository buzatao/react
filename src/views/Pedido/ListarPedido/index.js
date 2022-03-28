import axios from "axios";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarPedido = () => {
    const [data, setData] = useState([]);


    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.ped)
                setData(response.data.ped)
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
        getPedidos();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações de pedidos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarpedido" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data do pedido</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(ped => (
                            <tr key={ped.id}>
                                <td>{ped.id}</td>
                                <td>{ped.data}</td>
                                <td className="text-center">
                                    <Link to={"/xxx/" + ped.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                        {/* Mudar esta parte */}
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