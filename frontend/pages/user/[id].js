import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser } from "../../services/api";
import toast from "react-hot-toast";

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      getUser(id)
        .then(setUser)
        .catch((error) => {
          console.error("API Error:", error);
          toast.error("Failed to fetch user details! Please try again.");
        });
    }
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">{user.user}</h1>
        <div className="space-y-2">
          <p className="text-gray-700"><span className="font-semibold">Name:</span> {user.name}</p>
          <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-gray-700"><span className="font-semibold">Age:</span> {user.age}</p>
          <p className="text-gray-700"><span className="font-semibold">Mobile:</span> {user.mobile}</p>
          <p className="text-gray-700"><span className="font-semibold">Interests:</span> {user.interest.join(", ")}</p>
        </div>
        <button
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => router.push("/")}
        >
          Back to Users
        </button>
      </div>
    </div>
  );
}
