import { useState } from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, removeCategoryBtn }) => {
  const { images, loading } = useFetchGif(category);

  return (
    <>
      <h2 className="cat-title">Category:<span className="title-span">{category}</span></h2>
      <div> {removeCategoryBtn} </div>
      <div className="card-grid">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          images.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};
