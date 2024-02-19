import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getStudentSuccess = createAsyncThunk("getStudentSuccess", async () => {
   const getData = await axiosApi<Slice.getStudentSuccessData[]>("/student_success_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});
