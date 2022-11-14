import { Route, Routes } from "react-router-dom"
import { AdminRoutes } from "../Admin/routes/AdminRoutes"
import { HomePage } from "../Home/Pages/HomePage"
import { SingleNew } from "../Home/Pages/SingleNew"
import { AdminPanel } from "../Home/Pages/AdminPanel"
import { PrivateRoute } from "./PrivateRoute"
import { EditUser } from "../Home/Pages/EditUser"
import { EditNews } from "../Home/Pages/EditNews"

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
          <Route path='/AdminPanel' element={ <AdminPanel/> }/>
          <Route path='/EditUser' element={ <EditUser/> }/>
          <Route path='/EditNews' element={ <EditNews/> }/>
      </Routes>
    </>
  )
}