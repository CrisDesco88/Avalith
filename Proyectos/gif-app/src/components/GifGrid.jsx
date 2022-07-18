
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category, removeCategoryBtn }) => {
  const { images, loading } = useFetchGif(category);

  return (
    <>
      <h2 className="car-title">Category:<span className="title-span">{category}</span></h2>
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}