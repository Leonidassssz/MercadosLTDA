import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { FcUnlock, FcAbout, FcCheckmark, FcProcess } from "react-icons/fc";
import Button from 'react-bootstrap/Button'




import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

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
            <h4><FcAbout />Login</h4>
            <Form method="post">
                <Form.Group controlId="nome">
                    <Form.Label>Digite seu email!</Form.Label>
                    <Form.Control
                        name="nome"
                        placeholder="Ex: fulano@gmail.com"
                    />

                </Form.Group>
            </Form>
            <h4><FcUnlock />Crie sua senha</h4>
            <Form method="post">
                <Form.Group controlId="nome">
                    <Form.Label>Crie uma senha!</Form.Label>
                    <Form.Control
                        name="nome"
                    />
                </Form.Group>
                <h4><FcProcess />Confirmar Senha</h4>
                <Form.Group controlId="nome">
                    <Form.Label>Confirme sua senha!</Form.Label>
                    <Form.Control
                        name="nome"
                    />
                </Form.Group>
                <td>
                    &nbsp;
                    <Button variant="primary" type="submit"
                        title="Salvar o registro">
                        <FcCheckmark /> Entrar
                    </Button>
                </td>
            </Form>

        </Container>
    )
}

export default Inicio