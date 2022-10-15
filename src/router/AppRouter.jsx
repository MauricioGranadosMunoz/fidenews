import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../Admin/Dashboard"
import { UserAdminPage } from "../Admin/pages"
import { AdminRoutes } from "../Admin/routes/AdminRoutes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Dashboard/> }/>
          <Route path="/admin/*" element={
            <PrivateRoute>
              <AdminRoutes/>
            </PrivateRoute>
          } />
      </Routes>
    </>
  )
}