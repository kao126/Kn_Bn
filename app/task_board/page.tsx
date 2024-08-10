// 'use client';
import { Kanban } from '@/components/kanban';
// import { SideBar } from '@/components/sideBar';
// import { TaskForm } from '@/features/common/kanban';

export default function TaskBoard() {
  // const form = new TaskForm();
  return (
    <main className="h-dvh">
      <Kanban />
    </main>
  );
}
