import axios from "axios";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarProduto = () => {

    const [data, setData] = useState([]);


    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getProdutos = async () => {
        await axios.get(api + "/listaprodutos")
            .then((response) => {
                console.log(response.data.prod)
                setData(response.data.prod)
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
        getProdutos();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações de Produtos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarproduto" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(prod => (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.descricao}</td>
                                    <td className="text-center">
                                        <Link to={"/listar-compra/" + prod.id}
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