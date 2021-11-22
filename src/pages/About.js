import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const About = () => {
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
            </Container>
    )
}

export default About
