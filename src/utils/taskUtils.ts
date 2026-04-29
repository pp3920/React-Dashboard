

import type { Task } from "../types";

// getting data from local Storage (REMEMBER OLD DATA)
export const getStoredTasks = (): Task[] => {
    const tasks = localStorage.getItem('my_tasks');
    return tasks ? JSON.parse(tasks): [];

}

//Saving Data in Local Storage (increasing memory power)

export const saveTasks = (tasks : Task []) => {
    localStorage.setItem('my_tasks', JSON.stringify(tasks));
}

export const FormatDate = (dateString: string) => {
    return new Date (dateString).toLocaleDateString('hi-Ni');
}

