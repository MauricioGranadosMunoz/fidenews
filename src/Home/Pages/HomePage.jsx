import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { HomeLayout } from '../layout/HomeLayout'

export const HomePage = () => {
  return (
   <>
    <HomeLayout>
        <h1>Homepage | All News </h1>
        <hr/>
        <LinkContainer variant="danger" to="/new/123abc456xyz">
          <Button>NAVIGATE TO SINGLE NEW</Button>
        </LinkContainer>
    </HomeLayout>
   </>
  )
}
