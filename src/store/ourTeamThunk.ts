import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetOurTeam } from "../types.ts";
import axiosApi from "../axiosApi.ts";

export const getOurTeam = createAsyncThunk("getOurTeam", async () => {
   const getData = await axiosApi<IGetOurTeam[] | undefined>("/team_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});
