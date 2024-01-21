export type Cards = {
   src: Promise<typeof import("*.png")>;
   alt: string;
   firstName: string;
   lastName: string;
}[];
