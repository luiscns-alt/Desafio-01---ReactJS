import Trash from "../../assets/Trash.svg";

import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.container}>
      <button className={styles.check__container}>
        <div />
      </button>
      <p>Task</p>

      <button className={styles.delete__button}>
        <img src={Trash} alt="Trash" />
      </button>
    </div>
  );
}
