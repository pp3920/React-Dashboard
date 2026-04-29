import type { Task } from "../../types";

/**
 * Interface 'Props' batata hai ki is component ko parent se kya-kya chahiye.
 * 1. task: Wo specific data jo dikhana hai.
 * 2. onDelete: Parent ka wo function jo task delete karega.
 * 3. onToggle: Parent ka wo function jo task ka status (pending/completed) palti marega.
 * 4.here wer are writing one tasd
 */
interface Props {
    task: Task;
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDelete, onToggle }) => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '15px', 
        borderBottom: '1px solid #ddd',
        // logic to show if task is completed show diffrent color
        backgroundColor: task.status === 'completed' ? '#f0fff0' : '#fff',
        transition: '0.3s' // Chhota sa animation smootness ke liye
    }}>  

    {/*
     * input property for checked box functionality
     * 
    */}
        
        <div style = {{display: 'flex', alignItems: 'center', gap: '10px'}}>

        <input
        type = "checkbox"
        checked = {task.status === 'completed'}
        onChange = {() => onToggle(task.id)}
        style= {{cursor: 'pointer'}}
        />
        <span style={{ 
                textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                color: task.status === 'completed' ? '#888' : '#000' // Completed task ka rang thoda feeka
            }}>
                {task.title} 
                <small style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    [{task.priority}]
                </small>
            </span>
        </div>

            {/* Delete Button functionality*/}

        <button onClick = {() => onDelete(task.id)}  style={{ color: 'red', border: 'none', background: 'none', fontWeight: 'bold',cursor: 'pointer' }}  >
         DELETE
         </button>
    </div>
);

export default TaskItem;