import styles from "./cards/_ourStudentsCard.module.scss";
// import VideoImg from "../../assets/coolstudio/Frame 427319234.png";

interface OurStudentsCardProps {
   card: string;
}

const OurStudentsCard: React.FC<OurStudentsCardProps> = (props) => {
   // FIX_ME add >>>>
   /* 
   const getID= () => logic for getting ID backend return id
const videoUrl = https://www.youtube.com/watch?v=${getVideoId()};
const oEmbedUrl = https://www.youtube.com/oembed?url=${videoUrl}&format=json;
const thumbnail = http://img.youtube.com/vi/${getID()}/mqdefault.jpg
const getVideoTitle = (oEmbedUrl) = >  logic for getting title: return title;
logic for getVideoTitle;
fetch(oEmbedUrl)
  .then(response => response.json())
  .then(data => {
    const videoTitle = data.title;
    console.log("Video Title:", videoTitle);
  }) */
   return (
      <div className={styles.StudentCard}>
         <div>
            <img src={props.card} alt="" />
         </div>
         {/* <a href="https://www.youtube.com/watch?v=1BS5M20KeZk" target="_blank" className={styles.imag_wrap}>
               <img className={styles.imag} src={VideoImg} alt="" />
            </a> */}
         <h6>Radisson Collection Paradise</h6>
      </div>
   );
};

export default OurStudentsCard;
