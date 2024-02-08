import { createSlice } from "@reduxjs/toolkit";
import { IHeroBand } from "../types.ts";
import { getHeroBand } from "./herobandThunk.ts";

interface IHero {
   data: IHeroBand | undefined;
   getLoading: boolean;
}

const initialState: IHero = {
   data: {
      id: 0,
      video: "",
      orientation: "",
   },
   getLoading: false,
};

const heroBand = createSlice({
   name: "heroBand",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getHeroBand.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getHeroBand.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getHeroBand.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersHeroBand = heroBand.reducer;
