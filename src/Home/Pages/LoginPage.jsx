import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux'
import { loginUsuario } from '../../store/slices/news';
import { HomeLayout } from '../layout/HomeLayout'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { US_CORREO, US_CONTRASENA, onInputChange, formState } = useForm({
        US_CORREO: '',
        US_CONTRASENA: '',
    });

    const { usuario } = useSelector(state => state.news);
   
    const onLoginCLick = () =>{
        dispatch(loginUsuario(formState));

    }
    useEffect(() => {
        if(usuario){
            if (usuario.length !== 0) {
                if(usuario.RPT_REPORTERO_ID !== null ) {
                    navigate('/admin/AdminPanel', {
                        replace: true
                    });
                } else {
                    navigate('/', {
                        replace: true
                    });
                }
            }
        }

    }, [usuario])
    

    
    

  return (
    <HomeLayout hasHeader={false}>
        <div className='login-container'>
        <div className='box-login left'>
            <img src="https://res.cloudinary.com/ctp-san-pablo/image/upload/v1670794815/login-ilustracion.svg"/>
        </div>
        <div className='box-login right'>

            <div className='login-inputs-container'>
                <h1>Login</h1>
                <div className="form-group mb-3">
                    <label>Correo Electronico</label>
                    <input value={ US_CORREO } name="US_CORREO" className="form-control" placeholder="Correo electronico" onChange={ onInputChange }/>
                </div>
                <div className="form-group mb-4">
                    <label>Contraseña</label>
                    <input alue={ US_CONTRASENA } name="US_CONTRASENA" className="form-control" placeholder="Contraseña" onChange={ onInputChange }/>
                </div>
                <button type="button" className="btn btn-yellow mb-3" onClick={ onLoginCLick }>Auntenticarse</button>
            </div>



        </div>
        </div>
    </HomeLayout>
  )
}
