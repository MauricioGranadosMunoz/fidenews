import { createSlice } from '@reduxjs/toolkit';

export const newSlice = createSlice({
  name: 'noticias',
  initialState: {
    page: 0,
    noticias: [],
    usuario: [],
    noticiasHeader: [],
    noticiasFilterHome: [],
    noticiaSelected: [],
    categorias: [],
    isLoading: false,
    modalOpen: false,
  },
  reducers: {
    startLoadingNews: ( state ) => {
      state.isLoading = true;
    },
    setNews: ( state, action ) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.noticiasHeader = action.payload.noticiasHeader;
      state.noticiasFilterHome = action.payload.noticiasFilterHome;
    },
    setNoticiaSelected: ( state, action ) => {
      state.noticiaSelected = action.payload.noticiaSelected;
      state.modalOpen = action.payload.modalOpen;
    },
    setCategorias: ( state, action ) => {
      state.categorias = action.payload.categorias;
    },
    setModalState: ( state, action ) => {
      state.modalOpen = action.payload.modalOpen;
    },
    setAllNoticias: ( state, action ) => {
      state.noticias = action.payload.noticias;
    },
    setUsuarioLogged: ( state, action ) => {
      state.usuario = action.payload.usuario;
    }
  }
});

export const { startLoadingNews, setNews, setNoticiaSelected, setCategorias, setModalState, setAllNoticias, setUsuarioLogged } = newSlice.actions;