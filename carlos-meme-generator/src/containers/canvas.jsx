import React from 'react';

const Canvas = ({imageURL, textTop, textBottom}) => {
  return(
    <div>
      <svg height="300">
        <image href={imageURL} height="300"></image>
        <text y="2em">{textTop}</text>
        <text y="2em">{textBottom}</text>
      </svg>
    </div>
  );
}

export default Canvas