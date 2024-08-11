'use client';
import {
  DndContext,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  KeyboardSensor,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  Active,
  Over,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useId, useState } from 'react';
import { TaskList } from './task_board/taskList';
import { TasksProps } from '@/types/tasks';
import { Header } from './task_board/header';

const initialTask = {
  id: 1,
  title: 'タスク名',
  content: 'TODO内容(詳細)をここに記載します。\n 右上の＋ボタンからタスクを追加できます。',
  status: 'ToDo',
  url: 'https://github.com/kao126/Kn_Bn',
};

export function Kanban() {
  const id = useId();
  const statusList = ['ToDo', 'In Progress', 'Pending', 'Done'];

  const [tasks, setTasks] = useState<TasksProps[]>([initialTask]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    if (typeof active.id === 'number') {
      setActiveId(active.id);
    }
  };

  const isSameListDragOver = (active: Active, over: Over) => {
    return (
      active.data.current?.sortable.containerId ===
      (over.data.current?.sortable.containerId || over.id)
    );
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id || isSameListDragOver(active, over)) {
      return;
    }

    const updateTaskList = tasks.map((task) =>
      task.id === active.id
        ? {
            ...task,
            status: over?.data.current?.sortable.containerId || over?.id,
          }
        : task
    );
    setTasks(updateTaskList);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log('a: ', active);
    console.log('o: ', over);

    if (!over) {
      return;
    }

    // over先todoのidが異なればデータの入れ替えを行う
    if (active.id !== over.id) {
      const dragIndex = tasks.findIndex((task) => task.id === active.id);
      const dropIndex = tasks.findIndex((task) => task.id === over.id);
      // active.idからtodoを特定しstatusをcolumnのid(status)に変更する
      setTasks(arrayMove(tasks, dragIndex, dropIndex));
    }
  };

  const taskLists = statusList.map((status, i) => {
    return (
      <TaskList status={status} tasks={tasks} setTasks={setTasks} activeId={activeId} key={i} />
    );
  });

  return (
    <div className="">
      <Header />
      <div className="px-8 py-6">
        <div className="flex justify-end px-4 py-2">
          <button className="bg-[#bf94ff] rounded-md p-2 font-semibold text-white active:translate-y-0.5">
            Add Board
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          <DndContext
            id={id}
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            {taskLists}
          </DndContext>
        </div>
      </div>
    </div>
  );
}
