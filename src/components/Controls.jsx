import React from "react";

const Controls = () => {
   return (
      <div className="bg-green-500 grid gap-4 grid-cols-4 p-2">
         <button className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50">
            Posts
         </button>
         <button className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50">
            Users
         </button>
         <button className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50">
            Comments
         </button>
         <button className="transition-all text-cyan-700 p-2 text-lg font-semibold bg-gray-50 rounded hover:bg-cyan-700 hover:text-gray-50">
            Clear All
         </button>
      </div>
   );
};

export default Controls;
