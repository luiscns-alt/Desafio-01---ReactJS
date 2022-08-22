import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "../Input/Input.module.css";
import Add from "../../assets/plus.svg";

export function Input() {
  const [tasks, setTasks] = useState(["Tarefa"]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
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
