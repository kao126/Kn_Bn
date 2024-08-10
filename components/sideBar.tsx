'use client';
import { usePathname } from 'next/navigation';
import { Setting } from './icons/setting';
import { Task } from './icons/task';
import { Users } from './icons/users';
import Link from 'next/link';

export function SideBar() {
  const handleComponent = (listName: string) => {
    const pathname = usePathname().replace('/', '');
    const color = listName == pathname ? '#bf94ff' : '#94a3b8';

    const switchComponent = (listName: string) => {
      switch (listName) {
        case 'users':
          return <Users color={color} className="mx-auto" />;
        case 'task_board':
          return <Task color={color} className="mx-auto" />;
        case 'settings':
          return <Setting color={color} className="mx-auto" />;
      }
    };

    const changeCase = (listName: string): string => {
      return listName
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    };

    return (
      <Link href={listName}>
        <li className="relative h-full border-b-2 flex flex-col justify-center items-center p-2">
          {listName == pathname ? (
            <span
              className="block absolute -inset-0 -left-0 w-1 bg-[#bf94ff]"
              aria-hidden="true"
            ></span>
          ) : null}
          {switchComponent(listName)}
          <span className={`text-[${color}]`}>{changeCase(listName)}</span>
        </li>
      </Link>
    );
  };

  return (
    <div className="grid grid-rows-[72px_auto] text-center bg-white border-r-slate-600">
      <h1 className="flex justify-center items-center font-bold text-2xl bg-slate-600 text-white py-4">
        Kn_Bn
      </h1>
      <ul className="grid grid-cols-1 grid-rows-[125px_125px_auto_125px]">
        {handleComponent('users')}
        {handleComponent('task_board')}
        <li className="h-full border-b-2 p-2"></li>
        {handleComponent('settings')}
      </ul>
    </div>
  );
}
