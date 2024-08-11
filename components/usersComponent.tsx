import { Header } from './task_board/header';
import avatar from '@/public/images/avatar.png';

export function UsersComponent() {
  return (
    <div className="">
      <Header />
      <div className="grid gap-4 sm:grid-cols-4 p-8">
        <div className="relative">
          <img className="w-10 h-10 rounded-full" src={avatar.src} alt="avater" />
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="relative">
          <img className="w-10 h-10 rounded" src={avatar.src} alt="avater" />
          <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>

      </div>
    </div>
  );
}
