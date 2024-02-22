import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./thunkCollection.ts";

const initialState: Slice.IContact = {
   data: {
      id: 0,
      longitude: "",
      latitude: "",
      city: "",
      organizationId: "",
      address: "",
      bandNumber: "",
      studioNumber: "",
      email: "",
      telegram: "",
      whatsapp: "",
      instagram: "",
      youtube: "",
      tiktok: "",
   },
   getLoading: false,
};

const contacts = createSlice({
   name: "contacts",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getContacts.fulfilled, (state, { payload }) => {
         state.getLoading = true;
         state.data = payload;
      });
      builder.addCase(getContacts.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersContacts = contacts.reducer;
