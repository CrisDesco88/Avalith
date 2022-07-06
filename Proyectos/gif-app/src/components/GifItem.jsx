import { useState } from "react";

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
      <p>{title}</p>

      <div className="btnContainer">
        <button className="action-btn" onClick={() => handleErase()}><span class="text">x</span></button>
        <button className="action-btn" onClick={() => handleMaximise()}><span class="text">+</span></button>
      </div>
    </div>
  );
};
