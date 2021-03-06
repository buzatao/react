import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config"

export const CadastrarProduto = () => {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: ''
    })

    const valorInput = e => setProduto({
        ...produto, [e.target.name]: e.target.value
    })

    const[status, setStatus] = useState({
        type:'',
        message: ''
    })

    const cadProduto = async e =>{
        e.preventDefault()
        console.log(produto)

       const headers = {
        'Content-Type' : 'application/json'
       } 

       await axios.post(api+"/produtos", produto, {headers})
       .then((response)=>{
        //    console.log(response.data.message)
            if(response.data.error){
                setStatus({
                    type: 'error',
                    message: response.data.message
                })
            }else{
                setStatus({
                    type: 'success',
                    message: response.data.message
                })
            }
       })
       .catch(()=>{
           console.log("Erro: sem conexao c a api.")
       })



    }


    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Produto</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-produtos" className="btn btn-outline-success btn-sm">Produtos</Link>

                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadProduto}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do produto" onChange ={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descri????o</Label>
                    <Input type="text" name="descricao" placeholder="Descri????o do produto" onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>
                <Button type="reset" outline color="primary">Limpar</Button>
            </Form>
        </Container>


    )
}