import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import { IStudentSuccess } from "../types.ts";

export const getStudentSuccess = createAsyncThunk("getStudentSuccess", async () => {
   const getData = await axiosApi<IStudentSuccess>("/student_success_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});
