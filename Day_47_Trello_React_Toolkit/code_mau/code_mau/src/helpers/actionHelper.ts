import { Column, Id, Task } from '../types';
function createTask(columnId: Id, tasks: Task[]): Task[] {
  const newTask: Task = {
    id: generateId(),
    columnId,
    content: `Task ${tasks.length + 1}`,
  };

  return [...tasks, newTask];
}

function deleteTask(id: Id, tasks: Task[]): Task[] {
  const newTasks = tasks.filter((task) => task.id !== id);
  return newTasks;
}

function updateTask(id: Id, content: string, tasks: Task[]): Task[] {
  const newTasks = tasks.map((task) => {
    if (task.id !== id) return task;
    return { ...task, content };
  });

  return newTasks;
}

function createNewColumn(columns: Column[]): Column[] {
  const columnToAdd: Column = {
    id: generateId(),
    title: `Column ${columns.length + 1}`,
  };

  return [...columns, columnToAdd];
}

function deleteColumn(id: Id, columns: Column[], tasks: Task[]) {
  const filteredColumns = columns.filter((col) => col.id !== id);

  const newTasks = tasks.filter((t) => t.columnId !== id);
  return { columns: filteredColumns, tasks: newTasks };
}

function updateColumn(id: Id, title: string, columns: Column[]): Column[] {
  const newColumns = columns.map((col) => {
    if (col.id !== id) return col;
    return { ...col, title };
  });

  return newColumns;
}

function generateId() {
  /* Generate a random number between 0 and 10000 */
  return Math.floor(Math.random() * 10001);
}

export {
  createTask,
  deleteTask,
  updateTask,
  createNewColumn,
  deleteColumn,
  updateColumn,
  generateId,
};
