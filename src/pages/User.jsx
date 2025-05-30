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
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">User List</h1>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-gradient-to-b from-black via-purple-900 to-purple-700 text-white rounded-xl">
          <thead className="bg-black bg-opacity-60">
            <tr className="text-left text-sm uppercase tracking-wider">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Age</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-800">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-purple-800/40 transition-colors duration-200"
              >
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.phone}</td>
                <td className="px-4 py-3">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
