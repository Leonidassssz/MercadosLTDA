import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import { MdLocalPizza } from 'react-icons/md'

const Rodape = () => {
    return(
<Navbar bg="dark" fixed="bottom">
    <Navbar.Brand className="text-light">
        <MdLocalPizza/> MercadosLTDA &copy; - Todos os direitos reservados! 🗿🤙
    </Navbar.Brand>
</Navbar>
    )
}

export default Rodape