import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./teachersThunk.ts";

const initialState = {
   data: [],
   getLoading: false,
};

const getTeachersSlice = createSlice({
   name: "getTeachers",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getTeachers.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getTeachers.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getTeachers.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

// export const { setVideos, setLoading } = studentSuccessSlice.actions;

export const reducersGetTeachers = getTeachersSlice.reducer;
