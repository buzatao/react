import axios from "axios";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Container, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { api } from "../../../config";

export const CadastrarPedido = (props) => {
    const [pedido, setPedido] = useState({
        data:''
    })

    const [id, setId] = useState(props.match.params.id)
    

    const valorInput = e =>setPedido({
        ...pedido,[e.target.name]: e.target.value
    })


    const[status, setStatus] = useState({
        type:'',
        message: ''
    })


    //////////////////////////
    const cadPedido = async e => {
        e.preventDefault();
        console.log(pedido)



        const headers = {
            'Content-Type' : 'application/json'
        }

        await axios.post(api+"/pedidos", pedido, {headers})
        .then((response)=>{
            if(response.data.error){
                setStatus({
                    type:'error',
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
            console.log("Erro: Sem conexão com a API.")
        })
    }




    return (
        <Container>
        <div className="d-flex">
            <div className="m-auto p-2">
                <h1>Cadastrar Pedido</h1>
            </div>
            <div className="p-2">
                <Link to="/listar-pedidos" className="btn btn-outline-success btn-sm">Pedidos</Link>
            </div>
        </div>


        <hr className="m-1" />

        {status.type === "error" ? <Alert color="danger">{status.message}</Alert> : "" }

        {status.type === "success" ? <Alert color="success">{status.message}</Alert> : "" }


        <Form className="p-2" onSubmit={cadPedido}>
            {/* <FormGroup className="p-2">
                <Label>ID</Label>
                <Input type="text" name="id" placeholder="ID do pedido" onChange={valorInput}/>
            </FormGroup> */}

            <FormGroup className="p-2">
                <Label>Data do pedido</Label>
                <Input type="text" name="data" placeholder="Data do pedido" onChange={valorInput}/>
            </FormGroup>

            <Button type="submit" outline color= "success">Cadastrar</Button>
            <Button type="reset" outline color="primary">Limpar</Button>
        </Form>
    </Container>
    )
}