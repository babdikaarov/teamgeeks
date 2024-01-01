export default (resolve: (arg0: { title: string; src: Promise<typeof import("*.svg")> }[]) => void) => {
   resolve([
      {
         title: "Бас-Гитара",
         src: import("/src/assets/courses/basGuitar.svg"),
      },
      {
         title: "Гитара",
         src: import("/src/assets/courses/guitar.svg"),
      },
      {
         title: "Электрогитара",
         src: import("/src/assets/courses/electroG.svg"),
      },
      {
         title: "Укулеле",
         src: import("/src/assets/courses/ukelele.svg"),
      },
      {
         title: "Конго-Бонго",
         src: import("/src/assets/courses/congo.svg"),
      },
      {
         title: "Фортепиано",
         src: import("/src/assets/courses/piano.svg"),
      },
      {
         title: "Вокал",
         src: import("/src/assets/courses/vocal.svg"),
      },
      {
         title: "Барабаны",
         src: import("/src/assets/courses/drums.svg"),
      },
      {
         title: "Диджеинг",
         src: import("/src/assets/courses/dj.svg"),
      },
      {
         title: "Битмейкинг",
         src: import("/src/assets/courses/bits.svg"),
      },
   ]);
};
