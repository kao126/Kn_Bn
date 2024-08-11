// 'use client';
import { Kanban } from '@/components/kanban';
import { SideBar } from '@/components/task_board/sideBar';
// import { TaskForm } from '@/features/common/kanban';

export default function Home() {
  // const form = new TaskForm();
  return (
    <main className="h-dvh">
      <Kanban />
    </main>
  );
}
