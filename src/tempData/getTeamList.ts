const teamList = [
   {
      id: 1,
      img: "/ourTeam/Anarkin.jpg",
      name: "Anarkin",
      role: "Вокал",
      view: "portrait",
      video: "/ourTeam/Anarkin.mp4"
   },
   {
      id: 2,
      img: "/ourTeam/Erbol.jpg",
      name: "Эрбол",
      role: "Гитара",
      view: "portrait",
      video: "/ourTeam/Erbol.mp4"
   },
   {
      id: 3,
      img: "/ourTeam/Suliko.jpg",
      name: "Сулико",
      role: "Бас-Гитара/Вокал",
      view: "portrait",
      video: "/ourTeam/Suliko.mp4"
   },
   {
      id: 4,
      img: "/ourTeam/Davlet.jpg",
      name: "Давлет",
      role: "Барабаны",
      view: "portrait",
      video: "/ourTeam/Davlet.mp4"
   },
   {
      id: 5,
      img: "/ourTeam/Osmany.jpg",
      name: "Османи",
      role: "Перкуссия/Вокал",
      view: "portrait",
      video: "/ourTeam/Osmany.mp4"
   },
   {
      id: 6,
      img: "/ourTeam/Dj Khan.jpg",
      name: "DJ Khan",
      role: "",
      view: "portrait",
      video: "/ourTeam/Dj Khan.mp4"
   },
   {
      id: 7,
      img: "/ourTeam/Dj Olymp.jpg",
      name: "DJ Olymp",
      role: "",
      view: "portrait",
      video: "/ourTeam/Dj Olymp.mp4"
   },
   {
      id: 8,
      img: "/ourTeam/Keno.jpg",
      name: "Keno",
      role: "Звукорежиссер",
      view: "portrait",
      video: "/ourTeam/Keno.mp4"
   },
   {
      id: 9,
      img: "/ourTeam/danceshow.jpg",
      name: "Dance Show",
      role: "",
      view: "landscape",
      video: "/ourTeam/danceshow.mp4"
   },
];

const addAvailableVideo = teamList.map((el) => Object.assign(el));

export default addAvailableVideo;
