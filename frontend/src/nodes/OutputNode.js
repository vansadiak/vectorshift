// outputNode.js

import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode id={id} data={{ label: "Output" }} inputs={["value"]}>
      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">Name:</span>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">Type:</span>
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
