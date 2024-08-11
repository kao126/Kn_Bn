'use client';
import { usePathname } from 'next/navigation';
import { Setting } from './icons/setting';
import { Task } from './icons/task';
import { Users } from './icons/users';
import Link from 'next/link';

export function SideBarList({ listName }: { listName: string }) {
  const pathname = usePathname().replace('/', '');
  const color = listName == pathname ? '#bf94ff' : '#94a3b8';

  const switchIcon = (listName: string) => {
    switch (listName) {
      case 'users':
        return <Users color={color} className="mx-auto" />;
      case 'task_board':
        return <Task color={color} className="mx-auto" />;
      case 'settings':
        return <Setting color={color} className="mx-auto" />;
    }
  };

  const displayCase = (listName: string): string => {
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
        {switchIcon(listName)}
        <span className={`text-[${color}]`}>{displayCase(listName)}</span>
      </li>
    </Link>
  );
}
