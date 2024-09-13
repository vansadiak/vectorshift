import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, children, inputs = [], outputs = [] }) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}
      <div>
        <span>{data.label}</span>
      </div>
      {children}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
