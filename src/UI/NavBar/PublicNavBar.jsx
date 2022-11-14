import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const PublicNavBar = () => {
  return (
   <>
      <Navbar bg="light" variant="light" className='main-navbar'>
        <Container>
          <Navbar.Brand href="#home">FIDELITAS NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="AdminPanel">Admin Panel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}
