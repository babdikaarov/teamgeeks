const teamList = [
   {
      id: 1,
      img: "/ourTeam/anara-vocal.jpg",
      role: "Вокал",
      name: "Анара",
   },
   {
      id: 2,
      img: "/ourTeam/davlet-baraban.JPG",
      role: "Барабаны",
      name: "Давлет",
   },
   {
      id: 3,
      img: "/ourTeam/djKhan.JPG",
      role: "DJ",
      name: "DJ Khan",
   },
   {
      id: 4,
      img: "/ourTeam/djOlymp.jpg",
      role: "DJ",
      name: "DJ OLYMP",
   },
   {
      id: 5,
      img: "/ourTeam/erbol-gitara.jpg",
      role: "Гитара",
      name: "Ербол",
   },
   {
      id: 6,
      img: "/ourTeam/keno-voice-producer.jpg",
      role: "Звукорежисер",
      name: "Keno",
   },
   {
      id: 7,
      img: "/ourTeam/osman-vocal.jpg",
      role: "Перкуссия Вокал",
      name: "Осман",
   },
   {
      id: 8,
      img: "/ourTeam/sultan-bass.jpeg",
      role: "Басс-Гитара Вокал",
      name: "Султан",
   },
];

const addAvailableVideo = teamList.map((el) => Object.assign(el, { video: "/ourTeam/flipVideo.mp4" }));

export default addAvailableVideo;
