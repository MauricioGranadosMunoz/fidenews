import { noticiasApi } from "../../../api/noticiasApi";
import { setNews, startLoadingNews, setNoticiaSelected, setCategorias, setAllNoticias, setUsuarioLogged } from "./newSlice";

const getNoticiasByFilter = ( { cantidadNoticiasFiltrar = 5, orderNoticiasFiltrar = 'ASC',  orderSubcategoria = 1 } ) => {
    return async(dispatch, getState ) => {
        dispatch(startLoadingNews());

        const { data: dataNoticiasFilterHome } = await noticiasApi.post(
            `/noticias-by-filter.php`,
            {
                "NUM_ROWS": cantidadNoticiasFiltrar,
                "ORDEN_NOTICIAS_SUBCAT": orderSubcategoria,
                "ORDER_ROWS": orderNoticiasFiltrar
            }
        )
        const { data: dataNoticiasFilterHeader } = await noticiasApi.post(
            `/noticias-by-filter.php`,
            {
                "NUM_ROWS": 2,
                "ORDEN_NOTICIAS_SUBCAT": 1,
                "ORDER_ROWS": "DESC"
            }
        )

        
        dispatch(setNews({
            noticiasHeader: dataNoticiasFilterHeader.NOTICIAS,
            noticiasFilterHome: dataNoticiasFilterHome.NOTICIAS,
            page: 1
        }));
    }
}
const getNoticiaById = ( noticiaId ) => {
    return async(dispatch, getState ) => {
        const { data } = await noticiasApi.post(
            `/getNoticiabyId.php`,
            {"NT_NOTICIA_ID": noticiaId}
        )
        const { NOTICIAS } = data;

        
        dispatch(setNoticiaSelected({
            noticiaSelected: NOTICIAS[0],
            modalOpen: true
        }));          
}}


const getCategorias = () => {
    return async(dispatch, getState ) => {
        const { data } = await noticiasApi.get(
            `/obtenerCategorias.php`
        )
        dispatch(setCategorias({
            categorias: data.CATEGORIAS
        })); 
}}
const getAllNoticias = () => {
    return async(dispatch, getState ) => {
        const { data } = await noticiasApi.get(
            `/todas-noticias.php`
        )
        dispatch(setAllNoticias({
            noticias: data.NOTICIAS
        })); 
}}

const asignarCalificacionNoticia = (noticia_id = 1, { calificacion = 1 }) => {
    return async(dispatch, getState ) => {
        const { data } = await noticiasApi.post(
            `/actualizar-noticia.php`,
            {
                "UPDATE_TYPE": 2,
                "CAL_CALIFICACION_ID_V": 0,
                "CAL_NOTA_V": calificacion,
                "CAL_NT_NOTICIA_ID_V": noticia_id,
                "CAL_USF_USUARIO_FINAL_ID_V": 1
            }
        )
        const { NOTICIAS } = data;
}}

const loginUsuario = ({ US_CORREO, US_CONTRASENA }) => {
    return async(dispatch, getState ) => {
        const { data } = await noticiasApi.post(
            `/getUsuariobyemail.php`,
            {
                "US_CORREO": US_CORREO,
                "US_CONTRASENA": US_CONTRASENA
            }
        )
        const { USUARIO } = data;
        localStorage.setItem("userLogged", JSON.stringify(USUARIO));
        dispatch(setUsuarioLogged({
            usuario: USUARIO[0]
        }));          
}}

const checkUsuario = () => {
    return async(dispatch, getState ) => {
        const usuario  = JSON.parse(localStorage.getItem('userLogged'));
        if (usuario){
            dispatch(setUsuarioLogged({
                usuario: usuario[0]
            }));
        }
}}



export {
    getNoticiasByFilter,
    getNoticiaById,
    getCategorias,
    asignarCalificacionNoticia,
    getAllNoticias,
    loginUsuario,
    checkUsuario
}

