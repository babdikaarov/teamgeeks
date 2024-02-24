import { createSlice } from "@reduxjs/toolkit";
import { getBandAlbum } from "./thunkCollection";

const initialState: Slice.IBandAlbumSlice = {
   data: [
      {
         id: 0,
         coverImage: "",
         date: "",
         name: "",
         orientation: "",
         bluer: "",
      },
   ],
   getLoading: false,
};

const bandAlbumSlice = createSlice({
   name: "bandAlbumSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getBandAlbum.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         } else {
            state.getLoading = false;
         }
      });
      builder.addCase(getBandAlbum.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersBandAlbumSlice = bandAlbumSlice.reducer;
