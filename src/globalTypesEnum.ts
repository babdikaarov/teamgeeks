export const EBlockID = {
   MAIN: "main",
   ABOUT: "about",
   ABOUTSTUDIO: "aboutStudio",
   TEACHERS: "teachers",
   STUDENTS: "students",
   GALLERYSTUDIO: "galleryStudio",
   GALLERY: "gallery",
   CONCERT: "concert",
   COURSES: "courses",
   COLLAB: "collaboration",
   NONE: "",
} as const;

export const Target = {
   blank: "blank",
   noBlank: "",
};
export const Orientation = {
   LANDSCAPE: "LANDSCAPE",
   PORTRAIT: "PORTRAIT",
};

export type EBlockIDType = (typeof EBlockID)[keyof typeof EBlockID];
export type TargetType = (typeof Target)[keyof typeof Target];
export type OrientationType = (typeof Orientation)[keyof typeof Orientation];
