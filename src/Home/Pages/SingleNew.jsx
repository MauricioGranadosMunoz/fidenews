import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { HomeLayout } from '../layout/HomeLayout'
import { useEffect } from 'react'
import { getNoticiaById } from '../../store/slices/news'

export const SingleNew = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { noticiaSelected } = useSelector(state => state.news);
  const { NOTICIA_ID, IMAGEN, TITULO, DESCRIPCION, PROMEDIO, REPORTERO, SUBCATEGORIA, CATEGORIA, NT_FECHA_CREACION, VISTAS } = noticiaSelected;
  useEffect(() => {
    dispatch(getNoticiaById(id));
  }, [])

  return (
    <>
    <HomeLayout>
      <div className='main-header animate__animated animate__fadeIn'>
      <img
          className="d-block w-100"
          src="https://p4.wallpaperbetter.com/wallpaper/1022/622/369/classroom-education-learning-lecture-wallpaper-preview.jpg"
          alt="Second slide"
        />
      </div>
      <div className='main-content animate__animated animate__fadeIn'>
        <LinkContainer className='mb-3' variant="danger" to="/">
          <Button>NAVIGATE TO HOMEPAGE</Button>
        </LinkContainer>
        <h1>{ TITULO } </h1>
        <hr/>
        <p>Noticia ID: <b>{ NOTICIA_ID }</b></p>
        <p>Descripcion: <b>{ DESCRIPCION }</b></p>
        <p>Promedio: <b>{ PROMEDIO }</b></p>
        <p>Nombre reportero: <b>{ REPORTERO }</b></p>
        <p>Subcategoria: <b>{ SUBCATEGORIA }</b></p>
        <p>Categoria: <b>{ CATEGORIA }</b></p>
        <p>Vistas: <b>{ VISTAS }</b></p>
        <p>Fecha de creación: <b>{ NT_FECHA_CREACION }</b></p>
        </div>
    </HomeLayout>
   </>
  )
}
