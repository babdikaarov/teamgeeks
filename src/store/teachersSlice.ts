import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./thunkCollection.ts";

const initialState: Slice.ITeacherState = {
   data: [
      {
         id: 0,
         name: "",
         image: "",
         bluer: "",
         urlInstagram: "",
         position: "",
         description: "",
         orientation: "",
      },
   ],
   getLoading: false,
};

const getTeachersSlice = createSlice({
   name: "getTeachers",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getTeachers.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         }
      });
      builder.addCase(getTeachers.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersGetTeachers = getTeachersSlice.reducer;
