import React from "react";
import './Specials';


const SpecialButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="buttons">{props.specials}</button>
    </div>
  );
};


export default SpecialButton;