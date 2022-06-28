import styles from "../styles/Navbar.module.scss";
import { Book, Home, PencilPlus } from "tabler-icons-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/create">
        <i className={styles.i}>
          <PencilPlus size={36} color="white" />
        </i>
      </Link>
      <Link href="/">
        <a>
          <Home size={36} color="white" />
        </a>
      </Link>
      <Link href="/library">
        <a>
          <i className={styles.i}>
            <Book size={36} color="white" />
          </i>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
