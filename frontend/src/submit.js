import React from "react";
import { useStore } from "./store";
import axios from "axios";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        { nodes, edges }
      );
      const { num_nodes, num_edges, is_dag } = response.data;

      alert(`Pipeline Analysis:
Number of Nodes: ${num_nodes}
Number of Edges: ${num_edges}
Is Directed Acyclic Graph: ${is_dag ? "Yes" : "No"}`);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert(
        "An error occurred while submitting the pipeline. Please try again."
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "12px 24px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "4px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
