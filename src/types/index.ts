//appearanc of task [Rules and Regulations]

export type Priority = 'High' | 'Medium' |'Low';
export type status = 'Pending' | 'Completed';

export interface Task {
    [x: string]: any;

    id: string;
    title: string
    priority: 'High'| 'Medium' | 'Low';
    status: 'pending' | 'completed';
    duedate: string;
}

export interface FilterOption {
    status : status | 'All';
    Priority:  Priority | 'All';
}