import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
