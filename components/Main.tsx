import styles from "../styles/Main.module.scss";
import PuzzleDescription from "./PuzzleDescription";
import PuzzleEditor from "./PuzzleEditor";
import PuzzleControls from "./PuzzleControls";
import PuzzleConsole from "./PuzzleConsole";

const Main = () => {
  return (
    <main className={styles.main}>
      <PuzzleDescription />
      <section className={styles.displays}>
        <PuzzleEditor />
        <PuzzleControls />
        <PuzzleConsole />
      </section>
    </main>
  );
};

export default Main;
