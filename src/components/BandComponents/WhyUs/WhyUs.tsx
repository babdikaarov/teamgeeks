import React from "react";
import icon from "../../../assets/Tick.png";

const InfoBlock: React.FC<{ title: string; text: string }> = ({ title, text }) => (
   <div className="info">
      <div className="infoBlock">
         <div className="textH3">
            <img className="icon" src={icon} alt="Icon" />
            {title}
         </div>
      </div>
      <div className="text">{text}</div>
   </div>
);

const WhyUs: React.FC = () => {
   return (
      <div className="wrapper">
         <h2 className="WhyUs">Почему выбирают нас?</h2>
         <div className="container flexDiv">
            <div className="info1">
               <InfoBlock
                  title="Профессионалы своего дела"
                  text="Большой опыт всех участников коллектива, ответственность и креатив"
               />
            </div>
            <div className="info2">
               <InfoBlock
                  title="Индивидуальный подход"
                  text="Поможем реализовать любое пожелание к исполняемым композициям и жанру"
               />
            </div>
            <div className="info3">
               <InfoBlock
                  title="Фирменный стиль и айдентика"
                  text="Оригинальная подача и особая энергетика вкупе со сценическим образом, соответствующим вашему событию"
               />
            </div>
            <div className="info4">
               <InfoBlock
                  title="Техническое сопровождение"
                  text="Профессиональная настройка каждого инструмента, зажигательные ритмы, красочный и объемный звук"
               />
            </div>
         </div>
      </div>
   );
};

export default WhyUs;
