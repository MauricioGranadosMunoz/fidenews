import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { checkUsuario } from '../../store/slices/news'

export const PublicNavBar = () => {
  const dispatch = useDispatch();
  const { usuario } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(checkUsuario());
  }, [])

  const UserLogged = () => {
    return (
      <div className='userLogged-box'>
        <p>{ usuario.US_USERNAME }</p>
        <Nav.Link className="logout-cta" href="/login">Salir</Nav.Link>
      </div>
    )
  }
  
  return (
   <>
      <Navbar bg="light" variant="light" className='main-navbar'>
        <Container>
          <Navbar.Brand href="/">FIDELITAS NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Todas Noticias</Nav.Link>
            {
              usuario.RPT_REPORTERO_ID && <Nav.Link href="/admin/AdminPanel">Admin Panel</Nav.Link>
            }
            {
              usuario.US_USERNAME
              ? <UserLogged/>
              : <Nav.Link className="login-cta-header" href="/login">Login</Nav.Link>
            }
            
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}
