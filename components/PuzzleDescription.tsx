import styles from "../styles/Description.module.scss";
const PuzzleDescription = () => {
    return (
    <section className={styles.description}>
        <h1 className={styles.title}>Description</h1>
        <p className={styles.summary}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus qui maxime, reiciendis accusamus nesciunt in aut eum quis eos aliquam? Dicta molestias nobis itaque debitis culpa, veniam corporis ex in repellendus sed recusandae cum quod odit facere tempora molestiae consequatur, aut adipisci perspiciatis assumenda quo. Corrupti nisi delectus eveniet?
        </p>
        <p className={styles.examples}>
            Lorem ipsum dolor sit amet.
        </p>
    </section>
    )
};

export default PuzzleDescription;
