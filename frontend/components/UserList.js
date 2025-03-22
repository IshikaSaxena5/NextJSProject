import Link from "next/link";

export default function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user._id} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center shadow-md">
            <div>
              <p className="text-lg font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div className="space-x-3">
              <Link href={`/user/${user._id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                View
              </Link>
              <Link href={`/user/add?id=${user._id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
