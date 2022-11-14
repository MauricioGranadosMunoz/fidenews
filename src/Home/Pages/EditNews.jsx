import { HomeLayout } from '../layout/HomeLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

export const EditNews = () => {
    return (
        <>
            <HomeLayout hasHeader={true}>
                <div className='main-content animate__animated animate__fadeIn'>
                    <h1 className='main-title'>Editar Noticia</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="Text" placeholder="Id noticia" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" placeholder="Titulo noticia" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="Text" placeholder="Link imagen" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control type="Text" placeholder="Categoría noticia" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha creacion</Form.Label>
                            <Form.Control type="Date" placeholder="Fecha creacion" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="Text" placeholder="Descripción noticia" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control type="text" placeholder="Autor noticia" />
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
