import { TaskInterface } from "../../App";
import { Task } from "../Task/Task";
import Clipboard from "../../assets/Clipboard.svg";
import styles from "./ListTasks.module.css";

interface TasksProps {
  tasks: TaskInterface[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function ListTasks({ tasks, onComplete, onDelete }: TasksProps) {
  const quantity = tasks.length;
  const completed = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{quantity}</span>
        </div>
        <div>
          <p className={styles.text__purple}>Concluidas</p>
          <span>
            {completed} de {quantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <img src={Clipboard} alt="Sem Tarefas" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
