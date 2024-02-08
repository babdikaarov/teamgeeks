import { configureStore } from "@reduxjs/toolkit";
import { reducersCoolStudio } from "../store/aboutStudioSlice.ts";
import { reducersContacts } from "../store/contactsSlice.ts";
import { reducersOurTeam } from "../store/ourTeamSlice.ts";
import { reducersHeroStudio } from "../store/heroStudioSlice.ts";
import { reducersHeroBand } from "../store/herobandSlice.ts";

export const store = configureStore({
   reducer: {
      getContacts: reducersContacts,
      getCoolStudioVideo: reducersCoolStudio,
      getOurTeam: reducersOurTeam,
      getHeroBand: reducersHeroBand,
      getHeroStudio: reducersHeroStudio,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
