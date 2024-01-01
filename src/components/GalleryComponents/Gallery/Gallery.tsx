import GalleryTemplate from "../../../UI/Gallery/GalleryTemplate";
import getGalleryData from "../../../tempData/getGalleyData";
// interface GalleryProps {
//   galleryData: {
//     eventID: number;
//     name: string;
//     date: string;
//     description: string;
//     poster: string;
//     items: { alt: string; src: string; view: string }[];
//   }[];
// }
const Gallery = () => {
  return <GalleryTemplate galleryData={getGalleryData} />;
};

export default Gallery;
