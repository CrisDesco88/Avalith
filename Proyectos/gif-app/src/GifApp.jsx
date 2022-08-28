import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import {RemoveCategoryBtn} from "./components/RemoveCategoryBtn";
import { ResetCategoriesBtn } from "./components/ResetCategoriesBtn";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories])
  }

  const handleResetAllCategories = () => setCategories([]);

  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    )
  }
  
  return (
    <>
      <div className="header">
        <h1 data-text="GifApp" className="light">
          GifApp
          {import.meta.env.API_KEY}
        </h1>
        <AddCategory addCategory={handleAddCategory} />
        <ResetCategoriesBtn handler={handleResetAllCategories}/>
      </div>
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          removeCategoryBtn={
            <RemoveCategoryBtn
              handler={handleRemoveCategory}
              category={category}
            />
          }
        />
      ))}
    </>
  );
};

GifApp.propTypes = { 
  categories: PropTypes.array,
  handleAddCategory: PropTypes.func,
  handleRemoveCategory: PropTypes.func,
  handleResetAllCategories: PropTypes.func

}