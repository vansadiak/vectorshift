// textNode.js

import React, { useState, useEffect, useRef } from "react";
import { BaseNode } from "./BaseNode";
import { useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "I accept multiple inputs like {{input1}}"
  );
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    adjustTextareaSize();
    detectVariables();
    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const adjustTextareaSize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const detectVariables = () => {
    const regex = /{{(\w+)}}/g;
    const matches = [...currText.matchAll(regex)];
    const newVariables = matches.map((match) => match[1]);
    setVariables(newVariables);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "Text" }}
      outputs={["output"]}
      inputs={variables}
    >
      <div className="w-full min-w-[200px] p-2">
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 resize-none overflow-hidden"
        />
      </div>
    </BaseNode>
  );
};
