import { Dispatch, SetStateAction, useState } from 'react';
import { defaultDropAnimationSideEffects, DragOverlay, useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus } from '../icons/plus';
import { Sortable } from './sortable';
import { Task } from './task';
import { TaskForm } from './taskForm';
import { TasksProps } from '@/types/tasks';

type TaskListProps = {
  status: string;
  tasks: TasksProps[];
  setTasks: Dispatch<SetStateAction<TasksProps[]>>;
  activeId: number | null;
};

export function TaskList({ status, tasks, setTasks, activeId }: TaskListProps) {
  const { setNodeRef } = useDroppable({ id: status });
  const filteredTasks = tasks.filter((task) => task.status === status);
  const activeTask = tasks.find((task) => task.id === activeId);
  const [showForm, setShowForm] = useState(false);


  const handlePlus = () => {
    setShowForm((prevBool) => !prevBool);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-slate-600">{status}</h2>
        <Plus onClick={handlePlus} className="cursor-pointer active:translate-y-0.5" />
      </div>
      <SortableContext id={status} items={filteredTasks} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef}>
          {filteredTasks.map((task) => (
            <Sortable task={task} tasks={tasks} setTasks={setTasks} key={task.id} />
          ))}
        </div>
      </SortableContext>
      {showForm ? (
        <TaskForm status={status} tasks={tasks} setTasks={setTasks} handlePlus={handlePlus} />
      ) : null}
      <DragOverlay
        dropAnimation={{
          duration: 0, // アニメーション時間を0に設定
          sideEffects: defaultDropAnimationSideEffects({
            styles: {
              active: {
                opacity: '0.5',
              },
            },
          }),
        }}
      >
        {activeTask ? <Task task={activeTask} tasks={tasks} setTasks={setTasks} /> : null}
      </DragOverlay>
    </div>
  );
}
