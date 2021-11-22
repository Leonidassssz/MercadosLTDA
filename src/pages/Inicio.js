
import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { MdRestaurantMenu, MdMenuBook, MdModeEdit, MdDelete, MdSave } from 'react-icons/md'
import { FcAbout, FcAddressBook } from "react-icons/fc"
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { BACKEND } from '../constants'




import Cabecalho from '../components/Cabecalho'
    import Rodape from '../components/Rodape'
    


const Mercados = () => {
    const valorInicial = { nome: '', status: true }
    const [mercado, setMercado] = useState(valorInicial)
    const [mercados, setMercados] = useState([])
    const [carregandoMercados, setCarregandoMercados] = useState(false)
    const [erros, setErros] = useState({})

    const { nome, status } = mercado

    async function obterMercados() {
        setCarregandoMercados(true)
        let url = `${BACKEND}/mercados`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMercados(data)
            })
            .catch(function (error) {
                console.error('Erro ao obter os mercados')
            })

        setCarregandoMercados(false)
    }

    useEffect(() => {
        obterMercados()
        document.title = 'Cadastro de Mercados'
    }, [])

    const validaErrosMercado = () => {
        const novosErros = {}
        //Validação do nome
        if (!nome || nome === '') novosErros.nome = 'O nome não pode ser vazio'
        else if (nome.lenght > 30) novosErros.nome = 'O nome informado é muito longo'
        else if (nome.lenght < 3) novosErros.nome = 'O nome informado é muito curto'
        return novosErros
    }

    async function salvarMercado(event) {
        event.preventDefault() // evita que a página seja recarregada
        const novosErros = validaErrosMercado()
        if (Object.keys(novosErros).length > 0) {
            //Sim, temos erros!
            setErros(novosErros)
        } else {
            alert('Está tudo ok!')
        }
    }

    const alteraDadosMercado = e => {
        setMercado({ ...mercado, [e.target.name]: e.target.value })
        setErros({})
    }


    const Inicio = () => {
        return (
            <Container fluid className="p-0">
                <Cabecalho />
                <Row>
                    <Col xs={12} lg={6}>
                        <h1>Seja bem vindo!</h1>
                        <p> Esta é a área de Login do site MercadosLTDA. </p>
                        <p>Conclua os cadastros através do menu abaixo</p>
                    </Col>

                </Row>
                <Rodape />
                <h4><FcAddressBook />Login</h4>
                <Form method="post">
                    <Form.Group controlId="nome">
                        <Form.Label>Nome de Usuário</Form.Label>
                        <Form.Control
                            name="nome"
                            placeholder="Ex: Leonardo"
                            value={nome}
                            onChange={alteraDadosMercado}
                            isInvalid={!!erros.nome}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {erros.nome}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Check type="checkbox" label="Ativo" name="status"
                            onChange={(e) => setMercado({ ...mercado, [e.target.name]: e.target.checked })}
                            checked={status} />
                    </Form.Group>
                    <Button variant="primary" type="submit"
                        onClick={(e) => salvarMercado(e)}
                        title="Salvar o registro">
                        <MdSave /> Salvar
                    </Button>

                </Form>
                <h4><FcAbout />Senha</h4>
                <Form method="post">
                    <Form.Group controlId="nome">
                        <Form.Label>Senha de entrada</Form.Label>
                        <Form.Control
                            name="nome"
                            placeholder="A senha deve conter 6 ou mais caracteres!"
                        />
                    </Form.Group>
                </Form>

            </Container>
            
        )
        
    }
    
}
export default Inicio
