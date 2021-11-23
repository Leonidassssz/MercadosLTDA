import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {MdRestaurantMenu, MdDescription, MdStore, MdHome, MdMailOutline, MdLocalPizza, MdAccountCircle } from 'react-icons/md'
import { FcSms,FcOrganization, FcShop, FcCloseUpMode } from "react-icons/fc"


const Cabecalho = () => {
    return (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand><FcCloseUpMode/> MercadosLTDA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#/"><FcShop/> Início</Nav.Link>
            <Nav.Link href="#/mercados"><FcOrganization/> Mercados</Nav.Link>
            <Nav.Link href="#/about"><FcSms/> Quem somos?</Nav.Link>

        </Nav>
    </Navbar>
    )
}

export default Cabecalho