import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "");
  const [method, setMethod] = useState(data?.method || "GET");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "API" }}
      inputs={["request"]}
      outputs={["response"]}
    >
      <div className="space-y-2">
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter API URL"
          className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500"
        />
        <select
          value={method}
          onChange={handleMethodChange}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
    </BaseNode>
  );
};
