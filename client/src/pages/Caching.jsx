import React, { useState } from "react";
import { fetchUser } from "../api";

export default function Caching() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    const data = await fetchUser(1);
    setUser(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Caching Demo</h2>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      <pre style={{ marginTop: 24, background: '#f4f4f4', padding: 16 }}>
        {user ? JSON.stringify(user, null, 2) : 'No data'}
      </pre>
    </div>
  );
}

