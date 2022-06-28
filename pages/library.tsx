import LibraryList from "../components/LibraryList";
import LibrarySettings from "../components/LibrarySettings";
import styles from "../styles/Library.module.scss";

const PuzzleLibrary = () => {
    return (
      <div className={styles.library}>
        <h1 className={styles.title}>Library</h1>
        <div className={styles.body}>
            <LibrarySettings />
            <LibraryList />
        </div>
      </div>
    )
  }
  
  export default PuzzleLibrary;