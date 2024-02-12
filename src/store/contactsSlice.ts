import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./contactsThunk.ts";

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
      builder.addCase(getContacts.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getContacts.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getContacts.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersContacts = contacts.reducer;
