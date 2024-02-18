import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getCollaborations = createAsyncThunk("getCollaborations", async () => {
   const getData = await axiosApi<Slice.IGetCollaborations[] | undefined>("/collaborations_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});
