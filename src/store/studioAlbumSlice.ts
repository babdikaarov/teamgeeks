import { createSlice } from "@reduxjs/toolkit";
import { getStudioAlbum } from "./thunkCollection";

const initialState: Slice.IStudioAlbumSlice = {
   data: [
      {
         id: 0,
         coverImage: "",
         date: "",
         name: "",
         location: "",
         bluer: "",
      },
   ],
   getLoading: false,
};

const studioAlbumSlice = createSlice({
   name: "studioAlbumSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getStudioAlbum.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         } else {
            state.getLoading = false;
         }
      });
      builder.addCase(getStudioAlbum.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersStudioAlbumSlice = studioAlbumSlice.reducer;
