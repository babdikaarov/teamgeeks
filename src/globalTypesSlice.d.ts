declare namespace Slice {
   export namespace StudentSuccess {
      export interface getStudentSuccessData {
         id: number;
         url: string;
      }

      export interface StudentSuccessState {
         data: getStudentSuccessData | undefined;
         getLoading: boolean;
      }
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
}
