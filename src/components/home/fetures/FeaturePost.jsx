import React from "react";
import styles from "./featurePost.module.css";

function FeaturePost() {
  return (
    <div className={styles.container}>
      <h2>Maecenas tempus tellus eget condimentum</h2>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel
      </p>

      <button>Call To Action</button>
    </div>
  );
}

export default FeaturePost;
