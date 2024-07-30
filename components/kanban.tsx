'use client';
import {
  DndContext,
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
import { TaskList } from './taskList';
import { TasksProps } from '@/types/tasks';

// type TaskListProps = {
//   id: number;
//   title: string;
//   content: string;
//   status: string;
// };

export function Kanban() {
  const id = useId();
  const statusList = ['Todo', 'In Progress', 'Pending', 'Done'];

  const [tasks, setTasks] = useState<TasksProps[]>([
    // {
    //   id: 1,
    //   title: 'タイトル',
    //   content: 'TODO内容はここに記載します。',
    //   status: 'Plan',
    // },
    // {
    //   id: 2,
    //   title: 'タイトル2',
    //   content: 'TODO内容の二番目',
    //   status: 'Do',
    // },
    // {
    //   id: 3,
    //   title: 'タイトル3',
    //   content: 'TODO内容の3番目',
    //   status: 'Action',
    // },
    // {
    //   id: 4,
    //   title: 'タイトル4',
    //   content: 'TODO内容の4番目',
    //   status: 'Action',
    // },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function isSameListDragOver(active: Active, over: Over) {
    return (
      active.data.current?.sortable.containerId ===
      (over.data.current?.sortable.containerId || over.id)
    );
  }

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

    // if (
    //   active.data.current?.sortable.containerId !==
    //   over.data.current?.sortable.containerId
    // ) {
    //   const newTaskList = tasks.map((task) => {
    //     if (task.id === active.id) {
    //       task.status = over.data.current?.sortable.containerId;
    //     }
    //     return task;
    //   });
    //   console.log(newTaskList);
    //   setTasks(newTaskList);
    // }

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
      <TaskList status={status} tasks={tasks} setTasks={setTasks} key={i} />
    );
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl text-slate-600">Kn_Bn</h1>
        <button className="border border-[#bf94ff] rounded-md bg-white p-2 font-semibold text-slate-600 active:translate-y-0.5">
          Add Board
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <DndContext
          id={id}
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          {taskLists}
        </DndContext>
      </div>
    </div>
  );
}
