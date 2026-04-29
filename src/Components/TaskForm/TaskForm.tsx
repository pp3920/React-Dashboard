import type { Priority, Task } from "../../types";
import React, { useState } from 'react';

/* It is an that define props structure and it is taking parameter from parent as TaskObj 
return nothing*/

interface Props {
    onAddTask: (task: Task) => void;
}


const TaskForm: React.FC<Props> = ({ onAddTask }) => {

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<Priority>('Medium');


    /***** Major Step (handle Submit) ****/

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validations 

        if (!title.trim()) {
            alert("title is not there")
            return;
        }


        // NEW TASK 
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            priority,
            status: 'pending',
            duedate: new Date().toISOString(),
        };

        onAddTask(newTask);
        setTitle('');  // leave space to add more task after adding new Tas

    };


    /****Return Functionaloty ****/

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="what to do"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
                <option value="High"> High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <button type = "submit">Add Task</button>
        </form>
    )

}

export default TaskForm;