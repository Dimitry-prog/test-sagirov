import AdvantageList from "../AdvantageList/AdvantageList.tsx";
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__left}>
        <div className={styles.hero__title}>
          <h2>Путешествие</h2>
          <p>на красную планету</p>
        </div>
        <button type='button' aria-label='read more'>Начать путешествие
          <div/>
        </button>
      </div>

      <div className={styles.hero__right}>
        <AdvantageList/>
      </div>

      <button type='button' aria-label='read more' className={styles.hero__mobile}>Начать путешествие
        <div/>
      </button>
    </section>
  );
};

export default Hero;