import { Swiper, SwiperSlide } from "swiper/react";
import ConcertImg1 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg2 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg3 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg4 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg5 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg6 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg7 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg8 from "../../../assets/coolstudio/карта концерта.png";
import ConcertImg9 from "../../../assets/coolstudio/карта концерта.png";
import styles from "../../../scss/partials/coolStudio/_concerts.module.scss";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
type CardProps = {
    card: string;
};

const ConcertCard = (props: CardProps) => {
    return (
        <div className={styles.ConcertsCard}>
            <div className={styles.front}>
                <img src={props.card} alt="" />
            </div>
        </div>
    );
};

const Concert = () => {
    const concertImages = [
        ConcertImg1,
        ConcertImg2,
        ConcertImg3,
        ConcertImg4,
        ConcertImg5,
        ConcertImg6,
        ConcertImg7,
        ConcertImg8,
        ConcertImg9,
    ];



    return (
        <div>
            <h1>Отчетные концерты</h1>
            <div className={styles.ConcertSlider}>

                <Swiper spaceBetween={0} slidesPerView={3} navigation={{ nextEl: '#btn1', prevEl: '#btn2' }} modules={[Navigation]}>
                    {concertImages.map((image, index) => (

                        <SwiperSlide key={index}>
                            <ConcertCard card={image} />
                        </SwiperSlide>
                    ))}
                 

                </Swiper>
                    <div id="btn2" className={styles.LeftSwip}>&lt;</div>
                    <div id="btn1" className={styles.RightSwip}>&gt;</div>
                <a className={styles.watchmore} href="#">Смотреть еще</a>

            </div>
        </div>
    );
};

export default Concert;