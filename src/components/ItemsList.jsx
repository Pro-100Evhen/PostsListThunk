import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, cleareDataType } from "../redux/postSlice";
import ListItem from "./ListItem";

const ItemsList = () => {
   const { dataType, posts, status, error } = useSelector(
      (state) => state.posts
   );
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(cleareDataType());

      dispatch(fetchPosts(dataType));
   }, [dataType, dispatch]);

   if (status === "loading") {
      return <h3>Loading...</h3>;
   }

   if (status === "failed") {
      return <h3>Error: {error}</h3>;
   }

   return (
      <ul className="bg-green-600 p-3 text-white font-sans font-semibold grid gap-3">
         {dataType ? (
            posts.map((post) => {
               return <ListItem key={post.id} type={dataType} post={post} />;
            })
         ) : (
            <h3>Choose a data type to see</h3>
         )}
      </ul>
   );
};

export default ItemsList;
