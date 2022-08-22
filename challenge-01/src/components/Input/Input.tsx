import { ChangeEvent, FormEvent, useState } from "react";
import Add from "../../assets/plus.svg";
import styles from "../Input/Input.module.css";

interface InputProps {
  onAddTask: (title: string) => void;
}

export function Input({ onAddTask }: InputProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.contener}>
      <form onSubmit={handleCreateNewTask} className={styles.box}>
        <input
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          className={styles.input}
          onChange={handleNewTaskChange}
        ></input>
        <button type="submit" className={styles.button}>
          Criar <img src={Add} alt="Botão de Adicionar Nova Tarefa" />
        </button>
      </form>
    </div>
  );
}
