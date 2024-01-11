export interface GalleryTemplateProps {
  galleryData: {
    eventID: number;
    name: string;
    date: string;
    description: string;
    poster: string;
    items: {
      alt: string;
      src: string;
      view: string;
    }[];
  }[];
}

type Item = {
  alt: string;
  src: string;
  view: string;
};
export interface GalleryCollageProps {
  items: (Item | undefined)[];
}
