import { createSlice } from "@reduxjs/toolkit";
import { getOurTeam } from "./thunkCollection.ts";

const initialState: Slice.IOurTeam = {
   data: [
      {
         id: 0,
         name: "",
         image: "",
         video: "",
         instrument: "",
         orientation: "",
         bluer: "",
      },
   ],
   getLoading: false,
};

const ourTeam = createSlice({
   name: "ourTeam",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getOurTeam.fulfilled, (state, { payload }) => {
         state.getLoading = true;
         state.data = payload;
      });
      builder.addCase(getOurTeam.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersOurTeam = ourTeam.reducer;
