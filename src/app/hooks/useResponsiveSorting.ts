import { useState, useEffect } from "react";

type Input = {
  alt: string;
  src: string;
  view: string;
};

const useResponsiveSorting = (arr: Input[]): (Input | undefined)[] => {
  const [sortedArray, setSortedArray] = useState<(Input | undefined)[]>(arr);

  useEffect(() => {
    const handleResize = () => {
      let sequence: string[];
      const newSortedArray = [];
      const width = window.innerWidth;

      if (width < 850) {
        const portraitObjects = arr.filter((obj: { view: string }) => obj.view === "portrait");
        const landscapeObjects = arr.filter((obj: { view: string }) => obj.view === "landscape");
        while (portraitObjects.length || landscapeObjects.length) {
          landscapeObjects.length && newSortedArray.push(landscapeObjects.shift());
          portraitObjects.length && newSortedArray.push(portraitObjects.shift());
          portraitObjects.length && newSortedArray.push(portraitObjects.shift());
          landscapeObjects.length && newSortedArray.push(landscapeObjects.shift());
        }

        setSortedArray(newSortedArray);
      } else {
        sequence = ["portrait", "landscape", "landscape", "landscape", "portrait", "portrait", "portrait", "landscape"];

        const portraitObjects = arr.filter((obj: { view: string }) => obj.view === "portrait");
        const landscapeObjects = arr.filter((obj: { view: string }) => obj.view === "landscape");
        let currentIndex = 0;
        while (portraitObjects.length || landscapeObjects.length) {
          if (sequence[currentIndex] === "portrait" && portraitObjects.length) {
            newSortedArray.push(portraitObjects.shift());
          } else if (sequence[currentIndex] === "landscape" && landscapeObjects.length) {
            newSortedArray.push(landscapeObjects.shift());
          }

          currentIndex = (currentIndex + 1) % sequence.length;
        }

        setSortedArray(newSortedArray);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [arr]);

  return sortedArray;
};

export default useResponsiveSorting;
