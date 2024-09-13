// toolbar.js

import { DraggableNode } from "./draggableNode";
import { useStore } from "./store"; // Import the store

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
  const clearNodes = useStore((state) => state.clearNodes); // Get clearNodes function

  return (
    <div className="p-4 pb-2 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Pipeline Toolbar
      </h2>

      <div className="flex flex-wrap gap-2 items-baseline">
        {nodeTypes.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
        <button
          onClick={clearNodes}
          className="mb-4 bg-red-500 text-white py-2 px-4 ml-4 rounded"
        >
          Clear All Nodes
        </button>
      </div>
    </div>
  );
};
