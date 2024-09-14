import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TasksProps } from '@/types/tasks';
import { Task } from './task';
import { Dispatch, SetStateAction } from 'react';

type TaskProps = {
  task: TasksProps;
  tasks: TasksProps[];
  setTasks: Dispatch<SetStateAction<TasksProps[]>>;
};

export function Sortable({ task, tasks, setTasks }: TaskProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-1"
    >
      <Task task={task} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
