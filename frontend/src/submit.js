import React, { useState } from "react";
import { useStore } from "./store";
import axios from "axios";

// Updated CustomAlert component with overlay and click-outside-to-close functionality
const CustomAlert = ({ message, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full m-4">
        <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap mb-4">
          {message}
        </p>
        <button
          onClick={onClose}
          className="w-full bg-purple-800 hover:bg-purple-900 dark:bg-yellow-300 dark:hover:bg-yellow-400 text-white dark:text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        { nodes, edges }
      );
      const { num_nodes, num_edges, is_dag } = response.data;

      setAlertMessage(`Pipeline Analysis:
Number of Nodes: ${num_nodes}
Number of Edges: ${num_edges}
Is Directed Acyclic Graph: ${is_dag ? "Yes" : "No"}`);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      setAlertMessage(
        "An error occurred while submitting the pipeline. Please try again."
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={handleSubmit}
          className="bg-purple-800 hover:bg-purple-900 dark:bg-yellow-300 dark:hover:bg-yellow-400 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Submit Pipeline
        </button>
      </div>
      {alertMessage && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}
    </>
  );
};
