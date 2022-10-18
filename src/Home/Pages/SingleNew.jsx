import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from "react-router-dom"
import { HomeLayout } from '../layout/HomeLayout'

export const SingleNew = () => {
  const { id } = useParams();
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
        <h1>Homepage | SingleNew </h1>
        <hr/>
        <p>New ID: <b>{ id }</b></p>
        <LinkContainer variant="danger" to="/">
          <Button>NAVIGATE TO HOMEPAGE</Button>
        </LinkContainer>
        </div>
    </HomeLayout>
   </>
  )
}
