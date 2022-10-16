import { PublicNavBar } from '../../UI/NavBar/PublicNavBar';
import { PublicFooter } from '../../UI/Footer/PublicFooter';

export const HomeLayout = ({ children }) => {
  return (
    <div className='d-flex flex-column min-vh-100 bg-success'>
            <PublicNavBar/>
        <div className='main-content'>
            { children }
        </div>
            <PublicFooter/>
  </div>
  )
}
