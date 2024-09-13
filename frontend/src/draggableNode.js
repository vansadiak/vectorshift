// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="cursor-grab bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.opacity = "1")}
      draggable
    >
      {label}
    </div>
  );
};
