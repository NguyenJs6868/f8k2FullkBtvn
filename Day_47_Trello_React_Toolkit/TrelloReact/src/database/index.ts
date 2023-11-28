import isJsonString from '../helpers/isJSON';
import { Column, Task } from '../types';

const defaultTasks: Task[] = [
  {
    id: '1',
    columnId: 'todo',
    content: 'Go Home',
  },
  {
    id: '2',
    columnId: 'todo',
    content: 'Eating in Home',
  },
  {
    id: '3',
    columnId: 'doing',
    content: 'Get Money',
  },
  {
    id: '4',
    columnId: 'doing',
    content: 'Buy the house',
  },
  {
    id: '5',
    columnId: 'done',
    content: 'Sleep',
  },
  {
    id: '6',
    columnId: 'done',
    content: 'Code',
  },
  {
    id: '7',
    columnId: 'done',
    content: 'Eat (Parent home)',
  },
  {
    id: '8',
    columnId: 'todo',
    content: 'Learning Next.js',
  },
  {
    id: '9',
    columnId: 'todo',
    content: 'Learning NodeJS',
  },
  {
    id: '10',
    columnId: 'todo',
    content: 'Learning express',
  },
  {
    id: '11',
    columnId: 'todo',
    content: 'Learning SQL',
  },
  {
    id: '12',
    columnId: 'doing',
    content: 'Do homework',
  },
  {
    id: '13',
    columnId: 'doing',
    content: 'Become a developer',
  },
];
const defaultCols: Column[] = [
  {
    id: 'todo',
    title: 'Todo',
  },
  {
    id: 'doing',
    title: 'Loading for success',
  },
  {
    id: 'done',
    title: 'Done',
  },
];

const getData = () => {
  const localTasks = localStorage.getItem('tasks');
  const localCols = localStorage.getItem('columns');
  let tasks = defaultTasks;
  let cols = defaultCols;
  if (localTasks && isJsonString(localTasks)) {
    tasks = JSON.parse(localTasks) as Task[];
  }
  if (localCols && isJsonString(localCols)) {
    cols = JSON.parse(localCols) as Column[];
    if (cols.length === 0) {
      tasks = [];
      localStorage.removeItem('tasks');
      localStorage.removeItem('columns');
    }
  }
  return {
    defaultCols: cols,
    defaultTasks: tasks,
  };
};

export default getData();
