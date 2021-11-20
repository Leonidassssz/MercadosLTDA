import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {MdRestaurantMenu, MdDescription, MdStore, MdHome, MdMailOutline, MdLocalPizza, MdAccountCircle } from 'react-icons/md'

const Cabecalho = () => {
    return (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand><MdLocalPizza/> MercadosLTDA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#/"><MdHome/> Início</Nav.Link>
            <Nav.Link href="#/mercados"><MdRestaurantMenu/> Mercados</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default Cabecalho