const events1 = (arr: number[]) => {
   return arr.map((el, i) => {
      return {
         alt: `${el}`,
         src: `/tempGallary/${i + 1}.jpg`,
         view: "PORTRAIT",
         // view: `${i % 3 == 0 ? "PORTRAIT" : "LANDSCAPE"}`,
      };
   });
};
const events2 = (arr: number[]) => {
   return arr.map((el, i) => {
      return {
         alt: `${el}`,
         src: `/tempGallary/${i + 1}.jpg`,
         // view: `${i % 1 == 0 ? "PORTRAIT" : "LANDSCAPE"}`,
         view: "LANDSCAPE",
      };
   });
};

// console.log(events1(Array(2).fill(1), 1))

const galleryTemp = [
   {
      eventID: 1,
      name: "event 1",
      date: "12.31.23",
      description: "somewhere",
      poster: "/tempGallary/1.jpg",
      items: [...events1(Array(8).fill(1)), ...events2(Array(10).fill(1))],
   },
];

function multi(
   data: {
      eventID: number;
      name: string;
      date: string;
      description: string;
      poster: string;
      items: { alt: string; src: string; view: string }[];
   }[],
) {
   for (let i = 0; i < 2; i++) {
      data.push(...data);
   }
   return data;
}
const getGalleryData = multi(galleryTemp);

export default getGalleryData;
