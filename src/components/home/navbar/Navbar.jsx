import styles from "./navbar.module.css";

console.log("styles", styles);

function Navbar() {
  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>iLandingPage</h1>
      <ul className={styles.navLinks}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Dropdown</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <button>Get Started</button>
    </nav>
  );
}

export default Navbar;
