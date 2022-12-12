import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const usuario  = JSON.parse(localStorage.getItem('userLogged'));
    const { RPT_REPORTERO_ID } = usuario[0];

    const isLogged = RPT_REPORTERO_ID ? true : false;

    return (isLogged) 
    ? children
    : <Navigate to='/login'/>

}
