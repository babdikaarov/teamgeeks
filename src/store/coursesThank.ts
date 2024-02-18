import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getCourses = createAsyncThunk("getCourses", async () => {
   const getData = await axiosApi<Slice.Courses.ICursesData[]>("/direction");
   const data = getData.data;

   if (data) {
      return data;
   }
});
