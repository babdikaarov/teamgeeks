import { createSlice } from "@reduxjs/toolkit";
import { getCourses } from "./coursesThank";

const initialState: Slice.Courses.IGetCourses = {
   data: [
      {
         id: 0,
         image: "",
         name: "",
         bluer: "",
         orientation: ""
      },
   ],
   getLoading: false
};

const courses = createSlice({
   name: "courses",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCourses.fulfilled, (state, { payload }) => {
         state.data = payload; 
      });      
   },
});

export const reducersCourses = courses.reducer;
