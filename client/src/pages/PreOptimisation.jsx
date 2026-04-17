import React, { useState, useMemo } from "react";

function cheapCalc(num) {
  console.log("Calculating...");
  return num * 2; // intentionally cheap operation
}

export default function PreOptimisation() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ❌ Over-optimization
  const memoizedValue = useMemo(() => cheapCalc(count), [count]);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "500px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>Optimization Demo 👀</h1>

      <h2>Count: {count}</h2>
      <h3>Result: {memoizedValue}</h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Increment Count
      </button>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            fontSize: "16px",
          }}
        />
      </div>

      <p style={{ marginTop: "20px", color: "#555" }}>
        Typing shouldn't trigger calculation... right? 👀
      </p>
    </div>
  );
}