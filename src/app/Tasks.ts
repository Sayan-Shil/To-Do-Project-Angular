import { Task } from "./app.model";

export const TaskList: Task[] = [
  {
    id: 1,
    title: 'Complete Angular Assignment',
    description: 'Finish the component and service integration module.',
    isCompleted: false,
    dueDate: new Date('2025-12-10'),
    priority: 'Urgent'
  },
  {
    id: 2,
    title: 'Buy Groceries',
    description: 'Purchase vegetables and milk for the week.',
    isCompleted: false,
    dueDate: new Date('2025-12-08'),
    priority: 'Low'
  },
  {
    id: 3,
    title: 'Team Meeting',
    description: 'Discuss sprint progress with the development team.',
    isCompleted: true,
    dueDate: new Date('2025-12-05'),
    priority: 'Normal'
  },
  {
    id: 4,
    title: 'Prepare Resume',
    description: 'Update resume with new Java projects and certifications.',
    isCompleted: false,
    dueDate: new Date('2025-12-15'),
    priority: 'Urgent'
  },
  {
    id: 5,
    title: 'Workout Session',
    isCompleted: false,
    dueDate: new Date('2025-12-07'),
    priority: 'Low'
  }
];