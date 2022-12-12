import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { HomeLayout } from '../layout/HomeLayout'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import { useForm } from '../../hooks/useForm';

import { getCategorias, getNoticiasByFilter } from '../../store/slices/news';
import { useState } from 'react'

export const HomePage = () => {
  const dispatch = useDispatch();
  const { noticiasHeader, noticiasFilterHome, categorias } = useSelector(state => state.news);

  const [showFilterBox, SetShowFilterBox] = useState(true)
  useEffect(() => {
    dispatch(getCategorias());
    dispatch(getNoticiasByFilter({}));
  }, [])

  const { cantidadNoticiasFiltrar, onInputChange, formState } = useForm({
    cantidadNoticiasFiltrar: 5,
    orderNoticiasFiltrar: 'ASC',
    orderSubcategoria: 1,
  });

  const filtroButtonOnClick = () =>{
    dispatch(getNoticiasByFilter( formState ));
  }

  return (
   <>
    <HomeLayout hasHeader={true}>
    <Carousel className='page-header animate__animated animate__fadeIn'>
      {
        noticiasHeader.map(({ NT_NOTICIA_ID, NT_TITULO, NT_DESCRIPCION, NT_IMAGEN })=>(
          <Carousel.Item key={NT_NOTICIA_ID}>
            <img
              className="d-block w-100"
              src={ NT_IMAGEN }
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>{ NT_TITULO }</h3>
              <p>{ NT_DESCRIPCION }</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
    <div className='main-content animate__animated animate__fadeIn'>
        <h1 className='main-title'>Noticias</h1>
        <button type="button" className="btn btn-yellow mb-3" onClick={ () => SetShowFilterBox(!showFilterBox) }>Mostrar Filtros</button>

        <div className={`filter-box mb-4 animate__animated animate__fadeIn ${showFilterBox && 'd-none' }`}>
          <button type="button" className="btn btn-success mb-3" onClick={ filtroButtonOnClick }>Filtrar</button>
              <div className="form-group mb-3">
                <label>Cantidad Noticias</label>
                <input type="cantidadNoticiasFiltrar" name="cantidadNoticiasFiltrar" value={ cantidadNoticiasFiltrar } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Cantidad" onChange={ onInputChange }/>
              </div>
              <div className="form-group">
                <label>Orden de noticias</label>
                <select className='form-select' name="orderNoticiasFiltrar" aria-label="Orden de noticias" onChange={ onInputChange }>
                  <option defaultValue value="ASC">Más reciente</option>
                  <option value="DESC">Más antigua</option>
                </select>
              </div>
              <div className="form-group">
                <label>Seleccionar Categoria</label>
                <select className='form-select' name="orderSubcategoria" aria-label="Orden de noticias" onChange={ onInputChange }>
                  {
                    categorias.map(({ SBC_SUBCATEGORIA_ID, SBC_DESCRIPCION }) => (
                      <option value={ SBC_SUBCATEGORIA_ID } key={ SBC_SUBCATEGORIA_ID }>{ SBC_DESCRIPCION }</option>
                    ))
                  }
                </select>
              </div>

          {/* <TextField label="Correo Electrónico" type="email" name="email" value={ email } onChange={ onInputChange } fullWidth/> */}
        </div>

          <div className='d-flex flex-row cards-home-container'>
          {
            noticiasFilterHome.map(({ NT_NOTICIA_ID, NT_TITULO, NT_DESCRIPCION, NT_VISITA, NT_IMAGEN })=>(
              <Card className='animate__animated animate__fadeIn' style={{ width: '18rem' }} key={ NT_NOTICIA_ID }>
                <Card.Img variant="top" src={ NT_IMAGEN } />
                <Card.Body>
                  <Card.Title>{ NT_TITULO }</Card.Title>
                  <Card.Text>{ NT_DESCRIPCION }</Card.Text>
                  <Card.Text>VISTAS: { NT_VISITA }</Card.Text>                 
                  <LinkContainer className="btn btn-info" variant="primary" to={`/new/${NT_NOTICIA_ID}`}>
                    <Button>Leer Noticia</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </div>
    </HomeLayout>
   </>
  )
}