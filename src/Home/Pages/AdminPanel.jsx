import { useEffect, useState } from 'react';
import { HomeLayout } from '../layout/HomeLayout'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarNoticia, getAllNoticias, getNoticiaById, getNoticiasByFilter, guardarNoticia, setModalState } from '../../store/slices/news';
import { Button, Card, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useForm } from '../../hooks/useForm';

export const AdminPanel = () => {
    const dispatch = useDispatch();

    const [updateModal, setUpdateModal] = useState(false);
    const [verModal, setVerModal] = useState(false);
    const [deleteModal, setFeleteModal] = useState(false);
    const [addModal, setaddModal] = useState(false);

    const { noticiaSelected = { }, modalOpen, noticias } = useSelector(state => state.news);
    const { NOTICIA_ID, IMAGEN, TITULO, DESCRIPCION, PROMEDIO, REPORTERO, SUBCATEGORIA, CATEGORIA, NT_FECHA_CREACION, VISTAS } = noticiaSelected;
    const { noticiaTitulo, noticiaDescripcion, noticiaImagen, noticiaSubcategoria, noticiaReportero, onInputChange, formState } = useForm({
        noticiaId: NOTICIA_ID,
        noticiaImagen: IMAGEN,
        noticiaTitulo: TITULO,
        noticiaDescripcion: DESCRIPCION,
        noticiaSubcategoria: SUBCATEGORIA,
        noticiaReportero: REPORTERO
    });

    useEffect(() => {
        dispatch(getAllNoticias());
      }, [noticias])


    const handleClose = () => {
        dispatch(setModalState({
            modalOpen: false
        })); 
    };

    const handleShowVer = (e) => {
        dispatch(getNoticiaById(e.target.getAttribute('noticia-id')))

        setFeleteModal(false);
        setUpdateModal(false);
        setaddModal(false);
        setVerModal(true);
    };
    const handleShowEditar = (e) => {
        dispatch(getNoticiaById(e.target.getAttribute('noticia-id')))

        setFeleteModal(false);
        setUpdateModal(true);
        setaddModal(false);
        setVerModal(false);
    };
    const handleShowEliminar = (e) => {
        dispatch(getNoticiaById(e.target.getAttribute('noticia-id')))
        setFeleteModal(true);
        setUpdateModal(false);
        setaddModal(false);
        setVerModal(false);
    };
    
    const handleShowAgregar = (e) => {
        dispatch(getNoticiaById(1))
        setFeleteModal(false);
        setUpdateModal(false);
        setaddModal(true);
        setVerModal(false);
    };

    const onSaveNotcia = () => {
        dispatch(guardarNoticia(formState));
        handleClose();
    }
    const onDeleteNotcia = (e) => {
        dispatch(eliminarNoticia(NOTICIA_ID));
        handleClose();
    }
    const onUpdateNotcia = (e) => {
        dispatch(getAllNoticias(formState));
        handleClose();
    }

    const { noticiasFilterHome } = useSelector(state => state.news);
    return (
        <>
            <HomeLayout hasHeader={ true }>
            <h1 className='main-title admin-title'>Noticias en sistema</h1>
            <button type="button" className="btn btn-success mb-3 admin-add-cta" onClick= { handleShowAgregar }>Agregar Noticia</button>
            <div className='d-flex flex-row cards-home-container admin-panel'>
                {
                    noticias.map(({ NT_NOTICIA_ID, NT_TITULO, NT_DESCRIPCION, NT_VISITA, NT_LINK_IMAGEN })=>(
                    <Card className='animate__animated animate__fadeIn' style={{ width: '18rem' }} key={ NT_NOTICIA_ID }>
                        <Card.Img variant="top" src={ NT_LINK_IMAGEN } />
                        <Card.Body>
                        <Card.Title>{ NT_TITULO }</Card.Title>
                        <Card.Text>{ NT_DESCRIPCION }</Card.Text>
                        <Card.Text>VISTAS: { NT_VISITA }</Card.Text> 
                        </Card.Body>
                        <hr/>
                            <div className="card-cta-container">
                                <p className="card-cta-opciones">Opciones de noticia</p>
                                <button className="btn btn-success" noticia-id= { NT_NOTICIA_ID } onClick= { handleShowVer }>
                                    <svg noticia-id= { NT_NOTICIA_ID } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path noticia-id= { NT_NOTICIA_ID } d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path noticia-id= { NT_NOTICIA_ID } d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                </button>
                                <button className="btn btn-warning editNoticiasModalButton" noticia-id= { NT_NOTICIA_ID } onClick= { handleShowEditar }>
                                    <svg noticia-id= { NT_NOTICIA_ID } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path noticia-id= { NT_NOTICIA_ID } d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </button>
                                <button className="btn btn-danger" noticia-id= { NT_NOTICIA_ID } onClick= { handleShowEliminar }>
                                    <svg noticia-id= { NT_NOTICIA_ID } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path noticia-id= { NT_NOTICIA_ID } d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>
                            </div>
                    </Card>
                    ))
                }
            </div>

                <Modal show={modalOpen} onHide={handleClose}>
                    <Modal.Header closeButton>
                        {
                            deleteModal && <Modal.Title>DESEA ELIMINAR NOTICIA</Modal.Title>
                        }
                        {
                            verModal && <Modal.Title>VER NOTICIA</Modal.Title>
                        }
                        {
                            addModal && <Modal.Title>AGREGAR NOTICIA</Modal.Title>
                        }
                        {
                            updateModal && <Modal.Title>ACTUALIZAR NOTICIA</Modal.Title>
                        }
                    </Modal.Header>

                    <div className={`${!addModal && 'd-none' }`}>
                        <Modal.Body>
                        <div className="form-group mb-4">
                            <label>LINK IMAGEN</label>
                            <input value={ noticiaImagen } name="noticiaImagen" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>Titulo de NOTICIA</label>
                            <input value={ noticiaTitulo } name="noticiaTitulo" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>DESCRIOCION NOTICIA</label>
                            <textarea value={ noticiaDescripcion } name="noticiaDescripcion" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>REPORTERO ID</label>
                            <input value={ noticiaReportero } name="noticiaReportero" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>SUBCATEGORIA ID</label>
                            <input value={ noticiaSubcategoria } name="noticiaSubcategoria" className="form-control" onChange={ onInputChange }/>
                        </div>
                        </Modal.Body>
                                <Modal.Footer>
                                <Button className="btn btn-success mb-3"  variant="secondary" onClick={ onSaveNotcia }>
                                    Agregar Noticia
                                </Button>
                        </Modal.Footer>
                    </div>

                    <div className={`${!verModal && 'd-none' }`}>
                        <Modal.Body>
                        <div className="form-group mb-4">
                            <label>LINK IMAGEN</label>
                            <input defaultValue={ IMAGEN } name="noticiaImagen" className="form-control" disabled/>
                        </div>
                        <div className="form-group mb-4">
                            <label>Titulo de NOTICIA</label>
                            <input defaultValue={ TITULO } name="noticiaTitulo" className="form-control" disabled/>
                        </div>
                        <div className="form-group mb-4">
                            <label>DESCRIOCION NOTICIA</label>
                            <textarea defaultValue={ DESCRIPCION } name="noticiaDescripcion" className="form-control" disabled/>
                        </div>
                        <div className="form-group mb-4">
                            <label>REPORTERO ID</label>
                            <input defaultValue={ REPORTERO } name="noticiaReportero" className="form-control" disabled/>
                        </div>
                        <div className="form-group mb-4">
                            <label>SUBCATEGORIA ID</label>
                            <input defaultValue={ SUBCATEGORIA } name="noticiaSubcategoria" className="form-control" disabled/>
                        </div>

                        </Modal.Body>
                                <Modal.Footer>
                                <Button className="btn btn-yellow mb-3"  variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                        </Modal.Footer>
                    </div>


                    <div className={`${!updateModal && 'd-none' }`}>
                        <Modal.Body>
                        <div className="form-group mb-4">
                            <label>LINK IMAGEN</label>
                            <input defaultValue={ IMAGEN } value={ noticiaImagen } name="noticiaImagen" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>Titulo de NOTICIA</label>
                            <input defaultValue={ TITULO } value={ noticiaTitulo } name="noticiaTitulo" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>DESCRIOCION NOTICIA</label>
                            <textarea defaultValue={ DESCRIPCION } value={ noticiaDescripcion } name="noticiaDescripcion" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>REPORTERO ID</label>
                            <input defaultValue={ REPORTERO } value={ noticiaReportero } name="noticiaReportero" className="form-control" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group mb-4">
                            <label>SUBCATEGORIA ID</label>
                            <input defaultValue={ SUBCATEGORIA } value={ noticiaSubcategoria } name="noticiaSubcategoria" className="form-control" onChange={ onInputChange }/>
                        </div>
                        </Modal.Body>
                                <Modal.Footer>
                                <Button className="btn btn-yellow mb-3"  variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button className='btn btn-success mb-3' variant="primary" onClick={onUpdateNotcia}>
                                    Guardar Cambios
                                </Button>
                        </Modal.Footer>
                    </div>
                    <div className={`${!deleteModal && 'd-none' }`}>
                        <Modal.Body>
                        <div className="form-group mb-4">
                            <label>TITULO</label>
                            <input defaultValue={ TITULO } name="noticiaId" className="form-control" onChange={ onInputChange } disabled/>
                        </div>
                        </Modal.Body>
                                <Modal.Footer>
                                <Button className="btn btn-danger mb-3"  variant="secondary" onClick={ onDeleteNotcia }>
                                    Sí deseo eliminarla
                                </Button>
                        </Modal.Footer>
                        </div>
                </Modal>

            </HomeLayout>
        </>
    )
}