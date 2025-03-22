import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import UserList from "../components/UserList";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10 h-screen">
      <div>
        <div className="flex justify-between">
      <h1 className="text-[30px] text-bold"> Users</h1>
      <Link href="/user/add" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Add User</Link>
      </div>
      <UserList users={users} />
    </div>
    </div>
  );
}
