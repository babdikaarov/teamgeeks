import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AboutUsBandData } from './aboutBandTypes';

export const fetchAboutUsBand = createAsyncThunk(
'coolBand/fetchAboutUsBand',
async () => {
  const response = await fetch('http://209.38.228.54:8080/api/about_us_band');
  if (!response.ok) {
    return Promise.reject('Failed to fetch About Us Band data');
  }
  const data: AboutUsBandData = await response.json();
  return data;
}
);


interface CoolBandState {
  data: AboutUsBandData | undefined;
  getLoading: boolean;
  error?: string;
}

const initialState: CoolBandState = {
  data: undefined,
  getLoading: false,
  error: undefined,
};

const coolBandSlice = createSlice({
  name: 'coolBand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutUsBand.pending, (state) => {
        state.getLoading = true;
      })
      .addCase(fetchAboutUsBand.fulfilled, (state, action) => {
        state.getLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAboutUsBand.rejected, (state, action) => {
        state.getLoading = false;
        state.error = action.error.message ?? 'Error fetching About Us Band data';
      });
  },
});

export const { reducer: coolBandReducer } = coolBandSlice;
export const selectCoolBand = (state: { coolBand: CoolBandState }) => state.coolBand;
export const selectCoolBandData = (state: { coolBand: CoolBandState }) => state.coolBand.data;
