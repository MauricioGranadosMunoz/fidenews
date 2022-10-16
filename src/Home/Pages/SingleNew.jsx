import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from "react-router-dom"
import { HomeLayout } from '../layout/HomeLayout'

export const SingleNew = () => {
  const { id } = useParams();
  return (
    <>
    <HomeLayout>
        <h1>Homepage | SingleNew </h1>
        <hr/>
        <p>New ID: <b>{ id }</b></p>
        <LinkContainer variant="danger" to="/">
          <Button>NAVIGATE TO HOMEPAGE</Button>
        </LinkContainer>
    </HomeLayout>
   </>
  )
}
