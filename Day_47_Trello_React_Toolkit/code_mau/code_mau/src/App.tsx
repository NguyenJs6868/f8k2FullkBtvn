import KanbanBoard from './components/KanbanBoard';
import database from './database';
const { defaultCols, defaultTasks } = database;

import './App.css';

function App() {
  return <KanbanBoard p_cols={defaultCols} p_tasks={defaultTasks} />;
}

export default App;
