import React from "react";
import { BaseNode } from "./BaseNode";

export const ImageNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={{ label: "Image" }}
      inputs={["url"]}
      outputs={["processed"]}
    >
      <div>
        <span>Image Processing Node</span>
      </div>
    </BaseNode>
  );
};
