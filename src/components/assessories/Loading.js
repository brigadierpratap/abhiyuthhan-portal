import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <i class="fas fa-spinner fa-spin fa-2x"></i>
      <h3>
        <em>Loading</em>
      </h3>
    </div>
  );
}
