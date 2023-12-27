import styles from "../../../scss/partials/coolBand/_collaboration.module.scss"
import "../../../scss/index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Aktan from "../../../assets/collaborationImages/Aktan.png"
import Alexander from "../../../assets/collaborationImages/Alexander.png"
import kga from "../../../assets/collaborationImages/kga.png"
import Qarash from "../../../assets/collaborationImages/Qarash.png"
import Orkestr from "../../../assets/collaborationImages/Orkestr.png"
import BigBand from "../../../assets/collaborationImages/BigBand.png"

type CardProps = {
  image: string
  name: string
};

const CollaborationCard = (card: CardProps) => {
  return (
    <div className={styles.CollaborationCard}>
        <img src={card.image}/>
        <h4>{card.name}</h4>
    </div>
  )
}

const Collaboration = () => {
  return (
    <div className={styles.Collaboration}>
        <h1>Коллаборации</h1>
        <div className={styles.CollaborationSlider}>
            <Swiper
            spaceBetween={-40}
            slidesPerView={5}
            >
                <SwiperSlide><CollaborationCard name="Актан Исабаев" image={Aktan}/></SwiperSlide>
                <SwiperSlide><CollaborationCard name="Александр Волкодав" image={Alexander}/></SwiperSlide>
                <SwiperSlide><CollaborationCard name="КГА Симфонический оркестр им.А.Джумахматова" image={kga}/></SwiperSlide>
                <SwiperSlide><CollaborationCard name="Qarash Lab" image={Qarash}/></SwiperSlide>
                <SwiperSlide><CollaborationCard name="Оркестр театра Оперы и Балета" image={Orkestr}/></SwiperSlide>
                <SwiperSlide><CollaborationCard name="Bishkek Big Band" image={BigBand}/></SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Collaboration