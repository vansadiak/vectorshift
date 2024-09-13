// textNode.js

import React, { useState, useEffect, useRef } from "react";
import { BaseNode } from "./BaseNode";
import { useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "Something fun to do");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    adjustTextareaSize();
    detectVariables();
    // Update node internals when variables change
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
      <div style={{ minWidth: "200px", padding: "10px" }}>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{ width: "100%", resize: "none", overflow: "hidden" }}
        />
      </div>
    </BaseNode>
  );
};
