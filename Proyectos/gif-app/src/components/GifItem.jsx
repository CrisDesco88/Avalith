import { useState } from "react";
import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
  const [display, setDisplay] = useState("card-show")


  const handleErase = () => {
    setDisplay("card-hidden")
  }

  const handleMaximise = () => { 
    display === 'card-show' ? 
    setDisplay('card-max') : 
    setDisplay('card-show')
  }

  return (
    <div className={display} id={id} >
      <img src={url} alt="gif" />
      <p data-testid='test-title'>{title}</p>

      <div className="btnContainer">
        <button className="action-btn" onClick={() => handleErase()}><span className="text">x</span></button>
        <button className="action-btn" onClick={() => handleMaximise()}><span className="text">+</span></button>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}


GifItem.defaultProps = {
  title: 'Gif',
  url: '...'
}