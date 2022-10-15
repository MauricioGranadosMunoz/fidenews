import { createSlice } from '@reduxjs/toolkit';

export const newSlice = createSlice({
  name: 'new',
  initialState: {
    page: 0,
    news: [],
    isLoading: false
  },
  reducers: {
    startLoadingNews: ( state ) => {
      state.isLoading = true;
    },
    setNews: ( state, action ) => {
      state.isLoading = false;
      state.page = action.payload.page
      state.news = action.payload.news
    }
  }
});

export const { startLoadingNews, setNews } = newSlice.actions;