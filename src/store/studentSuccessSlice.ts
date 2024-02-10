import { createSlice } from "@reduxjs/toolkit";

interface StudentSuccessVideo {
  id: number;
  url: string; 
}

interface StudentSuccessState {
  videos: StudentSuccessVideo[];
  loading: boolean;
}

const initialState: StudentSuccessState = {
  videos: [],
  loading: false,
};

const studentSuccessSlice = createSlice({
  name: "studentSuccess",
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setVideos, setLoading } = studentSuccessSlice.actions;

export const studentSuccessReducer = studentSuccessSlice.reducer;