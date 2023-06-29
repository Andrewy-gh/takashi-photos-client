import { configureStore } from '@reduxjs/toolkit';
import cloudinaryReducer from '../features/cloudinarySlice';
import filterReducer from '../features/filterSlice';
import userReducer from '../features/userSlice';
import imageReducer from '../features/imageSlice';

const store = configureStore({
  reducer: {
    cloudName: cloudinaryReducer,
    filter: filterReducer,
    images: imageReducer,
    user: userReducer,
  },
});

export default store;
