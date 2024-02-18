import { configureStore } from "@reduxjs/toolkit";
import { reducersCoolStudio } from "../store/aboutStudioSlice.ts";
import { reducersContacts } from "../store/contactsSlice.ts";
import { reducersOurTeam } from "../store/ourTeamSlice.ts";
import { reducersCollaborations } from '../store/collaborationsSlice.ts';
import { reducersHeroStudio } from "../store/heroStudioSlice.ts";
import { reducersHeroBand } from "../store/herobandSlice.ts";
import { reducerActiveNavigation } from "../store/activeNavigationSlice.ts";
import { reducersAboutBand } from "../store/aboutBandSlice.ts";
import { reducerdrawerCollabSlice, reducerdrawerTeamSlice } from "../store/drawerSlice.ts";
import { reducerStudentSuccess } from "../store/studentSuccessSlice.ts";

export const store = configureStore({
   reducer: {
      getAboutBand: reducersAboutBand,
      getContacts: reducersContacts,
      getCoolStudioVideo: reducersCoolStudio,
      getOurTeam: reducersOurTeam,
      getCollaborations: reducersCollaborations,
      getHeroBand: reducersHeroBand,
      getHeroStudio: reducersHeroStudio,
      getStudentSuccess: reducerStudentSuccess,
      getActiveNavigationState: reducerActiveNavigation,
      drawerCollab: reducerdrawerCollabSlice,
      drawerTeam: reducerdrawerTeamSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
