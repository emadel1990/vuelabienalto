import React from "react";

const ContentList = ({ svg, content }) => {
  return (
    <ul className="flex flex-col">
      <li className="flex flex-row mb-2">
        <div className="select-none cursor-pointer bg-gray-300 rounded-full flex flex-1 items-center p-2  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col rounded-full w-8 h-8 justify-center items-center mr-2 text-lg">
            <img src={svg} alt="svg" />
          </div>
          <div className="flex-1 pl-">
            <div class="font-medium">{content}</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ContentList;
