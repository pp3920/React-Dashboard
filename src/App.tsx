import { useEffect, useState } from "react";
import { getStoredTasks, saveTasks } from "./utils/taskUtils";
import type { Task } from "./types";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import Dashboard from "./Components/Dashboard/Dashboard";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Mounting: Purana data load karo
  useEffect(() => {
    setTasks(getStoredTasks());
  }, []);

  // Update: Jab bhi tasks change hon, save karo
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
          DASHBOARD: Humne saari state aur functions 'Dashboard' ko de diye. 
          Ab Dashboard hi tay karega ki Filter kahan dikhega aur Stats kahan.
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