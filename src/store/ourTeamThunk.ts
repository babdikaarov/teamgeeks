import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getOurTeam = createAsyncThunk("getOurTeam", async () => {
   const getData = await axiosApi<Slice.IGetOurTeam[] | undefined>("/team_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});
