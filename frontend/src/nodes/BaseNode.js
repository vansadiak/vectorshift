import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, children, inputs = [], outputs = [] }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          className="w-3 h-3 bg-blue-500 dark:bg-blue-400"
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}
      <div className="mb-2">
        <span className="font-bold text-gray-700 dark:text-gray-200">
          {data.label}
        </span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{children}</div>
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          className="w-3 h-3 bg-green-500 dark:bg-green-400"
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
