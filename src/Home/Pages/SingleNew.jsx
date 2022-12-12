import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { HomeLayout } from '../layout/HomeLayout'
import { useEffect } from 'react'
import { asignarCalificacionNoticia, getNoticiaById } from '../../store/slices/news'
import { useForm } from '../../hooks/useForm';


export const SingleNew = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { noticiaSelected, usuario } = useSelector(state => state.news);
  const { NOTICIA_ID, IMAGEN, TITULO, DESCRIPCION, PROMEDIO, REPORTERO, SUBCATEGORIA, CATEGORIA, NT_FECHA_CREACION, VISTAS } = noticiaSelected;
  useEffect(() => {
    dispatch(getNoticiaById(id));
  }, [])

  console.log(usuario.US_USUARIO_ID)
  const { onInputChange, formState } = useForm({
    calificacion: "1",
  });

  const calificarButtonOnClick = () =>{
    dispatch(asignarCalificacionNoticia( id , formState ));
  }

  return (
    <>
   <HomeLayout hasHeader={true}>
      <div className='main-header single-new animate__animated animate__fadeIn'>
        <LinkContainer className='mb-3 back-cta' variant="danger" to="/">
          <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          </Button>
        </LinkContainer>
        <img
          className="d-block w-100"
          src={ IMAGEN }
          alt="Second slide"
        />
        <h1>{ TITULO } </h1>
        <p className='vistar-header'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg> <b>{ VISTAS }</b></p>
        <p className='time-header'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
        </svg> <b>{ NT_FECHA_CREACION }</b></p>
        <p className='score-promedio'><b>{ Math.round(PROMEDIO * 100) / 100}</b></p>
      </div>
      <div className='main-content animate__animated animate__fadeIn'>
        <div className="form-group mb-3">
                <label>Calificar noticia</label>
                <select className='form-select' name="calificacion" aria-label="Orden de noticias" onChange={ onInputChange }>
                  <option defaultValue value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
        </div>
        <button type="button" className="btn btn-success mb-3" onClick={ calificarButtonOnClick }>Calificar</button>
        
        <hr/>
        <p>Noticia ID: <b>{ NOTICIA_ID }</b></p>
        <p>Descripcion: <b>{ DESCRIPCION }</b></p>
        <p>Nombre reportero: <b>{ REPORTERO }</b></p>
        <p>Subcategoria: <b>{ SUBCATEGORIA }</b></p>
        <p>Categoria: <b>{ CATEGORIA }</b></p>
        </div>
    </HomeLayout>
   </>
  )
}
