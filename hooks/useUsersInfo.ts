import avatar from '@/public/images/avatar.png';

export function useUsersInfo() {
  const initialUsers = [
    {
      id: 1,
      name: 'Jese Leos',
      username: 'jeseleos',
      role: 'Member',
      imgSrc: avatar.src,
      login: true,
    },
    {
      id: 2,
      name: 'Layla Hover',
      username: 'layla',
      role: 'Admin',
      imgSrc: avatar.src,
      login: false,
    },
    { id: 3, name: 'Mac High', username: 'mac', role: 'Owner', imgSrc: avatar.src, login: true },
    {
      id: 4,
      name: 'Kevin Doe',
      username: 'kevin',
      role: 'Member',
      imgSrc: avatar.src,
      login: false,
    },
  ];

  const selectUsersOption = initialUsers.map(({ id, name }) => ({ value: id, label: name }));

  return { initialUsers, selectUsersOption };
}
