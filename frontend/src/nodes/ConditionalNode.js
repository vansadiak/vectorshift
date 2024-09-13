import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "a > b");

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "Conditional" }}
      inputs={["input"]}
      outputs={["true", "false"]}
    >
      <div className="w-full">
        <input
          type="text"
          value={condition}
          onChange={handleConditionChange}
          placeholder="Enter condition"
          className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500"
        />
      </div>
    </BaseNode>
  );
};
