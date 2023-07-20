import styles from './AdvantageList.module.scss';
import { advantageItems } from "../../utils/constants.ts";
import Advantage from "../Advantage/Advantage.tsx";

const AdvantageList = () => {
  return (
    <ul className={styles.list}>
      {advantageItems.map(item => (
        <Advantage key={item.id} {...item}/>
      ))}
    </ul>
  );
};

export default AdvantageList;