import { createAsyncThunk } from "@reduxjs/toolkit";
import { IHeroBand } from "../types.ts";
import axiosApi from "../axiosApi.ts";

export const getHeroBand = createAsyncThunk("getHeroBand", async () => {
   const getData = await axiosApi<IHeroBand>("/hero_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});
