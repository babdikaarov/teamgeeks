export default (resolve: (arg0: { alt: string; src: Promise<typeof import("*.jpg")> }[]) => void) => {
   resolve([
      {
         alt: "Somewhere",
         src: import("/src/assets/events/Card.jpg"),
      },
      {
         alt: "Somewhere",
         src: import("/src/assets/events/Card(1).jpg"),
      },
      {
         alt: "Somewhere",
         src: import("/src/assets/events/Card(2).jpg"),
      },
      {
         alt: "Somewhere",
         src: import("/src/assets/events/Card(3).jpg"),
      },
      {
         alt: "Somewhere",
         src: import("/src/assets/events/Card(4).jpg"),
      },
   ]);
};
