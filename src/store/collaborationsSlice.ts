import { createSlice } from "@reduxjs/toolkit";
import { getCollaborations } from "./thunkCollection.ts";

const initialState: Slice.ICollaborations = {
   data: [
      {
         id: 0,
         name: "",
         image: "",
         bluer: "",
         orientation: "",
      },
   ],
   getLoading: false,
};

const collaborations = createSlice({
   name: "collaborations",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCollaborations.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         }
      });
      builder.addCase(getCollaborations.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersCollaborations = collaborations.reducer;
