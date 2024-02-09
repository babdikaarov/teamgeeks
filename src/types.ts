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
export interface GetCoolStudioVideo {
   id: number;
   image: string;
   orientation: string;
   bluer: string;
   youtubeUrl: string;
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
export interface IHeroStudio {
   id: number;
   title: string;
   video: string;
   text: string;
   orientation: string;
}

export interface IHeroBand {
   id: number;
   video: string;
   orientation: string;
}

export enum EBlockID {
   Main = "main",
   About = "about",
   AboutStudio = "aboutStudio",
   Teachers = "teachers",
   Students = "students",
   GalleryStudio = "galleryStudio",
   Gallery = "gallery",
   Concert = "concert",
   Courses = "courses",
   Collab = "collaboration",
   None = "",
}

export interface IAboutData {
   id: number;
   image: string;
   orientation: string;
   bluer: string;
}
