import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";
import ListItem from "./ListItem";

const ItemsList = () => {
   const { posts, status, erorr } = useSelector((state) => state.posts);
   const dispatch = useDispatch();

   useEffect(() => {
      if (status === "idle") {
         dispatch(fetchPosts());
      }
   }, [status, dispatch]);

   if (status === "loading") {
      return <h3>Loading...</h3>;
   }

   if (status === "error") {
      return <h3>Erorr {erorr}</h3>;
   }

   return (
      <ul className="bg-green-600 p-3 text-white font-sans font-semibold grid gap-3">
         {posts.map((post) => {
            return <ListItem key={post.id} post={post} />;
         })}
      </ul>
   );
};

export default ItemsList;
