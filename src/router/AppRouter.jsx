import { Route, Routes } from "react-router-dom"
import { AdminRoutes } from "../Admin/routes/AdminRoutes"
import { HomePage } from "../Home/Pages/HomePage"
import { SingleNew } from "../Home/Pages/SingleNew"
import { AdminPanel } from "../Home/Pages/AdminPanel"
import { PrivateRoute } from "./PrivateRoute"
import { EditUser } from "../Home/Pages/EditUser"
import { EditNews } from "../Home/Pages/EditNews"
import { LoginPage } from "../Home/Pages/LoginPage"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/new/:id' element={ <SingleNew/> }/>
          <Route path="/admin/*" element={
            <PrivateRoute>
              <AdminRoutes/>
            </PrivateRoute>
          } />
          <Route path="/admin/AdminPanel" element={
            <PrivateRoute>
              <AdminPanel/>
            </PrivateRoute>
          } />
          <Route path='/login' element={ <LoginPage/> }/>
          <Route path='/EditUser' element={ <EditUser/> }/>
          <Route path='/EditNews' element={ <EditNews/> }/>
      </Routes>
    </>
  )
}