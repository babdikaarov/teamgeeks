import { createSlice } from "@reduxjs/toolkit";
import { getStudentReviwes } from "./thunkCollection.ts";

const initialState: Slice.StudentsFeedback.IStudentsFeedBackState = {
   data: [
      {
         id: 0,
         name: "",
         image: "",
         bluer: "",
         reviews: "",
         orientation: "",
      },
   ],
   getLoading: false,
};

const studentsReviwe = createSlice({
   name: "studentReviws",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getStudentReviwes.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         }
      });
      builder.addCase(getStudentReviwes.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersStudentReviwe = studentsReviwe.reducer;
