import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: null,
  reducers: {
    filterImages(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterImages } = filterSlice.actions;
export default filterSlice.reducer;
