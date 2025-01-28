import React from "react";
import styles from "./action.module.css";

function Action() {
  return (
    <div className={styles.container}>
      <h2>Call To Action</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <button>Call To Action</button>
    </div>
  );
}

export default Action;
