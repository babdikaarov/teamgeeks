const teamList = [
  {
    id: 1,
    img: "/src/assets/ourTeam/anara-vocal.jpg",
    role: "Вокал",
    name: "Анара",
  },
  {
    id: 2,
    img: "/src/assets/ourTeam/davlet-baraban.JPG",
    role: "Барабаны",
    name: "Давлет",
  },
  {
    id: 3,
    img: "/src/assets/ourTeam/djKhan.JPG",
    role: "DJ",
    name: "DJ Khan",
  },
  {
    id: 4,
    img: "/src/assets/ourTeam/djOlymp.jpg",
    role: "DJ",
    name: "DJ OLYMP",
  },
  {
    id: 5,
    img: "../src/assets/ourTeam/erbol-gitara.jpg",
    role: "Гитара",
    name: "Ербол",
  },
  {
    id: 6,
    img: "../src/assets/ourTeam/keno-voice-producer.jpg",
    role: "Звукорежисер",
    name: "Keno",
  },
  {
    id: 7,
    img: "../src/assets/ourTeam/osman-vocal.jpg",
    role: "Перкуссия Вокал",
    name: "Осман",
  },
  {
    id: 8,
    img: "../src/assets/ourTeam/sultan-bass.jpeg",
    role: "Басс-Гитара Вокал",
    name: "Султан",
  },
];

const addAvailableVideo = teamList.map((el) => Object.assign(el, { video: "/src/assets/ourTeam/flipVideo.mp4" }));

export default addAvailableVideo;
