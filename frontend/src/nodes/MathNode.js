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
      <div>
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>
    </BaseNode>
  );
};
