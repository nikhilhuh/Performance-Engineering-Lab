import React, { useState } from 'react';
import { fetchUser } from './api';

function App() {
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
      <h1>Performance Engineering Lab</h1>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      <pre style={{ marginTop: 24, background: '#f4f4f4', padding: 16 }}>
        {user ? JSON.stringify(user, null, 2) : 'No data'}
      </pre>
    </div>
  );
}

export default App;
