import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Dashboard'
import { UserAdminPage } from '../Pages'

export const AdminRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <Dashboard/> }/>
            <Route path='/users' element={ <UserAdminPage/> }/>
        </Routes>
    </>
  )
}
