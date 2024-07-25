import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type TaskProps = {
  task: {
    id: number;
    title: string;
    content: string;
    status: string;
  };
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
      <h2>タイトル{task.id}</h2>
      <p>内容</p>
    </div>
  );
}
