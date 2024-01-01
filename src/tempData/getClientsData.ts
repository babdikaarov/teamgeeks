export default (resolve: (arg0: { alt: string; src: Promise<typeof import("*.png")> }[]) => void) => {
   resolve([
      {
         alt: "Coca Cola",
         src: import("/src/assets/ClientsIcons/1.png"),
      },
      {
         alt: "Yandex Go",
         src: import("/src/assets/ClientsIcons/2.png"),
      },
      {
         alt: "RSK bank",
         src: import("/src/assets/ClientsIcons/3.png"),
      },
      {
         alt: "Partner neft",
         src: import("/src/assets/ClientsIcons/4.png"),
      },
      {
         alt: "MBulak finance",
         src: import("/src/assets/ClientsIcons/5.png"),
      },
      {
         alt: "ЦУМ Айчурек",
         src: import("/src/assets/ClientsIcons/6.png"),
      },
      {
         alt: "Jannat",
         src: import("/src/assets/ClientsIcons/7.png"),
      },
      {
         alt: "Icon Development",
         src: import("/src/assets/ClientsIcons/8.png"),
      },
      {
         alt: "Bakai Bank",
         src: import("/src/assets/ClientsIcons/9.png"),
      },
      {
         alt: "Bishkek International School",
         src: import("/src/assets/ClientsIcons/10.png"),
      },
      {
         alt: "Bishkek International School",
         src: import("/src/assets/ClientsIcons/11.png"),
      },
   ]);
};
// export default [
//   {
//     alt: "Coca Cola",
//     src: () => import("/src/assets/ClientsIcons/1.png"),
//   },
//   {
//     alt: "Yandex Go",
//     src: () => import("/src/assets/ClientsIcons/2.png"),
//   },
//   {
//     alt: "RSK bank",
//     src: () => import("/src/assets/ClientsIcons/3.png"),
//   },
//   {
//     alt: "Partner neft",
//     src: () => import("/src/assets/ClientsIcons/4.png"),
//   },
//   {
//     alt: "MBulak finance",
//     src: () => import("/src/assets/ClientsIcons/5.png"),
//   },
//   {
//     alt: "ЦУМ Айчурек",
//     src: () => import("/src/assets/ClientsIcons/6.png"),
//   },
//   {
//     alt: "Jannat",
//     src: () => import("/src/assets/ClientsIcons/7.png"),
//   },
//   {
//     alt: "Icon Development",
//     src: () => import("/src/assets/ClientsIcons/8.png"),
//   },
//   {
//     alt: "Bakai Bank",
//     src: () => import("/src/assets/ClientsIcons/9.png"),
//   },
//   {
//     alt: "Bishkek International School",
//     src: () => import("/src/assets/ClientsIcons/10.png"),
//   },
//   {
//     alt: "Bishkek International School",
//     src: () => import("/src/assets/ClientsIcons/11.png"),
//   },
// ];
