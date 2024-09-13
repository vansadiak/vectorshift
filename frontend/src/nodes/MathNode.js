import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || "add");

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "Math" }}
      inputs={["a", "b"]}
      outputs={["result"]}
    >
      <div className="w-full">
        <select
          value={operation}
          onChange={handleOperationChange}
          className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500"
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>
    </BaseNode>
  );
};
