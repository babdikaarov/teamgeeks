type Inpput = {
  alt: string;
  src: string;
  view: string;
};

export default function (arr: Inpput[]): (Inpput | undefined)[] {
  const portraitObjects = arr.filter((obj: { view: string }) => obj.view === "portrait");
  const landscapeObjects = arr.filter((obj: { view: string }) => obj.view === "landscape");

  const sortedArray = [];

  const sequence = ["portrait", "landscape", "landscape", "landscape", "portrait", "portrait", "portrait", "landscape"];
  let currentIndex = 0;

  while (portraitObjects.length || landscapeObjects.length) {
    if (sequence[currentIndex] === "portrait" && portraitObjects.length) {
      sortedArray.push(portraitObjects.shift());
    } else if (sequence[currentIndex] === "landscape" && landscapeObjects.length) {
      sortedArray.push(landscapeObjects.shift());
    }

    currentIndex = (currentIndex + 1) % sequence.length;
  }

  return arr && sortedArray;
}
