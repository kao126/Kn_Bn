import { SideBarList } from './sideBarList';

export function SideBar() {
  return (
    <div className="grid grid-rows-[72px_auto] text-center bg-white border-r-slate-600">
      <h1 className="flex justify-center items-center font-bold text-2xl bg-slate-600 text-white py-4">
        Kn_Bn
      </h1>
      <ul className="grid grid-cols-1 grid-rows-[125px_125px_auto_125px]">
        <SideBarList listName="users" />
        <SideBarList listName="task_board" />
        <li className="h-full border-b-2 p-2"></li>
        <SideBarList listName="settings" />
      </ul>
    </div>
  );
}
