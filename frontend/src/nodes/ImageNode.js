import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

const imageUrls = [
  "https://images.ctfassets.net/kftzwdyauwt9/281lWVRPJ4Mjq3Dy31Bkl/54b2d1d01f466b132a12fa9a9546e4a9/fox-dall-e-2.avif?w=3840&q=90&fm=webp",
  "https://images.ctfassets.net/kftzwdyauwt9/281lWVRPJ4Mjq3Dy31Bkl/54b2d1d01f466b132a12fa9a9546e4a9/fox-dall-e-2.avif?w=3840&q=90&fm=webp",
  "https://images.ctfassets.net/kftzwdyauwt9/4QNKCxXtZVB2cb6mO3W1cy/e0c4fe44db1690a6e948c3c6fa540bbc/dall-e-introducing-outpainting.jpeg?w=1080&q=90&fm=webp",
  "https://images.ctfassets.net/kftzwdyauwt9/3domuMCvJzvT9oaYYKHEHK/da199b9afddcdfebd2cebc184d22ca73/OAI_Upwork_Header.jpg?w=3840&q=90&fm=webp",
];

const getRamdomImageUrl = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

export const ImageNode = ({ id, data }) => {
  const [imageUrl, setImageUrl] = useState(
    data?.imageUrl || getRamdomImageUrl()
  );

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "Image" }}
      inputs={["url"]}
      outputs={["processed"]}
    >
      <div className="w-full space-y-2">
        <input
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="Enter image URL"
          className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500"
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-32 object-cover rounded-md"
          />
        )}
      </div>
    </BaseNode>
  );
};
