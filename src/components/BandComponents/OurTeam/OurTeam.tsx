import styles from "../../../scss/partials/coolBand/_ourTeam.module.scss"
import "../../../scss/index.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Back from "../../../assets/Back.mp4"
import AnaraCard from "../../../assets/AnaraCard.png"
import ErbolCard from "../../../assets/ErbolCard.png"
import SultanCard from "../../../assets/SultanCard.png"
import DavletCard from "../../../assets/DavletCard.png"
import OsmaniCard from "../../../assets/OsmaniCard.png"
import DjKhanCard from "../../../assets/DjKhanCard.png"
import DjOlympCard from "../../../assets/DjOlympCard.png"
import KenoCard from "../../../assets/KenoCard.png"
import DanceShowCard from "../../../assets/DanceShowCard.png"

const cardImages = [AnaraCard, ErbolCard, SultanCard, DavletCard, OsmaniCard, DjKhanCard, DjOlympCard, KenoCard, DanceShowCard]

type CardProps = {
    card: string
}

const OurTeamCard = (card: CardProps) => {
    return (
        <div className={styles.OurTeamCard}>
            <div className={styles.front}>
                <img src={card.card} alt=''/>
            </div>
            <div className={styles.back}>
                <video autoPlay loop muted>
                    <source src={Back} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

const OurTeam = () => {
    return (
        <div className={styles.OurTeam}>
            <h1>Наша команда</h1>
            <div className={styles.OurTeamSlider}>
                <Swiper
                spaceBetween={-550}
                slidesPerView={3}
                >
                    <SwiperSlide><OurTeamCard card={cardImages[0]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[1]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[2]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[3]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[4]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[5]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[6]}/></SwiperSlide>
                    <SwiperSlide><OurTeamCard card={cardImages[7]}/></SwiperSlide>
                    <SwiperSlide className={styles.DanceShow}><OurTeamCard card={cardImages[8]}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default OurTeam