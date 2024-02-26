import { createSlice } from "@reduxjs/toolkit";
import { getCourses } from "./thunkCollection.ts";

const initialState: Slice.Courses.IGetCourses = {
   data: [
      {
         id: 0,
         image: "",
         name: "",
         bluer: "",
         orientation: "",
      },
   ],
   getLoading: false,
};

const courses = createSlice({
   name: "courses",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCourses.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         }
      });
      builder.addCase(getCourses.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersCourses = courses.reducer;
