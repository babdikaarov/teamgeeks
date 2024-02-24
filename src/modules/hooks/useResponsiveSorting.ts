import { useState, useEffect } from "react";

const useResponsiveSorting = (arr: Slice.IGetBandImages[]): Slice.IGetBandImages[] => {
   const [sortedArray, setSortedArray] = useState<Slice.IGetBandImages[] | []>(arr);

   useEffect(() => {
      const handleResize = () => {
         let sequence: string[];
         const newSortedArray: Slice.IGetBandImages[] = [];
         const width = window.innerWidth;

         if (width < 850) {
            const portraitObjects = arr.filter((obj: { orientation: string }) => obj.orientation === "PORTRAIT");
            const landscapeObjects = arr.filter((obj: { orientation: string }) => obj.orientation === "LANDSCAPE");
            while (portraitObjects.length || landscapeObjects.length) {
               landscapeObjects.length && newSortedArray.push(landscapeObjects.shift()!);
               portraitObjects.length && newSortedArray.push(portraitObjects.shift()!);
               portraitObjects.length && newSortedArray.push(portraitObjects.shift()!);
               landscapeObjects.length && newSortedArray.push(landscapeObjects.shift()!);
            }

            setSortedArray(newSortedArray);
         } else {
            sequence = [
               "PORTRAIT",
               "LANDSCAPE",
               "LANDSCAPE",
               "LANDSCAPE",
               "PORTRAIT",
               "PORTRAIT",
               "PORTRAIT",
               "LANDSCAPE",
            ];

            const portraitObjects = arr.filter((obj: { orientation: string }) => obj.orientation === "PORTRAIT");
            const landscapeObjects = arr.filter((obj: { orientation: string }) => obj.orientation === "LANDSCAPE");
            let currentIndex = 0;
            while (portraitObjects.length || landscapeObjects.length) {
               if (sequence[currentIndex] === "PORTRAIT" && portraitObjects.length) {
                  newSortedArray.push(portraitObjects.shift()!);
               } else if (sequence[currentIndex] === "LANDSCAPE" && landscapeObjects.length) {
                  newSortedArray.push(landscapeObjects.shift()!);
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
         setSortedArray([]);
      };
   }, [arr]);

   return sortedArray;
};

export default useResponsiveSorting;
