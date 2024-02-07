import { createSlice } from "@reduxjs/toolkit";
import { GetCoolStudioVideo } from "../types.ts";
import { getCoolStudio } from "./aboutStudioThunk.ts";

interface CoolStudio {
   data: GetCoolStudioVideo | undefined;
   getLoading: boolean;
}

const initialState: CoolStudio = {
   data: {
      id: 0,
      image: "string",
      orientation: "PORTRAIT",
      bluer: "string",
      youtubeUrl: "string",
   },
   getLoading: false,
};

const coolStudio = createSlice({
   name: "coolStudio",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCoolStudio.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getCoolStudio.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getCoolStudio.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersCoolStudio = coolStudio.reducer;
export const selectCoolStudio = (state: { coolStudio: CoolStudio }) => state.coolStudio;
export const selectCoolStudioData = (state: { coolStudio: CoolStudio }) => state.coolStudio.data;
