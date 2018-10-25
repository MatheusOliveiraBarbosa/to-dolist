export class Task {
    id: number;
    severity: string;
    name: string;
}

export const TASKS: Task[] = [
    {id: 11, severity: 'LOW', name: "Task Initial "},
    {id: 12, severity: 'MEDIUM', name: "Task Init "},
    {id: 13, severity: 'HIGH', name: "Task Preprocess "},
    {id: 14, severity: 'HIGH', name: "Task Process "},
    {id: 15, severity: 'LOW', name: "Task Final "},
]