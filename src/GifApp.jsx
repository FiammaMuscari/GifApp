import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };
//eliminar por categoria corregido with filter
  const handleOnRemove  = categoryToRemove => {
    setCategories(
        categories.filter((category) => category !== categoryToRemove)
    );
};
//remove with empty array
  const handleRemoveAll = () => {
    setCategories(['']);
};

  
  return (
    <>
      {/* Titulo */}
      <h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" className="IconContainer-sc-zg5bol kCTPrp" style={{width: "1em",
    paddingRight: "0.2em"}}><g fillRule="evenodd" clipRule="evenodd"><path fill="#00ff99" d="M0 3h4v29H0z"></path><path fill="#9933ff" d="M24 11h4v21h-4z"></path><path fill="#00ccff" d="M0 31h28v4H0z"></path><path fill="#fff35c" d="M0 0h16v4H0z"></path><path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path><path d="M24 16v-4h4M16 0v4h-4"></path></g></svg>GiphyApp</h1>

      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      {/* Listado de Gif */}
      <button className="reset" onClick={handleRemoveAll}>Reset</button>
      
      {
      React.Children.toArray(
      categories.map((category) => (
                <><button className="delete" onClick={()=>handleOnRemove(category)}>eliminar</button><GifGrid className="categories" key={category} category={category}/></>
      ))
    )}
    </>
  );
};
