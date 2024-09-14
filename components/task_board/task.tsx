import { TasksProps } from '@/types/tasks';
import { Url } from '../icons/url';
import Link from 'next/link';
import { useUsersInfo } from '@/hooks/useUsersInfo';
import { DeleteBtn } from '../icons/deleteBtn';
import { Dispatch, SetStateAction } from 'react';

type TaskProps = {
  task: TasksProps;
  tasks: TasksProps[];
  setTasks: Dispatch<SetStateAction<TasksProps[]>>;
};

export function Task({ task, tasks, setTasks }: TaskProps) {
  const { initialUsers } = useUsersInfo();

  const removeTask = (id: TasksProps['id']) => {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="relative border-2 rounded-md bg-white p-2">
      <span
        className="block absolute -inset-0.5 -left-0.5 w-1 bg-[#bf94ff] rounded-tl-md rounded-bl-md"
        aria-hidden="true"
      ></span>
      <h2 className="font-bold text-sm mb-2">{task.title}</h2>
      <p className="text-sm whitespace-pre-line mb-2">{task.content}</p>
      {task.fileUrl && task.fileName ? (
        <img
          src={task.fileUrl}
          alt={task.fileName}
          className="border-2 rounded-md object-cover w-full h-full mb-2"
        />
      ) : null}
      {task.url || task.userIds ? (
        <div className="flex justify-between items-center">
          {task.userIds ? (
            <div className="flex -space-x-2.5 rtl:space-x-reverse">
              {task.userIds.map((UserId, i) => (
                <img
                  className="w-7 h-7 border-2 border-white rounded-full"
                  src={initialUsers.find((user) => user.id == UserId)?.imgSrc}
                  alt="avatar"
                  key={i}
                />
              ))}
            </div>
          ) : null}
          <div className="flex">
            {task.url ? (
              <Link
                href={task.url}
                rel="noopener noreferrer"
                target="_blank"
                onClick={(event) => event.stopPropagation()}
              >
                <Url className="-rotate-45" />
              </Link>
            ) : null}
            <button onClick={() => removeTask(task.id)}>
              <DeleteBtn />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
