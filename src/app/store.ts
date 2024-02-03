import { configureStore } from "@reduxjs/toolkit";
import { reducersContacts } from "../store/contactsSlice.ts";

export const store = configureStore({
   reducer: {
      getContacts: reducersContacts,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
