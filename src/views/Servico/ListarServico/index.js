import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarServico = () => {

    const [data, setData] = useState([]);


    const [status, setStatus] = useState({
        type: '',
        message: ''
    })


    const getServicos = async () => {
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.serv)
                setData(response.data.serv)
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
        getServicos();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações de serviços</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarservico" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th></th>
                                <th>Nome</th>
                                
                                <th>Descrição</th>
                                
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.data}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className="text-center">
                                        <Link to={"/listar-pedido/" + item.id}
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