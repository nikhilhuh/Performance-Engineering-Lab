import React, { useState, useCallback } from "react";
import debounce from "../utils/debounce";

export default function Debouncing() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  // Debounced API call
  const debouncedSearch = useCallback(
    debounce(async (q) => {
      setStatus("⏳ Debouncing...");
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setResult(data);
        setStatus("");
        console.log("🌐 API CALL", data);
      } catch (e) {
        setStatus("Error");
      }
    }, 500),
    []
  );

  const handleChange = (e) => {
    setValue(e.target.value);
    setStatus("Typing…");
    debouncedSearch(e.target.value);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Debouncing Demo</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{ fontSize: 18, padding: 4 }}
      />
      <div style={{ marginTop: 12 }}>{status}</div>
      {result && (
        <pre style={{ marginTop: 16 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
