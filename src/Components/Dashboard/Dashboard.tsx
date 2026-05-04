import React, { useState } from 'react';

import TaskForm from '../TaskForm/TaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskList from '../TaskList/TaskList';
import type { Task, Priority, status} from '../../types';

interface Props {
  tasks: Task[];                       // new task list array
  onAddTask: (t: Task) => void;        // function to join new task
  onDelete: (id: string) => void;      // function to delete task
  onToggle: (id: string) => void;      // toggling task
}
const Dashboard: React.FC<Props> = ({ tasks, onAddTask, onDelete, onToggle }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<status | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');

  // --- FILTERING LOGIC (The Fixed Part) ---
  const filteredTasks = tasks.filter(t => {
    // 1. Search Logic
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    
    // 2. Status Logic (FIXED LINE)
   
    const matchesStatus = statusFilter === 'all' 
      ? true 
      : (t.status as string) === statusFilter;

    // 3. Priority Logic 
    const matchesPriority = priorityFilter === 'all' 
      ? true 
      : (t.priority as string) === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // --- 3. STATISTICS LOGIC ---
 
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div style={dashboardLayout}>
      
      {/* --- 4. STATS CARDS --- */}
      <div style={statsRow}>
        <div style={statCard}>Total: {totalTasks}</div>
        <div style={{...statCard, color: 'green'}}>Done: {completedTasks}</div>
        <div style={{...statCard, color: 'orange'}}>Pending: {pendingTasks}</div>
      </div>

      {/* Form: adding new Task */}
      <TaskForm onAddTask={onAddTask} />
      
      {/* Filters: Dropdowns for search bar*/}
      <TaskFilter 
        search={search} setSearch={setSearch}
        statusFilter={statusFilter} setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter}
      />

      
      <TaskList tasks={filteredTasks} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

// --- STYLING (Responsive Layout) ---
const dashboardLayout = { maxWidth: '800px', margin: '0 auto', padding: '20px' };
const statsRow = { display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' as 'wrap' };
const statCard = { 
  flex: 1, 
  minWidth: '100px', 
  padding: '15px', 
  background: '#fff', 
  borderRadius: '8px', 
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
  textAlign: 'center' as 'center', 
  fontWeight: 'bold' 
};

export default Dashboard;