import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import { FcBusiness, FcFeedback, FcPhone } from "react-icons/fc";

const Rodape = () => {
    return(
<Navbar bg="dark" fixed="bottom">
    <Navbar.Brand className="text-light">
        <FcBusiness/> MercadosLTDA &copy; - Todos os direitos reservados! 🗿🤙
        <h4><FcFeedback/>Email para contato mercadosltda@contato.com</h4>
        <h4><FcPhone/>Telefone para contato: (11)991234567</h4>
    </Navbar.Brand>
</Navbar>
    )
}

export default Rodape