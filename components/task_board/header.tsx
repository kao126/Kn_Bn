import avatar from '@/public/images/avatar.png';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex justify-end gap-4 h-[72px] px-12 py-4 bg-slate-700">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src={avatar.src}
          alt="avater"
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src={avatar.src}
          alt="avater"
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src={avatar.src}
          alt="avater"
        />
        <Link
          className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-[#94a3b8] border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
          href="users"
        >
          +99
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 rounded-full" src={avatar.src} alt="avater" />
        <div className="font-medium text-white">
          <div>Jese Leos</div>
          <div className="text-sm text-gray-400">Joined in August 2014</div>
        </div>
      </div>
    </div>
  );
}
