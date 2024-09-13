import React from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={{ label: "LLM" }}
      inputs={["system", "prompt"]}
      outputs={["response"]}
    >
      <div className="text-sm text-gray-600 dark:text-gray-400">
        This is a Language Model.
      </div>
    </BaseNode>
  );
};
