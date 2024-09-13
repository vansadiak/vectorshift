import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "");

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
      <div>
        <input
          type="text"
          value={condition}
          onChange={handleConditionChange}
          placeholder="Enter condition"
        />
      </div>
    </BaseNode>
  );
};
