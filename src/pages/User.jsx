import React, { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Loading users...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-r from-purple-600 to-black rounded-lg">
          <thead className="bg-gradient-to-r from-purple-700 to-black text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-700 text-gray-200 hover:bg-gray-800"
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
