import { HomeLayout } from '../layout/HomeLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

export const EditUser = () => {
    return (
        <>
            <HomeLayout hasHeader={true}>
                <div className='main-content animate__animated animate__fadeIn'>
                    <h1 className='main-title'>Editar usuario</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="Text" placeholder="Id usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="Text" placeholder="Nombre usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="Text" placeholder="Apellidos usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha creacion</Form.Label>
                            <Form.Control type="Date" placeholder="Fecha creacion" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="Text" placeholder="Estado usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control type="text" placeholder="Rol usuario" />
                        </Form.Group>

                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                        <LinkContainer variant="primary" to="/AdminPanel">
                            <Button variant="outline-primary" className='float-right' style={{ float: 'right' }} >Volver</Button>
                        </LinkContainer>
                    </Form>

                </div>
                <div>

                </div>
            </HomeLayout>
        </>
    )
}
