import styles from "../styles/Library.module.scss";

interface ItemProps {
  name: string;
}

const LibraryItem = ({ name }: ItemProps) => {
  return (
    <li className={styles.item}>
      <input className={styles.input} type="checkbox" id="1" name="1" value="isPrime"  />
      <p>{name}</p>
    </li>
  )
}

export default LibraryItem;