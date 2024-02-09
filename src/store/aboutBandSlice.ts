import { createSlice } from "@reduxjs/toolkit";
import { IAboutData } from "../types.ts";
import { getAboutBand } from "./aboutBandThunk.ts";

interface IAboutBand {
   data: IAboutData | undefined;
   getLoading: boolean;
}

const initialState: IAboutBand = {
   data: {
      id: 0,
      image: "",
      orientation: "",
      bluer: "",
   },
   getLoading: false,
};

const aboutBand = createSlice({
   name: "aboutBand",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAboutBand.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getAboutBand.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getAboutBand.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersAboutBand = aboutBand.reducer;
