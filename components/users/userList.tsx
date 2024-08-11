import avatar from '@/public/images/avatar.png';

export function UserList() {
  return (
    <div className="relative overflow-x-auto w-[80%] mx-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-slate-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              <input type="checkbox" name="" id="" />
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-10 h-10 rounded" src={avatar.src} alt="avater" />
                  <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div className="font-medium">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-400">@jeseleos</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">Member</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-10 h-10 rounded-full" src={avatar.src} alt="avater" />
                  <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div className="font-medium">
                  <div>Layla Hover</div>
                  <div className="text-sm text-gray-400">@layla</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">Admin</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-10 h-10 rounded-full" src={avatar.src} alt="avater" />
                  <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div className="font-medium">
                  <div>Mac High</div>
                  <div className="text-sm text-gray-400">@mac</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">Owner</td>
          </tr>
          <tr className="bg-white">
            <td className="px-6 py-4">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img className="w-10 h-10 rounded" src={avatar.src} alt="avater" />
                  <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div className="font-medium">
                  <div>Kevin Doe</div>
                  <div className="text-sm text-gray-400">@kevin</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">Member</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
