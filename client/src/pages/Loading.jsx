import React, { useState } from "react";
import "../shimmer.css";
import "../spinner.css";

export default function LoadingDemo() {
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(null); // "spinner" | "skeleton" | null

  const handleSpinnerLoad = () => {
    if (loading && loadingType === "spinner") {
      console.log("⛔ Stop spinner");
      setLoading(false);
      return;
    }

    console.log("⏳ Start spinner");
    setLoadingType("spinner");
    setLoading(true);
  };

  const handleSkeletonLoad = () => {
    if (loading && loadingType === "skeleton") {
      console.log("⛔ Stop skeleton");
      setLoading(false);
      return;
    }

    console.log("✨ Start skeleton");
    setLoadingType("skeleton");
    setLoading(true);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Manual Loading States Demo</h2>

      {/* 🔹 Spinner Section */}
      <div style={{ marginBottom: 32 }}>
        <h3>1. Spinner Loading</h3>

        <button onClick={handleSpinnerLoad}>
          {loading && loadingType === "spinner"
            ? "Stop Spinner"
            : "Start Spinner"}
        </button>

        {loading && loadingType === "spinner" && (
          <div style={{ marginTop: 20 }}>
            <div className="spinner"></div>
          </div>
        )}
      </div>

      {/* 🔹 Skeleton Section */}
      <div>
        <h3>2. Skeleton Loading</h3>

        <button onClick={handleSkeletonLoad}>
          {loading && loadingType === "skeleton"
            ? "Stop Skeleton"
            : "Start Skeleton"}
        </button>

        {loading && loadingType === "skeleton" && (
          <div style={{ marginTop: 20 }}>
            <div
              className="skeleton shimmer"
              style={{
                height: "20px",
                width: "200px",
                background: "#ddd",
                marginBottom: "10px",
              }}
            ></div>

            <div
              className="skeleton shimmer"
              style={{
                height: "15px",
                width: "150px",
                background: "#ddd",
                marginBottom: "10px",
              }}
            ></div>

            <div
              className="skeleton shimmer"
              style={{
                height: "15px",
                width: "180px",
                background: "#ddd",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}