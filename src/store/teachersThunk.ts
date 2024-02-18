import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getTeachers = createAsyncThunk("getTeachers", async () => {
   const getData = await axiosApi<Slice.ITeacherData[]>("/st_teachers");
   const data = getData.data;

   if (data) {
      return data;
   }
});
