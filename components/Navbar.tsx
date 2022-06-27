import styles from "../styles/Navbar.module.scss";
import { Book, Settings } from 'tabler-icons-react';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <i className={styles.i}>
        <Book size={36} color="white" />
      </i>
      <i className={styles.i}>
        <Settings size={36} color="white" />
      </i>
    </div>
  );
};

export default Navbar;
