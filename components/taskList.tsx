import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { Task } from './task';
import { Plus } from './atoms/plus';
import { Dispatch, SetStateAction, useState } from 'react';
import { TasksProps } from '@/types/tasks';

type TaskListProps = {
  status: string;
  tasks: {
    id: number;
    title: string;
    content: string;
    status: string;
  }[];
  setTasks: Dispatch<SetStateAction<TasksProps[]>>;
};

export function TaskList({ status, tasks, setTasks }: TaskListProps) {
  const { setNodeRef } = useDroppable({ id: status });
  const filteredTasks = tasks.filter((task) => task.status === status);
  const [showForm, setShowForm] = useState(false);

  const handlePlus = () => {
    setShowForm((prevBool) => !prevBool);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
    const title = formData.get('title');
    const content = formData.get('content');

    const targetTask = {
      id: Number(maxId + 1),
      title: String(title),
      content: String(content),
      status: status,
    };
    const newTasks = [...tasks, targetTask];
    setTasks(newTasks);
    setShowForm((prevBool) => !prevBool);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2>{status}</h2>
        <Plus
          onClick={handlePlus}
          className="cursor-pointer active:translate-y-0.5"
        />
      </div>
      <SortableContext id={status} items={filteredTasks}>
        <div ref={setNodeRef}>
          {filteredTasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </SortableContext>
      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="border-2 rounded-md bg-white p-4"
        >
          <div>
            <label htmlFor="title">タイトル</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="title"
              autoComplete="off"
              className="w-full border-2 rounded-md p-1 mb-2"
            />
          </div>
          <div>
            <label htmlFor="content">コンテンツ</label>
            <textarea
              id="content"
              name="content"
              placeholder="content"
              autoComplete="off"
              className="w-full border-2 rounded-md p-1 mb-2"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="border-2 rounded-md px-2 py-1 active:translate-y-0.5"
            >
              Add Task
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
