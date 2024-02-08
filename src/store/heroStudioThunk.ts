import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import { IHeroStudio } from "../types.ts";

export const getHeroStudio = createAsyncThunk("getHeroStudio", async () => {
   const getData = await axiosApi<IHeroStudio>("/hero_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});
