'use client';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Task } from './task';
import { useId, useState } from 'react';
import { TaskList } from './taskList';

export function Kanban() {
  const id = useId();

  const listData = [
    { listTitle: 'Plan' },
    { listTitle: 'Do' },
    { listTitle: 'Check' },
    { listTitle: 'Action' },
  ];
  const statusList = ['Plan', 'Do', 'Check', 'Action'];

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: 'タイトル',
      content: 'TODO内容はここに記載します。',
      status: 'Plan',
    },
    {
      id: 2,
      title: 'タイトル2',
      content: 'TODO内容の二番目',
      status: 'Do',
    },
    {
      id: 3,
      title: 'タイトル3',
      content: 'TODO内容の3番目',
      status: 'Action',
    },
    {
      id: 4,
      title: 'タイトル4',
      content: 'TODO内容の4番目',
      status: 'Action',
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findColumn = (id: number | null) => {
    if (!id) {
      return null;
    }
    // if (id) {
    //   return id;
    // }
    console.log('id: ', id);
    console.log(
      'task: ',
      taskList.find((task) => task.id === id)
    );
    console.log('fc: ', taskList.find((task) => task.id === id)?.status);

    return taskList.find((task) => task.id === id)?.status;
  };

  const handleDragOver = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || typeof over.id === 'number' || active.id === over.id) {
      return;
    }
    console.log('over-a: ', active);
    console.log('over-o: ', over);

    // const overId = Number(over.id);
    // const overColumn = findColumn(overId);

    // over先todoのidが異なればデータの入れ替えを行う
    // if (active.id !== over.id) {
    //   const dragIndex = taskList.findIndex((task) => task.id === active.id);
    //   const dropIndex = taskList.findIndex((task) => task.id === over.id);

    //   // active.idからtodoを特定しstatusをcolumnのid(status)に変更する
    //   const updatedTodoList = taskList.map((task) => {
    //     return task.id === Number(active.id)
    //       ? { ...task, status: (overColumn as Status) || (overId as Status) }
    //       : task;
    //   });

    //   setTaskList(arrayMove(updatedTodoList, dragIndex, dropIndex));
    // }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log('a: ', active);
    console.log('o: ', over);

    if (!over) {
      return;
    }

    if (
      active.data.current?.sortable.containerId !==
      over.data.current?.sortable.containerId
    ) {
      const newTaskList = taskList.map((task) => {
        if (task.id === active.id) {
          task.status = over.data.current?.sortable.containerId;
        }
        return task;
      });
      console.log(newTaskList);
      setTaskList(newTaskList);
    }

    // over先todoのidが異なればデータの入れ替えを行う
    if (active.id !== over.id) {
      const dragIndex = taskList.findIndex((task) => task.id === active.id);
      const dropIndex = taskList.findIndex((task) => task.id === over.id);
      // active.idからtodoを特定しstatusをcolumnのid(status)に変更する
      setTaskList(arrayMove(taskList, dragIndex, dropIndex));
    }
  };

  const taskLists = statusList.map((status, i) => {
    const filteredTaskList = taskList.filter((task) => task.status === status);
    return (
      <TaskList status={status} filteredTaskList={filteredTaskList} key={i} />
    );
  });

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Kn_Bn</h1>
        <button>Add Board</button>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
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
