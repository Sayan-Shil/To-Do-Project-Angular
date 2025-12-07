export interface Task{
    id:number;
    title:String;
    description?:String;
    isCompleted:boolean;
    dueDate:Date;
    priority : 'Low' | 'Normal' | 'Urgent';
}