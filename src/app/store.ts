import { configureStore } from "@reduxjs/toolkit";
import { reducersCoolStudio } from "../store/aboutStudioSlice.ts";
import { reducersContacts } from "../store/contactsSlice.ts";

export const store = configureStore({
   reducer: {
      getContacts: reducersContacts,
      getCoolStudioVideo: reducersCoolStudio,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
