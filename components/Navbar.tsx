import styles from "../styles/Navbar.module.scss";
import { Book, Home, PencilPlus } from "tabler-icons-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/create">
        <i className={styles.i}>
          <PencilPlus size={36} />
        </i>
      </Link>
      <Link href="/">
        <i className={styles.i}>
          <Home size={36} />
        </i>
      </Link>
      <Link href="/library">
        <i className={styles.i}>
          <Book size={36} />
        </i>
      </Link>
    </div>
  );
};

export default Navbar;
