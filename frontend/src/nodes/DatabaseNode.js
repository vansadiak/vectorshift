import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id, data }) => {
  const [query, setQuery] = useState(data?.query || "");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "Database" }}
      inputs={["input"]}
      outputs={["result"]}
    >
      <div className="w-full">
        <textarea
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter SQL query"
          className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 resize-none"
          rows={3}
        />
      </div>
    </BaseNode>
  );
};
