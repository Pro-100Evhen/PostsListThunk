import React from "react";
import { useDispatch } from "react-redux";
import { changeDataType, cleareDataType } from "../redux/postSlice";

const Controls = () => {
   const dispatch = useDispatch();
   function changeDataTypeHandler(type) {
      dispatch(changeDataType(type));
   }

   return (
      <div className="bg-green-500 grid gap-4 grid-cols-4 p-2">
         <button
            className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50"
            onClick={() => changeDataTypeHandler("posts")}
         >
            Posts
         </button>
         <button
            className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50"
            onClick={() => changeDataTypeHandler("users")}
         >
            Users
         </button>
         <button
            className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50"
            onClick={() => changeDataTypeHandler("comments")}
         >
            Comments
         </button>
         <button
            className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50"
            onClick={() => changeDataTypeHandler("")}
         >
            Clear All
         </button>
      </div>
   );
};

export default Controls;
