import TeamCard from "../../../UI/Cards/TeamCard";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_ourTeam.module.scss";
import cards from "../../../tempData/getTeamList";

const OurTeam = () => {
  return (
    <SectionWrapper header={"Наша команда"}>
      <div className={styles.teamCardsContainer}>
        {cards.map((card, i) => (
          <TeamCard key={i} video={card.video} img={card.img} role={card.role} name={card.name} view={card.view} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurTeam;
