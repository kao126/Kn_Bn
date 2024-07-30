import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TasksProps } from '@/types/tasks';
import { Url } from './icons/url';
import Link from 'next/link';

type TaskProps = {
  task: TasksProps;
};

export function Task({ task }: TaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative border-2 rounded-md bg-white p-2 mb-1"
    >
      <span
        className="block absolute -inset-0.5 -left-0.5 w-1 bg-[#bf94ff] rounded-tl-md rounded-bl-md"
        aria-hidden="true"
      ></span>
      <h2 className="font-bold text-sm">{task.title}</h2>
      <p className="text-sm whitespace-pre-line">{task.content}</p>
      {task.url ? (
        <Link
          href={task.url}
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-end"
        >
          <Url className="-rotate-45" />
        </Link>
      ) : null}
    </div>
  );
}
