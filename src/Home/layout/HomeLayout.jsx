import { PublicNavBar } from '../../UI/NavBar/PublicNavBar';
import { PublicFooter } from '../../UI/Footer/PublicFooter';

export const HomeLayout = ({ children, hasHeader }) => {
  console.log(hasHeader)
  return (
    <div className='d-flex flex-column min-vh-100 bg-success'>
            <PublicNavBar/>
            { children }
            <PublicFooter/>
  </div>
  )
}
