import styles from "../styles/Home.module.scss";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
