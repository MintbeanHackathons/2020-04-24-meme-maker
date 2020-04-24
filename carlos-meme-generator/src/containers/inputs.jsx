import React from 'react';

const Inputs = ({topText, bottomText, handleChange}) => {
  return(
    <div>
      <div className="form-group">
        <label for="topText">Top Text:</label>
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
        <label for="bottomText">Bottom Text:</label>
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
