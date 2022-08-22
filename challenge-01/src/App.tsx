import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { ListTasks } from "./components/ListTasks/ListTasks";

import "./global.css";

export interface TaskInterface {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function taskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <main>
        <Input onAddTask={addTask} />
        <ListTasks
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={taskCompletedById}
        />
      </main>
    </div>
  );
}

export default App;
