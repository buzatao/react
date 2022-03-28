import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Container, Form, FormGroup, Input, Label, Button} from "reactstrap"
import { api } from "../../../../config"

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        nascimento: '',
    })
    const valorInput = e => setCliente({ ...cliente, [e.target.name]: e.target.value })

    const cadCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-type': 'application/json'
        }
        await axios.post(api + "/clientes", cliente, { headers })
            .then((response) => {
                console.log(response.data.message)
            })
            .catch(() => {
                console.log('Erro: sem conexão com a API.')
            })


    }

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página Cadastrar Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-clientes" className="m-auto btn
                        btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                </div>
                <Form className="p-2" onSubmit={cadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Digite o nome do cliente" 
                        onChange={valorInput} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Data de Nascimento</Label>
                        <Input type="text" name="nascimento" placeholder="Digite a data de nasciemnto"
                        onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="d-flex">
                        <Button type="submit" outline color="primary">Cadastrar</Button>
                        <Button type="reset" outline color="primary">Limpar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}