export const content = {
  education: {
    withLinks: false,
    p: "Обучение:",
    li: [
      "Вокал",
      "Гитара",
      "Бас-Гитара",
      "Электрогитара",
      "Укулеле",
      "Барабаны",
      "Конго-Бонго",
      "Фортепиано",
      "Диджеинг",
      "Битмейкинг",
    ],
  },
  address: {
    withLinks: true,
    p: "Адрес:",
    li: [
      {
        text: "ул.Баайтик Баатыра 13 - цокольный этаж",
        href: "https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16",
      },
    ],
  },
  contact: {
    withLinks: true,
    p: "Контакты:",
    li: [
      { text: "+996 755 608 908 Cool band", href: "https://wa.me/+996755608908?text=zakazat%20CoolBand" },
      {
        text: "+996 997 608 908 Cool studio",
        href: "https://wa.me/+996755608908?text=zakazat%20CoolStudio",
      },
      {
        text: "anarkarel@gmail.com",
        href: "mailto:anarkarel@gmail.com?subject=CoolBandShow%20subject&body=Body%20Coolshowband",
      },
    ],
  },
};

export const pageLogos = {
  bandLogo: {
    mainLogo: true,
    src: "/src/assets/logos/blogo.svg",
    alt: "CoolBand",
    color: "#FED102",
  },
  studioLogo: {
    mainLogo: false,
    src: "/src/assets/logos/slogo.svg",
    alt: "CoolStudio",
    color: "#0049FF",
  },
};
