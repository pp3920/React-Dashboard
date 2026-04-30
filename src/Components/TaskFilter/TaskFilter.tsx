
import type { Priority, status } from "../../types";

interface Props {
  search: string;
  setSearch: (val: string) => void;
  statusFilter: status | 'all';
  setStatusFilter: (val: status | 'all') => void;
  priorityFilter: Priority | 'all';
  setPriorityFilter: (val: Priority | 'all') => void;
}

const TaskFilter: React.FC<Props> = ({ 
  search, setSearch, 
  statusFilter, setStatusFilter, 
  priorityFilter, setPriorityFilter 
}) => {
  return (
    <div style={filterContainer}>
      {/* 1. Search Bar
         When we will type something 'onChange' will run and dashboard search state will get update */}
      <input 
        type="text" placeholder="Search tasks..." 
        value={search} onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <div style={selectGroup}>
        {/* 2. Status Filter */}
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)} style={selectStyle}>
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>


        {/* 3. Priority Filter  we can choose type of task here*/}
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value as any)} style={selectStyle}>
          <option value="all">All Priority</option>
          <option value="High">High </option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

    </div>
  );
};

// Styles
const filterContainer = { marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' };
const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' };
const selectGroup = { display: 'flex', gap: '10px' };
const selectStyle = { padding: '8px', flex: 1, borderRadius: '4px' };
const badgeStyle = { backgroundColor: '#e2e8f0', padding: '2px 8px', borderRadius: '12px', marginLeft: '5px' };

export default TaskFilter;