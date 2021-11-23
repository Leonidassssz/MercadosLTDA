import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'




import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { MdRestaurantMenu, MdMenuBook, MdModeEdit, MdDelete, MdSave } from 'react-icons/md'
import { BACKEND } from '../constants'

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
        document.title = 'MercadosLTDA'
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

    return (
        <Container fluid className="p-0">
            <Cabecalho />
            <Row>
                <Col xs={12} lg={6}>
                    {/* Formulário de Mercados */}
                    <h4><MdRestaurantMenu />Cadastro dos Mercados</h4>
                    <Form method="post">
                        <Form.Group controlId="nome">
                            <Form.Label>Nome do Mercado</Form.Label>
                            <Form.Control
                                name="nome"
                                placeholder="Ex: Alvorada"
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
                </Col>
                <Col xs={12} lg={6}>
                    {/* Listagem dos Mercados */}
                    <h4><MdMenuBook />Listagem dos Mercados</h4>
                    {carregandoMercados &&
                        <>
                            <Spinner animation="border" variant="primary" />
                            <p>Aguarde, enquanto os mercados são carregados...</p>
                        </>
                    }
                    <Table striped bordered>
                        <thead>
                            <tr className="bg-danger text-dark">
                                <th>Nome</th>
                                <th>Status</th>
                                <th>Inclusão</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mercados.map(item => {
                                <tr key={item._id}>
                                    <td>{item.nome}</td>
                                    <td>{item.status}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <Button variant="outline-primary" tittle="Editar o registro">
                                            <MdModeEdit />
                                        </Button>
                                        &nbsp;
                                        <Button variant="outline-danger" tittle="Apagar o registro">
                                            <MdDelete />
                                        </Button>
                                    </td>
                                </tr>
                            })}
                            <tr className="bg-light text-light">
                                <td colSpan="3">Total de Registros:</td>
                                <td>{mercados.lenght}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

            </Row>
            <Rodape />
        </Container>
    )
}

export default Mercados