const teamList = [
  {
    id: 1,
    img: "/ourTeam/anara-vocal.jpg",
    role: "Вокал",
    name: "Анара",
    view: "portrait",
  },
  {
    id: 2,
    img: "/ourTeam/davlet-baraban.JPG",
    role: "Барабаны",
    name: "Давлет",
    view: "portrait",
  },
  {
    id: 3,
    img: "/ourTeam/djKhan.JPG",
    role: "DJ",
    name: "DJ Khan",
    view: "portrait",
  },
  {
    id: 4,
    img: "/ourTeam/djOlymp.jpg",
    role: "DJ",
    name: "DJ OLYMP",
    view: "portrait",
  },
  {
    id: 5,
    img: "/ourTeam/erbol-gitara.jpg",
    role: "Гитара",
    name: "Ербол",
    view: "portrait",
  },
  {
    id: 6,
    img: "/ourTeam/keno-voice-producer.jpg",
    role: "Звукорежисер",
    name: "Keno",
    view: "portrait",
  },
  {
    id: 7,
    img: "/ourTeam/osman-vocal.jpg",
    role: "Перкуссия Вокал",
    name: "Осман",
    view: "portrait",
  },
  {
    id: 8,
    img: "/ourTeam/sultan-bass.jpeg",
    role: "Басс-Гитара Вокал",
    name: "Султан",
    view: "portrait",
  },
  {
    id: 9,
    img: "/ourTeam/danceshow.jpg",
    role: "",
    name: "Dance Show",
    view: "landscape",
  },
];

const addAvailableVideo = teamList.map((el) => Object.assign(el, { video: "/ourTeam/flipVideo.mp4" }));

export default addAvailableVideo;
