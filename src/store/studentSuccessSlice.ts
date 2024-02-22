import { createSlice } from "@reduxjs/toolkit";
import { getStudentSuccess } from "./thunkCollection.ts";

const initialState: Slice.StudentSuccessState = {
   data: [
      {
         id: 0,
         url: "",
      },
   ],
   getLoading: false,
};

const studentSuccessSlice = createSlice({
   name: "studentSuccess",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getStudentSuccess.fulfilled, (state, { payload }) => {
         state.getLoading = true;
         state.data = payload;
      });
      builder.addCase(getStudentSuccess.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

// export const { setVideos, setLoading } = studentSuccessSlice.actions;

export const reducerStudentSuccess = studentSuccessSlice.reducer;
