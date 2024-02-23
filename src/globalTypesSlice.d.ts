declare namespace Slice {
   export interface IGetAlbumByID {
      id: number;
      coverImage: string;
      date: string;
      name: string;
      location?: string;
      orientation?: string;
   }
   export interface IAlbumByID {
      data: IGetAlbumByID;
      getLoading: boolean;
   }
   export interface IBandImagesSlice {
      data: IGetBandImages[] | undefined;
      getLoading: boolean;
   }
   export interface IBandImagesSlice {
      data: IGetBandImages[] | undefined;
      getLoading: boolean;
   }
   export interface IGetBandImages {
      id: number;
      albumId: number;
      name: string;
      image: string;
      originalImage: string;
      orientation: string;
      bluer: string;
      coverImage: boolean;
   }
   export interface IGetStudioAlbum {
      id: number;
      coverImage: string;
      date: string;
      name: string;
      location: string;
   }
   export interface IStudioAlbumSlice {
      data: IGetStudioAlbum[];
      getLoading: boolean;
   }
   export interface IGetBandAlbum {
      id: number;
      coverImage: string;
      date: string;
      name: string;
      orientation: string;
   }
   export interface IBandAlbumSlice {
      data: IGetBandAlbum[];
      getLoading: boolean;
   }
   export namespace Courses {
      export interface IGetCourses {
         data: ICursesData[] | undefined;
         getLoading: boolean;
      }
      export interface ICursesData {
         id: number;
         image: string;
         name: string;
         bluer: string;
         orientation: string;
      }
   }
   export namespace StudentsFeedback {
      export interface IStudentsFeedBackState {
         data: IStudentsFeedbackData[] | undefined;
         getLoading: boolean;
      }
      export interface IStudentsFeedbackData {
         id: number;
         name: string;
         image: string;
         bluer: string;
         reviews: string;
         orientation: string;
      }
   }
   export interface getStudentSuccessData {
      id: number;
      url: string;
   }

   export interface StudentSuccessState {
      data: getStudentSuccessData[] | undefined;
      getLoading: boolean;
   }
   export interface AboutUsBandData {
      id: number;
      image: string;
      orientation: string;
      bluer: string;
   }

   export interface IGetContacts {
      id: number;
      longitude: string;
      latitude: string;
      city: string;
      organizationId: string;
      address: string;
      bandNumber: string;
      studioNumber: string;
      email: string;
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   }
   export interface IContact {
      data: IGetContacts | undefined;
      getLoading: boolean;
   }

   export interface GetCoolStudioVideo {
      id: number;
      image: string;
      orientation: string;
      bluer: string;
      youtubeUrl: string;
   }
   export interface CoolStudio {
      data: GetCoolStudioVideo | undefined;
      getLoading: boolean;
   }

   export interface IOurTeam {
      data: IGetOurTeam[] | undefined;
      getLoading: boolean;
   }

   export interface IGetOurTeam {
      id: number;
      name: string;
      image: string;
      video: string;
      instrument: string;
      orientation: string;
      bluer: string;
   }

   export interface ICollaborations {
      data: IGetCollaborations[] | undefined;
      getLoading: boolean;
   }

   export interface IGetCollaborations {
      id: number;
      name: string;
      image: string;
      bluer: string;
      orientation: string;
   }

   export interface IHeroBandData {
      id: number;
      video: string;
      orientation: string;
   }
   export interface IHeroBand {
      data: IHeroBandData | undefined;
      getLoading: boolean;
   }

   export interface IHeroStudioData {
      id: number;
      title: string;
      video: string;
      text: string;
      orientation: string;
   }
   export interface IHeroStudio {
      data: IHeroStudioData | undefined;
      getLoading: boolean;
   }

   export interface IAboutData {
      id: number;
      image: string;
      orientation: string;
      bluer: string;
   }
   export interface IAboutBand {
      data: IAboutData | undefined;
      getLoading: boolean;
   }

   export interface IClients {
      id: number;
      image: string;
      bluer: string;
      url: string;
   }
   export interface IClientsData {
      data: IClients[] | undefined;
      getLoading: boolean;
   }
   export interface ITeacherData {
      id: 0;
      name: string;
      image: string;
      bluer: string;
      urlInstagram: string;
      position: string;
      description: string;
      orientation: string;
   }
   export interface ITeacherState {
      data: ITeacherData[] | undefined;
      getLoading: boolean;
   }
}
