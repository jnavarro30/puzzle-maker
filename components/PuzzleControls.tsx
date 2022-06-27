import styles from "../styles/Controls.module.scss";
import { PlayerPlay, PlayerStop } from 'tabler-icons-react';

const PuzzleControls = () => {
  return (
    <div className={styles.controls}>
      <i className={styles.play}>
        <PlayerPlay size={32}/>
      </i>
      <i className={styles.stop}>
        <PlayerStop size={32}/>
      </i>
    </div>
  )
};

export default PuzzleControls;