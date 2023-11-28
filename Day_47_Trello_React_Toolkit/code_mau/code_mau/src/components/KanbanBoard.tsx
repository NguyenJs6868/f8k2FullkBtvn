import PlusIcon from '../icons/PlusIcon';
import { useEffect, useMemo, useState } from 'react';
import { Column, Task } from '../types';
import ColumnContainer from './ColumnContainer';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import TaskCard from './TaskCard';
import {
  createNewColumn,
  createTask,
  deleteColumn,
  deleteTask,
  updateColumn,
  updateTask,
} from '../helpers/actionHelper';
function KanbanBoard({ p_cols, p_tasks }) {
  const [columns, setColumns] = useState<Column[]>(p_cols);
  const [tasks, setTasks] = useState<Task[]>(p_tasks);

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  useEffect(() => {
    function handleUnload() {
      localStorage.setItem(
        'columns',
        JSON.stringify(columns.map((col) => ({ ...col, id: col.id + '' })))
      );
      localStorage.setItem(
        'tasks',
        JSON.stringify(tasks.map((task) => ({ ...task, id: task.id + '' })))
      );
    }
    window.onbeforeunload = handleUnload;
    return () => (window.onbeforeunload = () => null);
  }, [columns, tasks]);

  return (
    <div
      className='
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
    '>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}>
        <div className='m-auto flex gap-4'>
          <div className='flex gap-4'>
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={(id) => {
                    const { columns: newColumns, tasks: newTasks } =
                      deleteColumn(id, columns, tasks);
                    setColumns(newColumns);
                    setTasks(newTasks);
                  }}
                  updateColumn={(id, title) => {
                    const newColumns = updateColumn(id, title, columns);
                    setColumns(newColumns);
                  }}
                  createTask={(id) => {
                    const newTasks = createTask(id, tasks);
                    setTasks(newTasks);
                  }}
                  deleteTask={(id) => {
                    const newTasks = deleteTask(id, tasks);
                    setTasks(newTasks);
                  }}
                  updateTask={(id, content) => {
                    const newTasks = updateTask(id, content, tasks);
                    setTasks(newTasks);
                  }}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={() => {
              const newColumns = createNewColumn(columns);
              setColumns(newColumns);
            }}
            className='
      h-[60px]
      w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-mainBackgroundColor
      border-2
      border-columnBackgroundColor
      p-4
      ring-teal-600
      hover:ring-2
      flex
      gap-2
      '>
            <PlusIcon />
            Add Column
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={(id) => {
                  const { columns: newColumns, tasks: newTasks } = deleteColumn(
                    id,
                    columns,
                    tasks
                  );
                  setColumns(newColumns);
                  setTasks(newTasks);
                }}
                updateColumn={(id, title) => {
                  const newColumns = updateColumn(id, title, columns);
                  setColumns(newColumns);
                }}
                createTask={(id) => {
                  const newTasks = createTask(id, tasks);
                  setTasks(newTasks);
                }}
                deleteTask={(id) => {
                  const newTasks = deleteTask(id, tasks);
                  setTasks(newTasks);
                }}
                updateTask={(id, content) => {
                  const newTasks = updateTask(id, content, tasks);
                  setTasks(newTasks);
                }}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={(id) => {
                  const newTasks = deleteTask(id, tasks);
                  setTasks(newTasks);
                }}
                updateTask={(id, content) => {
                  const newTasks = updateTask(id, content, tasks);
                  setTasks(newTasks);
                }}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column as Column);
      return;
    }

    if (event.active.data.current?.type === 'Task') {
      if (event.active.data.current) {
        setActiveTask(event.active.data.current.task as Task);
      }
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === 'Column';
    if (!isActiveAColumn) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    const isOverATask = over.data.current?.type === 'Task';

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          // Fix introduced after video recording
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === 'Column';

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

export default KanbanBoard;
