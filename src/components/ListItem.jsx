import React from "react";

const ListItem = (props) => {
   return (
      <li className="rounded-md border border-white border-solid p-4">
         {props.type === "posts" && (
            <>
               <h3 className="text-left text-lg">
                  Заголовок: {props.post.title}
               </h3>
               <p className="text-left text-base">Пост: {props.post.body}</p>
            </>
         )}

         {props.type === "users" && (
            <>
               <h3 className="text-left text-lg font-bold">
                  {props.post.name}
               </h3>
               <p className="text-left text-base">
                  Username: {props.post.username}
               </p>
               <p className="text-left text-base">Email: {props.post.email}</p>
               <p className="text-left text-base">
                  Address:{" "}
                  {`${props.post.address?.street}, ${props.post.address?.city}`}
               </p>
            </>
         )}

         {props.type === "comments" && (
            <>
               <h3 className="text-left text-lg">Автор: {props.post.name}</h3>
               <p className="text-left text-base">
                  Коментар: {props.post.body}
               </p>
            </>
         )}
      </li>
   );
};

export default ListItem;
