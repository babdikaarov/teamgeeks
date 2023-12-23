import styles from "../../../scss/partials/coolBand/_ourClient.module.scss"
import Image1 from "../../../assets/Clientscard.png"
import Image2 from "../../../assets/Clientscard(1).png"
import Image3 from "../../../assets/Clientscard(2).png"
import Image4 from "../../../assets/Clientscard(3).png"
import Image5 from "../../../assets/Clientscard(4).png"
import Image6 from "../../../assets/Clientscard(5).png"
import Image7 from "../../../assets/Clientscard(6).png"
import Image8 from "../../../assets/Clientscard(7).png"
import Image9 from "../../../assets/Clientscard(8).png"
import Image10 from "../../../assets/Clientscard(9).png"
import Image11 from "../../../assets/Clientscard(10).png"

const OurClients = () => {
    return (
        <div className="container">

            <div className={styles.mainDiv}>
                <div>
                    <h4 className={styles.callToUs}>Наши клиенты</h4>
                    <button className={styles.btn}>500+</button>

                    <p className={styles.peoples}>Более 500 корпоративов
                        и мероприятий</p>
                </div>


                <div className={styles.icons}>
                    <img className={styles.images} src={Image1} alt="Cola" />
                    <img className={styles.images} src={Image2} alt="" />
                    <img className={styles.images} src={Image3} alt="" />
                    <img className={styles.images} src={Image4} alt="" />
                    <img className={styles.images} src={Image5} alt="" />
                    <img className={styles.images} src={Image6} alt="" />
                    <img className={styles.images} src={Image7} alt="" />
                    <img className={styles.images} src={Image8} alt="" />
                    <img className={styles.images} src={Image9} alt="" />
                    <img className={styles.images} src={Image10} alt="" />
                    <img className={styles.images} src={Image11} alt="" />
                </div>
            </div>

        </div>
    )
}

export default OurClients