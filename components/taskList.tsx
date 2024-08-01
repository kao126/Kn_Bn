import {
  defaultDropAnimationSideEffects,
  DragOverlay,
  useDroppable,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Sortable } from './sortable';
import { Plus } from './icons/plus';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { TasksProps } from '@/types/tasks';
import { Task } from './task';
import { File } from './file';
import { useGetFileUrl } from '@/hooks/useGetFileUrl';

type TaskListProps = {
  status: string;
  tasks: {
    id: number;
    title: string;
    content: string;
    status: string;
  }[];
  setTasks: Dispatch<SetStateAction<TasksProps[]>>;
  activeId: number | null;
};

export function TaskList({ status, tasks, setTasks, activeId }: TaskListProps) {
  const { setNodeRef } = useDroppable({ id: status });
  const filteredTasks = tasks.filter((task) => task.status === status);
  const activeTask = tasks.find((task) => task.id === activeId);
  const [showForm, setShowForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const { fileUrl, setFileUrl } = useGetFileUrl({ file: file });

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handlePlus = () => {
    setShowForm((prevBool) => !prevBool);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
    const title = formData.get('title');
    const content = formData.get('content');
    const url = formData.get('url');

    const targetTask = {
      id: Number(maxId + 1),
      title: String(title),
      content: String(content),
      status: status,
      url: String(url),
      fileName: file?.name,
      fileUrl: fileUrl,
    };
    const newTasks = [...tasks, targetTask];
    setTasks(newTasks);
    setFileUrl(null);
    setShowForm((prevBool) => !prevBool);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-slate-600">{status}</h2>
        <Plus
          onClick={handlePlus}
          className="cursor-pointer active:translate-y-0.5"
        />
      </div>
      <SortableContext
        id={status}
        items={filteredTasks}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef}>
          {filteredTasks.map((task) => (
            <Sortable task={task} key={task.id} />
          ))}
        </div>
      </SortableContext>
      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="border-2 rounded-md bg-white p-4"
        >
          <div>
            <label htmlFor="title" className="text-slate-600">
              タイトル
            </label>
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
            <label htmlFor="content" className="text-slate-600">
              コンテンツ
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="content"
              autoComplete="off"
              className="w-full border-2 rounded-md p-1 mb-2"
            />
          </div>
          <div>
            <label htmlFor="url" className="text-slate-600">
              URL
            </label>
            <textarea
              id="url"
              name="url"
              placeholder="url"
              autoComplete="off"
              className="w-full border-2 rounded-md p-1 mb-2"
            />
          </div>
          <div>
            <label
              htmlFor="file"
              className="flex justify-center items-center w-full h-full border-2 border-dashed rounded-md text-slate-600 p-1 mb-2 cursor-pointer"
            >
              {fileUrl && file ? (
                <img
                  src={fileUrl}
                  alt={file.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                '+ ファイルをアップロード'
              )}
              <File
                ref={fileInputRef}
                id={'file'}
                onChange={handleChangeFile}
              />
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="border-2 rounded-md px-2 py-1 text-slate-600 active:translate-y-0.5"
            >
              Add Task
            </button>
          </div>
        </form>
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
        {activeTask ? <Task task={activeTask} /> : null}
      </DragOverlay>
    </div>
  );
}
