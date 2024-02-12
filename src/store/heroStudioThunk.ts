import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getHeroStudio = createAsyncThunk("getHeroStudio", async () => {
   const getData = await axiosApi<Slice.IHeroStudioData>("/hero_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});
