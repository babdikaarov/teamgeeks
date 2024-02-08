import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EBlockID } from "../types";

type TActiveNavigation = { focusOn: EBlockID };

const activeNavigation = createSlice({
   name: "activeNavigation",
   initialState: { focusOn: EBlockID.Main } as TActiveNavigation,
   reducers: {
      toggleActiveNavigation: (state, action: PayloadAction<EBlockID>) => {
         state.focusOn = action.payload;
      },
   },
});

export const { toggleActiveNavigation } = activeNavigation.actions;
export const reducerActiveNavigation = activeNavigation.reducer;
export const selectActiveNavigation = (state: { activeNavigation: TActiveNavigation }) => state.activeNavigation;
