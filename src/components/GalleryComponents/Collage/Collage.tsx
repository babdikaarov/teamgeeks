import { useNavigate, useParams } from "react-router-dom";
import GalleryCollage from "../../../UI/Gallery/GalleryCollage";
import getGalleryData from "../../../tempData/getGalleyData";
import returnIcon from "../../../assets/icons/return";
import styles from "../../../scss/partials/gallery/_collage.module.scss";
// interface CollageProps {
//   galleryData: {
//     eventID: number;
//     name: string;
//     date: string;
//     description: string;
//     poster: string;
//     items: {
//       alt: string;
//       src: string;
//       view: string;
//     }[];
//   }[];
// }

const Collage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const sorted = getGalleryData.find((el) => el.eventID === Number(id))!;

  function sortArrayWithPortraitEveryThird(arr: {
    eventID: number;
    name: string;
    date: string;
    description: string;
    poster: string;
    items: { alt: string; src: string; view: string }[];
  }): { alt: string; src: string; view: string }[] {
    const portraitObjects = arr?.items.filter((obj: { view: string }) => obj.view === "portrait");
    const landscapeObjects = arr?.items.filter((obj: { view: string }) => obj.view === "landscape");

    const sortedArray = [];

    // Alternate between portrait and landscape
    while (portraitObjects.length || landscapeObjects.length) {
      if (portraitObjects.length) {
        sortedArray.push(portraitObjects.shift());
      }

      if (landscapeObjects.length) {
        sortedArray.push(landscapeObjects.shift());
        landscapeObjects.length && sortedArray.push(landscapeObjects.shift());
      }
    }
    return sortedArray && sortedArray;
  }

  const sortedArray = sortArrayWithPortraitEveryThird(sorted);
  //   console.log(sortedArray);
  return (
    <section>
      <div className={styles.collageInfo}>
        <button onClick={() => navigate(-1)}>{returnIcon}</button>
        <div>
          <p>{sorted?.date}</p>
          <h3> {sorted?.name} </h3>
          <p>From id {sorted?.eventID}</p>
        </div>
        <div></div>
      </div>
      <GalleryCollage items={sortedArray} />
    </section>
  );
};

export default Collage;
