import { createSlice } from "@reduxjs/toolkit";
import { getCollaborations } from "./collaborationsThunk";

const initialState: Slice.ICollaborations = {
   data: [
      {
         id: 0,
         name: "",
         image: "",
         bluer: "",
         orientation: ""
      },
   ],
   getLoading: false
};

const collaborations = createSlice({
   name: "collaborations",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCollaborations.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getCollaborations.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getCollaborations.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersCollaborations = collaborations.reducer;
