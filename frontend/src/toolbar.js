// toolbar.js

import { DraggableNode } from "./draggableNode";

const nodeTypes = [
  { type: "customInput", label: "Input" },
  { type: "llm", label: "LLM" },
  { type: "customOutput", label: "Output" },
  { type: "text", label: "Text" },
  { type: "math", label: "Math" },
  { type: "image", label: "Image" },
  { type: "conditional", label: "Conditional" },
  { type: "database", label: "Database" },
  { type: "api", label: "API" },
];

export const PipelineToolbar = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Pipeline Toolbar
      </h2>
      <div className="flex flex-wrap gap-2">
        {nodeTypes.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
    </div>
  );
};
