import image from "../../../assets/CoolbandPhoto.png";
import styles from "../../../scss/partials/coolBand/_coolshowband.module.scss";
const CoolShowBand = () => {
   return (
      <div className="container">
         <div className={styles.block}>
            <div className={styles.box}>
               <div className={styles.show}>
                  <h1 className={styles.title}>Cool Show band</h1>
                  <p>
                     Coolshowband- яркая команда настоящих профессионалов, состоящая из инструментального кавер-бэнда,
                     танцевально-интерактивного коллектива и огненных диджеев, которые зажгут любое мероприятие своим
                     виртуозным исполнением, драйвовым шоу, и качественным звуком.
                  </p>
                  <p>За нашими плечами огромное количество выступлений на разных площадках и ивентах.</p>
                  <p>
                     Мы дарим своим слушателям незабываемую возможность насладиться шедеврами отечественных и мировых
                     исполнителей в живом звучании.
                  </p>
               </div>
               <img src={image} alt="" />
            </div>
         </div>
      </div>
   );
};
export default CoolShowBand;
