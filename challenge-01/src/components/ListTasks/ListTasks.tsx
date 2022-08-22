import styles from "./ListTasks.module.css";

export function ListTasks() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>N</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>N</span>
        </div>
      </header>
    </section>
  );
}
