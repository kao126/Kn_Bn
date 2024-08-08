import { Setting } from './icons/setting';
import { Task } from './icons/task';
import { Users } from './icons/users';

export function SideBar() {
  return (
    <div className="grid grid-rows-[72px_auto] text-center bg-white border-r-slate-600">
      <h1 className="flex justify-center items-center font-bold text-2xl bg-slate-600 text-white py-4">
        Kn_Bn
      </h1>
      <ul className="grid grid-cols-1 grid-rows-[125px_125px_auto_125px]">
        <li className="relative h-full border-b-2 flex flex-col justify-center items-center p-2">
          <Users className="mx-auto" />
          <span className="text-[#94a3b8]">Users</span>
        </li>
        <li className="relative h-full border-b-2 flex flex-col justify-center items-center p-2">
          <span
            className="block absolute -inset-0 -left-0 w-1 bg-[#bf94ff]"
            aria-hidden="true"
          ></span>
          <Task className="mx-auto" />
          <span className="text-[#bf94ff] text-bold">Task Board</span>
        </li>
        <li className="h-full border-b-2 p-2"></li>
        <li className="h-full flex flex-col justify-center items-center p-2">
          <Setting className="mx-auto" />
          <span>Setting</span>
        </li>
      </ul>
    </div>
  );
}
