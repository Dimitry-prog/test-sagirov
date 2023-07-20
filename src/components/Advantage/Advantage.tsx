import styles from './Advantage.module.scss';
import { AdvantageType } from "../../types";

type AdvantageProps = AdvantageType

const Advantage = (description: AdvantageProps) => {
  const { top, middle, bottom } = description

  return (
    <li className={styles.item}>
      <a href="#">
        <span>{top}</span>
        <span>{middle}</span>
        <span>{bottom}</span>
      </a>
    </li>
  );
};

export default Advantage;