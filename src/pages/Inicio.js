import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                    <p>Conclua os cadastros através do menu acima</p>
                </Col>

            </Row>
            <Rodape />
        </Container>
    )
}

export default Inicio