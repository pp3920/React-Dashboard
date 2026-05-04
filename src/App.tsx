import { useEffect, useState } from "react";
import { getStoredTasks, saveTasks } from "./utils/taskUtils";
import type { Task } from "./types";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import Dashboard from "./Components/Dashboard/Dashboard";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Mounting: load all data that is stored
  useEffect(() => {
    setTasks(getStoredTasks());
  }, []);

  // Update: when there is change in task save it.
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const deleteTask = (id: string) => setTasks(tasks.filter(t => t.id !== id));

  const toggleStatus = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t));
  };

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '20px 0' }}>
      {/* 
          DASHBOARD: here we gave all our functions to dashboard now, Dashboard will decide where we have to
          add that function.
      */}
      <Dashboard 
        tasks={tasks} 
        onAddTask={addTask} 
        onDelete={deleteTask} 
        onToggle={toggleStatus} 
      />
    </div>
  );
};

export default App;