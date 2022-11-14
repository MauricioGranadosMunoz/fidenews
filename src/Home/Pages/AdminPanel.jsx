import { HomeLayout } from '../layout/HomeLayout'
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'



export const AdminPanel = () => {
    const [value, setValue] = useState('Seleccione una opcion de búsqueda');
    const [valuex, setValuex] = useState('Seleccione una opcion de búsqueda');
    const handleSelect = (e) => {
        setValue(e)
    }
    const handleSelectx = (x) => {
        setValuex(x)
    }

    return (
        <>
            <HomeLayout hasHeader={true}>

                <div className='main-content animate__animated animate__fadeIn'>
                    <h1 className='main-title'>Panel de administrador</h1>

                    <InputGroup>
                        <DropdownButton
                            value="Seleccione una opcion de busqueda"
                            variant="outline-secondary"
                            title={valuex}
                            id="input-group-dropdown-3"
                            onSelect={handleSelectx}
                        >
                            <Dropdown.Item eventKey="Id">Id</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Nombre">Nombre</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control aria-label="Text input with 2 dropdown buttons" />
                        <Button variant="outline-secondary" id="button-addon1">
                            Buscar
                        </Button>
                    </InputGroup>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Usuarios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Id usuario</td><td>Usuario</td><td><Nav.Link href="/EditUser">Editar</Nav.Link></td></tr>
                        </tbody>
                    </Table>
                </div>

                <div className='main-content animate__animated animate__fadeIn'>
                    <InputGroup>
                        <DropdownButton
                            value="Seleccione una opcion de busqueda"
                            variant="outline-secondary"
                            title={value}
                            id="input-group-dropdown-3"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Autor">Autor</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Fecha">Fecha</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Categoria">Categoria</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control aria-label="Text input with 2 dropdown buttons" />
                        <Button variant="outline-secondary" id="button-addon1">
                            Buscar
                        </Button>
                    </InputGroup>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Noticias</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Id Noticia</td><td>Titulo Noticia</td><td><Nav.Link href="/EditNews">Editar</Nav.Link></td></tr>
                        </tbody>
                    </Table>
                    <LinkContainer variant="primary" to="/">
                        <Button variant="outline-primary" className='float-right' style={{ float: 'right' }} >Volver</Button>
                    </LinkContainer>
                </div>

            </HomeLayout>
        </>
    )
}