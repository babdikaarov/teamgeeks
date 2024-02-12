import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EBlockID, EBlockIDType } from "../globalTypesEnum";

const activeNavigation = createSlice({
   name: "activeNavigation",
   initialState: { focusOn: EBlockID.MAIN as EBlockIDType },
   reducers: {
      toggleActiveNavigation: (state, action: PayloadAction<EBlockIDType>) => {
         state.focusOn = action.payload;
      },
   },
});

export const { toggleActiveNavigation } = activeNavigation.actions;
export const reducerActiveNavigation = activeNavigation.reducer;
export const selectActiveNavigation = (state: { activeNavigation: { focusOn: EBlockIDType } }) =>
   state.activeNavigation;
