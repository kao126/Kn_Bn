'use client';
import { useState } from 'react';
import { Header } from '../header';
import { UserList } from './userList';

const roles = ['All', 'Owner', 'Admin', 'Member'];

export function UsersComponent() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const changeColor = (role: string) => {
    const textColor = role === selectedRole ? 'text-[#bf94ff]' : '';
    const borderColor = role === selectedRole ? 'border-b-2 border-[#bf94ff]' : '';
    return `px-4 py-2 ${textColor} cursor-pointer caret-transparent ${borderColor}`;
  };

  return (
    <div>
      <Header />
      <ul className="flex justify-start w-[80%] border-b-2 list-none mx-auto pt-8 mb-8">
        {roles.map((role, i) => (
          <li className={changeColor(role)} onClick={() => setSelectedRole(role)} key={i}>
            {role}
          </li>
        ))}
      </ul>
      <UserList selectedRole={selectedRole} />
    </div>
  );
}
