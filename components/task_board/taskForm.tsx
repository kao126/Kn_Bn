import { useId, useRef, useState } from 'react';
import { File } from './file';
import { TasksProps } from '@/types/tasks';
import { useGetFileUrl } from '@/hooks/useGetFileUrl';
import { useUsersInfo } from '@/hooks/useUsersInfo';
import Select, { StylesConfig } from 'react-select';

type TaskFormProps = {
  status: string;
  tasks: TasksProps[];
  setTasks: (tasks: TasksProps[]) => void;
  handlePlus: () => void;
};

export function TaskForm({ status, tasks, setTasks, handlePlus }: TaskFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { fileUrl, setFileUrl } = useGetFileUrl({ file: file });
  const { selectUsersOption } = useUsersInfo();
  const id = useId();

  const customStyle: StylesConfig = {
    control: (styles) => ({ ...styles, border: 'none' }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: '#344156',
      ':hover': {
        backgroundColor: '#344156',
        color: '#fff',
      },
    }),
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
    const title = formData.get('title');
    const content = formData.get('content');
    const url = formData.get('url');
    const userIds = formData.getAll('users');

    const targetTask = {
      id: Number(maxId + 1),
      title: String(title),
      content: String(content),
      status: status,
      url: String(url),
      fileName: file?.name,
      fileUrl: fileUrl,
      userIds: userIds?.map((userId) => Number(userId)),
    };
    const newTasks = [...tasks, targetTask];
    setTasks(newTasks);
    setFileUrl(null);
    handlePlus();
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 rounded-md bg-white p-4">
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
          htmlFor={`file-${id}`}
          className="flex justify-center items-center w-full h-full border-2 border-dashed rounded-md text-slate-600 p-1 mb-2 cursor-pointer"
        >
          {fileUrl && file ? (
            <img src={fileUrl} alt={file.name} className="object-cover w-full h-full" />
          ) : (
            '+ ファイルをアップロード'
          )}
          <File ref={fileInputRef} id={`file-${id}`} onChange={handleChangeFile} />
        </label>
      </div>
      <div>
        <label htmlFor="users" className="text-slate-600">
          ユーザー
        </label>
        <Select
          isMulti
          name="users"
          options={selectUsersOption}
          className="border-2 rounded-md mb-2"
          classNamePrefix="select"
          styles={customStyle}
        />
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
  );
}
