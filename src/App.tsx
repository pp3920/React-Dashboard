import { useEffect, useState } from "react";
import { getStoredTasks, saveTasks } from "./utils/taskUtils";
import type { Task } from "./types";
import TaskForm from "./Components/TaskForm/TaskForm";

const App : React.FC = () => {
  
  const [tasks, setTasks] = useState<Task[]>([]);


  //old tasks gets loads firsts
  useEffect(() => {
    setTasks(getStoredTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Adding task with spread operator

  const addTask = (task:Task) => {
    setTasks ([...tasks, task]);
  }

  return (
    <div className="app-container">
      <h1>My Task Dash board</h1>
      <TaskForm onAddTask={addTask} />
      
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No work to do today!!</p>
        ) : (
          tasks.map(t => (
            <div key={t.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
              <h3>{t.title} - <small>{t.priority}</small></h3>
              <p>Status: {t.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

