import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getAlbumByID = createAsyncThunk("getAlbumByID", async (param: { id: number; endpoint: string }) => {
   const getData = await axiosApi<Slice.IGetAlbumByID>(`/event_${param.endpoint}/${param.id}`);
   const data = getData.data;

   if (data) {
      return data;
   }
});
export const getAlbumImages = createAsyncThunk("getAlbumImages", async (param: { id: number; endpoint: string }) => {
   const getData = await axiosApi<Slice.IGetBandImages[]>(`/event_${param.endpoint}_images/album/${param.id}`);
   const data = getData.data;

   if (data) {
      return data;
   }
});
export const getStudioAlbum = createAsyncThunk("getStudioAlbum", async () => {
   const getData = await axiosApi<Slice.IGetStudioAlbum[]>("/event_studio");
   const data = getData.data;

   if (data) {
      return data.filter((el: Slice.IGetStudioAlbum) => el.coverImage);
   }
});
export const getBandAlbum = createAsyncThunk("getBandAlbum", async () => {
   const getData = await axiosApi<Slice.IGetBandAlbum[]>("/event_band");
   const data = getData.data;
   
   if (data) {
      return data.filter((el: Slice.IGetBandAlbum) => el.coverImage);
   }
});

export const getTeachers = createAsyncThunk("getTeachers", async () => {
   const getData = await axiosApi<Slice.ITeacherData[]>("/st_teachers");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getStudentSuccess = createAsyncThunk("getStudentSuccess", async () => {
   const getData = await axiosApi<Slice.getStudentSuccessData[]>("/student_success_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getStudentReviwes = createAsyncThunk("", async () => {
   const getData = await axiosApi<Slice.StudentsFeedback.IStudentsFeedbackData[]>("/st_student_reviews");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getOurTeam = createAsyncThunk("getOurTeam", async () => {
   const getData = await axiosApi<Slice.IGetOurTeam[] | undefined>("/team_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getClients = createAsyncThunk("getClients", async () => {
   const getData = await axiosApi<Slice.IClients[]>("/partners_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getHeroStudio = createAsyncThunk("getHeroStudio", async () => {
   const getData = await axiosApi<Slice.IHeroStudioData>("/hero_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getHeroBand = createAsyncThunk("getHeroBand", async () => {
   const getData = await axiosApi<Slice.IHeroBandData>("/hero_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getCourses = createAsyncThunk("getCourses", async () => {
   const getData = await axiosApi<Slice.Courses.ICursesData[]>("/direction");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getContacts = createAsyncThunk("getContacts", async () => {
   const getData = await axiosApi<Slice.IGetContacts>("/contacts");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getCollaborations = createAsyncThunk("getCollaborations", async () => {
   const getData = await axiosApi<Slice.IGetCollaborations[] | undefined>("/collaborations_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getCoolStudio = createAsyncThunk("getCoolStudio", async () => {
   const getData = await axiosApi<Slice.GetCoolStudioVideo>("/about_us_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});

export const getAboutBand = createAsyncThunk("getAboutBand", async () => {
   const getData = await axiosApi<Slice.IAboutData>("/about_us_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});
