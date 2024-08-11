import { Header } from './task_board/header';
import avatar from '@/public/images/avatar.png';
import { UserList } from './users/userList';

export function UsersComponent() {
  return (
    <div>
      <Header />
      <ul className="flex justify-start w-[80%] border-b-2 list-none mx-auto pt-8 mb-8">
        <li className="px-4 py-2 text-[#bf94ff]">All</li>
        <li className="px-4 py-2">Admin</li>
        <li className="px-4 py-2">Member</li>
      </ul>
      <UserList />
    </div>
  );
}
