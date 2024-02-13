import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export const drawerCollabSlice = createSlice({
   name: "drawer",
   initialState: {
      dataDrawer: false,
   },
   reducers: {
      setDrawerCollabSlice: (state) => {
         state.dataDrawer = true;
      },
   },
});

export const { setDrawerCollabSlice } = drawerCollabSlice.actions;

export const selectdrawerCollabSlice = (state: { dataDrawer: PayloadAction }) => state.dataDrawer;

export const reducerdrawerCollabSlice = drawerCollabSlice.reducer;

export const drawerTeamSlice = createSlice({
   name: "drawer",
   initialState: {
      dataDrawer: false,
   },
   reducers: {
      setDrawerTeamSlice: (state) => {
         state.dataDrawer = true;
      },
   },
});

export const { setDrawerTeamSlice } = drawerTeamSlice.actions;

export const selectdrawerTeamSlice = (state: { dataDrawer: PayloadAction }) => state.dataDrawer;

export const reducerdrawerTeamSlice = drawerTeamSlice.reducer;
