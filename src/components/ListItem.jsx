import React from "react";

const ListItem = (props) => {
   return (
      <li className="rounded-md border border-white border-solid p-4">
         <h3 className="text-left text-lg">{props.post.title}</h3>
         <p className="text-left text-base">{props.post.body}</p>
      </li>
   );
};

export default ListItem;
