import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { HomeLayout } from '../layout/HomeLayout'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

export const HomePage = () => {
  return (
   <>
    <HomeLayout hasHeader={true}>
    <Carousel className='page-header animate__animated animate__fadeIn'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://cdn.ufidelitas.ac.cr/wp-content/uploads/2021/08/07081942/Untitled-5-1-1240x780-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.ufidelitas.ac.cr/wp-content/uploads/2021/08/07081942/image003.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.larepublica.net/storage/images/2018/01/08/201801080850560.fidelitas-f.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='main-content animate__animated animate__fadeIn'>
        <h1 className='main-title'>Noticias Recientes</h1>


          <div className='d-flex flex-row justify-content-between'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://p4.wallpaperbetter.com/wallpaper/1022/622/369/classroom-education-learning-lecture-wallpaper-preview.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <LinkContainer variant="primary" to="/new/123abc456xyz">
                <Button>Leer Noticia</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://p4.wallpaperbetter.com/wallpaper/1022/622/369/classroom-education-learning-lecture-wallpaper-preview.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <LinkContainer variant="primary" to="/new/123abc456xyz">
                <Button>Leer Noticia</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://p4.wallpaperbetter.com/wallpaper/1022/622/369/classroom-education-learning-lecture-wallpaper-preview.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <LinkContainer variant="primary" to="/new/123abc456xyz">
                <Button>Leer Noticia</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://p4.wallpaperbetter.com/wallpaper/1022/622/369/classroom-education-learning-lecture-wallpaper-preview.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <LinkContainer variant="primary" to="/new/123abc456xyz">
                <Button>Leer Noticia</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </div>

    </div>
    </HomeLayout>
   </>
  )
}