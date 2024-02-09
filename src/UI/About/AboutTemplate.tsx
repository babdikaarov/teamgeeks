import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import styles from './_aboutTemplate.module.scss';
import ImageLoader from '../ImageLoader/ImageLoader';
import { fetchAboutUsBand, selectCoolBand } from '../../store/aboutBandSlice';

interface AboutTemplateProps {
  text: string;
  header: string;
}

const AboutTemplate: FC<AboutTemplateProps> = ({ header, text }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectCoolBand);

  useEffect(() => {
    dispatch(fetchAboutUsBand());
  }, [dispatch]);

  return (
    <SectionWrapper className={styles.aboutBand} header={header} id="about">
      <div className={styles.about}>
        <article className={styles.article}>
          <div className={styles.truncate}>
          {text.split(/(?<=[.!?])\s+/).map((newLine, i) => (
              <p key={i} className={styles.text}>
                {newLine}
              </p>
          ))}
          </div>
        </article>
        <ImageLoader src={data?.image} bluer={data?.bluer}/>
      </div>
    </SectionWrapper>
  );
};

export default AboutTemplate;
