import { useEffect, useState } from 'react';
import { useUsersInfo } from '@/hooks/useUsersInfo';

export function UserList({ selectedRole }: { selectedRole: string }) {
  const { initialUsers } = useUsersInfo();
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    if (selectedRole == 'All') {
      setUsers(initialUsers);
      return;
    }
    const filteredUsers = initialUsers.filter((user) => user.role === selectedRole);
    setUsers(filteredUsers);
  }, [selectedRole]);

  const loginStatusBg = (login: boolean) => (login ? 'bg-green-400' : 'bg-[#94a3b8]');

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
          {users.map((user) => (
            <tr className="bg-white border-b" key={user.id}>
              <td className="px-6 py-4">
                <input type="checkbox" name="" id={user.id.toString()} />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img className="w-10 h-10 rounded" src={user.imgSrc} alt="avatar" />
                    <span
                      className={`absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 ${loginStatusBg(
                        user.login
                      )} border-2 border-white rounded-full`}
                    ></span>
                  </div>
                  <div className="font-medium">
                    <div>{user.name}</div>
                    <div className="text-sm text-gray-400">@{user.username}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
