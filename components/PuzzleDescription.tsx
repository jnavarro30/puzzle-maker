import styles from "../styles/Description.module.scss";
import { puzzles } from "./Puzzles";

const PuzzleDescription = () => {

    return (
    <section className={styles.description}>
        <h1 className={styles.title}>Description</h1>
        <p className={styles.summary}>
            {puzzles[0].description}
        </p>
        <p className={styles.examples}>
            {
            puzzles[0].examples?.map(example => (
                <div className={styles.example}>{example}</div>
            ))
            }
        </p>
    </section>
    )
};

export default PuzzleDescription;
