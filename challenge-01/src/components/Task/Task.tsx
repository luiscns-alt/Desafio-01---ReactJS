import { TaskInterface } from "../../App";
import Check from "../../assets/check-circle.svg";
import Circle from "../../assets/Circle.svg";
import Trash from "../../assets/Trash.svg";

import styles from "./Task.module.css";

interface TaskProps {
  task: TaskInterface[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  return (
    <div className={styles.container}>
      <button
        className={styles.check__button}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <img src={Check} alt="Completa" />
        ) : (
          <img src={Circle} alt="Completa" />
        )}
      </button>
      <p className={task.isCompleted ? styles.text__completed : ""}>
        {task.title}
      </p>

      <button
        className={styles.delete__button}
        onClick={() => onDelete(task.id)}
      >
        <img src={Trash} alt="Excluir" />
      </button>
    </div>
  );
}
