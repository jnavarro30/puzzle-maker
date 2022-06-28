import LibraryItem from "./LibraryItem";
import styles from "../styles/Library.module.scss";
import { puzzles } from "./Puzzles";

const LibraryList = () => {
  

  return (
    <ul className={styles.list}>
      {
        puzzles.map(item => (
          <LibraryItem name={item.name} />
        ))
      }
    </ul>
  )
}

export default LibraryList;