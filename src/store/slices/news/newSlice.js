import { createSlice } from '@reduxjs/toolkit';

export const newSlice = createSlice({
  name: 'noticias',
  initialState: {
    page: 0,
    noticiasHeader: [],
    noticiasFilterHome: [],
    noticiaSelected: [],
    categorias: [],
    isLoading: false
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
    },
    setCategorias: ( state, action ) => {
      state.categorias = action.payload.categorias;
    }
  }
});

export const { startLoadingNews, setNews, setNoticiaSelected, setCategorias } = newSlice.actions;