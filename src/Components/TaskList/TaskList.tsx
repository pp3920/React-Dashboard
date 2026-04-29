import type { Task } from "../../types";
import TaskItem from "./TaskItem";

interface Props {

    tasks: Task [];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="task-list">
            {tasks.map((t: Task) => (
                // TaskList har ek task ke liye TaskItem ko bulayega
                <TaskItem 
                    key={t.id} 
                    task={t} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                />
            ))}
        </div>
    );
};
export default TaskList;