import styles from "../styles/Navbar.module.scss";
import { Book, Settings, Home } from "tabler-icons-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/library">
        <a>
          <i className={styles.i}>
            <Book size={36} color="white" />
          </i>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Home size={36} color="white" />
        </a>
      </Link>
      <i className={styles.i}>
        <Settings size={36} color="white" />
      </i>
    </div>
  );
};

export default Navbar;
