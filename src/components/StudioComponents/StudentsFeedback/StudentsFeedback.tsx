import "../../../scss/index.scss"
import styles from "../../../scss/partials/coolStudio/_studentsFeedback.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Damir from "../../../assets/studentsFeedback/Damir1.png"
import Rustam from "../../../assets/studentsFeedback/Rustam2.png"
import Alice from "../../../assets/studentsFeedback/Alice3.png"
import Murtaz from "../../../assets/studentsFeedback/Murtaz4.png"
import Asel from "../../../assets/studentsFeedback/Asel5.png"
import Saykal from "../../../assets/studentsFeedback/Saykal6.png"
import { EffectCoverflow } from "swiper/modules";

type CardProps = {
    image: string,
    name: string,
    word: string
}

const StudentsFeedbackCard = (card: CardProps) => {
  return (
    <div className={styles.StudentsFeedbackCard}>
        <img src={card.image}/>
        <div className={styles.StudentsText}>
            <div className={styles.StudentsName}>{card.name}</div>
            <div className={styles.StudentsWord}>{card.word}</div>
        </div>
    </div>
  )
}

const StudentsFeedback = () => {
    return (
        <div className={styles.StudentsFeedback}>
            <h1>Отзывы наших учеников</h1>
            <div className={styles.StudentsFeedbackSlider}>
                <Swiper
                effect={'coverflow'}
                grabCursor
                centeredSlides
                loop
                slidesPerView={3.5}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }
                }
                modules={[EffectCoverflow]}
                slideToClickedSlide
                >
                    <SwiperSlide><StudentsFeedbackCard image={Damir} name="Дамир" word="Для меня Coolstudio это способ проявить творчество. Мне нравится атмосфера и то, как проходят уроки"/></SwiperSlide>
                    <SwiperSlide><StudentsFeedbackCard image={Rustam} name="Рустам" word="В Coolstudio я чувствую себя как дома и могу быть собой"/></SwiperSlide>
                    <SwiperSlide><StudentsFeedbackCard image={Alice} name="Алиса" word="Coolstudio для меня как второй дом, здесь очень комфортно и приятно находиться"/></SwiperSlide>
                    <SwiperSlide><StudentsFeedbackCard image={Murtaz} name="Муртаз" word="Coolstudio-это место где можно выучить любые песни"/></SwiperSlide>
                    <SwiperSlide><StudentsFeedbackCard image={Asel} name="Асель" word="Занятия в Coolstudio заряжают энергией, дарят вдохновение и желание творить"/></SwiperSlide>
                    <SwiperSlide><StudentsFeedbackCard image={Saykal} name="Сайкал" word="Coolstudio - это самое лучшее, что происходило в моей жизни. Здесь всегда царит дружеский и крутой вайб"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default StudentsFeedback