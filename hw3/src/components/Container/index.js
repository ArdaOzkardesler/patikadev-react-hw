import React from "react";
import Selection from "../Selection";
import Days from "../Days";
import styles from "./container.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <Selection />
      <Days />
    </div>
  );
}

export default Container;
