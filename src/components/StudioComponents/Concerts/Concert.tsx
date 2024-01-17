import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./_concerts.module.scss";
import icon from "../Concerts/iconSwipe";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import { useState, useEffect } from "react";
import tempData from "./tempData";
interface CardProps {
  img: string;
  header: string;
  location: string;
  month: string;
}
[];

const ConcertCard = (props: CardProps) => {
  return (
    <div className={styles.ConcertsCard}>
      <div className={styles.front}>
        <img className={styles.concertImg} src={props.img} alt="" />
        <p className={styles.Summer}>{props.header}</p>
        <p className={styles.Bishkek}>{props.location}</p>
        <p className={styles.december}>{props.month}</p>
      </div>
    </div>
  );
};

const Concert = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const concertImages = tempData;

  const mobileArray = concertImages.slice(0, 3);

  const mobileWidth = 700;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <SectionWrapper header="Отчетные концерты">
      <div>
        <div className={styles.ConcertSlider}>
          {width < mobileWidth ? (
            mobileArray.map((card, i) => <ConcertCard key={i} {...card} />)
          ) : (
            <>
              <Swiper
                spaceBetween={0}
                slidesPerView={3}
                navigation={{ nextEl: "#btn1", prevEl: "#btn2" }}
                modules={[Navigation]}
              >
                {concertImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Link to={"/gallery/10"}>
                      <ConcertCard {...image} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div id="btn2" className={styles.LeftSwip}>
                {icon}
              </div>
              <div id="btn1" className={styles.RightSwip}>
                {icon}
              </div>
            </>
          )}
          <a className={styles.watchmore} href="/gallery">
            Смотреть еще
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Concert;
