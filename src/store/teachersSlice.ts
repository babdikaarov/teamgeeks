import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./thunkCollection.ts";

const initialState: Slice.ITeacherState = {
   data: [],
   getLoading: false,
};

const getTeachersSlice = createSlice({
   name: "getTeachers",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getTeachers.fulfilled, (state, { payload }) => {
         state.getLoading = true;
         state.data = payload;
      });
      builder.addCase(getTeachers.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersGetTeachers = getTeachersSlice.reducer;
