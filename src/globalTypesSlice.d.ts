declare namespace Slice {
   interface IGetAlbumByID {
      id: number;
      coverImage: string;
      date: string;
      name: string;
      location?: string;
      orientation?: string;
   }
   interface IAlbumByID {
      data: IGetAlbumByID;
      getLoading: boolean;
   }
   interface IBandImagesSlice {
      data: IGetBandImages[];
      getLoading: boolean;
   }
   interface IBandImagesSlice {
      data: IGetBandImages[];
      getLoading: boolean;
   }
   interface IGetBandImages {
      id: number;
      albumId: number;
      name: string;
      image: string;
      originalImage: string;
      orientation: string;
      bluer: string;
      coverImage: boolean;
   }
   interface IGetStudioAlbum {
      id: number;
      coverImage: string;
      date: string;
      name: string;
      location: string;
      bluer: string;
   }
   interface IStudioAlbumSlice {
      data: IGetStudioAlbum[];
      getLoading: boolean;
   }
   interface IGetBandAlbum {
      id: number;
      coverImage: string;
      date: string;
      name: string;
      orientation: string;
      bluer: string;
   }
   interface IBandAlbumSlice {
      data: IGetBandAlbum[];
      getLoading: boolean;
   }
   namespace Courses {
      interface IGetCourses {
         data: ICursesData[];
         getLoading: boolean;
      }
      interface ICursesData {
         id: number;
         image: string;
         name: string;
         bluer: string;
         orientation: string;
      }
   }
   namespace StudentsFeedback {
      interface IStudentsFeedBackState {
         data: IStudentsFeedbackData[];
         getLoading: boolean;
      }
      interface IStudentsFeedbackData {
         id: number;
         name: string;
         image: string;
         bluer: string;
         reviews: string;
         orientation: string;
      }
   }
   interface getStudentSuccessData {
      id: number;
      url: string;
   }

   interface StudentSuccessState {
      data: getStudentSuccessData[];
      getLoading: boolean;
   }
   interface AboutUsBandData {
      id: number;
      image: string;
      orientation: string;
      bluer: string;
   }

   interface IGetContacts {
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
   interface IContact {
      data: IGetContacts;
      getLoading: boolean;
   }

   interface GetCoolStudioVideo {
      id: number;
      image: string;
      orientation: string;
      bluer: string;
      youtubeUrl: string;
   }
   interface CoolStudio {
      data: GetCoolStudioVideo;
      getLoading: boolean;
   }

   interface IOurTeam {
      data: IGetOurTeam[];
      getLoading: boolean;
   }

   interface IGetOurTeam {
      id: number;
      name: string;
      image: string;
      video: string;
      instrument: string;
      orientation: string;
      bluer: string;
   }

   interface ICollaborations {
      data: IGetCollaborations[];
      getLoading: boolean;
   }

   interface IGetCollaborations {
      id: number;
      name: string;
      image: string;
      bluer: string;
      orientation: string;
   }

   interface IHeroBandData {
      id: number;
      video: string;
      orientation: string;
   }
   interface IHeroBand {
      data: IHeroBandData;
      getLoading: boolean;
   }

   interface IHeroStudioData {
      id: number;
      title: string;
      video: string;
      text: string;
      orientation: string;
   }
   interface IHeroStudio {
      data: IHeroStudioData;
      getLoading: boolean;
   }

   interface IAboutData {
      id: number;
      image: string;
      orientation: string;
      bluer: string;
   }
   interface IAboutBand {
      data: IAboutData;
      getLoading: boolean;
   }

   interface IClients {
      id: number;
      image: string;
      bluer: string;
      url: string;
   }
   interface IClientsData {
      data: IClients[];
      getLoading: boolean;
   }
   interface ITeacherData {
      id: 0;
      name: string;
      image: string;
      bluer: string;
      urlInstagram: string;
      position: string;
      description: string;
      orientation: string;
   }
   interface ITeacherState {
      data: ITeacherData[];
      getLoading: boolean;
   }
}
