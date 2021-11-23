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
                    <h1>Nós da MercadoLTDA temos um próposito</h1>
                    <p>Nosso site é capaz de salvar o nome de todos od mercados do mundo
                        para isso temos servidores hospedados em diversos com uma diversidade enorme
                        de mercados, desde o mercado da sua esquina até o maior Walmart do mundo </p>
                </Col>

            </Row>
            <Rodape />
            </Container>
    )
}

export default About
