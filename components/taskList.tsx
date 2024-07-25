import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
} from '@dnd-kit/sortable';
import { Task } from './task';
import { Plus } from './atoms/plus';

export function TaskList({ status, filteredTaskList }) {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2>{status}</h2>
        <Plus />
      </div>
      <SortableContext
        id={status}
        items={filteredTaskList}
      >
        <div ref={setNodeRef}>
          {filteredTaskList.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
