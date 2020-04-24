import React from 'react';

const Inputs = ({imageUrl, topText, bottomText, handleChange}) => {
  return(
    <div>
      <div className="form-group">
        <label htmlFor="topText">Image URL:</label>
        <input 
          id="imageURL"
          name="imageUrl"
          type="text"
          className="form-control"
          value={imageUrl}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="topText">Top Text:</label>
        <input 
          id="topText"
          name="top"
          type="text"
          className="form-control"
          value={topText}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="bottomText">Bottom Text:</label>
        <input
          id="bottomText"
          name="bottom"
          type="text"
          className="form-control"
          value={bottomText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Inputs;
