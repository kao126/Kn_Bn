import { Header } from './task_board/header';
import { useUsersInfo } from '@/hooks/useUsersInfo';

export function SettingsComponent() {
  const { initialUsers } = useUsersInfo();
  return (
    <div>
      <Header />
      <div className="p-6">
        <div className="w-[60%] border-2 border-slate-300 rounded-md bg-white mx-auto p-6">
          <h1 className="font-bold text-2xl mb-4">プロフィールを編集</h1>
          <form action="">
            <div className="grid grid-cols-[auto_max-content] gap-10">
              <div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="name" className="font-bold mb-1">
                    氏名
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={initialUsers[0].name}
                    className="w-full border-2 rounded-md text-xl p-2"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="username" className="font-bold mb-1">
                    ユーザー名
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={`@${initialUsers[0].username}`}
                    className="w-full border-2 rounded-md text-xl p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="role" className="font-bold mb-1">
                    権限
                  </label>
                  <span className="w-full text-xl p-2">{initialUsers[0].role}</span>
                </div>
              </div>
              <div>
                <label className="inline-block font-bold mb-1">プロフィール写真</label>
                <img
                  src={initialUsers[0].imgSrc}
                  alt="プロフィール写真"
                  className="w-48 rounded-md"
                />
                <label
                  htmlFor=""
                  className="flex justify-center items-center w-full border-2 rounded-md p-1 my-2 cursor-pointer"
                >
                  写真をアップロード
                </label>
                <div className="text-center">
                  <button>写真を削除</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <button className="min-w-28 border-2 rounded-md bg-white text-slate-500 font-bold p-2">
                やめる
              </button>
              <button
                type="submit"
                className="min-w-28 border-2 rounded-md bg-[#bf94ff] text-white font-bold p-2"
              >
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
