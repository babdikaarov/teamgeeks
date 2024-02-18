import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getStudentReviwes = createAsyncThunk("", async () => {
   const getData = await axiosApi("/st_student_reviews");
   const data = getData.data;

   if (data) {
      return data;
   }
});
