import { createSlice } from "@reduxjs/toolkit";
import { getStudentReviwes } from "./studentsFeedbackThunk";

const initialState = {
   data: [],
   getLoading: false,
};

const studentsReviwe = createSlice({
   name: "studentReviws",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getStudentReviwes.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getStudentReviwes.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getStudentReviwes.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersStudentReviwe = studentsReviwe.reducer;
