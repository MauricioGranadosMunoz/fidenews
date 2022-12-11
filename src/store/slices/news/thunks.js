import { noticiasApi } from "../../../api/noticiasApi";
import { setNews, startLoadingNews, setNoticiaSelected, setCategorias } from "./newSlice";

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
            noticiaSelected: NOTICIAS[0]
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

export {
    getNoticiasByFilter,
    getNoticiaById,
    getCategorias
}

