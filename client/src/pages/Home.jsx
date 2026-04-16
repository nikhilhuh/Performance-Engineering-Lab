import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 32 }}>
      <h2>Performance Engineering Lab</h2>
      <button onClick={() => navigate("/caching")}>Caching Demo</button>
      <button onClick={() => navigate("/debouncing")}>Debouncing Demo</button>
      <button onClick={() => navigate("/throttling")}>Throttling Demo</button>
      <button onClick={() => navigate("/loading")}>Loading Demo</button>
    </div>
  );
}
