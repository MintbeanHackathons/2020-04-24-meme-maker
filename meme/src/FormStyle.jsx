import React from "react";

function FormStyle({color, handleStyle, size, weight}) {
  return (
    <div>
        <h2>STYLE</h2>
      <p>Color</p>
      <select id="color" value={color} onChange={handleStyle}>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <p>Size</p>
      <select id="size" value={size} onChange={handleStyle}>
        <option value="1em">Small</option>
        <option value="3em">Medium</option>
        <option value="5em">Large</option>
      </select>
      <p>Weight</p>
      <select id="weight" value={weight} onChange={handleStyle}>
        <option value="normal">Normal</option>
        <option value="bolder">Bolder</option>
        <option value="bold">Bold</option>
        <option value="lighter">Lighter</option>
      </select>
    </div>
  );
}

export default FormStyle;
