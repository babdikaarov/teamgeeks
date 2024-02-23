import { createSlice } from "@reduxjs/toolkit";
import { getAlbumByID } from "./thunkCollection";

const initialState: Slice.IAlbumByID = {
   data: {
      id: 0,
      coverImage: "",
      date: "",
      name: "",
      location: "",
      orientation: "",
   },
   getLoading: false,
};

const albumByIDSlice = createSlice({
   name: "albumByIDSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAlbumByID.fulfilled, (state, { payload }) => {
         if (payload) {
            if (payload) {
               state.getLoading = true;
               state.data = payload;
            }
         } else {
            state.getLoading = false;
         }
      });
      builder.addCase(getAlbumByID.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersAlbumByIDSlice = albumByIDSlice.reducer;
