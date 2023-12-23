import image from "../../../assets/Cool band Photo.png";
const CoolShowBand = () => {
   return (
      <div className="container">
         <div className="block">
            <div className="box">
               <div className="show">
                  <h1 className="title">Cool Show band</h1>
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
