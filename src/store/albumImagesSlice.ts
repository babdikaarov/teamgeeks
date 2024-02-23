import { createSlice } from "@reduxjs/toolkit";
import { getAlbumImages } from "./thunkCollection";

const initialState: Slice.IBandImagesSlice = {
   data: [
      {
         id: 0,
         albumId: 0,
         name: "",
         image: "",
         originalImage: "",
         orientation: "",
         bluer: "",
         coverImage: false,
      },
   ],
   getLoading: false,
};

const albumImagesSlice = createSlice({
   name: "albumImagesSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAlbumImages.fulfilled, (state, { payload }) => {
         state.getLoading = true;
         state.data = payload;
      });
      builder.addCase(getAlbumImages.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersAlbumImagesSlice = albumImagesSlice.reducer;
