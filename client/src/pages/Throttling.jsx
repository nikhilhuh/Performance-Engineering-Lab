import React, { useState, useCallback } from "react";
import throttle from "../utils/throttle";

export default function Throttling() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  const throttledClick = useCallback(
    throttle(async () => {
      setStatus("🌐 API CALL");
      try {
        const res = await fetch("/api/click");
        const data = await res.json();
        setCount((c) => c + 1);
        setStatus(data.message + " (" + data.timestamp + ")");
        console.log("🌐 API CALL", data);
      } catch (e) {
        setStatus("Error");
      }
    }, 1000, () => {
      setStatus("⛔ Throttled");
      console.log("⛔ Throttled");
    }),
    []
  );

  return (
    <div style={{ padding: 32 }}>
      <h2>Throttling Demo</h2>
      <button onClick={throttledClick} style={{ fontSize: 18 }}>
        Click Rapidly
      </button>
      <div style={{ marginTop: 12 }}>Count: {count}</div>
      <div style={{ marginTop: 12 }}>{status}</div>
    </div>
  );
}
