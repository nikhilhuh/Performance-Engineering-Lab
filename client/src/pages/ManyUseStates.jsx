import React, { useState, useEffect } from "react";

export default function ManyUseStates({ users }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ❌ derived but stored in state
  const [fullName, setFullName] = useState("");

  // ❌ derived states
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [hasUsers, setHasUsers] = useState(false);

  const [search, setSearch] = useState("");

  // ❌ syncing derived state
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  useEffect(() => {
    const result = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(result);
    setUserCount(result.length);
    setHasUsers(result.length > 0);
  }, [search, users]);

  return (
    <div>
      <h2>Full Name: {fullName}</h2>

      <input
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        placeholder="Search users"
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Total Users: {userCount}</p>
      <p>{hasUsers ? "Users found" : "No users found"}</p>

      <ul>
        {filteredUsers.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}