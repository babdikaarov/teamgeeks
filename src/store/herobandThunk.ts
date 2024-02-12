import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getHeroBand = createAsyncThunk("getHeroBand", async () => {
   const getData = await axiosApi<Slice.IHeroBandData>("/hero_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});
